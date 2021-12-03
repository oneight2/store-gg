import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"
import { setCheckout } from "../../../services/player"

export default function CheckoutConfirmation() {
    const router = useRouter()
    const [checkbox, setCheckbox] = useState(false)

    const getLocalItem = localStorage.getItem('data-item')
    const getLocalTopup = localStorage.getItem('topup-data')

    const dataItem = JSON.parse(getLocalItem)
    const dataTopup = JSON.parse(getLocalTopup)

    const onSubmit = async () => {

        if (!checkbox) {
            toast.error('Pastikan Anda Telah Menyetujui Pembayaran')
        } else {
            const data = {
                voucher: dataItem._id,
                nominal: dataTopup.nominalItem._id,
                payment: dataTopup.paymentItem.payment._id,
                bank: dataTopup.paymentItem.bank._id,
                name: dataTopup.bankAccountName,
                accountUser: dataTopup.verifyID
            }

            const response = await setCheckout(data)
            if (response.error) {
                toast.error(response.message)
            } else {
                toast.success('checkout Berhasil!')
                router.push('/completed-checkout')
            }
        }
    }
    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">I have transferred the money
                <input type="checkbox" checked={checkbox} onChange={() => { setCheckbox(!checkbox) }} />
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
                    type='button' onClick={onSubmit}>Confirm
                    Payment</button>
            </div>

        </>
    )
}
