import Profile from "./Profile"
import MenuItem from "./MenuItem"
import SidebarFooter from "./SidebarFooter"
export default function Sidebar() {

    return (
        <>
            <section className="sidebar">
                <div className="content pt-50 pb-30 ps-30">
                    <Profile />
                    <div className="menus">
                        <MenuItem title="Overview" icon="icon-menu-overview" href="overview" active />
                        <MenuItem title="Transactions" icon="icon-menu-transactions" href="transactions" />
                        <MenuItem title="Messages" icon="icon-menu-messages" href="messages" />
                        <MenuItem title="Card" icon="icon-menu-card" href="card" />
                        <MenuItem title="Rewards" icon="icon-menu-rewards" href="rewards" />
                        <MenuItem title="Settings" icon="icon-menu-setting" href="edit-profile" />
                        <MenuItem title="Logout" icon="icon-menu-logout" href="sign-in" />
                    </div>
                    <SidebarFooter />
                </div>
            </section>

        </>
    )
}
