import React from "react";
import styled from "styled-components";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaClipboardList, FaChartLine } from "react-icons/fa";

const Features = () => {
  const featuresData = [
    {
      title: "Effortless Workout Logging",
      description:
        "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
      icon: <FaClipboardList />,
    },
    {
      title: "Accurate Rep Counting",
      description:
        "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
      icon: <FaDumbbell />,
    },
    {
      title: "Calorie Calculation Made Easy",
      description:
        "Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Personalized Workout Plan",
      description:
        "An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.",
      icon: <FaChartLine />,
    },
    {
      title: "Personalized Diet Plan",
      description:
        "An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.",
      icon: <FaAppleAlt />,
    },
  ];

  return (
    <Section>
      <Header>Discover Our App's Key Features</Header>
      <Description>
        GymFluencer is your ultimate fitness companion, designed to help you track your workouts with ease. Whether you’re a beginner or a seasoned athlete, our app will keep you motivated and on track.
      </Description>
      <CardsContainer>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index}>
            <IconContainer>{feature.icon}</IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Features;

// Styled Components
const Section = styled.div`
  padding: 50px 20px;
  text-align: center;
  background: #f8f9fa;
  color: #333;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-family: "League Spartan", sans-serif;
  font-weight: bold;
  color: #ff443a;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 40px;
  font-size: 1.2rem;
  color: #555;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #ff443a;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;
