import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import FirstSlide from "./FirstSlide.png";
import SecondSlide from "./SecondSlide.png";
import ThirdSlide from "./ThirdSlide.png";

class CarouselCustom extends React.Component {
    render() {
        return (
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FirstSlide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mario 1</h3>
                        <p>Armando 1</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SecondSlide}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Mario 2</h3>
                        <p>Armando 2</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ThirdSlide}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mario 3</h3>
                        <p>Armando 3</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselCustom;