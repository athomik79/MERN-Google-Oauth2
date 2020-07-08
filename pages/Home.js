import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://1111arts.org/wp-content/uploads/2017/10/programming-code-abstract-technology-background-software.jpg">
        <h1>Code Connect</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Code Connect!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Code Connect is the perfect app to connect software developers and users interested in code for personal or business use.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;