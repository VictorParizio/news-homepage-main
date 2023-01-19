import Card from '../card/card'
import './cards.css'

import pcRetro from '../../images/image-retro-pcs.jpg'
import topLaptops from '../../images/image-top-laptops.jpg'
import gamingGrowth from '../../images/image-gaming-growth.jpg'

const postList = [
    {
        id: "01",
        img: pcRetro,
        alt: 'PC retro',
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?"
    },
    {
        id: "02",
        img: topLaptops,
        alt: 'teclado',
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets."
    },
    {
        id: "03",
        img: gamingGrowth,
        alt: 'joystick',
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked frech opportunities"
    }
]

const Cards = () => {
    return (
        <div className="card-list">
            {postList.map((post, index) => {
                return (
                    <Card key={index}>
                        <img src={post.img} alt={post.alt} />
                        <div>
                            <span>{post.id}</span>
                            <a><h2 className='title'>{post.title}</h2></a>
                            <p className='description'>{post.description}</p>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards