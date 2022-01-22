import axios from "axios"
import callAPI from "../config/api"
import { checkoutTypes } from "./data-types"

const ROOT_API = process.env.NEXT_PUBLIC_API_DEV
const API_VER = 'api/v1'
export async function getFeaturedGame(){
    const END_POINT = 'players/landingpage'

    const axiosResponse = await axios.get(`${ROOT_API}/${API_VER}/${END_POINT}`)
    const response = axiosResponse.data
    return response.data
}
export async function getVoucherDetail(id: any){
    const END_POINT = `players/${id}/detail`

    const axiosResponse = await axios.get(`${ROOT_API}/${API_VER}/${END_POINT}`)
    const response = axiosResponse.data
    return response.data
}
export async function getCategoryList(){
    const END_POINT = `players/category`

    const axiosResponse = await axios.get(`${ROOT_API}/${API_VER}/${END_POINT}`)
    const response = axiosResponse.data
    return response.data
}
export async function setCheckout(data:checkoutTypes){
    const url = `${ROOT_API}/${API_VER}/players/checkout`

    return callAPI({
        url,
        method: 'POST',
        data,
        token:true
    })

}
export async function getMemberOverview(){
    const url = `${ROOT_API}/${API_VER}/players/dashboard`

    return callAPI({
        url,
        method: 'GET',
        token:true
    })

}
export async function getLastTransactions(valueParams:any){
    let params = ''
    if(valueParams === 'all'){
        params = ''
    }else{
        params = `?status=${valueParams}`
    }
    const url = `${ROOT_API}/${API_VER}/players/history${params}`

    return callAPI({
        url,
        method: 'GET',
        token:true
    })

}
export async function getTransactionDetail(id: String, token: string){
    const url = `${ROOT_API}/${API_VER}/players/history/${id}/detail`

    return callAPI({
        url,
        method: 'GET',
        serverToken: token
    })

}

export async function updateProfile(data : FormData){
    const url = `${ROOT_API}/${API_VER}/players/profile`

    return callAPI({
        url,
        method: 'PUT',
        data,
        token:true
    })

}
