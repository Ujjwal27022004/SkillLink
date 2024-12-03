import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "black" }}>
        <Container className="mx-auto w-100 d-flex justify-content-center">
          <div className="text-center" style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}>
            Copyright &copy; 2024 SkillSwap. Ujjwal Patil
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
