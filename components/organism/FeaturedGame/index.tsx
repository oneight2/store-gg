import { useEffect, useState, useCallback } from 'react'
import GameItem from '../../molecules/GameItem'
import { getFeaturedGame } from '../../../services/player'
import { GameItemTypes } from '../../../services/data-types'
import SkelentonGameItem from '../../molecules/GameItem/skelentonGameItem'

export default function FeaturedGame() {
    const [gameList, setGameList] = useState([])
    const [Loading, setLoading] = useState(true)

    const getFeaturedGameList = useCallback(async () => {
        const data = await getFeaturedGame()
        setGameList(data)
    }, [getFeaturedGame])

    useEffect(() => {
        setTimeout(() => {
            getFeaturedGameList()
                .then(res => {
                    return setLoading(false)
                })
        }, 2000)
    }, [])

    const API_IMG = process.env.NEXT_PUBLIC_IMG
    return (
        <>
            {/* <!-- 5 Column - Featured-game --> */}

            <section className="featured-game pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                    </h2>
                    <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4">
                        {Loading
                            ?
                            <>
                                <SkelentonGameItem />
                                <SkelentonGameItem />
                                <SkelentonGameItem />
                                <SkelentonGameItem />
                                <SkelentonGameItem />
                            </>
                            :
                            gameList.map((item: GameItemTypes) => (
                                <GameItem key={item._id} title={item.name} platform={item.category.name} thumbnail={`${API_IMG}/${item.thumbnail}`} id={item._id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
