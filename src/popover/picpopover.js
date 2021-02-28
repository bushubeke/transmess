import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Carousel,Image,Modal} from  'react-bootstrap'
import './pop.css'



/*
  function Example() {
  
  const [lgShow, setLgShow] = useState(false);

*/
class PicPoper extends React.Component{
 
render(){
  return (
    <React.Fragment>
      
      
    
      <Modal size="lg"   centered   show={this.props.picshow}  onHide={this.props.setPicShow}     >
        
        <Modal.Body id='picpop'>
          <Container  fluid>
          <Carousel interval={null}>
              <Carousel.Item interval={null}>
        
                  <Image id='pic_v' src={this.props.src} className="d-block w-100"  height='500px'alt="First slide"  fluid />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                  <Image id='pic_v2' src='/static/media/ch2.9decca57.jpg' className="d-block w-100 "  alt="First slide" fluid  />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                  <Image id='pic_v3' src={this.props.src} className="d-block w-100"  alt="First slide"  fluid  />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                  <Image id='pic_v4' src='/static/media/ch2.9decca57.jpg' className="d-block w-100"  alt="First slide" fluid  />
              </Carousel.Item>
          </Carousel>
          </Container>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
  }
}

export default PicPoper;