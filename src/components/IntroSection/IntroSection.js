import React from 'react'
import { ReactComponent as Icon1 } from '../../assets/icons/intro-1.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/intro-2.svg'
import { ReactComponent as Icon3 } from '../../assets/icons/intro-3.svg'
import { ReactComponent as Icon4 } from '../../assets/icons/intro-4.svg'
import { ReactComponent as Icon5 } from '../../assets/icons/intro-5.svg'
import './IntroSection.css'

const IntoSection = () => {

  const Intros = [
    {
      id: 1,
      icon: Icon1,
      heading: 'Traceable Ingredients',
    },
    {
      id: 2,
      icon: Icon2,
      heading: 'Non-GMO',
    },
    {
      id: 3,
      icon: Icon3,
      heading: 'Third Party Tested',
    },
    {
      id: 4,
      icon: Icon4,
      heading: 'Vegan',
    },
    {
      id: 5,
      icon: Icon5,
      heading: 'No Artificial Flavors or Synthetic Fillers',
    },
  ]
  return (
    <section className='Container intro_container'>
      <div className="row">
        <div className="into_heading_wrapper">
          <h2 className="intro_heading">Daily essentials with good intentions — for living life or creating it.</h2>
        </div>
        <div className="Container">
          <div className="row icons_container">
            <div className="icons_wrapper">
              <div className="icons_list">
                {
                  Intros.map((intro) => (
                    <div className="icon" key={intro.id}>
                      <div className="icon_image">
                        <intro.icon />
                      </div>
                      <span className="icon_name">
                        {intro.heading}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntoSection
