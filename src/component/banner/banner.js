import Button from '../button/button'
import './banner.css'
import banner from '../../images/image-web-3-desktop.jpg'

const Banner = () => {
    return (
        <section className='hero'>
            <img src={banner} alt='' className='banner' />
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