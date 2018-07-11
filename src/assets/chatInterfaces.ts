export interface ChatListDataInterface {
    id: number;
    senderName: string;
    lastMessage: string;
    timeStamp: string;
    senderImage: string;
}

export interface SingleChat {
    sent: boolean;
    msgText: string;
}

export interface ChatWindowDataInterface {
    senderID: number;
    chatHistory: SingleChat[];
}
