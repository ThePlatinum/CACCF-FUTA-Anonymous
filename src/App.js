import logo from './logo170.png';
import './App.css';
import { useState } from 'react';
import { Button, Collapse, Form, FormGroup, Input, Nav,
  Navbar, NavbarBrand, NavbarToggler, Toast, ToastBody } from 'reactstrap';
import emailjs from 'emailjs-com';

function App() {
  
  const User_ID = 'user_OXpenVgUULZMKiUyYYJWu'
  const Template_ID = 'template_bfe2rgo'

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [show, setShow] = useState(false);
  const toggleToast = () => setShow(!show);

  const send = (theMessage) => {
    emailjs.send('service_t10pa5u', Template_ID, {message: "" + theMessage + ""}, User_ID)
    toggleToast()
    document.getElementById('message').value = ''
  }

  const sendAnonymous = () => {
    var length = document.getElementById('message').value
    if(length.length > 5){
      send(document.getElementById('message').value)
    }
    else {
      alert('Hello, \n\nPlease, send only valid messages. \n\nRegards')
    }
  }

  const Open = () => {
    window.open("https://paystack.com/pay/gianthubtraining", "_blank");  
  }

  return (
    <div className="App">
      <Navbar color="white" light expand="lg" className="App-header">
          <NavbarBrand>
            <img src={logo} alt="CACCF FUTA LOGO" id="logo" 
              className="d-inline-block align-top App-logo " /> 
          </NavbarBrand>
          <h3>CACCF FUTA </h3>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Button color="outline-danger" onClick={()=> document.location.href = "tel:+234706644810"}>Call - 0706644810</Button>
              </Nav>
            </Collapse>
      </Navbar>
      <div className="App-content"> {/**fluid container**/}
        <div className="Inner-header">
        </div>
        <div className="Name-and-story">
          <h1>Send us an Anonymous Message</h1>
          <p>We sincerly would love to hear from you, feel free to express your mind,
            <strong> 'we can only grow together if we listen to one another'</strong>. 
            <br/> <br/>
            Thanks for your time.
          </p>
        </div>
        <div className="Form-and-button">
          <Form>
          <FormGroup>
            <Input type="textarea" name="themesage" rows='10' id="message" placeholder='Your Message Here...'/>
          </FormGroup>
          <br/>
          <Button onClick={sendAnonymous} color="primary" size="lg" block>Send Message</Button>
          </Form>
        </div>
        <br/>
        <Toast isOpen={show} className='toast'>
          <ToastBody onClick={toggleToast}>
            <em>
            Your message has been sent! <br/>
            Thanks so much for lending your voice. <br/>
            We hope to hear more from you.
            </em>
            <br/> <br/>
            -The Executives
          </ToastBody>
        </Toast>
      </div>
      <footer className="App-footer"> {/* cover all */}
      caccffuta || ICT Committee@2021 <br/> <br/>
      <Button color="outline-danger" size="sm" onClick={Open}>Register to Join our upcoming training</Button>
      </footer>
    </div>
  );
}

export default App;
