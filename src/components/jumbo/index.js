// Module imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Asset imports
import 'assets/css/jumbo.css';
import me from 'assets/img/me_success.png';

// Start & Export Component
export default class Jumbo extends Component {
  render = () => (
    <div className="jumbotron jumbotron-fluid h-100 bg-white my-0" id="jumbo">
      <main className="container h-100">
        <section className="row h-100 align-items-center">
          <article className="col col-lg-5">
            <hgroup className="position-relative mb-5">
              <h1 className="display-4">Jedidiah Amaraegbu</h1>
              <h4 className="text-uppercase">FullStack Web Developer</h4>
            </hgroup>
            <p className="lead mb-4 font-weight-normal">
              I&lsquo;m currently a Community Learning Ambassador with Andela, unblocking one
              upcoming Mobile Web Specialist at a time.
            </p>
            <Link to="/contact-me" className="btn btn-success btn-lg mr-2 my-2">Contact me</Link>
            <Link to="/portfolio" className="btn btn-white btn-lg shadow-sm">
              portfolio
            </Link>
          </article>
          <article className="col my-head d-none d-lg-flex">
            <img src={me} alt="My face" className="img-fluid" />
          </article>
        </section>
      </main>
    </div>
  );
}
