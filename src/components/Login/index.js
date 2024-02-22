import {Component} from 'react' 

import Cookies from "js-cookie"






import {
  RegisterFormContainer,
  FormBgContainer,
  LabelForInput,
  InputElement,
  InputDiv,
  LogoIconStyling,
  LogoText,
  RegisterButton,
  LogoIconContainer,
} from "./styledComponents";


class Login extends Component{
     state = {
    usernameInput: "",
    passwordInput: "",
   
  };

  onChangeUserName = (event) =>
    this.setState({ usernameInput: event.target.value });
  onChangePassword = (event) =>
    this.setState({ passwordInput: event.target.value });



   LoginProcess = async (event,props) => {
    const {
      usernameInput,
      passwordInput,
     
    } = this.state;

    event.preventDefault();
    try {
      const apiUrl = "http://localhost:3001/login/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
         
        }),
      };
      const response = await fetch(apiUrl, options);

      // Check if the response was successful
      if (response.ok) {
        // Parse the JSON response
        const responseData = await response.json();
        console.log(responseData);
         // Log the parsed JSON data
      } else {
        // Handle errors when the response is not ok
        console.error("Failed to Login :", response.status);
        console.error("Response text:", await response.text()); // Log the response text
      }
    } catch (error) {
      console.error(error);
    }



   
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/home')
  




  };

    render(){
        return(
             <FormBgContainer>
    <RegisterFormContainer onSubmit={this.LoginProcess}>
      <LogoIconContainer>
        <LogoIconStyling />

        <LogoText>Victaman Services</LogoText>
      </LogoIconContainer>

      <InputDiv>
        <LabelForInput htmlFor="username">USERNAME</LabelForInput>
        <InputElement type="text" id="username" onChange= {this.onChangeUserName} placeholder="username"/>
      </InputDiv>
      <InputDiv>
        <LabelForInput htmlFor="password">PASSWORD</LabelForInput>
        <InputElement type="password" id="password" onChange={this.onChangePassword} placeholder="password"/>
      </InputDiv>

      <RegisterButton type="submit">Login</RegisterButton>
    </RegisterFormContainer>
  </FormBgContainer>
        )
    }

}



export default Login;
