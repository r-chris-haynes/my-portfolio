import React, { Component } from "react";

export default class Portfolio extends Component {
    render() {
      return (
        <div>
               {/* Portfolio Section
   ================================================== */}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img className="port-image" alt="castle" src="images/portfolio/adventure.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Adventure Book</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img className="port-image" alt="garbage-pail-kids" src="images/portfolio/clicky.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Clicky Game</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img className="port-image" alt="burger" src="images/portfolio/burger2.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Eat Da Burger</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img className="port-image" alt="train" src="images/portfolio/train.jpeg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Train Scheduler</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img className="port-image" alt="simpsons" src="images/portfolio/simpsons.jpeg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Simpson's Hangman</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img className="port-image" alt="dice" src="images/portfolio/lights.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Dice Game</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Adventure Book</h4>
              <p>Choose your own adventure app. Created with Mongo, Express, React and Node</p>
            </div>
            <div className="link-box">
              <a href="http://adventure-book-v2.herokuapp.com/" target="blank">See the App</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/AdventureBookv2" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Clicky Game</h4>
              <p>Memory game created with React.</p>
            </div>
            <div className="link-box">
              <a href="https://r-chris-haynes.github.io/clickyGame/" target="blank">See the app</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/clickyGame" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Eat the Burger</h4>
              <p>Eat the Burger is a restaurant app that lets users input the names of burgers they'd like to eat. Made with  MySQL, Node, Express, Handlebars</p>
            </div>
            <div className="link-box">
              <a href="https://chrisburger.herokuapp.com/" target="blank">See the app</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/Burger" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Train Scheduler</h4>
              <p>Train scheduler is an application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates this information with Moment.js. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.</p>
            </div>
            <div className="link-box">
              <a href="https://r-chris-haynes.github.io/Train-Scheduler/" target="blank">See the app</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/Train-Scheduler" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Simpson's Hangman</h4>
              <p>Simpson's Hangman is a word guess game, where users try to choose the name of a randomly selected Simpson's character.  It was made with vanilla javaScript, HTML and CSS.</p>
            </div>
            <div className="link-box">
              <a href="https://r-chris-haynes.github.io/Word-Guess-Game/" target="blank">See the app</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/Word-Guess-Game" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>Dice Game</h4>
              <p>This is a two player dice game, that is played in rounds. First player to 100 wins.  It was made with vanilla javaScript, HTML and CSS.</p>
            </div>
            <div className="link-box">
              <a href="https://r-chris-haynes.github.io/Dice-Game/" target="blank">See the app</a>
              <br></br>
              <a href="https://github.com/r-chris-haynes/Dice-Game" target="blank">View the Code</a>
              <br></br>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          
          
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}
        </div>
      );
    }
  }