import EditProfile from "../../components/organism/EditProfile";
import Sidebar from "../../components/organism/Sidebar";

export default function editProfile() {
    return (
        <>
            <section className="edit-profile overflow-auto">
                <Sidebar />
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                            <EditProfile />
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}
