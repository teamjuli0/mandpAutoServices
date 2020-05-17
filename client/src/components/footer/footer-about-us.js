import React from 'react'

const FooterAboutUs = props => (
  <>
    <div
      className={props.mobileDevice}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
        maxWidth: '600px',
        margin: 'auto'
      }}
    >
      <div
        style={{
          width: '90%',
          color: '#848d95',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '70px'
          }}
        />
        <h1
          style={{
            fontSize: '20px',
            color: '#bbc0c4'
          }}
        >
          About Us
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '7px',
            width: '70px'
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '2px'
          }}
        >
          Evolution barbershop own by Jairo with an amazing team provide the
          community with a family-friendly environment every time they receive a
          haircut. Come in and enjoy watching television and eating snacks while
          getting a haircut.
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginTop: '30px',
            width: '95px'
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4'
          }}
        >
          Contact Info
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '95px'
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingTop: '10px',
            paddingBottom: '8px'
          }}
        >
          evolutionbarbershopla@gmail.com
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          (323)643-4653
        </h1>
      </div>
    </div>
  </>
)

export default FooterAboutUs
