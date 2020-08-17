// import React, { Component, Fragment } from 'react';
// import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Particles from 'react-particles-js';
// import ReCAPTCHA from "react-google-recaptcha";

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.status; // parses JSON response into native JavaScript objects
// }

//  //RequestType: 0, //0: Other 1:Web 2:Cloud 3:Database 4:IoT
//  //requestTypeHeader: '', //Specific web stuff
//  //requestDescription: '', // More of a description 
//  //designType: 0, // 0: Other 1: We Decide 2: Trendy 3: Corporate 4: Casual 5: Serif 6:Retro 7: Arsty
//  //ExampleURLS: [], //Websites you like
//  //designDescription: '', //Notes on the look and feel
//  //SupportType : 0, // Bug  Downed Site 


// export class Contact extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             company: '',
//             email: '',
//             contactType: 0, //0: Other 1:Sales 2:Support
//             exampleUrls: [],
//             exampleUrl1: '',
//             exampleUrl2: '',
//             width: window.outerWidth, // Change this to client width
//             height: window.innerHeight,
//             recaptcha: null,
//             response: null,
//         }
//         this.handleMenuSelect = this.handleMenuSelect.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.clearFormData = this.clearFormData.bind(this);
//         this.recaptchaChange = this.recaptchaChange.bind(this);
//     }

//     handleWindowSizeChange = () => {
//         if ((window.outerWidth - this.state.width >= 50) || (window.innerHeight - this.state.height >= 50)) {
//             this.setState({
//                 width: window.outerWidth,
//                 height: window.innerHeight,
//             });
//         }
//     };


//     componentDidMount() {
//         window.addEventListener('resize', this.handleWindowSizeChange);
//     }

//     componentWillUnnount() {
//         window.removeEventListener('resize', this.handleWindowSizeChange);
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });

//     }

//     handleMenuSelect = (event, props) => {
//         event.preventDefault();
//         this.setState({
//             contactType: props,
//         })
//     }


//     handleSelection = (event) => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: parseInt(value)
//         });
//     }

//     handleDesignMenu = (event, props) => {
//         event.preventDefault();
//         this.setState({
//             designType: props,
//         })
//     }

//     recaptchaChange = (value) => {
//         console.log("Captcha value:", value);
//         this.setState({
//             recaptcha: value
//         });
//     }


//     handleSubmit = (event) => {
//         event.preventDefault();

//         if (this.state.exampleUrl1 !== '') {
//             this.setState({
//                 exampleUrls: this.state.exampleUrls.push(this.state.exampleUrl1)
//             })
//         }

//         if (this.state.exampleUrl2 !== '') {
//             this.setState({
//                 exampleUrls: this.state.exampleUrls.push(this.state.exampleUrl2)
//             })
//         }

//         if (this.state.recaptcha) {
//             postData('https://toastedmarshmallow.co/api/contact', this.state) //Changed from www to not wwww
//                 .then((response) => {
//                     this.setState({
//                         response : response
//                     })
//                 });
//             this.clearFormData();
//         }

//     }

//     clearFormData = () => {
//         this.setState({
//             name: '',
//             company: '',
//             email: '',
//             contactType: 0, //0: Other 1:Sales 2:Support
//             exampleUrls: [],
//             exampleUrl1: '',
//             exampleUrl2: '',
//             requestType: '',
//             requestDescription: '',
//             requestTypeHeader: '',
//             designType: '',
//             recaptcha: null,
//             designDescription: '',
//         })
//     }

//     render() {
//         const { contactType, response } = this.state;
//         const renderButtonGroupSelection = () => {
//             if (contactType === 1) {
//                 return (<ContactSales handleInputChange={this.handleInputChange} handleSelection={this.handleSelection} requestDescription={this.state.requestDescription} />)
//             } else if (contactType === 2) {
//                 return (<ContactSupport handleInputChange={this.handleInputChange} handleSelection={this.handleSelection} requestDescription={this.state.requestDescription}/>)
//             } else if (contactType === 0) {
//                 return (<ContactOther handleInputChange={this.handleInputChange} handleSelection={this.handleSelection} requestDescription={this.state.requestDescription}/>)
//             }
//         }

