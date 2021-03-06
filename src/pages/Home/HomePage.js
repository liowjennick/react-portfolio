import React from 'react'

import './Homepage.sass'

class HomePage extends React.Component {
    render () {
        return (
            <div id="homepage">
                <div className="image-container">
                    <img src={require('../../assets/images/home/homepage.png')} />
                </div>
                <div className="introduction">
                    <h1>Hello,</h1>
                    <p>I'm Nick, a Frontend Web Developer based in Malaysia. I have worked with established brands and early startups.</p>
                </div>
                <div className="brand-list">
                    <img src={require('../../assets/images/brands/ouch-logo.png')} />
                    <img src={require('../../assets/images/brands/kfc.jpg')} />
                    <img src={require('../../assets/images/brands/ikea.jpg')} />
                    <img src={require('../../assets/images/brands/compass.jpg')} />
                    <img src={require('../../assets/images/brands/gocode.jpg')} />
                </div>
            </div>
        )
    }
}

export default HomePage
