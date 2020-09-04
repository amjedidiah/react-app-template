// Module imports
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Asset imports
import 'assets/css/header.css';
import headerLinks from 'assets/data/headerLinks.json';
import socialLinks from 'assets/data/socialLinks';
import logo from 'assets/img/logo_dark.png';

// Start & Export Components
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navIsHidden: true,
      toggleIsAnimated: false
    };
  }

  renderHeaderLinks = () => headerLinks.map((item, i) => (
      <li
        key={`headerLink${i}`}
        className={`animate__animated nav-item ${i === 0 ? 'active' : ''}`}
      onClick={() => this.toggleHeaderMenu()}
      >
        {item.link ? (
          <a href={item.link} className="nav-link" target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        ) : (
          <Link className="nav-link" to={`/${i === 0 ? '' : item.name.replace(' ', '-')}`}>
            {item.name} {i === 0 ? <span className="sr-only">(current)</span> : ''}
          </Link>
        )}
      </li>
  ));

  renderSocialLinks = () => socialLinks.map(({ icon, href }, i) => (
      <li key={`social-links-${i}`} className="mr-5">
        <a href={href}>
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
  ));

  toggleHeaderMenu = () => this.setState({
    navIsHidden: !this.state.navIsHidden,
    toggleIsAnimated: !this.state.toggleIsAnimated
  });

  renderToggleButton = () => (
    <button
      className="navbar-toggler d-flex align-items-center"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => this.toggleHeaderMenu()}
    >
      <h4 className="mr-2 my-0">MENU</h4>
      <div id="toggleDiv" className={this.state.toggleIsAnimated ? 'change' : ''}>
        <div className="bar1 bg-dark"></div>
        <div className="bar2 bg-dark"></div>
        <div className="bar3 bg-dark"></div>
      </div>
    </button>
  );

  render = () => (
    <header className="fixed-top" id="header">
      <Container
        className={`h-100 px-0 nav position-fixed ${
          this.state.navIsHidden ? 'nav-hide' : 'nav-show'
        }`}
        id="navbarToggleExternalContent"
        fluid
      >
        <Row className="align-items-center h-100 w-100 position-relative mx-0">
          <Col
            xs={3}
            sm={4}
            md={5}
            lg={6}
            className="h-100 nav-transparent position-absolute"
      onClick={() => this.toggleHeaderMenu()}
          ></Col>
          <nav className=" bg-white offset-3 offset-sm-4 offset-md-5 offset-lg-6 position-relative w-100 h-100 nav-main">
            <ul className="navbar-nav text-capitalize v-child px-4">{this.renderHeaderLinks()}</ul>

            <footer className="position-absolute w-100">
              <ul className="d-flex justify-content-start px-4">{this.renderSocialLinks()}</ul>
            </footer>
          </nav>
        </Row>
      </Container>
      <div className="navbar navbar-white bg-white">
        <Container className="px-0">
          <Link className="navbar-brand px-0" to="/">
            <img src={logo} width="35" alt="Logo" loading="lazy" />
          </Link>
          {this.renderToggleButton()}
        </Container>
      </div>
    </header>
  );
}
