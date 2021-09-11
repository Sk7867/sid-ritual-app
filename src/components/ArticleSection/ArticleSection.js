import React from 'react'
import './ArticleSection.css'

const ArticleSection = ({ article }) => {
  return (
    <section className='Container arcticle_section_container'>
      <div className="article_section_wrapper">
        <div className="row alignment">
          <div className={article.image_first ? 'order-1 | article_image_container' : 'order-2 | article_image_container | mar_left_true'}>
            <div className="article_image_wrap">
              <div className="image_center">
                <div className="article_image">
                  <img src={article.image} alt="Feature" />
                </div>
              </div>
            </div>
          </div>
          <div className={article.image_first ? 'order-2 | article_content_container' : 'order-1 | article_content_container | mar_left_0'}>
            <div className="article_content_wrapper">
              <div className="content_center">
                <div className="content">
                  <h2 className="heading">{article.heading}</h2>
                  <p className="description">{article.description}</p>
                </div>
              </div>
              {
                article.link1 ? (
                  <div className="article_links">
                    <div className="article_link">
                      <a href="#" className="a_link link_underline">{article.link1_text}</a>
                    </div>
                    {
                      article.link2 ? (
                        <div className="article_link">
                          <a href="#" className="a_link link_underline">{article.link2_text}</a>
                        </div>
                      ) : ''
                    }
                  </div>
                ) : ''
              }
              {
                article.features ? (
                  <ul className="features_list">
                    <li className="feature">
                      <div className="feature_icon">
                        <article.feature_icon_1 />
                      </div>
                      <p className="feature_name">
                        {article.feature_name_1}
                      </p>
                    </li>
                    <li className="feature">
                      <div className="feature_icon">
                        <article.feature_icon_2 />
                      </div>
                      <p className="feature_name">
                        {article.feature_name_2}
                      </p>
                    </li>
                    <li className="feature">
                      <div className="feature_icon">
                        <article.feature_icon_3 />
                      </div>
                      <p className="feature_name">
                        {article.feature_name_3}
                      </p>
                    </li>
                    <li className="feature">
                      <div className="feature_icon">
                        <article.feature_icon_4 />
                      </div>
                      <p className="feature_name">
                        {article.feature_name_4}
                      </p>
                    </li>

                  </ul>
                ) : ''
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection
