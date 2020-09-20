// Non-component libraries
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Images
import bishop from 'assets/images/bishop.svg';
import royalSaint from 'assets/images/royal-saint.svg';
import prayingSaint from 'assets/images/praying-saint.svg';

const Welcome = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  const textColumnClass = (screenMaxed) => {
    if (screenMaxed) {
      return 9;
    }
    return 'auto';
  };

  return (
    <Container fluid className="welcome">
      <Container className="welcome-jumbotron-container">
        <Jumbotron fluid className="welcome-jumbotron">
          <Container>
            <Row className="welcome-row flex-nowrap">
              <Col xs={textColumnClass(isTablet)}>
                <h1>
                  Introduction
                </h1>
                <p className="welcome-paragraph text-left">
                  The
                  {' '}
                  <i>Digital South English Legendary</i>
                  {' '}
                  (
                  <i>Digital SEL</i>
                  ) is a web-based,
                  interactive application that will allow readers to view multiple versions of
                  individual texts from the
                  {' '}
                  <i>South English Legendary</i>
                  {' '}
                  at the same time.
                </p>
              </Col>
              { isTablet
              && (
              <Col xs={2}>
                <img
                  alt="A woodcutting print of a royal saint"
                  src={royalSaint}
                  className="intro-royal-st-image"
                />
              </Col>
              )}
            </Row>
            <hr />
            <Row className="flex-nowrap">
              { isTablet
              && (
              <Col xs={2}>
                <img
                  alt="A woodcutting print of a praying saint"
                  src={prayingSaint}
                  className="intro-praying-st-image"
                />
              </Col>
              )}
              <Col xs={textColumnClass(isTablet)} className="sel-welcome-text">
                <h4>
                  The
                  {' '}
                  <i>South English Legendary</i>
                  {' '}
                  and Textual Variation
                </h4>
                <p>
                  The
                  {' '}
                  <a
                    href="http://en.wikipedia.org/wiki/South_English_Legendary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>South English Legendary</i>
                  </a>
                  {' '}
                  is a large collection of Middle English verse saints&rsquo; lives and
                  related religious literature, originally composed in the late thirteenth century.
                  The legendary was later revised and augmented, and its various forms enjoyed
                  widespread readership, being copied until the fifteenth century. Today, the
                  {' '}
                  <i>SEL</i>
                  {' '}
                  survives in part or whole in more than 60 manuscripts. The
                  legendary&rsquo;s popularity and the readiness of later poets and scribes to
                  revise and supplement the collection mean that there is a large degree of textual
                  variation between individual witnesses of the
                  {' '}
                  <i>SEL</i>
                  . Despite a great deal of work by earlier scholars, the
                  {' '}
                  <i>SEL </i>
                  {' '}
                  has never been edited in whole and the editions
                  that have appeared are typical of printed editions in that they present a base
                  text with variations noted in a critical apparatus.
                </p>
              </Col>
            </Row>
            <hr />
            <Row className="flex-nowrap">
              <Col xs={textColumnClass(isDesktop)}>
                <h4>
                  The
                  {' '}
                  <i>Digital SEL</i>
                  {' '}
                  and Developing a New Critical Edition
                </h4>
                <p>
                  {' '}
                  The intent of the
                  {' '}
                  <i>Digital SEL</i>
                  {' '}
                  is to use a web-based application to create a kind of digital variorum edition of
                  the text, which will allow users to view multiple versions of different
                  {' '}
                  <i>SEL</i>
                  {' '}
                  texts at the same time. The ultimate goal of the project is to provide a model of
                  digital publishing that destabilizes the kind of editorial practice that imagines
                  a &ldquo;base&rdquo; or &ldquo;best&rdquo; version of a text with variations noted
                  in an apparatus.
                </p>
                <p>
                  This version of the site represents a complete re-write / rework of the first
                  conception of the project, which is still available at the
                  {' '}
                  <a href="http://digitalsel.org" target="_blank" rel="noopener noreferrer">
                    digitalsel.org
                  </a>
                  .
                  The original version of the site was my first programming project, and this
                  version is much more in line with modern web software development.
                </p>
                <p>
                  This iteration of the project is in active development, though I have neglected
                  blogging about my progress recently. Additional
                  {' '}
                  <a href="http://blog.digitalsel.org" target="_blank" rel="noopener noreferrer">
                    blog posts
                  </a>
                  {' '}
                  are forthcoming, and all of my progress is available at
                  {' '}
                  <a
                    href="https://github.com/webolton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p>
                <p>
                  If you are interested in contributing to the project in any way, feel free to
                  reach out to me on
                  {' '}
                  <a
                    href="https://twitter.com/william_ellet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </p>
              </Col>
              { isDesktop
              && (
              <Col xs={2}>
                <img
                  alt="A woodcutting print of a seated bishop saint"
                  src={bishop}
                  className="intro-bishop-image"
                />
              </Col>
              )}
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </Container>
  );
};
export default Welcome;
