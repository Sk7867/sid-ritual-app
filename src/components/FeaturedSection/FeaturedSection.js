import React from 'react'
import './FeaturedSection.css'
import feature1 from '../../assets/images/featured-1.webp'
import feature2 from '../../assets/images/featured-2.webp'
import feature3 from '../../assets/images/featured-3.webp'
import feature4 from '../../assets/images/featured-4.webp'
import hover1 from '../../assets/images/hover-1.webp'
import hover2 from '../../assets/images/hover-2.webp'
import hover3 from '../../assets/images/hover-3.webp'
import hover4 from '../../assets/images/hover-4.webp'


const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      main_img: feature1,
      hover_img: hover1,
      headline: 'Essential for Women',
      nameline: 'Multivitamin 18+',
      description: 'The clinical backed multivitamin, reimagined for women 18+',
    },
    {
      id: 2,
      main_img: feature2,
      hover_img: hover2,
      headline: 'Essential for Women',
      nameline: 'Prenatal Multivitamin',
      description: 'The prenatal multivitamin for thinking, trying, and when it\'s time.',
    },
    {
      id: 3,
      main_img: feature3,
      hover_img: hover3,
      headline: 'Essential Protein',
      nameline: 'daily Shake 18+',
      description: 'The reimagined plant-based protein for adults 18-49',
    },
    {
      id: 4,
      main_img: feature4,
      hover_img: hover4,
      headline: 'Essential for Men',
      nameline: 'Multivitamin 18+',
      description: 'Formulated for men 18-49 to help fill nutrients gap in their diet.*',
    },
  ]

  function toggleHover(e) {
    e.classList.remove('hover_class')
  }
  return (
    <section className='Container'>
      <div className="row">
        <div className="featured_section_container">
          <div className="featured_products_heading_container">
            <h2 className="featured_section_heading">Featured Products</h2>
            <a href="#" className="featured_products_shop_link" onMouseEnter={toggleHover}>Shop All</a>
          </div>
        </div>
        <div className="scrollable_container">
          <div className="draggable_container">
            {
              features.map((feature) => (
                <div className="featured_products_card_wrapper" key={feature.id}>
                  <div className="card_container">
                    <div className="card_content_container">
                      <a href="#" className="product_card_image_wrapper">
                        <img src={feature.main_img} alt="" className='main_img' />
                        <img src={feature.hover_img} alt="" className='hover_img' />
                        <div className="shop_card_quick_view hover_class">
                          <span>Learn More</span>
                        </div>
                      </a>
                      <a href="#" className="product_card_headline_link">{feature.headline}</a>
                      <a href="#" className="product_card_name_link">{feature.nameline}</a>
                      <a href="#" className="product_card_description">{feature.description}</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="featured_products_card_container">
          {
            features.map((feature) => (
              <div className="featured_products_card_wrapper" key={feature.id}>
                <div className="card_container">
                  <div className="card_content_container">
                    <a href="#" className="product_card_image_wrapper">
                      <img src={feature.main_img} alt="" className='main_img' />
                      <img src={feature.hover_img} alt="" className='hover_img' />
                      <div className="shop_card_quick_view hover_class">
                        <span>Learn More</span>
                      </div>
                    </a>
                    <a href="#" className="product_card_headline_link">{feature.headline}</a>
                    <a href="#" className="product_card_name_link">{feature.nameline}</a>
                    <a href="#" className="product_card_description">{feature.description}</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default FeaturedSection
