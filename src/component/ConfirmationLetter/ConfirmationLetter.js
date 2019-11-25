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

    render() {

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
                                <p style={{ float: 'right' }}>CIN:  {this.state.employee.CIN}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong> {this.state.employee.date}</strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong> {this.state.employee.employeeName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Emp Id:  {this.state.employee.employeeId}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}> {this.state.employee.designation}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Bangalore</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Subject- Confirmation of Employment</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>In terms of your appointment letter, you have undergone the Probation period of <strong>6 months</strong> from the date of joining <strong>{moment(this.state.employee.joiningDate).format('Do-MMMM-YYYY')}</strong>. Consequent to your successful completion of your probation period we are pleased to inform you that your services with the company have been confirmed with effect from <strong>{moment(this.state.employee.probationEndDate).format('Do-MMMM-YYYY')}</strong>. Being a confirmed employee, the organization anticipates further outstanding works from you and we fervently hope that you will keep up the expectation.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30,paddingTop:5 }}>All other terms and conditions of your employment remain unchanged.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30,paddingTop:5 }}>Please sign and return the duplicate copy of this letter for our records.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30,paddingTop:5 }}>Sincerely Yours,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>For Test Yantra Solutions Pvt. Ltd.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Authorized Signatory</strong></p>
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

