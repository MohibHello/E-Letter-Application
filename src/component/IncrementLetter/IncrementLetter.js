import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import '../CommonStyle.css'

export class IncrementLetter extends Component {

     constructor(props){
         super(props)
         this.state={
            employee:[ ]
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
                <Home buttonShow={true}/>
                <div className="card" id="AFourPage">
                    <div className="card-body">
                       
                        <p style={{float:'right'}}>CIN: {this.state.employee.CIN}</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;{this.state.employee.date}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>To<br /> <br /> </p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong> {this.state.employee.employeeName},</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Employee ID: {this.state.employee.employeeId}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Subject: Increment Letter</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><br /> Dear <strong> {this.state.employee.employeeName},<br /> <br /> </strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><br /> This year has been eventful and challenging for all of us in Test Yantra Software Solution Pvt Ltd. We have met the huge challenge of scaling up our business and growing our bottom line. <br /> <br /> Your performance during this period has been rated as Exceeds Expectations. We hope that you continue to meet all challenges that we will offer you in the coming year.<br /> <br /> Further your annual compensation for the year  {this.state.employee.annualCompensationYear} has been enhanced to <strong>INR {this.state.employee.salaryIncremented}</strong> per annum effective <strong>{moment(this.state.employee.incrementInEffectDate).format('Do-MMMM-YYYY')}</strong>. &nbsp;The Salary Annexure is attached along with this letter. All other terms and conditions of your letter of appointment remain unchanged.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Wish you all the best.<br /> </p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Authorized Signatory </strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                    </div>
                </div>

                <div className="card" id="AFourPage" >
                    <div className="card-body">
                        <div style={{padding:0}} className="mt-5">
                            <table style={{ width: 800, marginLeft: 'auto', marginRight: 'auto', heigth:160 }} border="1px">
                            <tbody>
                                <tr style={{ height: 32,background:'#D9D9D9' }}>
                                    <td style={{ textAlign: 'center', width: '423.5px', paddingTop: '5px' }} colSpan={2}>
                                        <p  style={{margin:0}}><strong>SALARY BREAK UP (ANNEXURE A)</strong></p>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ width: '300px',textAlign:'left',paddingLeft:'10px' }}>&nbsp;<strong style={{ fontSize: 'large' }}>NAME:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>{this.state.employee.employeeName}</strong></td>
                                </tr>
                                <tr >
                                    <td style={{ width: '300px',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong style={{ fontSize: 'large' }}>DESIGNATION:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>{this.state.employee.designation}</strong></td>
                                </tr>
                                <tr >
                                    <td style={{ width: '300px',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>LOCATION:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>{this.state.employee.companyLocation}</strong></td>
                                </tr>
                                <tr >
                                    <td style={{ width: '300px',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong style={{ fontSize: 'large' }}>COMPANY/BUSINESS UNIT:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all',textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>Test Yantra Software Solutions</strong></td>
                                </tr>
                            </tbody>
                        </table>
                            <table style={{ width: 800, height: 160, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center', width: '423.5px',background:'#D9D9D9'  }} colSpan={3}>
                                            <p style={{margin:0}}><strong>Basic and Other Allowances Details</strong></p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300, }}>&nbsp;<strong>Cash Flow Head</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>Monthly&nbsp;&nbsp;</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;Yearly&nbsp;&nbsp;</strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Basic Salary ( Basic + DA )</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;House Rent Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Conveyance Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;LTA</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Food&nbsp;Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Other&nbsp;Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}><strong>&nbsp;Monthly / Yearly Gross</strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong>123<span>&nbsp;&nbsp;</span></strong></td>
                                    </tr>
                                </tbody>
                            </table>

                            <table style={{ width: 800, heigth:160, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                                <tbody>
                                    <tr >
                                        <td style={{background:'#D9D9D9' , width: '100%', textAlign: 'center' }} colSpan={3}><strong>Deductions</strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;EPF Employee</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;&nbsp;</strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Professional Tax</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Medical Insurance</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300, textAlign:'left',paddingLeft:'10px' }}>&nbsp;<strong>Total</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>Net Pay</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }} colSpan={3}>&nbsp;<strong></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{ width: 800, heigth:160, marginLeft: 'auto', marginRight: 'auto' }} border={1}>
                                <tbody>
                                    <tr>
                                        <td style={{background:'#D9D9D9' , textAlign: 'center' }} colSpan={3}><strong>Benefits&nbsp;</strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px' }}>&nbsp;EPF Employer</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: 125, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;Gratuity</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px' }}>&nbsp;Group Medical Insurance and Personal<br />&nbsp;Accident Cover Policy - Premium</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>Total</strong></td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;<strong></strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{background:'#D9D9D9' , width: 300,textAlign:'left',paddingLeft:'10px'  }}>&nbsp;<strong>CTC</strong></td>
                                        <td style={{background:'#D9D9D9', width: 300, wordBreak: 'break-all', textAlign: 'right' }} colSpan={2}>&nbsp;<strong></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (<h1></h1>)
    }
}
}

export default withRouter(IncrementLetter)
