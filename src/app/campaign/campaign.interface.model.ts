import { List } from '../../../mailsender/models/lists.interface.model';
import {extent} from "d3-array";

export interface Templates {
    _id?: number|string,
    name: string,
    create?: Date,
    lastUpdate?: Date,
    checked?: boolean,
}

export interface List {
    _id?: string|number,
    name?: string,
    create?: Date,
    rate?: Rate,
    subsCount?: number,
    lastUpdate?: Date,
    lastUse?: Date
    checked?: boolean,
}

export enum Rate {
    Low,
    MidLow,
    Mid,
    MidHi,
    High,
}

export interface Setup {
    letterName: string,
    letterSubj: string,
    senderName: string,
    senderAddr: string
}