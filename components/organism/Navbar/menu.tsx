import Link from 'next/link'
import cx from 'classnames'

interface MenuProps {
    title: string,
    href: string,
    active?: boolean,

}
export default function Menu(props: MenuProps) {
    const { title, href = '/', active } = props
    const classTitle = cx({
        'nav-link': true,
        active,
    })
    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}
