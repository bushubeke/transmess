import React from 'react';
import './mainsrc.css'
//import { PauseFill,PlayFill,ArrowUpCircleFill,ArrowDownCircleFill,ArrowCounterclockwise} from 'react-bootstrap-icons'
//import {Button,Container, Card,Row,Col} from  'react-bootstrap';
import { Provider, connect } from 'react-redux'
//import { createStore, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
//import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
//import {Button,Alert,Container,Breadcrumb,InputGroup,Card,Form,FormControl,Row,Col,Image } from  'react-bootstrap';
import {Container,Row } from  'react-bootstrap'
//import {Carousel,Overlay} from 'react-bootstrap'
//import {Carousel} from 'react-bootstrap'
//import './picover.css'
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import rtravel from './marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import PicSection from './picsec'
import TitleSection from './titsec';
import NavSection from './navsec'
//import MobNavBar from './mobilesec/mobnav'
//import MobNavSection from './mobilesec/bodsec'
import {BrowserView,MobileView} from 'react-device-detect'
import axios from 'axios'

//#####################################################################################
    //css styling json objects definded here but not used for this app as they are not integrated with redux state, too large
//#####################################################################################

// css styling data below here



//css styling data above here

//#####################################################################################
      //constant overlays with carrousel
//#####################################################################################

//const picpop=(
//);

//#####################################################################################
      //
//#####################################################################################
//#####################################################################################
      //redux Actions defined here,
//#####################################################################################



//
// Action defined here which will be updated as the app grows
const SCHANGE='SCHANGE';
const autoSizeAdj =()=>{
  return {
    type:SCHANGE
  }
};
const CONTROLSECTIONSTATE="SETCONTROLSECSTATE"
const setControlState =(controlState)=>{
  return {
    type:CONTROLSECTIONSTATE,
    conState:controlState
  }
};
const FIRSTGETREQUEST='FIRSTGETREQUEST'
const firstGetRequest=()=>{
  return {
    type:FIRSTGETREQUEST,
    
  }
}






// Action defined ended here

//#####################################################################################
    //redux default state defined here
//#####################################################################################


// state to be updated which will grow as the ap grows
const defaultState={
  //screenSize:xlScreen,
  //mobileSize:mdScreen,
  normal:65,
  ControlSectionState:'Messages',
  current_user:'',
  user_name:'',
  user_id:'',
  email:'',
}






//states defined ended here
//#####################################################################################
    //reducer function defined here below along with functions
//#####################################################################################
//Action  or reducer functions here functionalites which will grow as the app grows below
const flowControl=(state=defaultState,action)=>{
  //var edited_State=Object.assign({},state);
  switch(action.type){
    case SCHANGE:
      
      //let totalHeight=window.innerHeight;
      //let first_row_height=document.querySelector('#fr').offsetHeight;
      //let second_row_height=totalHeight-first_row_height+'px';
      //state.sr_height=second_row_height;
      //console.log(state)
  
      return state;
    case  CONTROLSECTIONSTATE:
        //console.log(action.conState)
        state.ControlSectionState=action.conState
        //console.log(state.ControlSectionState)
       return state; 
    case FIRSTGETREQUEST:
          //console.log('first get request is working')
          //location.href = "https://www.javascripttutorial.net/";
                 return state;
    default:
        return state;
  }
}







//action functions with switich cases ended here


//#####################################################################################
    //store created here with thunk middleware
//#####################################################################################

//store is created here
//note here flowControl is to be replaced by the name of the funciton created as actions
const chattmain=createStore(flowControl,applyMiddleware(thunk))
//#####################################################################################
    //this is provion for any functions we want to subscribe to the redux store, app may not have one
//#####################################################################################
// subscribed functions written here



//subscribed functions ended here

//#####################################################################################
    // this are functions that are used to map actions and and state props to react component
//#####################################################################################
//mapping states and actions to props in here

