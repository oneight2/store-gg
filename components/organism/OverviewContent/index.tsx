import Category from "./Category"
import TableRow from "./TableRow"
export default function OverviewContent() {
    return (
        <>
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                    <div className="top-up-categories mb-30">
                        <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                        <div className="main-content">
                            <div className="row">
                                <Category icon="icon-category-dekstop" totalSpent={18000500}>
                                    Game <br /> Dekstop
                                </Category>
                                <Category icon="icon-category-mobile" totalSpent={5000000}>
                                    Game<br /> Mobile
                                </Category>
                                <Category icon="icon-category-other" totalSpent={2000000}>
                                    Other<br /> Game
                                </Category>

                            </div>
                        </div>
                    </div>
                    <div className="latest-transaction">
                        <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                        <div className="main-content main-content-table overflow-auto">
                            <table className="table table-borderless">
                                <thead>
                                    <tr className="color-palette-1">
                                        <th className="text-start" scope="col">Game</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow title="Mobile Legend: Bang Bang" category="Mobile" item={200} price={290000} status='Pending' thumbnail="overview-1" />
                                    <TableRow title="Call of Duty: Modern War" category="Dekstop" item={200} price={290000} status='Success' thumbnail="overview-2" />
                                    <TableRow title="Clash of Clans" category="Mobile" item={200} price={290000} status='Pending' thumbnail="overview-3" />
                                    <TableRow title="The Royal Game" category="Mobile" item={200} price={290000} status='Failed' thumbnail="overview-4" />


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}
