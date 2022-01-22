/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types"
export default function Profile() {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({
        avatar: '',
        email: '',
        id: '',
        name: '',
        username: ''
    })
    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwttoken = atob(token)
            const payload: JWTPayloadTypes = jwtDecode(jwttoken)
            const userFromPayload: UserTypes = payload.player
            const IMG = process.env.NEXT_PUBLIC_IMG
            userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
            setIsLogin(true)
            setUser(userFromPayload)
        }
    }, [])
    return (
        <>
            <div className="user text-center pb-50 pe-30">
                <img src={user.avatar} width="90" height="90" className="img-fluid mb-20 img-upload" alt="" />
                <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
                <p className="color-palette-2 m-0">{user.email}</p>
            </div>

        </>
    )
}
