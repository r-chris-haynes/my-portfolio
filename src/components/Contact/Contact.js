import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <div>
           <section id="contact">
        <div className="row section-head">
          <p>Contact Info</p>
            <div className="widget widget_contact">
              <h4>Email and linkedin</h4>
              <p className="address">
                Chris Haynes<br />
                r.chris.haynes@gmail.com <br />
                <li><a href="https://www.linkedin.com/in/chris-haynes-28966647/"><i className="fa fa-linkedin" /></a></li>
              </p>
            </div>
          
        </div>
      </section> {/* Contact Section End*/}
      </div>
    );
  }
}