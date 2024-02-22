import {Component} from "react"

import Header from "../Header";


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
  ToLoginText
} from "./styledComponents";


class  Home extends Component{

    state={TrackingNumberInput:""}


    updateTrackingInput=(event)=>{
        this.setState({
            TrackingNumberInput:event.taget.value

        })
    }

    handleTrackingInput=(event)=>{
        event.preventDefault()


        
        
    }


    render(){
        return (

             <>
    <Header />

     <FormBgContainer>

     <RegisterFormContainer  onSubmit={this.handleTrackingInput}>


     <LogoText>
         SECURITY OF OUR SERVICE
     </LogoText>


    
   <LogoText>  Real-Time Tracking : </LogoText>  <ToLoginText>Courier service tracking provides real-time updates on the status and location of shipments. Customers can monitor the progress of their packages from pickup to delivery, ensuring transparency and visibility throughout the shipping process. </ToLoginText>

 <LogoText> Tracking Number Generation: </LogoText>  <ToLoginText>Each shipment is assigned a unique tracking number, allowing customers to easily identify and track their packages. This tracking number serves as a reference to retrieve detailed information about the shipment's journey. </ToLoginText>


     
      <InputDiv>
        <LabelForInput htmlFor="Tracking">ENTER YOUR TRACKING NUMBER</LabelForInput>
        <InputElement type="text" id="Tracking" placeholder="Tracking Number" onChange={this.updateTrackingInput}/>
      </InputDiv>
         
          <RegisterButton type="submit" >Track Your Consignment Here</RegisterButton>
        
</RegisterFormContainer>
         </FormBgContainer>
   
  </>

        )
    }
}
 

export default Home;
