import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class LoginForm extends Form {
    state = {
        data: { username: "", password: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().min(8).max(30).required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    componentDidMount() {
        //this.username.current.focus();
    }

    doSubmit = () => {
        console.log("submit");
    }

    render() { 
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            
            <h1>Monitor</h1>

            <div className="form-row" style={{ marginLeft: '10%' }}>
              <div className='col-10'>
                <select className="form-control" autoFocus>
                  <option selected>Server...</option>
                  <option value="1">192.168.126.2</option>
                  <option value="2">ubuntu-s-1vcpu-1gb-sfo2-01</option>
                </select>
              </div>
            </div>
            
            {this.renderInput('form-row', 'username', 'Username', 'Username or E-mail')}
            {this.renderInput('form-row', 'password', 'Password', 'Password', 'password')}

            <div className="checkbox-container">
              <input type="checkbox" id="remember"/>
              <label for="remember">Remember me</label>
            </div>

            {this.renderButton("Login", 'btn btn-secondary')}
          </form>
      
          <div className="features">
            <div className="feature">
              <i className="fas fa-coffee"></i>
              <h3>Easy</h3>
              <p>Drop-in installation.</p>
            </div>
            <div className="feature">
              <i className="fas fa-grin-alt"></i>
              <h3>Simple</h3>
              <p>A minimalist, beautiful dashboard.</p>
            </div>
            <div className="feature">
              <i className="fas fa-universal-access"></i>
              <h3>universal</h3>
              <p>Support multiple Linux platforms.</p>
            </div>
          </div>
        </div>
      );
    }
}
 
export default LoginForm;