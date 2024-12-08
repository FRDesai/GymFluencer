import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 600px;
  padding: 20px auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #ff443a;
`;

const Description = styled.p`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const AccordionItem = styled.div`
  border: 1px solid #ff443a;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.div`
  padding: 15px;
  background-color: #ff443a;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  &:hover {
    background-color: #e63d33;
  }
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.isActive ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  background-color: #fff;
  color: #333;
  padding: ${(props) => (props.isActive ? "15px" : "0 15px")};
`;
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I log my workouts?",
      answer: "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
    },
    {
      question: "Can I track my calories burned?",
      answer: "Yes, you can track calories burned through the application's integrated tracking features.",
    },
    {
      question: "Is this application suitable for beginners?",
      answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
    },
    {
      question: "What features does the application offer?",
      answer: "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
    },
    {
      question: "How can I reset my password?",
      answer: "You can reset your password by going to the login screen and selecting 'Forgot Password.'",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container>
      <Title>FAQs</Title>
      <Description>
        Find answers to your questions about the GymFluencer application, designed to enhance your fitness journey.
      </Description>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent isActive={activeIndex === index}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Container>
  );
};

export default FAQs;
