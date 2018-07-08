export interface SingleChat {
    sent: boolean;
    msgText: string;
}

export interface ChatMsg {
    senderID: number;
    senderName: string;
    lastMessage: string;
    timeStamp: string;
    senderImage: string;
    chatHistory: SingleChat[];
}
