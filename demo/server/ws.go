package main

import (
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
	for {
		frame := make([]byte, 10240)
		len, err := conn.Read(frame)
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

		frame = frame[:len]
		log.Printf("ws receive %s", frame)

		conn.Write(frame)
	}
}
