import React, { Component } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import '../component/dropdown.css'
export default class Dropdown extends Component {
    render() {
        return (
            <div>
                 
                <div className="container">
                    <div className="row">
                        <div className="dropdown">
                            <button  className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                E-Letter
                          </button>
                            <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item"  href="#">On Board</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><a tabIndex={-1} href="#">Internship Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Offer Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Confirmation Letter</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item" tabIndex={-1} href="#">Carrier</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><a tabIndex={-1} href="#">Certificate Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Deputation Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Designation Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Increment Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Training Letter</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item" tabIndex={-1} href="#">Relieve</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><a tabIndex={-1} href="#">Relieving Letter</a></li>
                                        <li className="dropdown-item"><a href="#">Exit</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

</div>
              




  
    
        )
    }
}
