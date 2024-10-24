import  { useState } from 'react'

type Props = {
    images: string[]
}

const Carousel = (props: Props) => {
    const { images } = props
    const [active, setActive] = useState<number>(0)
    
    return (
        <div className="carousel">
            <div className="carousel-image"> {active !== undefined && <img src={images[active]} alt="animal" /> } </div>
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt="animal"
                        className={active === index ? 'active' : ''}
                        data-index={index}
                        onClick={() => {
                            setActive(index)
                        }}
                    />
                )  )}
            </div>
        </div>
    )
}

export default Carousel
