import React from 'react'
import {
  FooterTopLinks,
  FooterFindUs,
  FooterAboutUs,
  FooterSocialMedia,
} from '../footer'
import { YelpLogo } from '../../images/logos-and-icons'

class Footer extends React.Component {
  state = {
    isMobile: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isMobile = window.innerWidth < 769
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }
    })
  }

  render() {
    return (
      <>
        <footer className='row'>
          <div className='col-sm-12 main-footer-div'>
            <div className='row footer-top-row'>
              <FooterTopLinks
                border={
                  this.state.isMobile ? 'top-link-div-mobile' : 'top-link-div'
                }
                location='mainImage'
                name='Home'
              />

              <FooterTopLinks
                border={
                  this.state.isMobile ? 'top-link-div-mobile' : 'top-link-div'
                }
                location='schedule'
                name={
                  <div>
                    hours
                    <span
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      &
                    </span>
                    services
                  </div>
                }
              />
              <FooterSocialMedia
                bgcolor='#c31f2a'
                bordercolor='#efa7ab'
                imgSource={YelpLogo}
                imgStyle={{
                  height: '23px',
                  marginLeft: '15px',
                }}
              />
            </div>
            <div id='aboutus'>
              <div className='row footer-aboutus-row'>
                <FooterFindUs mobileDevice='col-sm-6' />
                <FooterAboutUs mobileDevice='col-sm-6' />
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
