import axios from "axios"
import callAPI from "../config/api"
import { SigninTypes } from "./data-types"

const ROOT_API = process.env.NEXT_PUBLIC_API_DEV
const API_VER = 'api/v1'
export async function setSignUp(data: FormData){
    const url = `${ROOT_API}/${API_VER}/auth/signup`
    return callAPI({
        url,
        method: 'POST',
        data
    })

}
export async function setSignIn(data: SigninTypes){
    const url = `${ROOT_API}/${API_VER}/auth/signin`

    return callAPI({
        url,
        method: 'POST',
        data
    })
}