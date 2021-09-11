import React from 'react'
import card1 from '../../assets/images/Category-1.webp'
import card2 from '../../assets/images/Category-2.webp'
import card3 from '../../assets/images/Category-3.webp'
import card4 from '../../assets/images/Category-4.webp'

import './ProductCards.css'

const ProductCards = () => {
  const products = [
    {
      id: 1,
      image: card1,
      ribbon: false,
      title: 'Multivitamin'
    },
    {
      id: 2,
      image: card2,
      ribbon: true,
      ribbon_text: 'NEW',
      title: 'Protein'
    },
    {
      id: 3,
      image: card3,
      ribbon: false,
      title: 'Pregnancy'
    },
    {
      id: 4,
      image: card4,
      ribbon: true,
      ribbon_text: 'SAVE $10',
      title: 'Bundles'
    },
  ]
  return (
    <section className='product_card_container'>
      <div className="product_card_wrapper">
        <div className="cards_container">
          {
            products.map((product) => (
              <a href="#" className="product_cards" key={product.id}>
                <div className="product_card_image">
                  <img src={product.image} alt="product" />
                  {
                    product.ribbon ? (
                      <span className="ribbon tail">
                        {product.ribbon_text}
                      </span>
                    ) : ''
                  }
                </div>
                <p className="product_card_title">
                  {product.title}
                </p>
              </a>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default ProductCards
