import React from "react";
import styled from "styled-components";
import Hero from "../../assets/hero.png";

const MainContainer = styled.div`
  background-image: url(${Hero});
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
`;

const Content = styled.div`
  max-width: 200px;
  text-align: left;
  margin-left: 5%;
  h1 {
    font-family: "League Spartan", sans-serif;
    font-size: 3rem;
    margin-bottom: 20px;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }

  button {
    background-color: var(--color-primary, #ff443a);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d93c32; /* Darker shade on hover */
    }
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Content>
        <h1>TRACK YOUR FITNESS JOURNEY</h1>
        <button>Get Started</button>
      </Content>
    </MainContainer>
  );
};

export default Main;
