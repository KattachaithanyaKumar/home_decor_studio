import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Navbar from './components/Navbar'

import banner1 from "./assets/mural1.jpg"
import banner2 from "./assets/mural2.jpg"
import banner3 from "./assets/mural3.jpg"
import { RiH1 } from 'react-icons/ri';

import brick1 from "./assets/items/bricks/brick1.png"
import brick2 from "./assets/items/bricks/brick2.png"
import brick3 from "./assets/items/bricks/brick3.png"
import brick4 from "./assets/items/bricks/brick4.png"

import statue1 from "./assets/items/statues/statue1.png"
import statue2 from "./assets/items/statues/statue2.png"
import statue3 from "./assets/items/statues/statue3.png"
import statue4 from "./assets/items/statues/statue4.png"

import mural1 from "./assets/items/murals/mural1.jpg"
import mural2 from "./assets/items/murals/mural2.jpg"
import mural3 from "./assets/items/murals/mural3.jpg"
import mural4 from "./assets/items/murals/mural4.jpg"

const App = () => {
  const [showmore, setShowmore] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const bricks = [{image: brick1,
                    price: "₹4465",
                    desc: "dhsljfghshfDf",                
                  }, 
                {image: brick2,
                    price: "₹451",
                    desc: "dhsljfghshfDf",                
                  },
                {image: brick3,
                    price: "₹4465",
                    desc: "dhsljfghshfDf",                
                  },
                {image: brick4,
                    price: "₹4465",
                    desc: "dhsljfghshfDf",                
                  },]
  const statues = [statue1, statue2, statue3, statue4]
  const murals = [mural1, mural2, mural3, mural4]

  return (
    <div className='app' ref={parent}>
      <Navbar />
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="captions">
              <h3>Murals</h3>
              <p>Transform any space into a work of art with our captivating and customizable mural designs.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="captions">
              <h3>Exterior Decor</h3>
              <p>Elevate your outdoor space with stunning stone statues that blend art and nature.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="captions">
              <h3>Statues</h3>
              <p>Capture timeless beauty with our exquisite stone statues.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="catagories">
        
        <div className="box bricks">
          <h2>Bricks</h2>
        </div>
        <div className="box exterior">
          <h2>Exterior</h2>
        </div>
        <div className="box murals">
          <h2>Murals</h2>
        </div>
        <div className="box statues">
          <h2>Statues</h2>
        </div>
        <div className="box stepping">
          <h2>Stepping Stones</h2>
        </div>
        <div className="box walls">
          <h2>Walls</h2>
        </div>
        <div className="box wash">
          <h2>Wash Basins</h2>
        </div>
        <div className="box home-acc">
          <h2>Home Accessories</h2>
        </div>
        <div className="box adhesive">
          <h2>Stone Adhesive</h2>
        </div>
        <div className="box plants">
          <h2>Pots and Plats</h2>
        </div>
      </div>

      <div className="listing">
        <div className="list-title">
          <h2>Bricks</h2>
          <button>Show More</button>
        </div>
        <div className="bricks-list">
          {bricks.map((item) => (
            <div className="item">
              <img src={item.image} index={item} className='item-img' />
              <p className='caption'>
                <span>{item.desc}</span>
                <h5>{item.price}</h5>
              </p>
            </div>
          ))}
        </div>

        <div className="list-title">
          <h2>Statues</h2>
          <button>Show More</button>
        </div>
        <div className="bricks-list">
          {statues.map((item) => (
            <div className="item">
              <img src={item} index={item} className='item-img' />
              <p className='caption'>
                <span>item</span>
                <span>₹600</span>
              </p>
            </div>
          ))}
        </div>

        <div className="list-title">
          <h2>Murals</h2>
          <button>Show More</button>
        </div>
        <div className="bricks-list">
          {murals.map((item) => (
            <div className="item">
              <img src={item} index={item} className='item-img' />
              <p className='caption'>
                <span>item</span>
                <span>₹600</span>
              </p>
            </div>
          ))}
        </div>
      </div>
          
      
      <footer className='footer'>
        footer
      </footer>
    </div>
  )
} 

export default App