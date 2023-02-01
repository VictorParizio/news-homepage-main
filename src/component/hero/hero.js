import bannerDescktop from '../../images/image-web-3-desktop.jpg'
import bannerMobile from '../../images/image-web-3-mobile.jpg'
import Button from '../button/button'
import './hero.css'

const Banner = () => {
    return (
        <section className='hero'>
            <picture>
                <source srcSet={bannerMobile} alt='banner web 3' media='(max-width: 789px)' />

                <img src={bannerDescktop} alt='banner web 3' className='banner' />
            </picture>
            <div className='container'>
                <h1 className='title'>The Bright Future of Web 3.0?</h1>
                <div className='description'>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Banner