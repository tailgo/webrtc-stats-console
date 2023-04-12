package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"

	"golang.org/x/net/websocket"
)

type WS struct {
}

func NewWS() *WS {
	return &WS{}
}

func (ws *WS) Init() {
	http.Handle("/ws", websocket.Handler(ws.handler))
	err := http.ListenAndServe(":10404", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}

func (ws *WS) handler(conn *websocket.Conn) {
	log.Printf("ws open")
	var message string
	for {
		frame := make([]byte, 4088)
		size, err := conn.Read(frame)
		if err != nil {
			// TODO ERROR handle
			if err == io.EOF {
				log.Printf("ws close")
				conn.Close()
				return
			} else {
				panic("ws error" + err.Error())
			}
		}

		frame = frame[:size]
		message += string(frame)
		if size < 4088 {
			log.Printf("ws receive %s %d", message, len(message))
			ws.frameHandler(conn, []byte(message))
			message = ""
		}
	}
}

func (ws *WS) frameHandler(conn *websocket.Conn, frame []byte) {
	req := &Req{}
	if err := json.Unmarshal(frame, req); err != nil {
		log.Println("json error", err.Error())
		res, _ := FormatErrorRsp(err)
		conn.Write(res)
		return
	}

	switch req.Cmd {
	case "live":
		pc, err := NewLiveRTCConnection(req.Data)
		if err != nil {
			log.Println("pc error", err.Error())
			res, _ := FormatErrorRsp(err)
			conn.Write(res)
			return
		}
		res, _ := FormatSuccRsp(pc.LocalDescription().SDP)
		conn.Write(res)
		return
	}
}
