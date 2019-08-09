import React from 'react'

import './Contact.sass'

import PhoneIcon from '@material-ui/icons/PhoneIphone'
import EmailIcon from '@material-ui/icons/AlternateEmail'
import FaceIcon from '@material-ui/icons/Face'
import WebIcon from '@material-ui/icons/Web'

class ContactPage extends React.Component {
    render () {
        return (
            <div id="contactpage">
                <h1>Let's Chat,</h1>
                <p>Don't be shy, come and say hi.</p>
                <div className="contact-list">
                    <div className="contact-row">
                        <div className="contact-item">
                            <span className="icon"><EmailIcon /></span><a href="mailto:liowj.nick@gmail.com"><span>liowj.nick@gmail.com</span></a>
                        </div>
                        <div className="contact-item">
                            <span className="icon"><PhoneIcon /></span><span>+60123191601</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon"><FaceIcon /></span><a href="https://www.facebook.com/liow.nick"><span>https://www.facebook.com/liow.nick</span></a>
                        </div>
                        <div className="contact-item">
                            <span className="icon"><WebIcon /></span><span>www.liowjennick.com</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage