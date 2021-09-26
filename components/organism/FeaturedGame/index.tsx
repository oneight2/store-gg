import Image from 'next/image'
import ItemGame from './ItemGame'
export default function FeaturedGame() {
    return (
        <>
            {/* <!-- 5 Column - Featured-game --> */}
            <section className="featured-game pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                    </h2>
                    <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4">

                        <ItemGame title="Super Mechs" platform="Mobile" thumbnail="Thumbnail-1" />
                        <ItemGame title="COD: Modern War" platform="Dekstop" thumbnail="Thumbnail-2" />
                        <ItemGame title="Mobile Legend" platform="Mobile" thumbnail="Thumbnail-3" />
                        <ItemGame title="Clash of Clan" platform="Mobile" thumbnail="Thumbnail-4" />
                        <ItemGame title="FreeFire" platform="Mobile" thumbnail="Thumbnail-5" />

                    </div>
                </div>
            </section>

        </>
    )
}
