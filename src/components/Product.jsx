import React from 'react'
import Navbar from './Navbar'

import brick1 from "../assets/items/bricks/brick1.png"
import brick2 from "../assets/items/bricks/brick2.png"
import brick3 from "../assets/items/bricks/brick3.png"
import brick4 from "../assets/items/bricks/brick4.png"

import { RiShoppingCart2Line } from "react-icons/ri"

import "./product.css"

// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Product = () => {
    return (
        <div className="product-page">
            <Navbar />

            <div className="product-section">
                <div className="img-container">
                    <Carousel>
                        <Carousel.Item>
                            <img src={brick1} alt="" />        
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={brick2} alt="" />        
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={brick3} alt="" />        
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={brick4} alt="" />        
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="details">
                    <div className="details-text">
                        <h1>Product Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque, dolor adipisci dolores, repellat nostrum quasi illum reiciendis fugiat nisi architecto laborum aliquid aliquam veritatis. Ut voluptatum autem deleniti sapiente incidunt! Quaerat repellendus alias inventore architecto porro, optio explicabo nostrum vitae enim eos illum quibusdam nulla hic eaque delectus quis.</p>
                        <h5>₹6000</h5>
                    </div>
                    <div className="details-buttons">
                        <button className='cart'>Add to Cart <RiShoppingCart2Line /></button>
                        <button className='buy'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product