import Image from "next/image"
import Input from "../../atoms/Input"
export default function EditProfile() {
    return (
        <>
            <form action="">
                <div className="photo d-flex">
                    <div className="position-relative me-20">
                        <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" />
                        <div
                            className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                            <Image src="/icon/icon-trash.svg" width={25} height={25} alt="" />
                        </div>
                    </div>
                    <div className="image-upload">
                        <label htmlFor="avatar">
                            <Image src="/icon/icon-upload.svg" width={90} height={90} alt="" />
                        </label>
                        <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                    </div>
                </div>
                <div className="pt-30">
                    <Input label="Full Name" />
                </div>
                <div className="pt-30">
                    <Input label="Email Address" />
                </div>
                <div className="pt-30">
                    <Input label="Phone" placeholder="Enter Number" />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                    <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                        role="button">Save My Profile</button>
                </div>
            </form>

        </>
    )
}
