import { appInfos } from "../constants/appInfos"
import axiosClient from "./axiosClient"

class AuthAPI {
    HandAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post'| 'put' | 'delete',
    ) => {
        return await axiosClient({
            url: `/auth${url}`,
            method: method ?? 'get',
            data,
        })
    }
} 

const authenticationAPI = new AuthAPI()
export default authenticationAPI