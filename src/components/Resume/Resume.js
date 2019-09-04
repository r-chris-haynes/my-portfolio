import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div>
        {/* Resume Section
   ================================================== */}
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p className="info">
                    The Coding Bootcamp at UNC-Chapel Hill <span>•</span>{" "}
                    <em className="date">2019</em>
                  </p>
                  <p>
                    Certificate from The University of North Carolina at
                    Chapel Hill Coding Bootcamp. A 24-week intensive program
                    focused on gaining technical programming skills for modern web
                    development
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          {/* <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Awesome Design Studio</h3>
                  <p className="info">
                    Senior UX Designer <span>•</span>{" "}
                    <em className="date">March 2010 - Present</em>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              {/* <div className="row item">
                <div className="twelve columns">
                  <h3>Super Cool Studio</h3>
                  <p className="info">
                    UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em>
                  </p>
                  <p> */}
                    {/* This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat
                  </p> */}
                {/* </div>
              </div>{" "} */}
              {/* item end */}
            {/* </div>{" "} */}
            {/* main-col end */}
          {/* </div>{" "} */} 
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
              Node.Js, JavaScript, jQuery, GIT, Github, MySQL, Firebase, HTML, CSS, Bootstrap, Materialize, Moment.js,  Media Queries, APIs, JSON, AJAX, Mongo, React.js

              </p>
              
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>{" "}
        {/* Resume Section End*/}
      </div>
    );
  }
}
