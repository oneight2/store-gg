import Image from "next/image"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import cx from 'classnames'
import { useRouter } from "next/router"
import { getCategoryList } from "../../../services/player"
export default function SignUpFrom() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const classNames = {
        label: cx('form-label text-lg fw-medium color-palette-1 mb-10')
    }
    const formData = {
        name, email, password
    }
    const onSubmit = () => {
        localStorage.setItem('form-data', JSON.stringify(formData))
        router.push('./sign-up-photo')
    }

    return (
        <>
            <form action="">
                <div className="pb-50">
                    <a className="navbar-brand" href="../index.html">
                        <Image src='/icon/logo.svg' width={60} height={60} alt="" />
                    </a>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
                <div className="pt-50">
                    <label htmlFor="name" className={classNames.label}>Full Name</label>
                    <input type="text"
                        className="form-control rounded-pill text-lg"
                        aria-describedby="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="pt-30">
                    <label htmlFor="email" className={classNames.label}>Email
                        Address</label>
                    <input type="email"
                        className="form-control rounded-pill text-lg"
                        aria-describedby="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="pt-30">
                    <label htmlFor="password" className={classNames.label}>Password</label>
                    <input type="password"
                        className="form-control rounded-pill text-lg"
                        aria-describedby="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="button-group d-flex flex-column mx-auto pt-50">
                    <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                        onClick={onSubmit}>Continue</button>
                    <Link href="/sign-in">
                        <button className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                            role="button">Sign
                            In</button>
                    </Link>
                </div>
            </form>

        </>
    )
}
