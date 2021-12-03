/* eslint-disable jsx-a11y/alt-text */
import Image from "next/dist/client/image"
import CheckoutItem from "../components/organism/CheckoutItem"
import CheckoutDetail from "../components/organism/CheckoutDetail"
import jwtDecode from "jwt-decode"
import { JWTPayloadTypes, UserTypes } from "../services/data-types"
import CheckoutConfirmation from "../components/organism/CheckoutConfirmation"

export default function checkout(props: { user: UserTypes }) {
    // untuk validasi user login
    const { user } = props
    // console.log('user', user)
    return (
        <>
            {/* <!-- Checkout Content --> */}
            <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
                <div className="container-fluid">
                    <div className="logo text-md-center text-start pb-50">
                        <a className="" href="#">
                            <Image src='/icon/logo.svg' width={60} height={60} />
                        </a>
                    </div>
                    <div className="title-text pt-md-50 pt-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                        <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
                    </div>
                    <CheckoutItem />
                    <hr />
                    <CheckoutDetail />
                    <CheckoutConfirmation />
                </div>
            </section>

        </>
    )
}

export async function getServerSideProps({ req }: any) {
    const { token } = req.cookies
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false
            }
        }
    }
    // karena serverside jadi pake buffer buka BTOA
    const jwttoken = Buffer.from(token, 'base64').toString('ascii')
    const payload: JWTPayloadTypes = jwtDecode(jwttoken)
    const userFromPayload: UserTypes = payload.player
    const IMG = process.env.NEXT_PUBLIC_IMG
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
    return {
        props: {
            user: userFromPayload
        }
    }
}
