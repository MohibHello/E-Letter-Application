import React, { Component } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import Home from '../home';
import '../CommonStyle.css';
export class TrainingLetter extends Component {


    constructor(props) {
        super(props);
          
        this.state={
           employee:[]
        }
      }

      
    componentDidMount() {
        debugger
       
        this.setState({
            employee: this.props.empData,
        })
        console.log("DDDDDDDDDDDDDDDDDDd", this.props.empData)
        console.log("data hr form  state ", this.state.employee);
    }

    render() {
        if (this.props.empData  == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} />
                    <div className="card" id="AFourPage">
                        <div className="card-body">

                            <div>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ float: 'right' }}>CIN: {this.state.employee.CIN}</p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Date: {this.state.employee.date}</strong></span></span></p>
                                <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Place: {this.state.employee.companyLocation}</strong></span></span></p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'center' }} align="CENTER"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong style={{ fontSize: 'x-large' }}>To Whomsoever It may concern </strong></span></span></p>
                                <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>This is to certify that </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>is an employee in this organization. {this.props.empData.gender.gender1} is presently holding the post as </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.designaton}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>. {this.props.empData.gender.gender1} joined this organization on </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{moment(this.state.employee.joiningDate).format('Do-MMMM-YYYY')}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>.</span></span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>Further this organization has </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>No Objection</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> for </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>joining to</span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.courseName} Course</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> at </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchName},</strong></span></span> <span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchLocation} Branch. </strong></span></span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 30 }}><span style={{ color: '#000000' }}>For </span><span style={{ color: '#000000' }}><strong>Test Yantra Software Solutions (India ) Pvt Ltd</strong></span></p>
                                <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                                <p style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Authorized Signatory</strong></span></span></p>
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

export default withRouter(TrainingLetter)