//         const renderResponseBanner = () => {
//                 if (response == 200) {
//                     return (<p className='text-center p-2 tm-text-xsm tm-light-green'>Thanks for getting in touch - we'll do the same.</p>)
//                 }
//         }

//         let params = {
//             particles: {
//                 number: {
//                     value: '1000'
//                 },
//                 line_linked: {
//                     enable: false
//                 },
//                 move: {
//                     speed: '0.2'
//                 },
//                 size: {
//                     value: '2',
//                     random: true,
//                 },
//                 color: {
//                     value: ['#FF6969', '#4A3457', '#E8CFDE', '#A02B5D', '#F75965']
//                 },
//             }
//         }

//         return (
//             <Fragment>
//                 <Particles className='p-fixed z-1' width={this.state.width} height={this.state.height} params={params} />
//                 <section className="feature-section">
//                     <div className="flex-container text-center mont-thin p-4">
//                         <div className='tm-contact-form-outer'>
//                             <div className='tm-contact-form'>
//                                 <p className='tm-text-lg tm-light'>Get in touch</p>
//                                 <p className='tm-light tm-text-xsm p-4'>
//                                     We'd <span className='tm-red'>love</span> to hear from you. Please go through the form and we'll get right back to you.
//                                 </p>
//                                 <Form onSubmit={this.handleSubmit}>
//                                     <FormGroup>
//                                         <Input className='tm-contact-input' type="email" name="email" value={this.state.email} id="email" required placeholder="yourname@yourdomain.com" onChange={this.handleInputChange} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Input className='tm-contact-input' name="name" id="name" placeholder="name" value={this.state.name} required onChange={this.handleInputChange}/>
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Input className='tm-contact-input' name="company" id='company' value={this.state.company} placeholder="company" required onChange={this.handleInputChange}/>
//                                     </FormGroup>
//                                     <p className='tm-light tm-text-xxsm p-4'>
//                                         What are you contacting us for?
//                                     </p>
//                                     <ButtonGroup className='tm-contact-button-group' id='contactType' name="contactType">
//                                         <Button className='tm-contact-button-group-item' onClick={(event) => this.handleMenuSelect(event, 1)}>Sales</Button>
//                                         <Button className='tm-contact-button-group-item' onClick={(event) => this.handleMenuSelect(event, 2)}>Support</Button>
//                                         <Button className='tm-contact-button-group-item' onClick={(event) => this.handleMenuSelect(event, 0)}>Other</Button>
//                                     </ButtonGroup>
//                                     {renderButtonGroupSelection()}
//                                     <hr className="tm-bg-red m-4" />
//                                     <p className='tm-text-md tm-light'>Lets finish up.</p>
//                                     <p className='tm-light tm-text-xsm p-2'>
//                                         We are all for automation and machine learning but we really do need to prove that you are not a robot.
//                                     </p>
//                                     <div className='d-flex flex-1 justify-content-center tm-recaptcha'>
//                                         <ReCAPTCHA
//                                             sitekey="6LfHY-0UAAAAADvbfMBT2sE7MYnOIQPxb_Ohshyj"
//                                             onChange={this.recaptchaChange}
//                                             theme="dark"
//                                         />
//                                     </div>
//                                     {renderResponseBanner()}
//                                     <Button type='submit' value='Submit' className='tm-contact-button'>Submit</Button>
//                                 </Form>

//                             </div>

//                         </div>
//                     </div>
//                 </section>
//             </Fragment>
//         );
//     }
// }



