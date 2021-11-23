import axios from "axios"

export async function getFeaturedGame(){
    const ROOT_API = process.env.NEXT_PUBLIC_API
    const API_VER = 'api/v1'
    const END_POINT = 'players/landingpage'

    const axiosResponse = await axios.get(`${ROOT_API}/${API_VER}/${END_POINT}`)
    const response = axiosResponse.data
    return response.data
}