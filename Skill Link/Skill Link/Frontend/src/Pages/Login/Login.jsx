import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  const containerStyle = {
    // height: "90.4vh",
    minHeight: "79.4vh",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };

  const loginBoxStyle = {
    height: "200px",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    border: "2px solid black", // Border color
    borderRadius: "10px",
    boxShadow: "10px 10px 10px black",
    zIndex: "999",
    top:"50%"
    
  };

  const titleStyle = {
    fontSize: "50px",
    fontFamily: "Oswald, sans-serif", // Font family
    color: "black", // Text color
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "black", // Button background color
    color: "white", // Button text color
    fontFamily: "Montserrat",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const hoverButtonStyle = {
    backgroundColor: "white", // Button background color on hover
    color: "black", // Button text color on hover
    fontFamily: "Montserrat",
    border: "1px solid black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.5s ease-in-out", // Transition effect
  };

  const imageStyle = {
    position: "absolute",
    left: "20px", // Position the above image to the left
    top: "80px", // Add some space from the top
    width: "250px",
    marginBottom: "20px", // Add margin bottom to create space between image and login box
  };

  const imageBelowStyle = {
    position: "absolute",
    right: "20px", // Position the below image to the right
    bottom: "50px", // Add some space from the bottom
    width: "250px",
    marginBottom: "20px", // Add margin bottom to create space between image and login box
  };

  return (
    <div style={containerStyle}>
      <img src={"/assets/images/1.png"} alt="Above Image" style={imageStyle} />
      <div style={loginBoxStyle}>
        <h1 style={titleStyle}>LOGIN</h1>
        <div style={buttonContainerStyle}>
          <Button
            style={isHovered ? hoverButtonStyle : buttonStyle} // Apply style based on hover state
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </Button>
        </div>
      </div>
      <img src={"/assets/images/2.png"} alt="Below Image" style={imageBelowStyle} />
    </div>
  );
};

export default Login;
