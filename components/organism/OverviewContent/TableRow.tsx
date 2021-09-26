import cx from "classnames"
interface TableRowPorps {
    title: string,
    category: 'Dekstop' | 'Mobile' | 'Other',
    item: number,
    price: number,
    status: 'Pending' | 'Success' | 'Failed',
    thumbnail: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4' | 'overview-5'
}
export default function TableRow(props: TableRowPorps) {
    const { title, category, item, price, status, thumbnail } = props

    const statusColor = cx({
        "float-start icon-status": true,
        pending: status === "Pending",
        success: status === "Success",
        failed: status === "Failed"
    })
    return (
        <>
            <tr className="align-middle">
                <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${thumbnail}.png`}
                        width="80" height="60" alt="" />
                    <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                        <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
                    </div>
                </th>
                <td>
                    <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
                </td>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
                </td>
                <td>
                    <div>
                        <span className={statusColor}></span>
                        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            {status}</p>
                    </div>
                </td>
            </tr>

        </>
    )
}
