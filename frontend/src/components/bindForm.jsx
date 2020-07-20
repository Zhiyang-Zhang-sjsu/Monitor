import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { PersonFill, EnvelopeFill, PhoneFill, HouseFill, Justify, BroadcastPin, EyeFill, PencilSquare } from 'react-bootstrap-icons';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBFormInline
} from "mdbreact";


class BindForm extends Form {
    state = {
        data: { 
            firstName: "", 
            lastName: ""
        },

        errors: {}
    };

    schema = {
        firstName: Joi.string().min(8).max(30).required().label('Username'),
        lastName: Joi.string().required().label('Password')
    };

    componentDidMount() {
        //this.username.current.focus();
    }

    doSubmit = () => {
        console.log("submit");
    }

    render() { 
      return (
        <MDBContainer>
          <div className="w-100" style={{marginLeft : "30%"}}>
          <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="fa fa-globe" />Binding
                  </h3>
                </MDBCardHeader>
                <br />

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><PersonFill /></i></span>
                  </div>
                  <input type="text" name="first_name" placeholder="First Name" className="form-control" />
                </div>
                
                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><PersonFill /></i></span>
                  </div>
                  <input type="text" name="last_name" placeholder="Lasr Name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><EnvelopeFill /></i></span>
                  </div>
                  <input type="text" name="email" placeholder="E-Mail Address" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><PhoneFill /></i></span>
                  </div>
                  <input type="text" name="phone" placeholder="(845) 555-1212" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><HouseFill /></i></span>
                  </div>
                  <input type="text" name="address" placeholder="Address" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><HouseFill /></i></span>
                  </div>
                  <input type="text" name="city" placeholder="City" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                
                <div className="form-group"> 
                  <div className="col-md-15 selectContainer">
                    <div className="input-group">
                      <div> 
                        <span className="input-group-text" id="inputGroup-sizing-default"><i><Justify /></i></span>
                      </div>
                      <select name="state" className="form-control selectpicker" >
                        <option value=" " >State</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>District of Columbia</option>
                        <option>Florida</option>
                        <option>Georgia</option>  
                        <option>Hawaii</option>
                        <option>daho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Mass</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Uttah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><HouseFill /></i></span>
                  </div>
                  <input type="text" name="zip_code" placeholder="Zip Code" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><BroadcastPin /></i></span>
                  </div>
                  <input type="text" name="host" placeholder="Website" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><EyeFill /></i></span>
                  </div>
                  <input type="text" name="host_user" placeholder="Host user" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group"> 
                    <span className="input-group-text" id="inputGroup-sizing-default"><i><PencilSquare /></i></span>
                    <textarea className="form-control" name="comment" placeholder="Description"></textarea>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" type="submit">
                    Bind
                  </MDBBtn>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </div>
        </MDBContainer>
      );
    }
}
 
export default BindForm;