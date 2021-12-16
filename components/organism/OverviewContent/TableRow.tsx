/* eslint-disable @next/next/no-img-element */
import cx from "classnames"
import NumberFormat from "react-number-format"
interface TableRowPorps {
    title: string,
    category: String,
    item: string,
    price: number,
    status: String,
    thumbnail: string
}
export default function TableRow(props: TableRowPorps) {
    const { title, category, item, price, status, thumbnail } = props

    const statusColor = cx({
        "float-start icon-status": true,
        pending: status === "pending",
        success: status === "success",
        failed: status === "failed"
    })
    return (
        <>
            <tr className="align-middle">
                <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={thumbnail}
                        width="80" height="60" alt="" />
                    <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                        <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
                    </div>
                </th>
                <td>
                    <p className="fw-medium color-palette-1 m-0">{item}</p>
                </td>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                        <NumberFormat value={price} prefix='Rp ' displayType='text' thousandSeparator='.' decimalSeparator=',' />
                    </p>
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
