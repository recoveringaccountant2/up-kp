import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // smsNotifications: '',
    password: '',
    passwordConf: ''
  })

  const [selectedFile, setSelectedFile] = useState('')


  const navigate = useNavigate() // navigate hook from react-router

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // create formData from our state
    // you only to do this when you're sending over a file/photo

    const formData = new FormData();

    // add our photo to the formData
    formData.append('photo', selectedFile);

    // the same for the rest of our state
    // option 1 
    // add the state one by one
    // formData.append('username', state.username)
    // formData.append('email', state.email); // and so on

    //option 2 use for .. in loop to append the rest of the items to our form Data

    for (let key in state) {
      formData.append(key, state[key])
    }

    console.log(formData, ' <--- This Will show nothing!!')

    console.log(formData.forEach((item) => console.log(item)), " <-- this is how you look inside form data")

    try {

      await userService.signup(formData)
      // after we signup, we can navigare/and decode our token and set in local storage
      props.handleSignUpOrLogin() // <- get the token from localstorage and decode it
      // and set the user state in the App.js componennt
      navigate('/') // < route the user to our home component (all our routes are defined in App.js)

    } catch (err) {
      // err, is defined in the throw new Error in the 
      // userServiceSignUp
      setError(err.message)
    }

  }

  function handleFileInput(e) {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0])
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>


      <Header as="h2">World's <span>CRUD</span>diest <span>MERN</span>tenance Tool</Header>

        <Header as="h2" textAlign="center">
          <Image src="logo192.png" /> Join <span>UpKeep</span> Today!
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>

            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />

            {/* <Form.Group> */}
            <Form.Input
              name="firstName"
              placeholder="first name"
              value={state.firstName}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="lastName"
              placeholder="last name"
              value={state.lastName}
              onChange={handleChange}
              required
            />
            {/* </Form.Group> */}

            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            {/* <Form.Group> */}
            <Form.Input
              type="phone"
              name="phone"
              placeholder="phone"
              value={state.phone}
              onChange={handleChange}
              required
            />
            {/* 
              <Checkbox

                name="smsNotifications"
                label="Receive SMS notifications? Carrier charges may apply."
                // value={state.smsNotifications}
                checked={state.smsNotifications}
                onChange={handleChange}

              />
            </Form.Group> */}
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="confirm password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />


            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
                required
              />
            </Form.Field>


            <Button
              fluid
              size="large"
              type="submit"
              className="btn"
            >
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
