import Image from "next/image"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkelentonGameItem() {
    return (
        <>
            <div className="featured-game-card position-relative">
                <div className="blur-sharp">
                    <Skeleton style={{ width: 205, height: 270 }} />
                    {/* <Image src={thumbnail} className="thumbnail" width="205" height="270" alt="" /> */}
                </div>
            </div>
        </>
    )
}
