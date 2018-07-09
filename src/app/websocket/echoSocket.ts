
export class Socket {

    wsUri = 'wss://echo.websocket.org/';
    output;
    sentMessage;
    websocket;
    chatArray;
    init() {
        this.testWebSocket();
    }
    constructor(sentMsg, chatArray) {
        this.init();
        this.sentMessage = sentMsg;
        this.chatArray = chatArray;
    }

    testWebSocket() {
        this.websocket = new WebSocket(this.wsUri);
        this.websocket.onopen = (evt) => {
            this.onOpen(evt);
        };
        this.websocket.onclose = (evt) => {
            this.onClose(evt);
        };
        this.websocket.onmessage = (evt) => {
            this.onMessage(evt);
        };
        this.websocket.onerror = (evt) => {
            this.onError(evt);
        };
    }

    onOpen(evt) {
        this.writeToScreen('CONNECTED');
        this.doSend(this.sentMessage);

    }

    onClose(evt) {
        this.writeToScreen('DISCONNECTED');
    }

    onMessage(evt) {
        if (evt.data.toUpperCase() === 'How are you?'.toUpperCase()) {
            this.chatArray.push({
                sent: false,
                msgText: 'I am fine'
            });
        } else if (evt.data.toUpperCase() === 'I love you'.toUpperCase()
    || evt.data.toUpperCase() === 'I miss you'.toUpperCase()
    || evt.data.toUpperCase() === 'I like you'.toUpperCase()
    || evt.data.toUpperCase() === 'I hate you'.toUpperCase()
) {
        this.chatArray.push({
            sent: false,
            msgText: `${evt.data} 2`
        });
        } else {
            this.chatArray.push({
                sent: false,
                msgText: `You sent me: ${evt.data}`
            });
        }
        // websocket.close();
    }

    onError(evt) {
        this.writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

    doSend(message) {
        this.writeToScreen('SENT: ' + message);
        this.websocket.send(message);
    }

    writeToScreen(message) {
        console.log(message);
    }
}
