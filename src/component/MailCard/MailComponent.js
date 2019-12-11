import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Axios from 'axios'
import '../CommonStyle.css'
import $ from 'jquery'
import Handlebars from 'handlebars'
import './mail.css'
import html2pdf from 'html2pdf.js'

export class MailComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            from: [],
            tos: [],
            ccs: [],
            content: '',
            subject: '',
            attachment: null,
            modal: false,
            cssdum: null,
            tosdum: ''

        }
    }




    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChangeHandler = (event) => {
        this.setState({
            attachment: event.target.files[0],
            loaded: 0,
        })
    }




    sendEmail = () => {


        

        //  debugger;
          const data = new FormData()
          data.append('file', this.state.attachment)
  
         
  
          console.log("state", this.state)
          console.log("file", this.state.attachment)
          this.setState(previousState => ({ tos: [...previousState.tos, this.state.tosdum] }
          ), this.setState(previousState => ({ ccs: [...previousState.ccs, this.state.cssdum] }
          ), () => {
  
              let obj = this.state;
  
              const headers={
                  'heeloo':'work',
                  'Content-Type': 'application/json',
                   'from': this.state.from,
                  'tos':JSON.stringify(this.state.tos),
                  'ccs':JSON.stringify(this.state.ccs) ,
                  'content': this.state.content,
                  'subject': this.state.subject,
              }
  
            //  data.set('tos',this.state.tos);
            //  data.set('ccs',this.state.ccs);
            //  data.set('from',this.state.from);
            //  console.log("form Data", data);
            //  data.set('content',this.state.content);
            //   data.set('subject',this.state.subject)
  
              console.log("header info --",headers)
              Axios.post(
                  'http://10.10.12.186:8080/send-email2',data,
                   
                  {headers: headers}
                  )
                  .then((response) => {
                      console.log("attachment-----------", this.state.attachment)
                      console.log(" details" + this.state.email)
                      console.log(response.data.content)
                      if (response.data.statusCode === 201) {
                          alert("suceess")
                          this.toggle()
                      } else if (response.data.statusCode === 401) {
                      }
                  }).catch((error) => {
                      console.log(error);
                  })
          }))
      }
  





















    // sendEmail = () => {


        

    //   //  debugger;
    //     const data = new FormData()
    //     data.append('file', this.state.attachment)

       

    //     console.log("state", this.state)
    //     console.log("file", this.state.attachment)
    //     this.setState(previousState => ({ tos: [...previousState.tos, this.state.tosdum] }
    //     ), this.setState(previousState => ({ ccs: [...previousState.ccs, this.state.cssdum] }
    //     ), () => {

    //         let obj = this.state;

    //         const headers={
    //             'heeloo':'work',
    //             'accept': 'application/json',
    //              'from': this.state.from,
    //             'tos': this.state.tos,
    //             'ccs': this.state.ccs,
    //             'content': this.state.content,
    //             'subject': this.state.subject
    //         }
    //        // debugger

    //        data.set('tos',this.state.tos);
    //        data.set('ccs',this.state.ccs);
    //        data.set('from',this.state.from);
    //        console.log("form Data", data);
    //        data.set('content',this.state.content);
    //         data.set('subject',this.state.subject)

    //         console.log("header info --",headers)
    //         Axios.post(
    //             'http://10.10.12.213:8080/sendgridEmail',
    //              data,
    //             {headers: {'Content-Type': 'multipart/form-data' }}
    //             )
    //             .then((response) => {
    //                 console.log("attachment-----------", this.state.attachment)
    //                 console.log(" details" + this.state.email)
    //                 console.log(response.data.content)
    //                 if (response.data.statusCode === 201) {
    //                     alert("suceess")
    //                     this.toggle()
    //                 } else if (response.data.statusCode === 401) {
    //                 }
    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //     }))
    // }

    file = () => {
        $('#chk').change((e) => {
            console.log("ww")
            var fileName = e.target.files[0].name;
            $('.custom-file-label').html(fileName);
        });
    }

    componentDidMount() {

        $(document).ready(function (e) {
            $("#chk").on('change', function (e) {
                console.log("ww")
                var fileName = e.target.files[0].name;
                $('.custom-file-label').html(fileName);
            });
        });
    }


    render() {
        return (
            <div id="pnt">
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" id="launch">
                    Launch demo modal</button>

                <MDBContainer>
                    <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Send Mail</MDBModalHeader>
                        <MDBModalBody>


                            <form class="form-horizontal" onSubmit={this.sendEmail} role="form">
                                <div class="form-group">

                                    <div className="row form-group">
                                        <div className="col-2">
                                            <label class="col-md-3" class="control-label">From:</label>
                                        </div >
                                        <div className="col-10">
                                            <input type="text" class="form-control" placeholder="From" onChange={(event) => {
                                                this.setState({
                                                    from: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col-2">
                                            <label class="col-md-3" class="control-label">To:</label>
                                        </div >
                                        <div className="col-10">
                                            <input type="text" class="form-control" placeholder="To" onChange={(event) => {
                                                this.setState({
                                                    tosdum: event.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-2">
                                        <label class="col-md-3" class="control-label">Cc:</label>
                                    </div >
                                    <div className="col-10">
                                        <input type="text" class="form-control" placeholder="Cc" onChange={(event) => {



                                            this.setState({
                                                cssdum: event.target.value
                                            })
                                        }} />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-2" > <label class="control-label">Subject:</label></div>

                                    <div class="col-10">
                                        <input class=" form-control" type="text" placeholder="Subject" onChange={(event) => {
                                            this.setState({
                                                subject: event.target.value
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div className="row form-group">
                                        <div className="col-2">
                                            <label htmlFor="exampleFormControlTextarea1" >
                                                Content:
                                                  </label>
                                        </div>
                                        <div className="col-10">
                                            <textarea placeholder="Content"
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="5" onChange={(event) => {
                                                    this.setState({
                                                        content: event.target.value
                                                    })
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>





                                 {/* <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                                        <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                                    </div>
                                </div>  */}






                                 <div class="row pl-2">
                                    <label class="col-3" class="control-label">Attachment:</label>
                                    <div class="col-9">
                                        <div className="input-group">
                                            
                                            <div className="custom-file">
                                            <input type="file" style={{paddingTop:0.5,paddingLeft:0}} id="uploadedFile" name="uploadedFile" class=" form-control" onChange={
                                            this.onChangeHandler
                                        } />

                                            </div>
                                        </div>
                                    </div>
                                </div> 


                                {/* <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="chk" aria-describedby="inputGroupFileAddon04" onChange={
                                            this.onChangeHandler
                                        }
                                            onBlur={
                                                this.name
                                            } />
                                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                    </div>

                                </div>  */}


                                <fieldset>
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <div class="input-group">
                                                        {/* <input type="hidden" id="filename" name="filename" value="" /> */}
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                            </form>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                       
                            <MDBBtn type="submit" onClick={this.sendEmail} color="primary">Send</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>


            </div>
        )
    }
}

export default MailComponent
