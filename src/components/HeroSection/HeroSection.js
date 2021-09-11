import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <div className="hero_content_align">
        <div className="hero_content">
          <div className="hero_wrapper">
            <h1 className="hero_heading">
              <div>The future</div>
              "of health"
              <div>
                <em>-is clear.</em>
              </div>
            </h1>
            <div className="hero_btn">
              <div className="shop_btn">
                <a href="#" className="btn_link">
                  <div className="btn_text_wrapper">
                    <span className="btn_text">Shop All</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
