import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Step1 from "../../assets/Step1.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import Step5 from "../../assets/step5.png";
import Step2 from "../../assets/step2.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background-color: #121212;
  color: white;
  padding: 40px 20px;
  min-height: 100vh;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: ${({ isEven }) => (isEven ? "row" : "row-reverse")};
  align-items: center;
  margin-bottom: 60px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(50px)"};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease;
  transition: opacity 0.3s, transform 0.3s;
`;

const VerticalLine = styled.div`
  border-left: 2px dotted yellow;
  height: 100%;
  margin: 0 20px;
  flex-grow: 0;
`;

const StepImage = styled.img`
  flex: 1;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const StepContent = styled.div`
  flex: 1;
  text-align: ${({ isEven }) => (isEven ? "left" : "right")};
  padding: 20px;
`;

const StepTitle = styled.h3`
  color: #ff443a;
  margin-bottom: 15px;
  font-size: 1.8em;
  font-weight: bold;
`;

const StepDescription = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 1.1em;
`;

const Process = () => {
  const steps = [
    { id: 1, title: "Step 1: Click on Get Started", description: "Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features.", image: Step1 },
    { id: 2, title: "Step 2: Log Your Exercises", description: "Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.", image: Step2 },
    { id: 3, title: "Step 3: Count Your Reps", description: "Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.", image: Step3 },
    { id: 4, title: "Step 4: Track Your Progress", description: "Review your workout stats and progress over time to stay motivated and reach your fitness goals.", image: Step4 },
    { id: 5, title: "Step 5: Review Your Progress", description: "Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.", image: Step5 },
  ];

  const [visibleSteps, setVisibleSteps] = useState({});
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for earlier/later animation trigger
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container>
      {steps.map((step, index) => (
        <div
          key={step.id}
          ref={(el) => (stepRefs.current[index] = el)}
          data-id={step.id}
        >
          <StepContainer
            isEven={index % 2 === 0}
            isVisible={visibleSteps[step.id]}
          >
            <StepImage src={step.image} alt={`Step ${step.id}`} />
            <VerticalLine />
            <StepContent isEven={index % 2 === 0}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepContainer>
        </div>
      ))}
    </Container>
  );
};

export default Process;