const mapStateToProps = (state) => {
  return {dstate: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    sizeAdj: () => {dispatch(autoSizeAdj())},
    setControlState: (passedState)=>{dispatch(setControlState(passedState))},
    firstGetRequest:()=>{dispatch(firstGetRequest())}
    


  }
};

//maping states and props ended here

//#####################################################################################
      //React component defined here
//#####################################################################################

class ChattingMain extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {
      srh:0,
      firstr_style:{},
      secondr_style:{},
    


    }
    //binding done here for function
    //this.handleResize=this.handleResize.bind(this)
    this.setFandSrStyle=this.setFandSrStyle.bind(this);
    this.firstCompRequest=this.firstCompRequest.bind(this)
        //this.set_window_height=this.set_window_height.bind(this);
        //this.clockStop=this.clockStop.bind(this)
        //this.resetClo=this.resetClo.bind(this)
      
  }
  //this is where java script function are made
  //also component will mount will be placed here
  // this is where the bind this functions are used
   //###############################################################################################
   componentDidMount() {
    this.setFandSrStyle()
    window.addEventListener('resize',this.setFandSrStyle)
    //this.props.firstGetRequest();
    this.firstCompRequest()
    
  }
  //###############################################################################################
  componentWillUnmount() {
    window.removeEventListener('resize',this.setFandSrStyle)
    //window.removeEventListener('resize',this.setMsgBoxStyle)
    
  }
  //###############################################################################################
  setFandSrStyle(){
                      //#################################################3
                      let totalHeight=window.innerHeight;
                      
                      var first_row_height=0.15*totalHeight;
                      //let sr_height=0.84*totalHeight-28+'px';
                      var fr_height=first_row_height+'px';
                      
                  
                      //console.log(first_row_height);
                    
                    
                      //let second_row_height=totalHeight-first_row_height+'px';
                          if (parseInt(first_row_height) <= 210){
                          
                          this.setState({firstr_style:{height:'210px'}})
                  
                        }else{
                        
                        this.setState({firstr_style:{height:fr_height}})
                        }
     }
//########################################################################################3
shouldComponentUpdate(){
  return true;
}
//########################################################################################3
async firstCompRequest(){
 await axios({
    method: 'post',
    url: 'http://192.168.10.3:5000/transtext',
    //responseType: 'stream'
    headers: {
      'Content-Type': 'text/plain'
    },
    data:{email:'beimdegefu@gmail.com',password:'transport'},
  })
    .then(function (response) {
      //console.log(response.status)
       var data=response.data;  
      if (response){
           console.log(data)
        }
    })
    .catch(function(err){
      //window.location.replace("http://192.168.10.3:5000/login");
      console.log(err)
    });


}


//########################################################################################3
/*
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
 }
componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);

 }*/
render(){

  //this is where javascript exection are written
//#####################################################################################
    //generall js variables and codes here
//#####################################################################################

  


//#####################################################################################

//#####################################################################################
  return (

       <Container id='all-app'fluid >
          <BrowserView>
             <Container>  
                          
                  <Row id='fr'   >
                    
                      <PicSection   travel={rtravel} />
                      <TitleSection   normal={this.props.dstate.normal} />
                      
                  </Row>
                  <NavSection  id='sr'    />
                      
                 
                    
             </Container>
          </BrowserView>
         

          <MobileView>

             
            <h1>Mobile view will soon be developed</h1>
            
                            
                      
            
            
          </MobileView>



    </Container>
   

 
  )
}
}

//#####################################################################################
      //connecting my react app to dispatch and state props
//#####################################################################################
//creating wraper here
const Wraper = connect(mapStateToProps, mapDispatchToProps)(ChattingMain);

//#####################################################################################
    // react component used as a wraper to connect my app with redux store 
//#####################################################################################

class App extends React.Component {


  render() {
    return (
      <Provider store={chattmain}>
        <Wraper />
      </Provider>
    );
  }
}

//#####################################################################################
//#####################################################################################
export default App;