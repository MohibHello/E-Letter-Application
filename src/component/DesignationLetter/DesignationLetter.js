import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import { withRouter } from 'react-router-dom';
import moment from 'moment';

export class DesignationLetter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: [],
            waterMark: false
        }
    }

    nth = (d) => {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    componentDidMount() {

        this.setState({
            employee: this.props.empData,
        })

    }

    render() {

        let toDate = new Date();

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} />
                    <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
                        <div className="card-body pb-0 mt-5">

                            {this.state.employee.withHeader ? <header className="header" style={{ marginLeft: '-115px', marginTop: '-100px' }}>

                                <img className="tyHeader" src={TyHeader}></img>

                            </header> : null}


                            {this.state.employee.withWaterMark ? <div className="waterMark">
                                <span style={{
                                    color: '#263248', fontSize: '91px',
                                    fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                                }}>TES<span style={{
                                    color: '#F8981C', fontSize: '91px',
                                    fontFamily: 'sans-serif', fontWeight: "600"
                                }}>TY</span>ANTRA</span>
                            </div> : null}


                            <div>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong></strong><strong> {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}>To,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong> {this.state.employee.employeeName}</strong>,</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}> {this.state.employee.employeeId}</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Dear <strong> {this.state.employee.employeeName}</strong>,</p>
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>We are pleased to inform; your designation has been changed as <strong> {this.state.employee.newDesignation} </strong>effective <strong>{toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong>. Other terms and conditions remain the same as per the appointment letter.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>With best wishes,</p>
                                <br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                                <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}>(Human Resources)</p>
                            </div>

                        </div>
                        {this.state.employee.withHeader ? <div className="footer" style={{ marginLeft: '-141px', marginTop: '506px' }}>

                            <img className="tyfooter" style={{ marginLeft: '48px' }} src={TyFooter}></img>

                        </div> : null}

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
