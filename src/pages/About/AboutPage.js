import React from 'react'

import './About.sass'
import featuresData from '../../data/features'
import skillsData from '../../data/skills'

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

        featuresData.map((feature, index) => {
            featuresArray.push(
                <div className="features-container" key={index}>
                    <div className="feature-item">
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

        this.state.skillsDataArray.map((skill, index) => {
            const initialPercentage = skill.percentage
            skillsArray.push(
                <div className="skill-container" key={index}>
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
                <div className="mobile-flex-column-reverse">
                    <div className="features-list">
                        { this.getFeaturesList() }
                    </div>

                    <div className="row-container">
                        <div className="profile-container">
                            <div className="profile-content">
                                <div className="image-container">
                                    <img src={ require("../../assets/images/about/profile_pic.jpg")} />
                                </div>
                                <div className="description-container">
                                    <h1>LIOW JEN NICK</h1>
                                    <h2>Frontend Web Developer</h2>
                                    <p>Hospitality graduate turned programmer with a passion for developing Website.</p>
                                </div>
                            </div>
                        </div>

                        <div className="skill-lists">
                            { this.getSkillList() }
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default AboutPage