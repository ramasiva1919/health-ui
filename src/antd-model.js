import React, { useState } from 'react';
import { Button, Modal, DatePicker, Form, Input } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
const AntdModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <form rules={[
          {
            required: true,
          },
        ]}>
          <Form.Item label="user name" name="username">
            <Input placeholder="user name" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Input>
            {emailErr && <p>Your email is invalid</p>}
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input placeholder="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}></Input>
            {pwdError && <p>Your password is invalid</p>}

          </Form.Item>
          <Form.Item >
            <Button block type="primary" htmlType="submit" onClick={validate}>Submit</Button>

          </Form.Item>
          <label>
            Left Eye Details
          </label>
          <input
            type="text"
            maxlength="50"
            className="form-control mr-0 visonText"
            name="leftEyeDetails"
            id="updateleftEyeDetailsId"
            disabled={true}
            // value={
            //   this.state.updateForm
            //     .leftEyeDetails
            //}
            placeholder
          // onChange={
          //   this
          //     .updateHandleChange
          // }
          // onMouseLeave={() =>
          //   this.setState({
          //     ShowEyedetails: false,
          //   })
          // }
          // disabled={
          //   this.state
          //     .privilageSettings
          //     .Add_Edit == 1
          //     ? false
          //     : true
          // }
          />
          {/* {this.state
                                                        .ShowEyedetails ==
                                                        true && (
                                                        <p className="f-13">
                                                          <small>
                                                            {
                                                              this.state
                                                                .updateLeftEyeCharacters
                                                            }{" "}
                                                            {
                                                              "Characters Left"
                                                            }
                                                          </small>
                                                        </p>
                                                      )} */}
        <div>   <p className='mb-1'>
                          <small className='visit-fs-thirteen'>
                          Medicine Intake
                          </small>
                        </p>                                            
          <input
            className='form-check-input visits-mt-h '
            type='radio'
            name='medicineIntake'
            id='notgivenRadio'
            value={false}
            // onChange={this.handleChange}
            defaultChecked='checked'
          />
           <input
            className='form-check-input visits-mt-h '
            type='radio'
            name='medicineIntake'
            id='notgivenRadio'
            value={false}
            // onChange={this.handleChange}
            defaultChecked='checked'
          />
           <input
            className='form-check-input visits-mt-h '
            type='radio'
            name='medicineIntake'
            id='notgivenRadio'
            value={false}
            // onChange={this.handleChange}
            defaultChecked='checked'
          />
          </div>
          <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            defaultValue
                            id='parentcontactlist'
                            name='Immunisations'
                            // onChange={this.handleChange}
                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsone</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            defaultValue
                            id='parentcontactlist'
                            name='Immunisations'
                            // onChange={this.handleChange}
                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationstwo</strong>
                          </label>
                        </div>
                        <div className='col-4 form-row ml-2'>
                          <input
                            className='form-check-input p-0'
                            type='checkbox'
                            defaultValue
                            id='parentcontactlist'
                            name='Immunisations'
                            // onChange={this.handleChange}
                          />
                          <label className='visits-vital-label'>
                            <strong>Immunizationsthree</strong>
                          </label>
                        </div>
                        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<div>
<Carousel >
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" class="d-block w-100" alt="..." />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" class="d-block w-100" alt="..." />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" class="d-block w-100" alt="..." />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
        </form>
      </Modal>
    </>
  );
};

export default AntdModel;