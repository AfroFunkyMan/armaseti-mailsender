export interface Client {
    _id: number,
    email: string,
    status: Status,
    activities: Activity[]
}

enum Status {
    subsribe,
    unsubscribe
}

interface Activity {
    action: ActivityAction,
    target: string,
    timestamp: Date
}


enum ActivityAction {
    open,
    click,
    unsubscribe,
    bounce,
    complain
}


export interface ClientQuery {
    _id?: string;

}

export interface NewClient {
    email: string,
    status: Status,
}