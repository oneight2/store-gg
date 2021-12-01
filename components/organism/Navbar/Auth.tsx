/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


interface AuthProps {
    isLogin?: boolean
}
export default function Auth(props: AuthProps) {
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

    const onLogout = () => {
        Cookies.remove('token')
        setIsLogin(false)
        toast.info('Logout Success', { position: 'bottom-left' })
        router.push('/')
    }

    if (isLogin) {
        return (
            <>
                <li className="nav-item my-auto dropdown d-flex">
                    <div className="vertical-line d-lg-block d-none"></div>
                    <div>
                        <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user.avatar} className="rounded-circle" width="40" height="40"
                                alt="" />
                        </a>

                        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                            <li>
                                <Link href="/member">
                                    <a className="dropdown-item text-lg color-palette-2" >My Profile</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/member/transactions">
                                    <a className="dropdown-item text-lg color-palette-2" >Wallet</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/member/edit-profile">
                                    <a className="dropdown-item text-lg color-palette-2" >Account Settings</a>
                                </Link>
                            </li>
                            <li>
                                <button className="dropdown-item text-lg color-palette-2" onClick={onLogout} >Log Out</button>

                            </li>
                        </ul>
                    </div>
                </li>
                <ToastContainer />
            </>
        )
    }
    return (
        <>
            <li className="nav-item my-auto">
                <Link href="/sign-in">
                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">SignIn</a>
                </Link>
            </li>
            <ToastContainer />
        </>
    )
}
