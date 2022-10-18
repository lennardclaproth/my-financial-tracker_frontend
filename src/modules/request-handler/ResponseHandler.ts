import { AxiosResponse } from "axios";

enum status {
    OK = 200,
    CREATED = 201
}

export default class ResponseHandler {
    static handle(response: AxiosResponse){
        if(response.status === status.OK || response.status === status.CREATED){
            return response.data
        }
    }
}