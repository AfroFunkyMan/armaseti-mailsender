import { Injectable } from '@angular/core';
import * as IO from 'socket.io-client';


@Injectable()
export class AppSocketService {
    private host: string = 'http://prodazha-optom.ru:2563';
    socket;
    public number: number = 42;
    constructor() {
        this.socket = IO.connect(this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log(`ERROR: "${error}" (${this.host})`);
        });
    }
    test(name: any) {
        this.number = name;
        console.log(this.number)
    }
    getLists(): number {
        return this.number;
    }

    sendFormData(data){
        this.socket.emit('data', data);
    }

    getAllData(callback): any{
        console.log('call on 33 in socket');
            this.socket.emit('get-all-data', '', function (lists, templates) {
                console.log('call on 35 in socket');
                return callback(lists, templates);
            });
    }
    // Handle connection opening
    private connect() {
        console.log(`Connected to "${this.host}"`);

        // Request initial list when connected
        this.test(this.number)
    }

    // Handle connection closing
    private disconnect() {
        console.log(`Disconnected from "${this.host}"`);
    }


}