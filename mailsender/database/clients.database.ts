import mongo , {ObjectID} from 'mongodb';
//import mongo from 'mongodb';

import { Client } from '../models/clients.interface.model';

//TODO get Clients
//TODO get Client
//TODO post Client
//TODO update Client


export class ClientsDatabaseService {
    private clientsCollection: mongo.Collection;
    private objectID = ObjectID;
    constructor(private db: mongo.Db){
        this.clientsCollection = this.db.collection('clients');
    }

    getClient(client: Client): void {
        this.clientsCollection.findOne({'_id': this.objectID(client._id)}, (err, client) => {
            if (err) return err;
            return client;
        });
    }

    getClients

}