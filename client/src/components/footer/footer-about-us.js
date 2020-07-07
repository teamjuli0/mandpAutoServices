import React from 'react'
import { FooterSocialMedia } from '../footer'
import { InstagramLogo, YelpLogo } from '../../images/logos-and-icons'

const FooterAboutUs = (props) => (
  <>
    <div
      className={props.mobileDevice}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <div
        style={{
          width: '90%',
          color: '#848d95',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '120px',
          }}
        />
        <h1
          style={{
            fontSize: '25px',
            color: '#bbc0c4',
          }}
        >
          Our Promise
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '10px',
            width: '120px',
          }}
        />
        <div
          style={{
            fontSize: '20px',
            maxWidth: '180px',
            margin: 'auto',
            paddingBottom: '2px',
          }}
        >
          <p>Whether it’s an oil change,</p>
          <p>tire rotations, or regular maintenance, we’re just</p>
          <p>around the corner to</p>
          <p>
            help! We’ll take care of your tune-ups so you can take care of
            business. Stop by today!
          </p>
        </div>
      </div>
    </div>
  </>
)

export default FooterAboutUs
