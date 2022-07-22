import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from '../../data'
// import html from "../../img/html.png"
// import css from "../../img/css.png"
// import js from "../../img/js.png"
// import react from "../../img/react.png"
// import mern from "../../img/mern.png"

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Skills</h1>
      <p className="pl-desc">
       Hey i am pretty familiar with these technologies.
      </p>
      </div>
      <div className="pl-list">
  {products.map((item)=>(
    <Product key={item.id} img={item.img} />
  ))}
      </div>
    </div>
  )
}

export default ProductList