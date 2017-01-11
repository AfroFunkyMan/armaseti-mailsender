import mongo from 'mongodb';

import {List, ListError, ListsQuery, QueryMatchObject, Rate, NewList} from '../models/lists.interface.model';

export class ListsDatabaseService {
    private listsCollection: mongo.Collection;
    constructor(private db: mongo.Db){
        this.listsCollection = this.db.collection('lists');
    }

    getLists(query: ListsQuery): void{
        if (query === {}) this.listsCollection.find({}).toArray(function (err, lists) {
            if (err) return err.message;
            return lists;
        });
        else {
            let queryObj = [];
            if (query.fields) queryObj.push({'$project': query.fields});
            if (query.match) queryObj.push({'$match': query.match});
            this.listsCollection.aggregate(queryObj, (err: mongo.MongoError, lists:List) => {
                if (err) return err.message;
                return lists;
            })
        }
    }
    getList(query: QueryMatchObject): void{
        this.listsCollection.findOne(query, (err: mongo.MongoError, list: List) => {
            if (err) return {};
            return list;
        });
    }
    postList(list: NewList): void{
        this.listsCollection.insertOne({
            name:       list.name,
            create:     new Date(),
            rate:       Rate.Low,
        }, (err: mongo.MongoError, list: List) => {
            if (err) return {};
            return list;
        });
    }
    updateList(list: List){
        let obj = {};
        for (let key in list) {
            obj[key] = list[key];
        }
        this.listsCollection.updateOne({id : list.id},{
            $set: obj
        });
    }

}