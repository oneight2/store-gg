import axios from "axios"

const ROOT_API = process.env.NEXT_PUBLIC_API
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