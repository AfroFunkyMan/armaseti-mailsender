import mongo from 'mongodb';
import { List, ListError,ListsQuery } from '../models/lists.interface.model';


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
    getList(query: List): void{
        this.listsCollection.findOne(query, (err: mongo.MongoError, lists: List) => {
            if (err) return {};
            return lists;
        });
    }
    postList(){}
    updateList(){}

}