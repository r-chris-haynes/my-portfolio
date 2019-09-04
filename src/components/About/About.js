import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/chrisLinkdin.jpeg"
                alt=""
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                Full Stack Web Developer with an extensive background in
                hospitality. An ideal teammate with excellent communication
                skills, and a can do attitude. Earned a certificate from
                the Coding Bootcamp at UNC-Chapel Hill and gained valuable
                experience in HTML, CSS and JavaScript. Hungry to never stop
                learning and growing as a programmer. Utilizing a combination of
                technical and people skills to enable effective collaboration in
                developing optimal creative solutions.
              </p>
            
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>{" "}
        {/* About Section End*/}
      </div>
    );
  }
}
