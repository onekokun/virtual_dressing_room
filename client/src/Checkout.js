import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className="checkout__ad" src="https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout