import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Subject }    from 'rxjs/Subject';
import * as IO from 'socket.io-client';


@Injectable()
export class AppSocketService {
    private host: string = 'http://localhost:3001';
    socket;
    public number: number = 42;
    constructor() {
        this.socket = IO.connect(this.host);
        this.socket.on('Test:emit', (number) => this.test(number));
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



    //
    // create(name: string) {
    //     this.socket.emit("create", name);
    // }
    //
    // // Remove signal
    // remove(name: string) {
    //     this.socket.emit("remove", name);
    // }

    // Handle connection opening
    private connect() {
        console.log(`Connected to "${this.host}"`);

        // Request initial list when connected
        this.socket.emit("list");
    }

    // Handle connection closing
    private disconnect() {
        console.log(`Disconnected from "${this.host}"`);
    }


}