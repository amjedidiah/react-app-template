import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  render = () => (
    <main>
      <section className="bg-light py-5 text-center">
        <p>Contact me</p>
        <h2 className="my-2">
          <a href="mailto:imunacode@gmail.com">imunacode@gmail.com</a>
        </h2>
      </section>

      <section className="text-center py-5">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-8x" />
        <h4 className="lead my-3">Lagos</h4>
        <h6>
          Akobi Crescent, Idi Oro, Lagos,
          <br /> Nigeria
        </h6>
        <h6 className="d-none d-md-block">+234&nbsp;816&nbsp;597&nbsp;2229</h6>
        <h6>CET – GMT +01:00</h6>
        <h6 className="d-md-none">
          <a href="tel:+2348165972229">+234&nbsp;(816)&nbsp;597-2229</a>
        </h6>
      </section>

      <footer className="text-center py-5">
        <a className="fa-2x mx-3" href="https://www.linkedin.com/in/am-jedidiah/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="fa-2x mx-3" href="https://github.com/amjedidiah">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer>
    </main>
  );
}
