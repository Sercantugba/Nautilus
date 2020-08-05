import React from "react";

class SecondPage extends React.Component{
    render(){
        return(
            <div id="secondPage" >
            <div id="space"></div>
                <div id="topSecondPage">
                    <div id="textTopSecPage">
                    <h2 id="spotL">THE NAUTILUS SPOTLIGHT</h2>
                    <p id="lPhys">WHY THE LAWS OF PHYSICS ARE INEVITABLE</p>
                    <button id="read" type="button" >READ NOW</button>
                </div>
                </div>
                <div id="secondBottom">
                  <div>
                    <p>ISSUE  079</p>
                    <h1>CATALYSTS</h1>
                    <p>"What generates a new theory in science?..."</p>
                        <div>
                            <p>CHAPTER ONE</p>
                            <p>Art</p>
                        </div>
                        <div>
                            <p>CHAPTER TWO</p>
                            <p>Mind</p>
                            <p>Coming December 12</p>
                        </div>
                        <div>
                            <p>CHAPTER THREE</p>
                            <p>Energy</p>
                            <p>Coming December 19</p>
                        </div>
                        <div>
                            <p>CHAPTER FOUR</p>
                            <p>Start</p>
                            <p>Coming December 26</p>
                        </div>
                  </div>  
                  <div>
                    <div>
                       <div>
                       <p>ARTIFICIAL INTELLIGENCE</p>
                       <p>Best Screenplay Goes to the Algorithms</p>
                       <p> By Arthur I. Miller</p> 
                       </div>
                    </div>
                    <div>
                       <div>
                        <p>MUSIC</p>
                        <p>How I Taught My Computer to Write Its Own Music</p>
                        <p>By John Supko</p>
                       </div>
                       <div>
                       <p>ART</p>
                        <p> Picasso's Got Nothing on Al Artists</p>
                        <p>By Kevin Berger</p>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default SecondPage;