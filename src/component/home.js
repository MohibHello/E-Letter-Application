import React, { Component } from 'react';
import '../component/home.css'
import Cards from './Cards';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import home3 from './Assests/home.png'
import printer from './Assests/print.jpeg'



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      print : false
    }
  }

 

  printPage=()=>{
     window.print();
  }


  render() {
    return (
      <div>

        <div>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" style={{backgroundColor:'#343A40'}} >
   
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">

             <MDBDropdown >
              <MDBDropdownToggle caret color="#343A40" >
                <small style={{ color: 'white' ,marginTop: '12px'}}><p style={{display:'inline',marginTop:'5px'}}>E-Letter </p></small>
              </MDBDropdownToggle  >
              <MDBDropdownMenu className="dropdown-menu1" basic>

                <MDBDropdownItem > <li> <Link to="/hr"><div style={{display:'inline'}}>HR Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/InputOfferLetter" >Offer Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/InputTrainingLetter">Training Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputIncrementLetter">Increment Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputDesignationLetter">Designation Change Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputDepuationLetter">Deputation Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/inputConfirmation">Confirmation Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputRelivingLetter">Relieving Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem >  <li> <Link to="/InputExitLetter">Exit Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputcertificateLetter">Certification Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>
                <li>
                <Link class="nav-link" to="/cards"><img style={{width:35}} src={home3} /> <span class="sr-only">(current)</span></Link>
                </li>
                <li style={{  position: 'absolute',right: '10vw'}} >
                  { this.props.buttonShow? <img onClick={this.printPage} style={{width:38,cursor:'pointer',marginTop: '10px',borderRadius: '100px'}} src={printer}/>:null}
             
                </li>
                <li class="nav-item avatar dropdown">
                  <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="http://kartavyasadhana.in/assets/images/user.png" class="rounded-circle z-depth-0" alt="avatar image" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item waves-effect waves-light" href="#">Profile-Settings</a>
                    <Link class="dropdown-item waves-effect waves-light" to='/'>Logout</Link>

                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>



      </div>
    );
  }
}
