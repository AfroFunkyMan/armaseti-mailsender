import mongodb = require('mongodb');
import * as socket from 'socket.io';
import events = require('events');
import {extent} from "d3-array";

const io = socket(3001);
const server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
const db = new mongodb.Db('mailserver', server, { w: 1 });

db.open(() => {});

export interface NewClient {
    email: string,
    status: Status,
}
enum Status {
    subsribe,
    unsubscribe
}

interface NewClientsOptions {
    upsert: boolean,
    position: {
        mail: number;
        name?: number;
    },
    list_id: mongodb.ObjectID;

}
interface StringArray {
    [index: number]: string;
}







export class ClientsDatabaseProvider extends events.EventEmitter {
    //if insert { n: 1,
    // nModified: 0,
    //     upserted: [ { index: 0, _id: 5886f3f4c821d5ee132587a4 } ],
    //     ok: 1 }

    //if update { n: 1, nModified: 0, ok: 1 }
    public summary:  { insert: number, update: number, bad: number};
    constructor(private clientCollection: mongodb.Collection){
        super();
        this.summary = {
            insert :0 ,
            update :0 ,
            bad    :0
        }
        this.clientCollection = db.collection('clients', this.emitMainError);
    }


    saveNewClients(options: NewClientsOptions, CSVfile: string) {
        let arrayOfNewClientsRaw = CSVfile.split('\r');

        db.collection('clients', function (error: mongodb.MongoError, clients_collection: mongodb.Collection) {
            if (error) {
                console.error(error);
                this.emitMainError(error);
            }
            this.arrayOfNewClientsRaw.forEach((newClient) => {
                let contactDataInArray: any = newClient.split(';');
                //todo email and fields validator
                //todo make email server validator
                clients_collection.updateOne({email: contactDataInArray[options.position.mail]},{
                    $set: {
                        email : contactDataInArray[options.position.mail],
                        status: "subscriber",
                        fields: {},
                        activities: [{
                            action: "import",
                            target: "",
                            timestamp: new Date()
                        }]
                    }
                }, {upsert: options.upsert}, (error: mongodb.MongoError, response: mongodb.UpdateWriteOpResult ) => {
                    //FIXME узнать у Вовы что ему нужно и пределать объект @param response
                    if (error) {
                        console.error(error);
                        this.summary.bad++;
                    }
                    response.result.upserted && response.result.n === 1 ? this.summary.insert++ : null;
                    response.result.n === 1 && !response.result.upserted ? this.summary.update++ : null;
                });
            });
        });
    }

    validateEmail(email: string) : string {
        //todo russian letter
        //todo not eng letter
        //todo spaces and spesial symbols
        //todo encode
        //todo
        if (email.search(/[а-я,А-Я]/) >= 0) return 'Have russian letter';
        if (email.search(//))
    }


                    //todo правильная обработка ошибки
    emitUpsertError(error: mongodb.MongoError): void {

    }

    emitMainError(error: [Error|mongodb.MongoError], result?: mongodb.Collection):void {
        if (error) {
            console.error(error);
            return;
        }
        this.clientCollection = result;
        return;
    }
}



io.on('connection', (socket) => {


});



