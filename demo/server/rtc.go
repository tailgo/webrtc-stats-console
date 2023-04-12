package main

import (
	"log"

	"github.com/pion/webrtc/v3"
)

func Init() {
	// TODO: load video file for play
}

func NewLiveRTCConnection(offer string) (*webrtc.PeerConnection, error) {
	peerconnection, err := webrtc.NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		return nil, err
	}

	// TODO: set video track

	peerconnection.OnConnectionStateChange(func(connectionState webrtc.PeerConnectionState) {
		log.Println("connection state", connectionState)
	})

	if err := peerconnection.SetRemoteDescription(webrtc.SessionDescription{
		Type: webrtc.SDPTypeOffer,
		SDP:  offer,
	}); err != nil {
		return nil, err
	}

	answer, err := peerconnection.CreateAnswer(nil)
	if err != nil {
		return nil, err
	}

	if err := peerconnection.SetLocalDescription(answer); err != nil {
		return nil, err
	}

	return peerconnection, nil
}
