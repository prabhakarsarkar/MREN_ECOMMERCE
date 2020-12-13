import{Carousel,Container} from 'react-bootstrap'
import React from 'react'

const initialBannerImages = [
    "https://imgur.com/NV9lMbi.png",
    "https://imgur.com/2h8SypW.png",
    "https://imgur.com/ihiACsy.png",
    "https://imgur.com/uKEhMt3.png",
    "https://imgur.com/TKCwZvc.png",
    "https://imgur.com/aYd3zCA.png",
    "https://imgur.com/hzjdrQX.png"
    ]
const CustomCarousel = () => {
    const [bannerImages, setBannerImages] = React.useState([...initialBannerImages])
    return (
        <React.Fragment>
            <Container fluid className="p-0">
                <Carousel >
                    {
                        bannerImages.map((url, index)=>{
                            return (
                                <Carousel.Item key={index} style={{height:"50%"}} >
                                    <img style={{width:"100%",height:"350px"}}
                                        src={url}
                                        alt="Banner Image"  
                                    />
                                    <Carousel.Caption>  
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                     <h3 style={{
                         textAlign: "center",
                         position: "relative",
                         top: "-72px",
                         color: "white",
                         fontWeight: "bold"
                     }}>Welcome to Book online shoping</h3>
            </Container>
        </React.Fragment>
    )
}
export default CustomCarousel;