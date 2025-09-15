import { buildApiProtocol } from "../store/comunication/api";
import { ApiCallRegulations } from "../store/regulation/regulation";

export async function authProvider() {
    const isAuth = await buildApiProtocol(ApiCallRegulations.REGISTRATION);
    console.log(isAuth);
    return isAuth
}