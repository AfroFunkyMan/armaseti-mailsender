import { Injectable } from '@angular/core';
import * as Io from "socket.io-client";


@Injectable()
export class SocketsService {
    private url = 'http://localhost:3001';
    io;
    constructor(){
    this.io = Io(this.url);
    }

    testEmit(): void {
        this.io.emit('my other event', {my: 'data'});
    }

}



