import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

export default function AddServiceForm(props){
  // const navigate = useNavigate();
  // const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    serviceDate: '',
    description: '',
    mileage: '',
    nextServiceDue: ''
  })

  // function handleFileInput(e){
  //   setSelectedFile(e.target.files[0])
  // }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('serviceDate', state.serviceDate)
    formData.append('description', state.description)
    formData.append('mileage', state.mileage)
    formData.append('nextServiceDue', state.nextServiceDue)
  //  formData.append('photo', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')

	props.handleAddService(formData)
    // Have to submit the form now! We need a function!

    // navigate("/");
  }

  return (
    
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                  className="form-control"
                  name="serviceDate"
                  value={state.serviceDate}
                  placeholder="date of service"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="description of service performed"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="mileage"
                  value={state.make}
                  placeholder="mileage"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="nextServiceDue"
                  value={state.nextServiceDue}
                  placeholder="date next service due"
                  onChange={handleChange}
                  required
              />   
              {/* <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />    */}
              <Button
                type="submit"
                className="btn"
              >
                ADD SERVICE
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
  ); 
}

