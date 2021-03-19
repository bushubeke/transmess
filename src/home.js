import React from 'react';
import './mainsrc.css'
import {Container,Row,Card,Nav,Navbar,NavDropdown,Badge } from  'react-bootstrap'
//import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import clock from './fccclock.jpg'
import mark from './fccmark.jpg'
import calc from './fcccalc.jpg'
import Figure from 'react-bootstrap/Figure'
//import FigureImage from 'react-bootstrap/FigureImage'

class HomePage extends React.Component{
    


    render(){
        return(
            <React.Fragment>
                 <Container  fluid className='clock-con'>
                  <Row >
                    <Container fluid>
                    <Card>
                         
                          <Card.Body>
                          <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">SPA</Navbar.Brand>
                            <Nav className="mr-auto">
                              <Nav.Link href="/home">Home</Nav.Link>
                              <Nav.Link href="/transtext"><Badge variant="light">T</Badge>ranstext</Nav.Link>
                              
                              <NavDropdown title="FCC" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/clock">FCC clock</NavDropdown.Item>
                                <NavDropdown.Item href="/calc">FCC Calculator</NavDropdown.Item>
                                <NavDropdown.Item href="/markdown">FCC MarkDown</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                            </Navbar>
                          </Card.Body>

                    </Card>
                    </Container>
                    </Row>
                
                       <Container>
                      <Accordion defaultActiveKey="0">
                        
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                           FCC Markdown Preview
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                               <Container>
                                 <Figure>
                                <Figure.Image
                                    width={900}
                                    height={180}
                                    src={mark}
                                    
                                />
                                <Figure.Caption>
                                   <a href="/markdown"> This is according to Free Code Camp Specification</a>
                                </Figure.Caption>
                                </Figure>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            FCC Pomodoro Clock
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <Container>
                                 <Figure>
                                <Figure.Image
                                    width={900}
                                    height={180}
                                    src={clock}
                                    
                                />
                                <Figure.Caption>
                                   <a href="/clock"> This is according to Free Code Camp Specification</a>
                                </Figure.Caption>
                                </Figure>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            FCC Calculator
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <Container>
                                 <Figure>
                                <Figure.Image
                                    width='100%'
                                   
                                    src={calc}
                                    
                                />
                                <Figure.Caption>
                                   <a href="/calc"> This is according to Free Code Camp Specification</a>
                                </Figure.Caption>
                                </Figure>
                                </Container>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Container>
                
        </Container>
            </React.Fragment>
        )
    }



}

export default HomePage;