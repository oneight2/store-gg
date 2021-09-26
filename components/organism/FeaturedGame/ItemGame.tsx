import Image from "next/image"
import Link from 'next/link'

interface ItemGameProps {
    title: string,
    platform: string,
    thumbnail: 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5'
}
export default function ItemGame(props: ItemGameProps) {
    const { title, platform, thumbnail } = props
    return (
        <>
            <div className="featured-game-card position-relative">
                <Link href="/detail">
                    <a>
                        <div className="blur-sharp">
                            <Image src={`/img/${thumbnail}.png`} className="thumbnail" width="205" height="270" alt="" />
                        </div>
                        <div className="cover position-absolute bottom-0 m-32">
                            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                <div className="game-icon mx-auto">
                                    <Image src="/icon/console.svg" width={54} height={36} alt="" />
                                </div>
                                <div>
                                    <p className="fw-semibold text-white text-xl m-0">{title}</p>
                                    <p className="fw-light text-white m-0">{platform}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
