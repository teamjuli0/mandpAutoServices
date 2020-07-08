import React from 'react'
import { Link } from 'react-scroll'

const MainImage = (props) => (
  <>
    <div
      className='row'
      id='mainImage'
      style={{
        margin: 0,
        zIndex: '1',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.background})`,
        width: '100%',
        height: '650px',
        align: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          color: 'white',
        }}
      >
        <div
          style={{
            marginTop: '-60px',
            fontFamily: 'Bebas Neue, cursive',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              fontSize: '100px',
            }}
          >
            M&P Auto Services
          </p>
          <p
            style={{
              padding: '0 50px',
              maxWidth: '550px',
              margin: '0 auto',
              marginBottom: '50px',
              fontFamily: 'Kaushan',
              fontSize: '30px',
            }}
          >
            Your one-stop-shop for Tune-Ups, Oil Flushes, Air Filters and Much
            More!
          </p>
          <div>
            <Link
              to='schedule'
              smooth={true}
              duration={700}
              style={{
                cursor: 'pointer',
                backgroundColor: '#f2f2f2',
                color: 'black',
                fontSize: '25px',
                padding: '7px 12px 5px 12px',
                display: 'inline',
                margin: '0 35px 0 0',
                borderRadius: '2px',
                boxShadow: '0 0 10px 0 #b2b2b2',
                MozBoxShadow: '0 0 10px 0 #b2b2b2',
                WebkitBoxShadow: '0 0 10px 0 #b2b2b2',
              }}
            >
              Services
            </Link>
            <Link
              to='mapid'
              smooth={true}
              duration={700}
              offset={-47}
              style={{
                cursor: 'pointer',
                boxShadow: '0 0 10px 0 #b2b2b2',
                MozBoxShadow: '0 0 10px 0 #b2b2b2',
                WebkitBoxShadow: '0 0 10px 0 #b2b2b2',
                borderRadius: '2px',
                backgroundColor: '#f2f2f2',
                color: 'black',
                fontSize: '25px',
                padding: '7px 5px 5px 5px',
                display: 'inline',
                // margin: '0 50px 0 0',
              }}
            >
              Location
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div
      style='row'
      style={{
        background: 'linear-gradient(180deg, #949188 0%,#cfceca 100%)',
        width: '100%',
        height: '1px'
      }}
    /> */}
    <div className='schedule-bg-img' />
  </>
)

export default MainImage

/* <button>Directions</button>
<button>Services</button> */
