import cx from "classnames"

interface ButtonTabProps {
    title: string,
    active: boolean,
    onClick: () => void
}
export default function ButtonTab(props: ButtonTabProps) {
    const { title, active, onClick } = props
    const ButtonTabClass = cx({
        "btn btn-status rounded-pill text-sm  me-3": true,
        "btn-active": active

    })
    return (
        <>
            <button type="button" data-filter="*" onClick={onClick} className={ButtonTabClass}>{title}</button>
        </>
    )
}
