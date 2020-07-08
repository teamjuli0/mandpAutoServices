import React from 'react'

const FooterAboutUs = (props) => (
  <>
    <div className={props.mobileDevice} id='aboutus-main-div'>
      <div>
        <div id='ourpromise-div'>
          <h1 id='ourpromise-header'>Our Promise</h1>
        </div>
        <div id='ourpromise-p-els'>
          <p>Whether it’s an oil change,</p>
          <p>tire rotations, or regular maintenance, we’re just</p>
          <p>around the corner to</p>
          <p>help! We’ll take care of your</p>
          <p>tune-ups so you can take care </p>
          <p>of business. Stop by today!</p>
        </div>
      </div>
    </div>
  </>
)

export default FooterAboutUs
