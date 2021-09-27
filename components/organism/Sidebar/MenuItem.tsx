import cx from "classnames"
import Link from "next/link"

interface MenuItemProps {
    title: string,
    icon: 'icon-menu-overview' | 'icon-menu-transactions' | 'icon-menu-messages' | 'icon-menu-card' | 'icon-menu-rewards' | 'icon-menu-logout' | 'icon-menu-setting',
    active?: boolean,
    href: string
}
export default function MenuItem(props: MenuItemProps) {
    const { title, icon, active, href } = props
    const classItem = cx({
        item: true,
        "mb-30": true,
        active: active,
    })
    return (
        <>
            <div className={classItem}>
                <div className="me-3">
                    <img src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
                </div>
                <p className="item-title m-0 ">
                    <Link href={href}>
                        <a className="text-lg text-decoration-none">{title}</a>
                    </Link>
                </p>
            </div>
        </>
    )
}
