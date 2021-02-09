import React, { Component } from 'react'
import './Index.scss'



import MockUpImage from '../../Assets/Images/image-mockups.png'

import OnlineBankingIcon from '../../Assets/Icons/icon-online.svg'
import SimpleBudgeting from '../../Assets/Icons/icon-budgeting.svg'
import FastOnboarding from '../../Assets/Icons/icon-onboarding.svg'
import API from '../../Assets/Icons/icon-api.svg'

import ArticleImage1 from '../../Assets/Images/image-currency.jpg'
import ArticleImage2 from '../../Assets/Images/image-restaurant.jpg'
import ArticleImage3 from '../../Assets/Images/image-plane.jpg'
import ArticleImage4 from '../../Assets/Images/image-confetti.jpg'


export default class Index extends Component {
    render() {
        return (
            <div className = "IndexContainer">
                <section className = "Section1">
                    <div className="Section1Right">
                        <img src = {MockUpImage} alt = "Multiple phone screens showing the easybank application."/>
                    </div>

                    <div className="Section1Left">
                        <h1> Next generation digital banking</h1>
                        <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                        <button className = "RequestInvite"> Request Invite </button>
                    </div>

                  
                </section>


                <section className = "Section2">
                    <h2> Why choose Easybank?</h2>
                    <p> We leverage Online Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                    </p>

                    <div className="cards">
                        <div className="card">
                            <img src = {OnlineBankingIcon} alt = "Online banking"/>
                            <h3> Online Banking</h3>
                            <p> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>

                        <div className="card">
                            <img src = {SimpleBudgeting} alt = "Simple budgeting"/>
                            <h3> Simple Budgeting</h3>
                            <p> See exactly where your money goes each month. Recieve notfications when you're close to hitting your limits.</p>
                        </div>

                        <div className="card">
                            <img src = {FastOnboarding} alt = "Fast onboarding"/>
                            <h3> Fast Onboarding</h3>
                            <p>   We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                        </div>

                        <div className="card">
                            <img src = {API} alt = "Open API"/>
                            <h3> Open API</h3>
                            <p> Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                        </div>
                    </div>
                </section>


                <section className = "Section3">
                    <h2> Latest Articles</h2>

                    <div className="NewsCards">
                        <div className="NewsCard">
                            <img src = {ArticleImage1} alt = "Currency"/>
                            <h5> By Claire Robinson </h5>
                            <h4>Receive money in any currency with no fees</h4> 
                            <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…</p>
                        </div>

                        <div className="NewsCard">
                            <img src = {ArticleImage2} alt = "Restaurant"/>
                            <h5>  By Wilson Hutton </h5>
                            <h4>Treat yourself without worrying about money</h4> 
                            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                        </div>

                        <div className="NewsCard">
                            <img src = {ArticleImage3} alt = "Plane"/>
                            <h5>  By Wilson Hutton</h5>
                            <h4>Take your Easybank card wherever you go</h4> 
                            <p>  We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>

                        <div className="NewsCard">
                            <img src = {ArticleImage4} alt = "Confetti"/>
                            <h5> By Claire Robinson </h5>
                            <h4> Our invite-only Beta accounts are now live!</h4> 
                            <p> After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
