import axios from "axios";
import {IRequestReturn, IErrorResponse, IUserResponse} from '@/types/requests'

class ApiMethods {
  apiURL = `${process.env.API_URL}/api/v1`; //`https://linkhub-api.onrender.com`
  maxRetries: number = 5;
  retryDelay: number = 1000; // Em milissegundos

  async getLinkByShort(
    short: string,
    retryCount: number = 0
  ): Promise<IRequestReturn | IErrorResponse> {
    if (short == null || short == undefined || typeof short != "string") {
      return { ok: false, message: "invalid short" };
    }

    try {
      const response = await axios.get(`${this.apiURL}/link/short/${short}`);
      return { ok: true, data: response.data };
    } catch (err: any) {
      console.log("Error at getLinkByShort, cause: " + err);
      if (retryCount < this.maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
        return this.getLinkByShort(short, retryCount + 1);
      }
      return { ok: false, message: err.message };
    }
  }

  async createShortLink(
    link: string,
    retryCount: number = 0
  ): Promise<IRequestReturn | IErrorResponse> {
    try {
      if (link == null || link == undefined || typeof link !== "string") {
        return { ok: false, message: "Invalid link parameter" };
      }

      const response = await axios.post(`${this.apiURL}/link`, { link });
      return { ok: true, data: response.data };
    } catch (err: any) {
      console.log("Error at createShortLink, cause: " + err);
      if (retryCount < this.maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
        return this.createShortLink(link, retryCount + 1);
      }
      return { ok: false, message: err.message };
    }
  }

  async login(userData: any, retryCount: number = 0): Promise<IUserResponse | IErrorResponse> {
    if (userData == null || userData == undefined) {
      return { ok: false, message: "invalid user data" };
    }
    if (userData.name == null) {
      return { ok: false, message: "invalid user name" };
    }
    if (userData.email == null) {
      return { ok: false, message: "invalid user email" };
    }

    try {
      const response = await axios.post(
        `${this.apiURL}/user/OAuthLogin`,
        userData
      );
      return { ok: true, data: response.data };
    } catch (err: any) {
      console.log("Error at login, cause: " + err);
      if (retryCount < this.maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
        return this.login(userData, retryCount + 1);
      }
      return { ok: false, message: err.message };
    }
  }
}

export default new ApiMethods();
