import { TRoom } from "./room.type"

export declare type TChannel = {
    name : string, 
    endpoint : string, 
    thumbnail : string,    
    rooms : TRoom[],    
    createdAt?: Date, 
    updatedAt?: Date
}