import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../../../components/organism/Sidebar";
import TransactinsDetailContent from "../../../components/organism/TransactionsDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";
import { getTransactionDetail } from "../../../services/player";

interface TransactionDetailProps {
    transactionDetail: HistoryTransactionTypes
}

export default function detail(props: TransactionDetailProps) {
    const { transactionDetail } = props
    return (
        <>
            <section className="transactions-detail overflow-auto">
                <Sidebar activeMenu="transactions" />
                <main className="main-wrapper">
                    <TransactinsDetailContent data={transactionDetail} />
                </main>
            </section>
        </>
    )
}



export async function getServerSideProps({ req, params }: any) {
    const { token } = req.cookies;
    const { idtrx } = params
    console.log('params', params)
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false
            }
        }
    }
    // karena serverside jadi pake buffer buka BTOA
    const jwtToken = Buffer.from(token, 'base64').toString('ascii')
    const payload: JWTPayloadTypes = jwtDecode(jwtToken)
    const userFromPayload: UserTypes = payload.player
    const IMG = process.env.NEXT_PUBLIC_IMG
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
    const response = await getTransactionDetail(idtrx, jwtToken)
    console.log(response)
    return {
        props: {
            transactionDetail: response.data
        }
    }
}