import { api } from "./api";
import ResponseHandler from "./ResponseHandler";
// TODO: refactor and change this
export default class RequestHandler {
  static async GET(endpoint: string, params?: any):Promise<any> {
    const res = await api.get(endpoint, params)
    // api.get(endpoint).then((res) => {
    //     console.log('reached2')
    //     // console.log(ResponseHandler.handle(res))
    //   return ResponseHandler.handle(res)
    // }).catch(e => {
    //     console.log(e)
    // });
    return res
  }

  static POST(endpoint: string, data: any) {
    api.post(endpoint, data).then((res) => {
      ResponseHandler.handle(res)
    });
  }
}
