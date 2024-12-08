import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrapper>
      <LeftSide>
        <HelpText>
          <h2>Need More Help?</h2>
          <p>
            Contact us for any additional questions or support regarding the app.
          </p>
        </HelpText>
      </LeftSide>
      <RightSide>
        <Form>
          <Heading>Contact Us</Heading>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </RightSide>
    </ContactWrapper>
  );
};

export default Contact;

// Styled Components
const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background-color: #ffece8;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightSide = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  text-align: center;
  color: #ff443a;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  outline: none;

  &:focus {
    border-color: #ff443a;
    background-color: #fff;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  outline: none;

  &:focus {
    border-color: #ff443a;
    background-color: #fff;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff443a;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63e34;
  }
`;

const HelpText = styled.div`
  max-width: 400px;
  color: #333;

  h2 {
    color: #ff443a;
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
