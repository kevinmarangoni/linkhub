import axios from 'axios';

export interface IRequestReturn {
    ok: boolean;
    message?: string | Object | any;
    data?: IDataRequest | any;
}

export interface IDataRequest {
    link: string,
    short: string,
    _id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    __v?: number | string
}

class ApiMethods {
    apiURL: string = process.env.NODE_ENV== "development"? "http://localhost:3001/api/v1" : "http://127.0.0.1:5757/api/v1";
    maxRetries: number = 5;
    retryDelay: number = 1000; // Em milissegundos

    async getLinkByShort(short: string, retryCount: number = 0): Promise<IRequestReturn> {
        if (short == null || short == undefined || typeof short != 'string') {
            return { ok: false, message: "invalid short" };
        }
        
        try {
            const response = await axios.get(`${this.apiURL}/link/short/${short}`);
            return { ok: true, data: response.data };
        } catch (err: any) {
            console.log("Error at getLinkByShort, cause: " + err);
            if (retryCount < this.maxRetries) {
                await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                return this.getLinkByShort(short, retryCount + 1);
            }
            return { ok: false, message: err.message };
        }
    }

    async createShortLink(link: string, retryCount: number = 0): Promise<IRequestReturn> {
        try {
            if (link == null || link == undefined || typeof link !== 'string') {
                return { ok: false, message: "Invalid link parameter" };
            }

            const response = await axios.post(`${this.apiURL}/link`, { link });
            return { ok: true, data: response.data };
        } catch (err: any) {
            console.log("Error at createShortLink, cause: " + err);
            if (retryCount < this.maxRetries) {
                await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                return this.createShortLink(link, retryCount + 1);
            }
            return { ok: false, message: err.message };
        }
    }
}

export default new ApiMethods()