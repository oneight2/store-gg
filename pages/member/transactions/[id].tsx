import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../../../components/organism/Sidebar";
import TransactinsDetailContent from "../../../components/organism/TransactionsDetailContent";

export default function detail() {

    return (
        <>
            <section className="transactions-detail overflow-auto">
                <Sidebar activeMenu="transactions" />
                <main className="main-wrapper">
                    <TransactinsDetailContent />
                </main>
            </section>
        </>
    )
}
