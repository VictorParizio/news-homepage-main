import Card from '../card/card'
import './cards.css'

import pcRetro from '../../images/image-retro-pcs.jpg'
import topLaptops from '../../images/image-top-laptops.jpg'
import gamingGrowth from '../../images/image-gaming-growth.jpg'

const postList = [
    {
        id: "01",
        img: pcRetro,
        title: "Reviving Retro PCs",
        text: "What happens when old PCs are given modern upgrades?"
    },
    {
        id: "02",
        img: topLaptops,
        title: "Top 10 Laptops of 2022",
        text: "Our best picks for various needs and budgets."
    },
    {
        id: "03",
        img: gamingGrowth,
        title: "The Growth of Gaming",
        text: "How the pandemic has sparked frech opportunities"
    }
]

const Cards = () => {
    return (
        <div className='cardList'>
            <h1>Meus cards</h1>
            <div className="container">
                {postList.map((post, index) => {
                    return (
                        <Card key={index}>
                            <img src={post.img}></img>
                            <div>
                                <span>{post.id}</span>
                                <h2>{post.title}</h2>
                                <p>{post.text}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards