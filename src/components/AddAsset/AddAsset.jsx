import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddAssetForm(props){
  // const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    nickName: '',
    // assetType: '',
    year: '',
    make: '',
    model: '',
    // description: '',
    inServiceDate: '',
    beginningMileage: '',
    currentMileage: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('nickName', state.nickName)
    // formData.append('assetType', state.assetType)
    formData.append('year', state.year)
    formData.append('make', state.make)
    formData.append('model', state.model)
    // formData.append('description', state.description)
    formData.append('inServiceDate', state.inServiceDate)
    formData.append('beginningMileage', state.beginningMileage)
    formData.append('currentMileage', state.currentMileage)
    formData.append('photo', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')

	props.handleAddAsset(formData);
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
                  name="nickName"
                  value={state.nickName}
                  placeholder="nickname"
                  onChange={handleChange}
                  required
              />   
{/* 
              <Form.Input>
                className="form-control"
                name="assetType"
                value={state.assetType}
                placeholder="automobile, chainsaw, dirt bike..."
                onChange={handleChange}
                required
                <Dropdown>
                  <DropdownMenu>
                    <DropdownItem></DropdownItem>
                    <DropdownItem>automobile</DropdownItem>
                    <DropdownItem>chainsaw</DropdownItem>
                    <DropdownItem>dirt bike</DropdownItem>
                    <DropdownItem>generator</DropdownItem>
                    <DropdownItem>lawn care</DropdownItem>
                    <DropdownItem>motorcycle</DropdownItem>
                    <DropdownItem>snow blower</DropdownItem>
                    <DropdownItem>other</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Form.Input>   
 */}
              <Form.Input
                  className="form-control"
                  name="year"
                  value={state.year}
                  placeholder="year"
                  onChange={handleChange}
                  // required
              />   
              <Form.Input
                  className="form-control"
                  name="make"
                  value={state.make}
                  placeholder="make"
                  onChange={handleChange}
                  // required
              />   
              <Form.Input
                  className="form-control"
                  name="model"
                  value={state.model}
                  placeholder="model"
                  onChange={handleChange}
                  // required
              />   
              {/* <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="description"
                  onChange={handleChange}
                  // required
              />    */}
              <Form.Input
                  className="form-control"
                  name="inServiceDate"
                  value={state.inServiceDate}
                  placeholder="in service date"
                  onChange={handleChange}
                  // required
              />   
              <Form.Input
                  className="form-control"
                  name="beginningMileage"
                  value={state.beginningMileage}
                  placeholder="beginning mileage"
                  onChange={handleChange}
                  // required
              />   
              <Form.Input
                  className="form-control"
                  name="currentMileage"
                  value={state.currentMileage}
                  placeholder="current mileage"
                  onChange={handleChange}
                  // required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD ASSET
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
  ); 
}

