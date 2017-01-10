export interface Client {
    id: number,
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




