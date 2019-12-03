import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute:'Mr.',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            date: '',
            CIN: '',
            designation: '',
            gender : {
                gender1:'He',
                gender2:'him',
                gender3:'his'
            },

            // valiadation state variables
            showEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate:''
        }
    }
    
    componentDidMount() {

        var that = this;
        $(document).ready( ()=> {
            $('#generate').click( (e) =>{
                debugger
                console.log("inside CDM")
                debugger;
        
                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
        
        
              const nth = (d)=> {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
              }
                  
                let today = new Date();
                let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                this.setState({
                    date:  today
                })

                var d = new Date();
                 console.log("Date =",d.setMonth(d.getMonth() +7))
                
                console.log("dattetaetaetaet ",this.state)
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    this.setState({
                        ...this.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }

                 let CIN = (document.getElementById("CIN").value).trim();
                 let joiningDate = (document.getElementById("joiningDate").value).trim();
                 let designation = (document.getElementById("designation").value).trim();
                 let employeeId = (document.getElementById("employeeId").value).trim();
                 let employeeName = (document.getElementById("employeeName").value).trim();
                 let selectedDate =new Date(joiningDate)
                 let now = new Date()
                 
                 console.log("Inside Validation", CIN, joiningDate, employeeName,designation,employeeId);
 
                 if (CIN === "") {
                     this.setState({ showCIN: true })
                 }
                 if (joiningDate === "") {
                     this.setState({ showJoiningDate: true })
                 }
                 if (designation === "") {
                     this.setState({ showDesignation: true })
                 }
                 if (employeeId === "") {
                     this.setState({ showEmployeeId: true })
                 }
                 if (employeeName === "") {
                     this.setState({ showEmployeeName: true })
                 }

                 if(selectedDate<now){
                    that.setState({
                       validDate:"true"
                    }) 

                   return false;
              } 

                   
                 if (CIN != "" && joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
                    
                     console.log("True return")
                     return true;
                 }
                 else {
                     return false;
                 }
            });
        });
    }

    
    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideInvaliddate=()=>{
        this.setState({
            validDate: false
        })

    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
       this.props.history.push('/hrLetter')

    }

    render() {
        return (
            <div>
                <Home buttonShow={false}/>
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">HR Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">

                                            <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off"  name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div className="col-9">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideEmployeeName}  label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-3 p-0" >
                                               
                                               </div>
                                               <div className="col-9 p-0" style={{width:0}}>
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                               </div>
                                           </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideEmployeeId}  label="Employee Id" name="employeeId" id="employeeId" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideDesignation}  label="Designation" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                    </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out ID field * </div> : null}
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill Designation field * </div> : null}
                                               </div>
                                           </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off"  type="date" onKeyPress={()=>{this.hideJoiningDate();this.hideInvaliddate()}}  onClick={()=>{this.hideJoiningDate();this.hideInvaliddate()}} label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        });this.hideJoiningDate();this.hideInvaliddate();
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                   
                                                   <MDBInput autocomplete="off"   type="text" onKeyPress={this.hideCIN}  label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                       this.setState({
                                                           CIN: event.target.value
                                                       })
                                                   }} />
                                           </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                                   <div className="col-6 p-0">
                                                   {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}
                                                   {this.state.validDate ? <div id="errordiv" className="container-fluid">Joining Date must be greater or equal to today's date* </div> : null}
                                                   </div>
                                                   <div className="col-6 p-0">
                                                   {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out CIN field * </div> : null}
                                                   </div>
                                            </div>
                                           
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn type="submit" id="generate" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
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

export default withRouter(InputHRLetter)