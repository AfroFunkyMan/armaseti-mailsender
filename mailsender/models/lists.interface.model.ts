export enum Rate {
    Low,
    MidLow,
    Mid,
    MidHi,
    High,
};

enum FieldValue {
    exclude = 0,
    include = 1
}


/** @QueryFieldsObject
more info - https://docs.mongodb.com/manual/reference/operator/aggregation/project/
example for 'fields'
 fields: {
     name: 1,
     create: 0,
     rate: FieldValue.exclude
 }
 */
export interface QueryFieldsObject {
    [name: string]: FieldValue
}

/** @QueryMatchObject
 more info - https://docs.mongodb.com/manual/reference/operator/aggregation/match/
 example for 'match'
 match: {
     name: 'dave',
     rate: { $gt: Rate.Low, $lt: Rate.Mid },
     subsCount: { $gte: 1000 }
 }
 */
export interface QueryMatchObject {
    [name: string]: any
}


export interface NewList {
    name: string
}

export interface List {
    id?: string,
    name?: string,
    create?: Date,
    rate?: Rate,
    subsCount?: number,
    lastUpdate?: Date,
    lastUse?: Date
}

export interface ListError {
    errorMessege: string
}

export interface ListsQuery {
    fields?: QueryFieldsObject,
    match?: QueryMatchObject
}
