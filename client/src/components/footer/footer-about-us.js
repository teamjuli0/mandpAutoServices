import React from 'react'

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
            width: '70px',
          }}
        />
        <h1
          style={{
            fontSize: '20px',
            color: '#bbc0c4',
          }}
        >
          About Us
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '7px',
            width: '70px',
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '2px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a leo
          libero. Aenean eu lacinia diam, nec luctus leo. Integer urna felis,
          auctor in imperdiet blandit, commodo vitae enim. Pellentesque gravida
          dolor vel massa vulputate porta.
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginTop: '30px',
            width: '95px',
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4',
          }}
        >
          Contact Info
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '95px',
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingTop: '10px',
            paddingBottom: '8px',
          }}
        >
          placeholder@email.com
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          (626)522-0251
        </h1>
      </div>
    </div>
  </>
)

export default FooterAboutUs
