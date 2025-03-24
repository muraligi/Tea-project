import React from 'react';
import Teashopimg from "../Teashopimg.json";
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Teapdslide() {

  let Teapowders = Teashopimg;

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="p-5 bg-secondary">
      <h3 style={{ fontWeight: "700" }}> Discover best Tea powders on Dineout</h3>
      <div className="pt-4">
        <Slider {...settings}>
          {
            Teapowders.map((Teapdstype, index) => {
              return (
                <div key={index}>
                  <div className="col-12 col-sm-6 col-lg-3 col-md-4">
                    <Card style={{ width: '18rem', height: "65vh" }}>
                      <Card.Img style={{ height: "33vh" }} variant="top" src={require('../Images/' + Teapdstype.img)} />
                      <Card.Body>
                        <Card.Title>{Teapdstype.Title}</Card.Title>
                        <Card.Text>{Teapdstype.Text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Teapdslide;