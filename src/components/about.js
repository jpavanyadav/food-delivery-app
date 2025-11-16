import React from "react";
import User from "./user";
import Userclass from "./userclass";
import React from "react";

class About extends React.Component{
constructor(props){
    super(props);console.log("Parent Constructor");
}
  componentDidMount() {
    console.log("Parent Component Did Mount");
    
  }
   render(){
    console.log("Parent Render");
     return(<div>
        <h1>about me</h1>
    <h2>my name is jangidi pavan yadav</h2>
    <User name={"pavan"} role={"frontend engineer"}/>
    <Userclass name={"pavan class"} role={"frontend engineer class" }/>
    </div>
    )
   }
}
export default About;