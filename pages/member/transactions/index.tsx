import jwtDecode from "jwt-decode"
import Sidebar from "../../../components/organism/Sidebar"
import TransactionsContent from "../../../components/organism/TransactionsContent"
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types"
export default function transactions() {
    return (
        <>
            <section className="transactions overflow-auto">
                <Sidebar activeMenu='transactions' />
                <main className="main-wrapper">
                    <TransactionsContent />
                </main>
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
