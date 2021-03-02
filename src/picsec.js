import React from 'react';
import {Col,Image,Button,ButtonGroup,Row} from  'react-bootstrap'
//import { } from  'react-bootstrap'
//import $ from 'jquery'
import './fmessec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PicPoper from './popover/picpopover';
//import rtravel from './rtravel.jpg'
import './mainsrc.css'
import axios from 'axios';
class PicSection extends React.Component {
    constructor(props){ 
      super(props);
      this.PicRef = React.createRef();
      this.state = {
        show:false,
        picshow:false,
        pic_mar:{marginLeft:''},
        buttg_mar:{width:''},
        upFile:''

        
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      
      this.setPicShow=this.setPicShow.bind(this);
      this.setPicMargins=this.setPicMargins.bind(this);
      this.uploadPic=this.uploadPic.bind(this)
      this.fileUploadOperation=this.fileUploadOperation.bind(this)
      this.fileSubmit=this.fileSubmit.bind(this) 
      this.getDatafromURL=this.getDatafromURL.bind(this)   
        
    }
    //#################################################################################
    setPicShow(){
     
        this.setState({picshow:!this.state.picshow})
      
    }
     //#################################################################################
    shouldComponentUpdate(){
      return true;
    }
     //#################################################################################
    componentDidMount() 
    {
      this.setPicMargins()
      document.addEventListener('resize',this.setPicMargins())
    }
     //#################################################################################
    componentWillUnmount() {
      document.removeEventListener('resize',this.setPicMargins())
    }
     //#################################################################################
     async uploadPic(){
      
      let fileUpload=document.querySelector('#pupload');
      fileUpload.click();
      
      //console.log(fileUpload)

     }
     //######################################################################################################
      setPicMargins(){

                //#####################################
                // not only the pic margins are calculated and set here but also add pic and delete button
                let pic_row_width=document.querySelector('#picrow').offsetWidth;
                //let button_wid=document.querySelector('#butgroup_id').offsetWidth;
                let pic_marg=((pic_row_width-145)*0.5 )+ 'px';
                //let buttg_marg=((pic_row_width-button_wid)*0.5 )+ 'px';
                this.setState({pic_mar:{marginLeft:pic_marg},buttg_mar:{width:pic_row_width} });

      }

     //#################################################################################
      fileUploadOperation(){

          //*****************************************************************************************
          // this lines below are taken from https://www.aspsnippets.com/Articles/Open-Fileupload-Upload-File-on-Button-Click-using-JavaScript-and-jQuery.aspx
        //let formData=new FormData();
        let submitevent=document.querySelector('#psubmit')
        submitevent.click();
        

      }
      //#####################################################################################33

      fileSubmit(event){
        event.preventDefault(); 




        //then axios is used to save the file below here by making post request with the data on 192.168.10.3:5000/uploads
        //******************** this is taken from axios */
        // source of axios useage syntax https://inthetechpit.com/2020/03/12/upload-file-in-reactjs-to-webapi/ and
        //https://www.npmjs.com/package/axios#axios-api
      
        var formData=document.querySelector('#profileUpload');

        var data= new FormData(formData); 
        console.log(data)
          axios({
          method: 'POST',
          //aseURL:this.state.baseURL,
          //url: this.state.picUploadURL,
          //url:'192.168.10.2:5000/upload',
          
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data:data,
        });



      }


     //#################################################################################
      getDatafromURL(){

        // for ther real app the api request url should be given by current user id which will be passed down as props
            //var 
        //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77
        // the below syntax is taken from axios npm
        axios({
          method: 'get',
          //baseURL:this.state.baseURL,
          url: '/transtext/username/',
          //responseType: 'stream'
        })
          .then(function (response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
          });
      }


     //#################################################################################

    render() {

  
     
   
      return (
        <React.Fragment>
            <Col id="rc11" xs={4} >
                 <Row id='picrow'>
                  
                <Image onClick={this.setPicShow} style={this.state.pic_mar} ref={this.PicRef} id='prc11'  src={this.props.travel} width="140"  height="140"  roundedCircle />
                
                </Row>
                <Row id='picbutrow'>
                                             
                    <ButtonGroup  style={this.state.buttg_mar} id='butgroup_id'>
                        <Button onClick={this.uploadPic} size='sm' variant="outline-dark"  >

                          <i className='fa fa-picture-o' name='addpic'/>
                          <form id="profileUpload" style={{display: 'none'}}>
                          <input  type="file" id='pupload' name='photo' onChange={this.fileUploadOperation} />
                          <input type='submit' id='psubmit' onClick={this.fileSubmit} />

                          </form>
                          </Button>
                          <Button  size='sm' variant="outline-dark"  >
                          <i className="fa fa-pencil" name="updateprof"  />
                          </Button>
                      
                        <Button   size='sm' variant="outline-dark"  >
                          <i className="fa fa-trash-o" name="delpic"  />
                         
                          </Button>
                        
                    </ButtonGroup>
                    
                    

                </Row>
                <PicPoper src='http://192.168.10.3:5000/_uploads/photos/photo5809804151541052397.jpg' picshow={this.state.picshow} setPicShow={this.setPicShow} />
            </Col>
           
           
            
              
        </React.Fragment>
   
      );
    }
  }
  export default PicSection;