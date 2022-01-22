/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { useEffect } from "react"
import Footer from "../../components/organism/Footer"
import Navbar from "../../components/organism/Navbar"
import TopUpForm from "../../components/organism/TopUpForm"
import TopUpItem from "../../components/organism/TopUpItem"
import { GameItemTypes, NominalItemTypes, PaymentItemTypes } from "../../services/data-types"
import { getFeaturedGame, getVoucherDetail } from "../../services/player"

interface DetailProps {
    dataItem: GameItemTypes,
    dataNominal: NominalItemTypes[],
    dataPayment: PaymentItemTypes[]
}

export default function detail({ dataItem, dataNominal, dataPayment }: DetailProps) {
    useEffect(() => {
        localStorage.setItem('data-item', JSON.stringify(dataItem))
    }, [])
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

export async function getStaticPaths() {
    const data = await getFeaturedGame()

    // get paths untuk mendapatkan semua id game
    const paths = data.map((item: GameItemTypes) => ({
        params: {
            id: item._id
        }
    }))

    return {
        paths,
        fallback: false
        // bawaan harus ada fallback
    }
}

interface GetStaticProps {
    params: {
        id: string
    }
}

// dimana ada StaticPaths disitu ada StaticProps
export async function getStaticProps({ params }: GetStaticProps) {
    const { id } = params
    const data = await getVoucherDetail(id)
    return {
        props: {
            dataItem: data.detail,
            dataNominal: data.detail.nominals,
            dataPayment: data.payment
        }
    }
}
