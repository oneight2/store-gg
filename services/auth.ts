import axios from "axios"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VER = 'api/v1'
export async function setSignUp(data: FormData){
    const END_POINT = 'auth/signup'

    const response = await axios.post(`${ROOT_API}/${API_VER}/${END_POINT}`, data).catch((err)=>err.response)
    const axiosResponse = response.data

    if(axiosResponse?.error === 1){
        return axiosResponse
    }
    return axiosResponse.data
}