import React from 'react'

import './About.sass'
import CafeIcon from '@material-ui/icons/LocalCafe'
import RunIcon from '@material-ui/icons/DirectionsRun'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfiedAlt'

import featuresData from '../data/features'
import skillsData from '../data/skills'

class AboutPage extends React.Component {
    constructor () {
        super()
        this.state = {
            skillsDataArray: skillsData
        }
    }

    async componentDidMount () {
        const initialArray = []
        const updatedArray = []
        this.state.skillsDataArray.map(skill => {
            initialArray.push({
                name: skill.name,
                percentage: 0
            })

            updatedArray.push({
                name: skill.name,
                percentage: skill.percentage
            })
        })

        this.setState({ skillsDataArray: initialArray })

        setTimeout(() => {
            this.setState({ skillsDataArray: updatedArray })
        }, 700)
    }

    getFeaturesList () {
        const featuresArray = []

        featuresData.map(feature => {
            const IconTag = feature.icon

            featuresArray.push(
                <div className="features-container">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <IconTag />
                        </div>

                        <div className="feature-description">
                            <h2>{ feature.title }</h2>
                            <p>{ feature.description }</p>
                        </div>
                    </div>
                </div>
            )
        })

        return featuresArray
    }

    getSkillList () {
        const skillsArray = []

        this.state.skillsDataArray.map(skill => {
            const initialPercentage = skill.percentage
            skillsArray.push(
                <div className="skill-container">
                    <div className="skill-item">
                        <div className="skill-bar-name-container">
                            <span>{ skill.name }</span>
                        </div>

                        <div className="skill-bar-progress-container">
                            <div className="skill-bar-progress" style={{ width: skill.percentage + '%' }}></div>
                        </div>

                        <div className="skill-score">
                            <span>{ initialPercentage }%</span>
                        </div>
                    </div>
                </div>
            )
        })

        return skillsArray
    }

    render () {
        return (
            <div id="aboutpage">
                <div className="features-list">
                    { this.getFeaturesList() }
                </div>

                <div className="row-container">
                    <div className="profile-container">
                        <div className="profile-content">
                            <div className="image-container">
                                <img src="https://scontent.fkul8-1.fna.fbcdn.net/v/t1.0-9/12734244_10201428304104829_7947658355828978213_n.jpg?_nc_cat=106&_nc_oc=AQkKgQU6uX3YaXZSo7ZOXVNtfAP4wVlffrq8_XeiKWph9cba1BqYPjyDiJ1s8sQ0zns&_nc_ht=scontent.fkul8-1.fna&oh=7ba483a171c91f7249af9cf0d75b681d&oe=5DD68FA1" />
                            </div>
                            <div className="description-container">
                                <h1>LIOW JEN NICK</h1>
                                <h2>Hotelier turned Web Developer</h2>
                                <p>Discovered my passion for programming during the middle of 2016 while finishing my Bachelor's of International Hospitality Management. Never looked back ever since.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-lists">
                        { this.getSkillList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage