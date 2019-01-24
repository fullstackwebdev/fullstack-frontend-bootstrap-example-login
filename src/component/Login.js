import React, { Component } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import './login.css';


export default class Login extends Component {

    componentWillMount() {
        document.body.classList.add("text-center");
    }

    render() {


        return (
            // <body className="text-center">
            <Form className="form-signin">
                <Image className="mb-4"
                    src="bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Form.Group>
                    <Form.Label for="inputEmail" className="sr-only">Email address</Form.Label>
                    <Form.Control type="text" id="inputEmail" placeHolder="Email Address" required autofocus />
                    <Form.Label for="inputPassword" className="sr-only">Password</Form.Label>
                    <Form.Control type="password" id="inputPassword" className="" placeHolder="Password" required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                            {/* <Form.Check value="remember-me" /> Remember me */}
                        </label>
                    </div>
                    <Button variety="primary" block size="lg">Sign in</Button>
                </Form.Group>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </Form>
            // </body>
        )
    }
}
