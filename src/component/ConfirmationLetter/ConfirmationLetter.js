import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';


export class ConfirmationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
    }

    componentDidMount() {
        this.setState({
            employee: this.props.empData,
        })
    }


    nth=(d)=> {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

    render() {

        let joiningDate=new Date(this.state.employee.joiningDate);
        let toDayDate=new Date();
        let toprobationDate=new Date(this.state.employee.probationEndDate)

        console.log("probation end date =",toprobationDate)

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} />
                    <div className="card" id="AFourPage">
                        <div className="card-body">
                            <div>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong> {toDayDate.getDate()}<sup>{this.nth(toDayDate.getDate())}</sup>&nbsp;{moment(toDayDate).add('month', 1).format('MMMM YYYY')}</strong></p>
                                <br/>
                                <br/>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}><strong> {this.state.employee.employeeName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}>Emp Id:  {this.state.employee.employeeId}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}> {this.state.employee.designation}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}>Bangalore</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Subject - Confirmation of Employment</p>
                                <br/>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}>In terms of your appointment letter, you have undergone the Probation period of <strong>6 months</strong> from the date of joining <strong>{joiningDate.getDate()}<sup>{this.nth(joiningDate.getDate())}</sup>&nbsp;{moment(this.state.employee.joiningDate).format('MMMM YYYY')}</strong>. Consequent to your successful completion of your probation period we are pleased to inform you that your services with the company have been confirmed with effect from <strong>{toprobationDate.getDate()}<sup>{this.nth(toprobationDate.getDate())}</sup>&nbsp;{moment(toprobationDate).format('MMMM YYYY')}</strong>. Being a confirmed employee, the organization anticipates further outstanding works from you and we fervently hope that you will keep up the expectation.</p>
                                <br/>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,paddingTop:5 }}>All other terms and conditions of your employment remain unchanged.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,paddingTop:5 }}>Please sign and return the duplicate copy of this letter for our records.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,paddingTop:5,margin:0 }}>Sincerely Yours,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span >For Test Yantra Software Solutions (India) Pvt Ltd</span></p>
                                <br/>
                                <br/>
                                <br/>
                                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}><strong>Authorized Signatory</strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,fontWeight:'bolder' }}><span ><strong  >(Human Resources)</strong></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(ConfirmationLetter)

