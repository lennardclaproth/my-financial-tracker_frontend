import { api } from "./api";
import ResponseHandler from "./ResponseHandler";

export default class RequestHandler {
  static async GET<TReturn>(endpoint: string, params?: any): Promise<TReturn|Array<Object>>{
    try {
        const res = await api.get(endpoint, params);    
        return ResponseHandler.handle(res);
    } catch (error) {
        console.log(error)
        return [{}]
    }
  }

  static async POST<TData>(endpoint: string, data: TData) {
    try {
        const res = await api.post(endpoint, data)
        return ResponseHandler.handle(res);
    } catch (error) {
        console.log(error)
        return [{}]
    }
  }
}
