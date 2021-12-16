/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import Footer from "../../components/organism/Footer"
import Navbar from "../../components/organism/Navbar"
import TopUpForm from "../../components/organism/TopUpForm"
import TopUpItem from "../../components/organism/TopUpItem"
import { getVoucherDetail } from "../../services/player"
import SkeletonDetail from "./SkeletonDetail"


export default function detail() {
    const { query, isReady } = useRouter();
    const [dataItem, setDataItem] = useState({
        name: '',
        thumbnail: '',
        category: {
            name: ''
        }
    })
    const [dataNominal, setDataNominal] = useState([])
    const [dataPayment, setDataPayment] = useState([])
    const [Loading, setLoading] = useState(true)

    const getVoucherDetailAPI = useCallback(async (id) => {
        const data = await getVoucherDetail(id)
        setDataItem(data.detail)
        setDataNominal(data.detail.nominals)
        setDataPayment(data.payment)
        localStorage.setItem('data-item', JSON.stringify(data.detail))
    }, [])
    useEffect(() => {
        if (isReady) {
            getVoucherDetailAPI(query.id)
        } else {
            return setLoading(false)
        }
    }, [isReady])
    return (
        <>
            <Navbar />
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                        <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <TopUpItem data={dataItem} platform='mobile' />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            <TopUpItem data={dataItem} platform='dekstop' />
                            <hr />
                            <TopUpForm nominals={dataNominal} payments={dataPayment} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
