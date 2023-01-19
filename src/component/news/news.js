import './news.css'
import New from '../new/new'

const newList = [
    {
        id: "01",
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        id: "02",
        title: "The Downsides of AI Artistry",
        description: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        id: "03",
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

const News = () => {
    return (
        <div className="new-list">
            <h2 className='header'>New</h2>
            {newList.map((post, index) => {
                return (
                    <New key={index}>
                        <a href='.'><h2 className='title'>{post.title}</h2></a>
                        <p className='description'>{post.description}</p>
                    </New>
                )
            })}
        </div>
    )
}

export default News