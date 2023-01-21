import Card from '../card/card'
import './cards.css'

import pcRetro from '../../images/image-retro-pcs.jpg'
import topLaptops from '../../images/image-top-laptops.jpg'
import gamingGrowth from '../../images/image-gaming-growth.jpg'

const cardtList = [
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

const Popular = () => {
    return (
        <div className="card-list">
            {cardtList.map((card, index) => {
                return (
                    <Card key={index}>
                        <img src={card.img} alt={card.alt} />
                        <div>
                            <span>{card.id}</span>
                            <a href='.'><h2 className='title'>{card.title}</h2></a>
                            <p className='description'>{card.description}</p>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default Popular