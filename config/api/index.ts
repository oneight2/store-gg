import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

interface callAPIProps extends AxiosRequestConfig{
    token?:false
}
export default async function callAPI({url,method,data,token}:callAPIProps) {
    let headers ={}
    if(token){
        const tokenCookies = Cookies.get('token')
        if(tokenCookies){
            const jwtToken = atob(tokenCookies)
            headers={
                authorization: `Bearer ${jwtToken}`
            }
        } 
    }

    const response = await axios({url,method,data,headers}).catch((err)=>err.response)
    

    if(response.status>300){
        const res ={
            error:true,
            message: response.data.message,
            data: '',
        }
        return res
    }else{
        const res ={
            error:false,
            message: 'success',
            data:response.data.data,
        }
        return res
    }
}