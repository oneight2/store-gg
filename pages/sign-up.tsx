import Image from "next/image"
import SignUpFrom from "../components/organism/SignUpForm"
export default function signUp() {
    return (
        <>
            <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
                <div className="container mx-auto">
                    <SignUpFrom />
                </div>
            </section>

        </>
    )
}
