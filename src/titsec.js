import React from 'react';
import {Col ,Card, Button, ButtonGroup} from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
//import titback from './titback.svg'
import titback from './titback1.jpg'
import PgcPoper from './popover/pgcpopper'
class TitleSection extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        show:false,
        pgcshow:false,
        
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      this.setPgcShow=this.setPgcShow.bind(this)
          
        
    }
    setPgcShow(){
         
        this.setState({pgcshow:!this.state.pgcshow})
        //console.log(this.state.pgcshow)
   
    }
    render() {
    
      return (
        <React.Fragment>
           
            <Col id="rc12"   >
                <Card >
                <Card.Img variant="top" src={titback} height='70px' />
                    <Card.Body>
                      <Card.Title>Always Chatting</Card.Title>
                      <Card.Text as='div' >
                      <ButtonGroup >
                          <Button  variant="outline-dark" size='sm' onClick={()=>{this.setPgcShow()}}  >
                              Group Name
                            </Button>
                          <Button variant="outline-dark" size='sm' onClick={this.setPgcShow} style={this.state.conButStyle} >
                              Chat Members
                            </Button>
                            <Button variant="outline-dark" size='sm'  style={this.state.conButStyle} >
                              Chat Settings
                            </Button>
                            <Button variant="outline-dark" size='sm'  style={this.state.conButStyle} >
                              Chat Type
                            </Button>
                          <Button   variant="outline-dark"  size='sm' >
                            status
                            </Button>
                      </ButtonGroup>
                      </Card.Text>
                     
                    </Card.Body>
                </Card>
            </Col>
           
            <PgcPoper pgcshow={this.state.pgcshow} setPgcShow={this.setPgcShow}/>
        </React.Fragment>
   
      );
    }
  }
  export default TitleSection;