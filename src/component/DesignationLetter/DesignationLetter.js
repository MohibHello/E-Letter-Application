import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';

export class DesignationLetter extends Component {

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
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}><strong></strong><strong> {this.state.employee.date}</strong></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>To,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}><strong> {this.state.employee.employeeName}</strong>,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}> {this.state.employee.employeeId}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>Dear <strong> {this.state.employee.employeeName}</strong>,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>We are pleased to inform; your designation has been changed as <strong> {this.state.employee.newDesignation} </strong>effective <strong>{this.state.employee.date}</strong>. Other terms and conditions remain the same as per the appointment letter.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>With best wishes,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>Authorized Signatory</p>
                            </div>

                        </div>
                    </div>
                </div>

            )
        }
         else {
        return (<h1></h1>)
        }
    }
}

export default withRouter(DesignationLetter)
