import React from 'react'
import './Portfolio.sass'
import portfolioData from '../../data/portfolios'

class PortfolioPage extends React.Component {
    getImageUrl (url) {
        return require('../../assets/images/portfolio/' + url)
    }

    getPortfolioItems () {
        const portfolioArray = []
        portfolioData.map((portfolio, index) => {
            portfolioArray.push(
                <div className="portfolio-item" key={index}>
                    <div className="portfolio-item-content">
                        <div className="portfolio-image-container">
                            <img src={ require('../../assets/images/portfolio/' + portfolio.imageLink) }/>
                        </div>
                        <div className="portfolio-title-container">
                            <h2>{ portfolio.title }</h2>
                            <p className="subtitle">{ portfolio.subtitle } <span style={{ display: portfolio.tech ? 'initial' : 'none' }}>&bull;</span> { portfolio.tech }</p>
                        </div>
                        <div className="portfolio-item-description">
                            <p>{ portfolio.description }</p>


                            {
                                (portfolio.iosLink || portfolio.androidLink) &&
                                    <div className="portfolio-app-icon-container">
                                        <a href={ portfolio.iosLink } target="_blank" className="ios-link">
                                            <img src={ require('../../assets/images/app/app-store.png')} />
                                        </a>

                                        <a href={ portfolio.androidLink } target="_blank" className="android-link">
                                            <img src={ require('../../assets/images/app/google-play.png') } />
                                        </a>
                                    </div>
                            }
                        </div>

                        <a href={ portfolio.siteLink } target="_blank">
                            <div className="portfolio-cta">
                                <span>VIEW SITE</span>
                            </div>
                        </a>
                    </div>
                </div>
            )
        })

        return portfolioArray
    }

    render () {
        return (
            <div id="portfolio-item-list">
                <h1>PROJECTS</h1>
                <div className="portfolio-item-list">
                    { this.getPortfolioItems() }
                </div>
            </div>
        )
    }
}

export default PortfolioPage
