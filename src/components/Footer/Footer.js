import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
          <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/chris-haynes-28966647/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/r-chris-haynes"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}

      </div>
    );
  }
}