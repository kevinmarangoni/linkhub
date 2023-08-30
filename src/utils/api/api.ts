import axios from 'axios'

export interface IRequestReturn {
    ok: boolean,
    message?: string | Object | any
    data?: Object | any
}
class ApiMethods {
    apiURL:string = "http://localhost:3001/api/v1"

    async getLinkByShort(short: string): Promise<IRequestReturn> {
        if(short == null || short == undefined || typeof short != 'string'){
            return { ok: false, message: "invalid short" }
        }
        try{
            const response = await axios.get(`${this.apiURL}/link/short/${short}`)
            return { ok: true, data: response.data }
        }
        catch(err:any){
            console.log("Error at getLinkByShort, cause: " + err)
            return { ok: false, message: err.message }
        }
    }

}

export default new ApiMethods()