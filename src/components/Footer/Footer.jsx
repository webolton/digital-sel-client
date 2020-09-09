import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer>
    <Container fluid className="h-100 font-small text-light">
      <Row className="align-items-center footer-text-wrapper">
        <Col md={3} className="text-center mx-auto">
          <a
            href="http://william-bolton.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            About the Principal Investigator and Engineer
          </a>
        </Col>
        <Col md={3} className="text-center mx-auto">
          <a
            href="http://blog.digitalsel.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            Blog
          </a>
        </Col>
        <Col md={3} className="text-center mx-auto">
          Made with
          {' '}
          <FontAwesomeIcon icon={faHeart} />
          {' '}
          in South Philadelphia.
          <br />
          {' '}
          &copy;
          {' '}
          {1900 + new Date().getYear()}
          , William E. Bolton.
          <br />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
