import { Component } from "react";

import {Link}  from "react-router-dom"

import {
  RegisterFormContainer,
  FormBgContainer,
  LabelForInput,
  InputElement,
  InputDiv,
  LogoIconStyling,
  LogoText,
  RegisterButton,
  LogoInIconStyling,
  ToLoginText,
  LogoIconContainer,
  ButtonReuse,
} from "./styledComponents";

class Register extends Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    nameInput: "",
    genderInput: "",
    mailIdInput: "",
     errormessage:"",
  };

  onChangeUserName = (event) =>
    this.setState({ usernameInput: event.target.value });
  onChangePassword = (event) =>
    this.setState({ passwordInput: event.target.value });
  onChangeName = (event) => this.setState({ nameInput: event.target.value });
  onChangeGender = (event) =>
    this.setState({ genderInput: event.target.value });
  onChangeUserMailId = (event) =>
    this.setState({ mailIdInput: event.target.value });

  registrationProcess = async (event) => {
    const {
      usernameInput,
      passwordInput,
      nameInput,
      genderInput,
      mailIdInput,
     
    } = this.state;

    event.preventDefault();
    try {
      const apiUrl = "http://localhost:3001/register/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
          name: nameInput,
          gender: genderInput,
          mailId: mailIdInput,
        }),
      };
      const response = await fetch(apiUrl, options);

      // Check if the response was successful
      if (response.ok) {
        // Parse the JSON response
        const responseData = await response.json();
        console.log(responseData); // Log the parsed JSON data
      } else {
        // Handle errors when the response is not ok
        console.error("Failed to register user. Status:", response.status);
       const errorResponse=  await response.text();
       this.setState({errormessage:errorResponse}) // Log the response text
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <FormBgContainer>
        <RegisterFormContainer onSubmit={this.registrationProcess}>
          <ButtonReuse>
          <Link to="/login">
            <LogoIconContainer>
            
              <ToLoginText>Already have an Account Login Here</ToLoginText>

              <LogoInIconStyling />

            </LogoIconContainer>

             </Link>
          </ButtonReuse>

          <LogoIconStyling />
          <LogoText>Victaman Services</LogoText>
          <InputDiv>
            <LabelForInput htmlFor="NAME">NAME</LabelForInput>
            <InputElement type="text" id="NAME" onChange={this.onChangeName} />
          </InputDiv>
          <InputDiv>
            <LabelForInput htmlFor="username">USERNAME</LabelForInput>
            <InputElement
              type="text"
              id="username"
              onChange={this.onChangeUserName}
              placeholder="username"
            />
          </InputDiv>
          <InputDiv>
            <LabelForInput htmlFor="password">PASSWORD</LabelForInput>
            <InputElement
              type="password"
              id="password"
              onChange={this.onChangePassword}
              placeholder="password"
            />
          </InputDiv>
          <InputDiv>
            <LabelForInput htmlFor="GENDER">GENDER</LabelForInput>
            <InputElement
              type="text"
              id="GENDER"
              onChange={this.onChangeGender}
              placeholder="gender"
            />
          </InputDiv>
          <InputDiv>
            <LabelForInput htmlFor="MAIL">MAIL ID</LabelForInput>
            <InputElement
              type="text"
              id="MAIL"
              onChange={this.onChangeUserMailId}
              placeholder="mail id"
            />
          </InputDiv>
          <RegisterButton type="submit">Register Here</RegisterButton>
        </RegisterFormContainer>
      </FormBgContainer>
    );
  }
}

export default Register;
