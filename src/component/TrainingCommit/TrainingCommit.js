import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
 class TrainingCommit extends Component {

    constructor(props) {
        super(props);
          
        this.state={
           employee:[ ]
        }
    
      }
    
      componentDidMount(){
    
        this.setState({
          employee: this.props.empData,
      })
        
        // console.log("data hr form ",this.props.history.location.state.employee);
         console.log("data hr form  state ",this.state.employee);
    
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

        let toDate=new Date();
        let toJoiningDate=new Date(this.state.employee.joiningDate);
        let toTraningStart=new Date(this.state.employee.trainingStartDate);
        let toTraningEnd=new Date(this.state.employee.trainingEndDate);

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
        return (
            <div>
                <Home buttonShow={true}/>
                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}><strong>Date:  {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0  }}><strong>To,</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0  }}><strong>The Management,</strong>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}><strong>&nbsp;Subject: Training&nbsp; </strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>I am <strong> {this.state.employee.employeeName} </strong>working in Test Yantra Software Solutions Pvt Ltd or Qspiders or Jspiders (u/o) Test Yantra Software Solutions Pvt Ltd as <strong> {this.state.employee.designation}</strong> from <strong>{toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')}.</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>I am willing to undergo training in<strong>  {this.state.employee.courseName}</strong>. I would request you to permit me to take the course at Qspiders / JSpiders. Below is the details of Course and period of Training.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0   }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0  }}><strong>Course Name</strong>: <strong> {this.state.employee.courseName}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0   }}><strong>Training Start Date</strong>: <strong>{toTraningStart.getDate()}<sup>{this.nth(toTraningStart.getDate())}</sup>&nbsp;{moment(toTraningStart).format('MMMM YYYY')}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0   }}><strong>Training End Date:  {toTraningEnd.getDate()}<sup>{this.nth(toTraningEnd.getDate())}</sup>&nbsp;{moment(toTraningEnd).format('MMMM YYYY')}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0   }}><strong>SPOC</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20,margin:0   }}><strong>Location:</strong>  {this.state.employee.branchName},  {this.state.employee.branchLocation}</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>I hereby promise and accept that</p>
                            <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>I will not misuse the data, which I use for day to day business operations.</li>
                                    <li>I shall not quit while I am perusing the Training.</li>
                                    <li>I would commit to work for a minimum period of 12 months after completion of Training.</li>
                                    <li>I will not join any organization which is competitor to Test Yantra Software Solutions Pvt Ltd and its units Qspiders and Jspiders for 12 Months.</li>
                                    <li>I will accept relocation / project allocation on any Testing area and shall not deny the opportunities / interviews provided to me.</li>
                                </ol>
                            </ol>
                        </div>

                    </div>
                </div>

                <div className="card" id="AFourPage">
                    <div className="card-body" >
                        <div>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>This Agreement constitutes the entire understanding between the parties and supersedes any and all prior or contemporaneous understandings and agreements, whether oral or written, between the parties with respect to the subject matter hereof.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>This Agreement can only be modified by a written amendment signed by the party against whom enforcement of such modification is sought.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>I agree that I have not shared the data accumulated with any organization or anybody in past and will not share in future.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>If Test Yantra Software Solutions Pvt Ltd or its units Qspiders or Jspiders figures out that I have misused data as mentioned above, Test Yantra Software Solutions Pvt Ltd and u/o Test Yantra Software Solutions Pvt Ltd hold legal rights to file a case against me and to take legal action.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>I hereby agree to abide by the same in its true spirit and meaning.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}><strong>IN WITNESS WHEREOF</strong>, the parties hereto have executed this Agreement as of the date first above written.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>Thanking you,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>Signature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signature:</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for <strong>Test Yantra Software Solutions</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>Designation:</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20  }}>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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

export default withRouter(TrainingCommit)
