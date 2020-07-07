import React from 'react'
import {
  FooterTopLinks,
  FooterSocialMedia,
  FooterFindUs,
  FooterMenu,
  FooterAboutUs,
} from '../footer'
import { InstagramLogo, YelpLogo } from '../../images/logos-and-icons'

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
        <div
          className='row'
          style={{
            color: '#cccccc',
            backgroundColor: '#f4f4f4',
            margin: '0',
            fontFamily: 'Bebas Neue, cursive',
          }}
        >
          <div
            className='col-sm-12'
            style={{
              padding: '0',
              boxShadow: '0 0 25px #5b5b5b',
              MozBoxShadow: '0 0 25px #5b5b5b',
              WebkitBoxShadow: '0 0 25px #5b5b5b',
              backgroundColor: '#4b4c4d',
            }}
          >
            <div
              className='row'
              style={{
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              <FooterTopLinks
                border={
                  this.state.isMobile
                    ? {
                        height: '7vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0',
                        borderBottom: '2.5px solid #444444',
                      }
                    : {
                        height: '7vh',
                        padding: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                }
                location='mainImage'
                name='home'
              />
              <FooterTopLinks
                border={
                  this.state.isMobile
                    ? {
                        height: '7vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '2.5px solid #444444',
                      }
                    : {
                        height: '7vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
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
              <FooterTopLinks
                border={
                  this.state.isMobile
                    ? {
                        height: '7vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '2.5px solid #444444',
                      }
                    : {
                        height: '7vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                }
                offset={-47}
                location='mapid'
                name='Location'
              />
              <FooterTopLinks
                border={{
                  height: '7vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                location='aboutus'
                name='About Us'
              />
            </div>
            <div
              id='aboutus'
              style={{
                backgroundColor: '#242729',
                width: '100%',
              }}
            >
              {/* <div
                className='row'
                style={{
                  minHeight: '10vh',
                  width: '100%',
                  maxWidth: '650px',
                  margin: '0 auto',
                  marginBottom: '20px',
                  paddingTop: '20px',
                }}
              >
              <FooterSocialMedia
                cc='©'
                name='facebook'
                font='Lato'
                bgcolor='#466093'
                bordercolor='#b5bfd3'
                textcolor='white'
              />
              <FooterSocialMedia
                imgSource={InstagramLogo}
                imgStyle={{
                  height: '23px',
                  width: '23px',
                  marginLeft: '5px',
                }}
                name='Instagram'
                font='Pacifico'
                bgcolor='linear-gradient(45deg, #f09433 0%,#e6683c 40%,#dc2743 60%,#cc2366 80%,#bc1888 100%)'
                bordercolor='#f7d1c4'
                textcolor='#fcece7'
              />
              <FooterSocialMedia
                bgcolor='#c31f2a'
                bordercolor='#efa7ab'
                imgSource={YelpLogo}
                imgStyle={{
                  height: '28px',
                  marginLeft: '15px',
                }}
              />
              </div> */}
              <div
                className='row'
                style={{
                  margin: '0 auto',
                  maxWidth: '900px',
                }}
              >
                <FooterFindUs mobileDevice='col-sm-6' />
                <FooterAboutUs mobileDevice='col-sm-6' />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
