/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types"
import { updateProfile } from "../../../services/player"
import Input from "../../atoms/Input"
export default function EditProfile() {
    const [user, setUser] = useState({
        avatar: '',
        email: '',
        id: '',
        name: '',
        username: ''
    })
    const [imgPreview, setImgPreview] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwttoken = atob(token)
            const payload: JWTPayloadTypes = jwtDecode(jwttoken)
            const userFromPayload: UserTypes = payload.player
            const IMG = process.env.NEXT_PUBLIC_IMG
            userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
            setUser(userFromPayload)
        }
    }, [])

    const onSubmit = async () => {

        const data = new FormData;
        data.append('image', user.avatar)
        data.append('name', user.name)

        const response = await updateProfile(data)
        if (response.error) {
            toast.error(response.message)
        } else {
            toast.success('Update Profile Berhasil')
            Cookies.remove('token')
            router.push('/sign-in')
        }
    }
    return (
        <>
            <form action="">
                <div className="photo d-flex">
                    {/* <div className="position-relative me-20">
                        <img src={user.avatar} width={90} height={90} alt="" className="avatar img-fluid" />
                        <div
                            className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                            <Image src="/icon/icon-trash.svg" width={25} height={25} alt="" />
                        </div>
                    </div> */}
                    <div className="image-upload">
                        <label htmlFor="avatar">
                            {imgPreview ? (
                                <img src={imgPreview} width={90} height={90} className="avatar img-fluid" style={{ borderRadius: '100%' }} />
                            ) : (
                                <img src={user.avatar} width={90} height={90} className="avatar img-fluid" style={{ borderRadius: '100%' }} />
                            )}
                        </label>
                        <input
                            id="avatar"
                            type="file"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={(event) => {
                                const img: any = event.target.files[0];
                                setImgPreview(URL.createObjectURL(img))
                                return setUser({
                                    ...user,
                                    avatar: img
                                })

                            }}
                        />
                    </div>
                </div>
                <div className="pt-30">
                    <Input label="Full Name" value={user.name}
                        onChange={(event: any) => setUser({
                            ...user,
                            name: event.target.value
                        })} />
                </div>
                <div className="pt-30">
                    <Input label="Email Address" value={user.email} disabled placeholder={""} />
                </div>
                {/* <div className="pt-30">
                    <Input label="Phone" placeholder="Enter Number" />
                </div> */}
                <div className="button-group d-flex flex-column pt-50">
                    <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                        onClick={onSubmit}>Save My Profile</button>
                </div>
            </form>

        </>
    )
}
