async function createPeerConnection() {
    const pc = new RTCPeerConnection();
    
    pc.addEventListener('connectionstatechange', () => {
        switch (pc.connectionState) {
            case 'connected':
                console.log('connected');
        }
    });

    pc.addEventListener('icecandidate', () => {

    })

    pc.addEventListener('track', (event) => {
        
    });

    pc.addTransceiver('video', {
        direction: 'recvonly',
    });

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    return pc;
}

async function main() {
    const pc = await createPeerConnection();

    const ws = new WebSocket('ws://localhost:10404/ws');
    ws.onmessage = (event) => {
        console.log('ws onmessage', event);
        const { data } = event;
        const response = JSON.parse(data);
        if (response.code === 0) {
            pc.setRemoteDescription({
                type: 'answer',
                sdp: response.data,
            });
        } else {
            console.error(response.errmsg);
        }
    };

    ws.onopen = () => {
        ws.send(JSON.stringify({
            cmd: "live",
            data: pc.localDescription.sdp,
        }));
    };

    ws.onerror = (error) => {
        console.error(error)
    };
}

main();