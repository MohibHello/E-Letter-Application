import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import moment from 'moment'
import html2pdf from 'html2pdf.js'

export class CertificateLetter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: []
    }
  }

  print=()=>{
    let element = document.getElementById('AFourPage');
html2pdf(element);

}
  componentDidMount() {

    this.setState({
      employee: this.props.empData,
    })
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



  render() {

    let SysDate = new Date();
     console.log("System Date",SysDate)
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
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <br/>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>Date:&nbsp; {SysDate.getDate()}<sup>{this.nth(SysDate.getDate())}</sup>&nbsp;{moment(SysDate).format('MMMM YYYY')}</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}><strong>To,</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}><strong>{this.state.employee.employeeName},</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20,margin:0 }}><strong>{this.state.employee.companyLocation}</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20,marginBottom:20 }}><strong>Dear {this.state.employee.employeeName},</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>This is to confirm that we have collected your<strong> {this.state.employee.certificateType} certificate</strong> for the background verification at Test Yantra. We would return the document once the verification process is done.</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>With best wishes,</p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Very truly yours,</p>
                <br/>
                <br/>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong><br /> Corporate HR</strong></p>
                <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
              </div>

              <MDBBtn color="secondary" onClick={this.print}>Print</MDBBtn>
            </div>
          </div>
        </div>

      )
    } else {
      return (<h1></h1>)
    }
  }
}

export default withRouter(CertificateLetter)
