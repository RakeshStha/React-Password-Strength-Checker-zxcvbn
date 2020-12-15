import React, {useState} from 'react';
import { Container, Form, Button, Card, Jumbotron } from 'react-bootstrap';



function App() {
const [password, setPassword ] = useState('');
const [email, setEmail] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [isError, setIsError] = useState('');

const checkValidation = (e)=>{
  setConfirmPassword(e.target.value)
  if (password !== confirmPassword){
    setIsError("Passwords do not match");
  }
  else{
    setIsError('');
  }
}



  return (
    <Container>
      <Jumbotron className="m-3">
        <h3 className="text-center">Password Strength Checker React</h3>
      </Jumbotron>
        <Card className="m-5 p-5">
          <h4 className="text-center"><b>Registration Form</b></h4>
          <br></br>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter email" 
               />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
               
              value={password}
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)}
              />
             <div className="text-danger">{isError}</div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password"
              value={confirmPassword}
              onChange={(e) => checkValidation(e)}
               placeholder="Confirm Password" 
               />
              <div className="text-danger">{isError}</div>
            </Form.Group>
            

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree Terms and condition" />
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
          </Card>
          <div className="text-center m-auto p-3">
            <b>Design and developed by <a href="https://www.shrestharakesh.com.np/">Rakesh Shrestha </a> </b>
          </div>
    </Container>
  );
}

export default App;
