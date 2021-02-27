import React from 'react';
import {Row,Container } from  'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainsrc.css'
//import rtravel from './rtravel.jpg'
//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.css'
import TextLeft from './messag/textleft'
import TextRight from './messag/textright'
import PicRight from './messag/picright'
import PicLeft from './messag/picleft'
import LinkLeft from './messag/linkleft'
import LinkRight from './messag/linkright'
class MessageSec extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        show:false,
        
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
  
          
        
    }
    render() {

      //##############################
              //on document load jquery codes
      //##############################
     
     $(window).on('load',function(){

      try {
        
     
      //############################################################
  //this section is to control msg view area size
      let tx_height=document.querySelector('#rc22').offsetHeight;
      let ms_height=parseInt(0.89*tx_height)+'px'
      $('#msgbox').css('height',ms_height);
      
      
      
      //this is setting max height for messeage box container
      let msgbox_height=document.querySelector('#msgbox').offsetHeight;
      let msgbox_con_max_height=msgbox_height-15+'px';
      $('#msgbox-con').css('max-height',msgbox_con_max_height);
      
    } catch (error) {
        
    }

    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).on('resize',function(){
        try {
          
        
     //############################################################
      //this section is to control msg view area size
        let tx_height=$('#rc22').offsetHeight;
        let ms_height=parseInt(0.89*tx_height)+'px'
      $('#msgbox').css('height',ms_height);
      //console.log(tx_height);
        
        //this is setting max height for messeage box container
      let msgbox_height=document.querySelector('#msgbox').offsetHeight;
      let msgbox_con_max_height=msgbox_height-15+'px';
      $('#msgbox-con').css('max-height',msgbox_con_max_height);
    } catch (error) {
          
    }
   
      })

      //################################

      //#####################################
      return (
        <React.Fragment>
          <Row id='msgbox' className="overflow-auto">
              <Container id='msgbox-con'>
                  {this.props.data.length ? this.props.data.map(function(data){
                    if(data.type==='tr'){
                    return(
                      <TextRight picid={data.picid} imageid={data.imageid} key={data.picid}/>
                    )
                  }
                  else if(data.type==='tl')
                  {
                    return(
                      <TextLeft picid={data.picid} imageid={data.imageid} key={data.picid}/>
                    )
                  }
                  else if(data.type==='pl')
                  {
                    return(
                      <PicLeft picid={data.picid} imageid={data.imageid} thumimageid={data.thumimageid} key={data.picid} />
                    )
                  }
                  else if(data.type==='pr')
                  {
                    return(
                      <PicRight picid={data.picid} imageid={data.imageid} thumimageid={data.thumimageid} key={data.picid} />
                    )
                  }
                  else if(data.type==='ll')
                  {
                    return(
                      <LinkLeft  plink={data.plink} picid={data.picid} imageid={data.imageid} key={data.picid}/>
                    )
                  }
                  else if(data.type==='lr')
                  {
                    return(
                      <LinkRight plink={data.plink} picid={data.picid} imageid={data.imageid} key={data.picid} />
                    )
                  }
                  return '';
                  })


                    : ''

                  }
               </Container>
          </Row> 
          
          
           
        </React.Fragment>
   
      );
    }
  }

 
  export default MessageSec;
  //export default RenderMessageSec;