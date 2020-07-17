import React from 'react';

const LoginForm  = () => {
      return (
        <div className="container">
          <form>
            <div>
              <h1>Monitor</h1><br/>
            </div>

            <div className="input-group mb-3">
              <select className="custom-select" id="hostname">
                <option selected>Server...</option>
                <option value="1">192.168.126.2</option>
                <option value="2">ubuntu-s-1vcpu-1gb-sfo2-01</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div class="input-group mb-3">
              <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1"/>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="remember"/>
              <label for="remember">Remember me</label>
            </div>

            <button className="btn btn-secondary">Log In</button>
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

export default LoginForm;