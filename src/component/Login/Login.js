import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

import '../Login/Login.css'
import SimpleNavBar from '../Navbar/SimpleNavBar';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    homepage = (event) => {
        event.preventDefault();

        if(this.state.email==="hr@testyantra.com" && this.state.password==="qwerty" ){
        
        console.log("data========", this.state)

       // this.props.clicked(this.state)
        this.props.history.push('/cards')
        } else{

            alert("invalid cridentials");
        }
    }

    render() {
        return (
            <div>
                <SimpleNavBar/>
                <div  className="Logincenter">
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container-container-fluid mt-5 pb-5">
                                <div style={{width:'400px'}} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important',background:'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Login</h3>
                                    </div>
                                    <div className="card-body ">
                                       <form onSubmit={this.homepage}>

                                    <MDBInput autocomplete="off" required label="Email" outline size="lg" type="email" id="email" name="email" onChange={(event) => {
                                                        this.setState({
                                                            email: event.target.value
                                                        })
                                                    }}/>
                                    <MDBInput  autocomplete="off" required label="Password" outline size="lg" type="password" id="password" name="password" onChange={(event) => {
                                                        this.setState({
                                                            password: event.target.value
                                                        })
                                                    }}/>
                                    <MDBBtn style={{float:'right'}} color="primary" type="submit">Login</MDBBtn>

                                    </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login