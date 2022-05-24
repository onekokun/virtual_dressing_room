import React from 'react'
import './Product.css'
import axios from 'axios'

function Product({ id, title, image, price, rating, tag}) {

  const sendURL = () => {
    axios.post('http://localhost:5000/',  JSON.stringify({url : image}))
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>

      {tag=="upper-body-dress" && <button onClick={sendURL}>Try this outfit!</button>}

      
    </div>
  )
}

export default Product