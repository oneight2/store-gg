import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonDetail() {
    return (
        <>
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                        <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-4">
                                    <Skeleton width={280} height={380} />
                                </div>
                                <div className="col-md-12 col-8 d-md-none d-block">
                                    <Skeleton />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            <form action="./checkout.html" method="POST">
                                <div className="pt-md-50 pt-30">
                                    <div className="">
                                        <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                                            ID</label>
                                        <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                                            aria-describedby="verifyID" placeholder="Enter your ID" />
                                    </div>
                                </div>
                                <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                                    <div className="row justify-content-between">
                                        <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                        >
                                            <div className="detail-card">
                                                <div className="d-flex justify-content-between">
                                                    <Skeleton />
                                                </div>
                                            </div>
                                        </label>
                                        <div className="col-lg-4 col-sm-6">
                                            {/* <!--Blank--> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-50">
                                    <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                                        Account
                                        Name</label>
                                    <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                                        name="bankAccount" aria-describedby="bankAccount"
                                        placeholder="Enter your Bank Account Name" />
                                </div>
                                <div className="d-sm-block d-flex flex-column w-100">
                                    <Link href="/checkout">
                                        <a type="submit" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
                                    </Link>
                                    {/* <!-- <button type ="submit"
                            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> --> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