// class ContactSales extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <hr className="tm-bg-red m-4"/>
//                 <p className='tm-text-md tm-light p-4'>You want what we got?</p>
//                 <p className='tm-light tm-text-xsm p-2'>
//                     What are you looking for?
//                 </p>
//                 <ButtonGroup className='tm-contact-button-group' id='RequestType'>
//                     <Button className='tm-contact-button-group-item' name="requestType" onClick={(event) => this.props.handleSelection(event)}  value={0}>Other</Button> 
//                     <Button className='tm-contact-button-group-item' name="requestType" onClick={(event) => this.props.handleSelection(event)} value={1}>Cloud</Button>
//                     <Button className='tm-contact-button-group-item' name="requestType" onClick={(event) => this.props.handleSelection(event)} value={2}>Web Stuff</Button>
//                     <Button className='tm-contact-button-group-item' name="requestType" onClick={(event) => this.props.handleSelection(event)} value={3}>Database </Button>
//                     <Button className='tm-contact-button-group-item' name="requestType" onClick={(event) => this.props.handleSelection(event)} value={4}>IoT</Button> 
//                 </ButtonGroup>
//                 <p className='tm-light tm-text-xsm p-2' >
//                     What type of stuff specifically?
//                 </p>
//                 <FormGroup>
//                     <Input className='tm-contact-input' required id='requestTypeHeader' name="requestTypeHeader" onChange={this.props.handleInputChange} placeholder="an online store" />
//                 </FormGroup>
//                 <p className='tm-light tm-text-xsm p-2'>
//                     Tell us a bit more about what you want.
//                 </p>
//                 <FormGroup>
//                     <Input className='tm-contact-input'  type="textarea" name="requestDescription" onChange={this.props.handleInputChange} id="RequestTypeDescription" placeholder="Write Stuff here." />
//                 </FormGroup>
//                 <p className='tm-light tm-text-xsm p-2'>
//                     What type of design aesthetic are you looking for?
//                 </p>
//                 <ButtonGroup className='tm-contact-button-group'  id="designType">
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={0}>Other</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={1}>Let us decide</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={2}>Trendy</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={3}>Corporate</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={4}>Casual</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={5}>Serif</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={6}>Retro</Button>
//                     <Button className='tm-contact-button-group-item' name="designType" onClick={(event) => this.props.handleSelection(event)} value={7}>Artsy</Button>
//                 </ButtonGroup>
//                 <FormGroup>
//                     <Input className='tm-contact-input' name="exampleUrl1" id="exampleUrl1" onChange={this.props.handleInputChange} placeholder="website you like (paste URL)" />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input className='tm-contact-input' name="exampleUrl2" id="exampleUrl2" onChange={this.props.handleInputChange} placeholder="another website you like (paste URL)" />
//                 </FormGroup>
//                 <p className='tm-light tm-text-xsm p-2'>
//                     Give us some more notes on the look and feel.
//                 </p>
//                 <FormGroup>
//                     <Input className='tm-contact-input' required type="textarea" name="designDescription" id="designDescription" onChange={this.props.handleInputChange} placeholder="Write Stuff here." />
//                 </FormGroup>
//             </Fragment>

//         );
//     }
// }

// class ContactSupport extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <hr className="tm-bg-red m-4" />
//                 <p className='tm-text-md tm-light'>Can we assist?</p>
//                 <p className='tm-light tm-text-xsm'>
//                     What needs to be addressed?
//                 </p>
//                 <ButtonGroup className='tm-contact-button-group'>
//                     <Button className='tm-contact-button-group-item' name="SupportType" onClick={(event) => this.props.handleSelection(event)} value={0}>A bug</Button>
//                     <Button className='tm-contact-button-group-item' name="SupportType" onClick={(event) => this.props.handleSelection(event)} value={1}>My site is down</Button>
//                     <Button className='tm-contact-button-group-item' name="SupportType" onClick={(event) => this.props.handleSelection(event)}  value={2}>A new feature</Button>
//                 </ButtonGroup>
//                 <p className='tm-light tm-text-xsm p-4'>
//                     Give us a description of your project.
//                 </p>
//                 <FormGroup>
//                     <Input className='tm-contact-input' name="requestDescription" required onChange={this.props.handleInputChange} id="projectDescription" placeholder="www.yourwebsite.com OR describe the project" />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input className='tm-contact-input' type="textarea" required onChange={this.props.handleInputChange} name="designDescription" id="assistanceMessage" placeholder="Write Stuff here." />
//                 </FormGroup>
//             </Fragment>
//         )
//     }
// }

// class ContactOther extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <p className='tm-light tm-text-xsm p-2'>
//                     Care to elaborate?
//                 </p>
//                 <FormGroup>
//                     <Input className='tm-contact-input' type="textarea" required value={this.props.requestDescription} onChange={this.props.handleInputChange} name="requestDescription" id="otherMesage" placeholder="Write Stuff here." />
//                 </FormGroup>
//             </Fragment>

//         );
//     }
// }
// //<FormGroup>
// //    <Input className='tm-contact-input' type="textarea" name="message" id="Give us some more details." />
// //</FormGroup>