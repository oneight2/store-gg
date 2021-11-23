import Sidebar from "../../../components/organism/Sidebar";
import TransactinsDetailContent from "../../../components/organism/TransactionsDetailContent";

export default function detail() {
    return (
        <>
            <section className="transactions-detail overflow-auto">
                <Sidebar />
                <main className="main-wrapper">
                    <TransactinsDetailContent />
                </main>
            </section>
        </>
    )
}
