/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { getCategoryList } from "../../../services/player"
import { useState, useEffect, useCallback } from "react"
import { setSignUp } from "../../../services/auth"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router"
export default function SignUpPhoto() {
    const [Categories, setCategories] = useState([])
    const [favorite, setFavorite] = useState('')
    const [image, setImage] = useState('')
    const [imgPreview, setImgPreview] = useState('/icon/avatar.svg')
    const [localForm, setLocalForm] = useState({
        name: '',
        email: ''
    })
    const router = useRouter()

    const getCategory = useCallback(async () => {
        const data = await getCategoryList()
        setCategories(data)
        setFavorite(data[0]._id)
    }, [getCategoryList])

    useEffect(() => {
        const getLocalForm = localStorage.getItem('form-data') || '{}'
        getCategory()
        setLocalForm(JSON.parse(getLocalForm))
    }, [])

    const onSubmit = async () => {
        const local = await localStorage.getItem('form-data') || '{}'
        const userData = JSON.parse(local)
        const data = new FormData();

        data.append('image', image);
        data.append('email', userData.email);
        data.append('name', userData.name);
        data.append('username', userData.name);
        data.append('password', userData.password);
        data.append('favorite', favorite);
        data.append('phoneNumber', '089699838615')

        const response = await setSignUp(data)
        if (response.error) {
            toast.error(response.message)
        } else {
            toast.success('Register Berhasil')
            router.push('/sign-up-success')
            localStorage.removeItem('form-data')
        }
    }
    return (
        <>
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    <img src={imgPreview} className="img-upload" alt="signup-photo" />
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={(event) => {
                                    const img = event.target.files[0];
                                    setImgPreview(URL.createObjectURL(img))
                                    setImage(img)

                                }} />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                        <div className="pt-50 pb-50">
                            <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                Game</label>
                            <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg"
                                aria-label="Favorite Game" onChange={(event) => { setFavorite(event.target.value) }}>
                                {Categories.map((item: any) => (
                                    <option key={item._id} value={item._id} selected>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        {/* <Link href="/sign-up-success"> */}
                        <button type="button" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button" onClick={onSubmit}>Create My Account</button>
                        {/* </Link> */}
                        {/* <!-- <button type="submit" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                    role="button">Create My Account</button> --> */}

                        <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                            role="button">Terms &
                            Conditions</a>
                    </div>
                </div>
            </form>
            <ToastContainer />

        </>
    )
}
