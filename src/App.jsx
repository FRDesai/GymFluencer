import { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Process from "./components/Process/Process";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";
import Hero from "./assets/hero.png";
import FAQs from "./components/Faqs/Faqs";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarContainer className={isScrolled ? "scrolled" : ""}>
        <SubContainer>
          <NavItem onClick={() => handleScrollToSection("features")}>Features</NavItem>
          <NavItem onClick={() => handleScrollToSection("process")}>Diet Plan</NavItem>
          <NavItem onClick={() => handleScrollToSection("workout")}>Workout Plans</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem onClick={() => handleScrollToSection("faqs")}>FAQs</NavItem>
          <NavItem onClick={() => handleScrollToSection("contact")}>Contact Us</NavItem>
        </SubContainer>
        <SubContainer>
          <LogoName>GymFluencer</LogoName>
        </SubContainer>
      </NavbarContainer>
      <MainContainer>
        <Content>
          <h1>TRACK YOUR FITNESS JOURNEY</h1>
          <button>Get Started</button>
        </Content>
      </MainContainer>
      <Section id="features">
        <Features />
      </Section>
      <Section id="process">
        <Process />
      </Section>
      <Section id="faqs">
        <FAQs />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}

export default App;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
  z-index: 10;
  color: white;

  transition: background-color 0.3s, backdrop-filter 0.3s;

  &.scrolled {
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const SubContainer = styled.div`
  display: flex;
`;

const LogoName = styled.div`
  margin: 0 15px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-primary);
`;

const NavItem = styled.div`
  margin: 0 15px;
  font-size: 1rem;
  font-weight: light;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    color: var(--color-primary, #ff443a);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background-color: var(--color-primary, #ff443a);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MainContainer = styled.div`
  background-image: url(${Hero});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  animation: fadeIn 1s ease-in-out, moveBackground 10s infinite alternate;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveBackground {
    from {
      background-position: center top;
    }
    to {
      background-position: center bottom;
    }
  }
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
    animation: slideIn 1.5s ease-out, fadeIn 1.5s ease-in;
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
      background-color: #d93c32;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Section = styled.section`
  padding: 100px 0; /* Add top padding for spacing under the navbar */
`;
