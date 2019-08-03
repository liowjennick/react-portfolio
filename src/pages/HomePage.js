import React from 'react'

import './Homepage.sass'

class HomePage extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div id="homepage">
                <div className="image-container">
                    <img src="http://caldesigngroup.com/wp-content/uploads/2016/02/responsive-animate-2017.gif" />
                </div>
                <div className="introduction">
                    <h1>Hello,</h1>
                    <p>I'm Nick, a Frontend Web Developer based in Malaysia. I have worked with established brands and early startups.</p> 
                </div>
                <div className="brand-list">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzV_LVdcg3V3R3Hse-ACWMrmy9kYsXZ_aLQGyvWyNHqvMaO__" />
                    <img src="https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk.jpg" />
                    <img src="https://compass-interactive.com/images/logo-compass.svg" />
                    <img src="http://kids.gocodemy.com/img/logo-gocode-kids.png" />
                </div>   
            </div>
        )
    }
}

export default HomePage