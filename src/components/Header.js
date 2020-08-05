import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <img id="logo" src ={require("../assets/global/close-button.png")} alt="logo" />
                <div id="navLeft">
                    <ul id="list">
                        <li className="navTxtBtn">ISSUES</li> 
                        <li className="navTxtBtn">TOPICS </li>
                        <li className="navTxtBtn" >BLOG </li>
                        <li className="navTxtBtn" >NEWSLETTER </li>
                        <img className="socialMedia" src={require("../assets/global/nautilus-logo-sprite@2x.png")} alt="twitter Icon" />
                        <img className="socialMedia" src={require("../assets/global/curtain-down.png")} alt="facebook Icon" />
                        <li className="navTxtBtn">LOGIN</li>
                    </ul>
                    <button className="navTxtBtn" id="subscribeButton" type="button" onClick=" ">SUBSCRIBE</button>   
                </div>
            </div>
        )


    }
}
export default Header;