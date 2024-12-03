import React from "react";
import "./AboutUs.css";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  backgroundColor: "white",
  justifyContent: "center",
};

const contentContainerStyle = {
  maxWidth: "50vw",
  margin: "40px",
  justifyContent: "center",
};

const titleStyle = {
  fontFamily: "Oswald, sans-serif",
  color: "black",
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "left",
  marginTop:0
};


const descriptionStyle = {
  fontFamily: "Josefin Sans, sans-serif",
  color: "black",
  fontSize: "1.2rem",
  lineHeight: "1.6",
  textAlign: "left",
  maxHeight: "100vh",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
};
const name={
  color:"red",
  fontSize: "1.5rem",
}

const AboutUs = () => {
  return (
    <div className="content1-container">
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About Me</h2>
        {/* <p style={titleStyle2}></p> */}
        <p style={descriptionStyle}>
          <i>
          <name style={name}>Hi,I am Ujjwal</name>, a passionate web developer and problem solver with a deep interest in creating impactful and user-friendly platforms. This project is a reflection of my commitment to leveraging technology to bring people together and enable mutual learning.
          </i>
        </p>
        <h2 style={titleStyle}>About Project</h2>

        <p style={descriptionStyle}>
          <br />
          Skill Swap is a web-based platform designed to connect people who want to learn new skills with those willing to teach them. Using a seamless interface, users can:

          List the skills they want to learn or teach.
          Connect with like-minded individuals for collaboration.
          Build networks and grow together in a supportive environment.
          This project combines cutting-edge web technologies, including React for the frontend and Node.js with MongoDB Atlas for the backend, ensuring a robust and efficient experience for our users.
          <br />
          <br />
          This project combines cutting-edge web technologies, including React for the frontend and Node.js with MongoDB Atlas for the backend, ensuring a robust and efficient experience for our users.<br /><br />

          Together, let’s redefine the way we learn and share knowledge.
        </p>
      </div>
      <img src={"/assets/images/about us.jpg"} style={{ maxWidth: "50vw", maxHeight: "100vh" }} />
    </div>
  );
};

export default AboutUs;
