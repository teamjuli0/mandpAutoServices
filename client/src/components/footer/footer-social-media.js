import React from 'react'

const FooterSocialMedia = (props) => (
  <>
    <div
      style={{
        display: 'flex',
        height: '7vh',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.3%',
        margin: 'auto',
      }}
    >
      <a href='https://www.yelp.com/biz/m-and-p-auto-service-el-monte?osq=m+and+p+auto+services'>
        <div
          style={{
            fontFamily: `${props.font}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            color: `${props.textcolor}`,
            height: '33px',
            width: '80px',
            background: `${props.bgcolor}`,
            border: `2px solid ${props.bordercolor}`,
            boxShadow: '0 0 10px #54585d',
            MozBoxShadow: '0 0 10px #54585d',
            WebkitBoxShadow: '0 0 10px #54585d',
            padding: '0 5px',
          }}
        >
          {props.imgSource ? (
            <img src={props.imgSource} style={props.imgStyle} />
          ) : (
            ''
          )}

          <h1
            style={
              props.imgSource
                ? { paddingLeft: '5px', paddingRight: '10px' }
                : { fontWeight: 'bold' }
            }
          >
            {props.name}
            <span style={{ fontSize: 9 }}>{props.cc}</span>
          </h1>
        </div>{' '}
      </a>
    </div>
  </>
)

export default FooterSocialMedia
