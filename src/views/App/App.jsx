import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">The Digital SEL</h1>
      <Button>Hi!!!</Button>
    </Jumbotron>
  </Container>
)

export default App
