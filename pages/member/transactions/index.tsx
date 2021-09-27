
import Sidebar from "../../../components/organism/Sidebar"
import TransactionsContent from "../../../components/organism/TransactionsContent"
export default function transactions() {
    return (
        <>
            <section className="transactions overflow-auto">
                <Sidebar />
                <main className="main-wrapper">
                    <TransactionsContent />
                </main>
            </section>
        </>
    )
}
