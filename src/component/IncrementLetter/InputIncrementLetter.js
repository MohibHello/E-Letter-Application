import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
export class InputIncrementLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            annualCompensationYear: '',
            salaryIncremented: '',
            incrementInEffectDate: '',
            companyLocation:'',
            designation:'',
            date: '',
            CIN: '',

            // validation variable
            showEmployeeName: '',
            showEmployeeId: '',
            showAnnualCompensationYear: '',
            showSalaryIncremented: '',
            showIncrementInEffectDate: '',
            showCompanyLocation:'',
            showDesignation:'',
            showCIN: '',

        }
    }

    componentDidMount() {

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
        let currentdate = today.getDate()+nth(today.getDate()) + '-' + monthNames[today.getMonth()] + '-' + today.getFullYear();
        this.setState({
            date:  currentdate
        })

        
        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let employeeId = (document.getElementById("employeeId").value).trim();
                let annualCompensationYear = (document.getElementById("annualCompensationYear").value).trim();
                let incrementInEffectDate = (document.getElementById("incrementInEffectDate").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let salaryIncrement = (document.getElementById("salaryIncrement").value).trim();
                let CIN = (document.getElementById("CIN").value).trim();

               

                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (salaryIncrement === "") {
                    that.setState({ showSalaryIncremented: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (incrementInEffectDate === "") {
                    that.setState({ showIncrementInEffectDate: true })
                }
                if (annualCompensationYear === "") {
                    that.setState({ showAnnualCompensationYear: true })
                }
                if (employeeId === "") {
                    that.setState({ showEmployeeId: true })
                }

                if (CIN != "" && salaryIncrement != "" && companyLocation != "" && employeeName != "" && incrementInEffectDate !== "" &&  annualCompensationYear!="" && employeeId!='' && designation!="" ) {
                    console.log("True return")
                    return true;

                }
                else {
                    return false;
                }
            });
        });




    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

       this.props.clicked(this.state)
        this.props.history.push('/IncrementLetter')

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
    hideAnnualCompensationYear = () => {
        this.setState({
            showAnnualCompensationYear: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideSalaryIncremented = () => {
        this.setState({
            showSalaryIncremented: false
        })
    }
    hideIncrementInEffectDate = () => {
        this.setState({
            showIncrementInEffectDate: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
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
                                        <h3 className="text-center blue-text font-bold ">Increment Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeId}  label="Employee Id" className="w-100" name="employeeId" title="Employe Id" id="employeeId" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Employee Name field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out Employee ID field * </div> : null}
                                               </div>
                                           </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation} label="Company Location" type="text" name="companyLocation" id="companyLocation" title="Company Location" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                               </div>
                                           </div>

                                            <div class="row">
                                                <div class="col-6">
                                                <MDBInput autocomplete="off" type="number" onKeyPress={this.hideSalaryIncremented} label="Salary Incremented" className="w-100" name="salaryIncremented" title="Salary Increment" id="salaryIncrement" onChange={(event) => {
                                                        this.setState({
                                                            salaryIncremented: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                <MDBInput autocomplete="off" onClick={this.hideIncrementInEffectDate} onKeyPress={this.hideIncrementInEffectDate} type="date" label="Increment In Effect Date" title="Increment In Effect Date" name="incrementInEffectDate" id="incrementInEffectDate" onChange={(event) => {
                                                        this.setState({
                                                            incrementInEffectDate: event.target.value
                                                        });this.hideIncrementInEffectDate();
                                                    }} />
                                                </div>
                                               
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showSalaryIncremented ? <div id="errordiv" className="container-fluid">Please fill out salary Increment field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showIncrementInEffectDate ? <div id="errordiv" className="container-fluid">Please fill out Increment Effect Date field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row">
                                            <div class="col-6">
                                                <MDBInput autocomplete="off" onKeyPress={this.hideAnnualCompensationYear}   type="number" label="Annual Compensation Year" title="Annual Compensation Year" name="annualCompensationYear" id="annualCompensationYear" onChange={(event) => {
                                                        this.setState({
                                                            annualCompensationYear: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                                <div className="col-6">

                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideCIN} type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                               
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showAnnualCompensationYear ? <div id="errordiv" className="container-fluid">Please fill out Compensation Year field * </div> : null}
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out CIN field * </div> : null}
                                               </div>
                                           </div>
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn id="genrate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
export default withRouter(InputIncrementLetter)