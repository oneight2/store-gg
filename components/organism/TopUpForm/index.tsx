import Link from 'next/link'
import NominalItem from './NominalItem'
import PaymentItem from './PaymentItem'
import { BankTypes, NominalItemTypes, PaymentItemTypes } from '../../../services/data-types'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'


export default function TopUpForm(props: { nominals: any, payments: any }) {
    const router = useRouter()
    const { nominals, payments } = props
    const [verifyID, setVerifyID] = useState('')
    const [nominalItem, setNominalItem] = useState({})
    const [paymentItem, setPaymentItem] = useState({})
    const [bankAccountName, setBankAccountName] = useState('')
    const onNominalItemChange = (data: NominalItemTypes) => {
        setNominalItem(data)
        localStorage.setItem('nominal-item', JSON.stringify(data))
    }
    const onPaymentItemChange = (payment: PaymentItemTypes, bank: BankTypes) => {
        const data = {
            payment, bank
        }
        setPaymentItem(data)
    }
    const onSubmit = () => {
        if (verifyID === '' || Object.keys(nominalItem).length === 0 || Object.keys(paymentItem).length === 0 || bankAccountName === '') {
            toast.error('Semua Data Harus Diisi!')
        } else {
            const data = {
                verifyID,
                nominalItem,
                paymentItem,
                bankAccountName
            }
            localStorage.setItem('topup-data', JSON.stringify(data))
            router.push('/checkout')
        }
    }
    return (
        <>
            <form action="./checkout.html" method="POST">
                <div className="pt-md-50 pt-30">
                    <div className="">
                        <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                            ID</label>
                        <input type="text" className="form-control rounded-pill text-lg" id="ID"
                            aria-describedby="verifyID" placeholder="Enter your ID"
                            value={verifyID}
                            onChange={(event) => { setVerifyID(event.target.value) }} />
                    </div>
                </div>
                <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                    <div className="row justify-content-between">
                        {nominals.map(((nominal: NominalItemTypes) => {
                            return (
                                <NominalItem
                                    key={nominal._id}
                                    _id={nominal._id}
                                    coinName={nominal.coinName}
                                    coinQuantity={nominal.coinQuantity}
                                    price={nominal.price}
                                    onChange={() => { onNominalItemChange(nominal) }} />
                            )
                        }))}
                        <div className="col-lg-4 col-sm-6">
                            {/* <!--Blank--> */}
                        </div>
                    </div>
                </div>
                <div className="pb-md-50 pb-20">
                    <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                    <fieldset id="paymentMethod">
                        <div className="row justify-content-between">
                            {payments.map(((payment: PaymentItemTypes) => {
                                return payment.banks.map((bank: BankTypes) => (
                                    <PaymentItem
                                        key={bank._id}
                                        _id={bank._id}
                                        type={payment.type}
                                        bankName={bank.bankName}
                                        onChange={() => { onPaymentItemChange(payment, bank) }} />
                                ))

                            }))}
                            <div className="col-lg-4 col-sm-6">
                                {/* <!--Blank--> */}
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="pb-50">
                    <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                        Account
                        Name</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                        name="bankAccount" aria-describedby="bankAccount"
                        placeholder="Enter your Bank Account Name"
                        value={bankAccountName}
                        onChange={(event) => { setBankAccountName(event.target.value) }} />
                </div>
                <div className="d-sm-block d-flex flex-column w-100">
                    <button type="button"
                        className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                        onClick={onSubmit}
                    >Continue</button>
                </div>
            </form>

        </>
    )
}
