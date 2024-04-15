'use client';

import { NextPage } from "next";
import { Button } from "antd";
import React, { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import styled from "styled-components";
import bgImage from "../public/images/bg-image.jpg";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<string>("");

  const handleOnClick = (actualPage: string): void => {
    setCurrentPage(actualPage);
  };

  return (
    <HomeComponent>
      <NavigationAndContent>
        <BackgroundImage>
          <Navigation>
            <NavigationButton type="link" onClick={() => handleOnClick("About")}>
              About
            </NavigationButton>
            <NavigationButton type="link" onClick={() => handleOnClick("Project")}>
              Project
            </NavigationButton>
            <NavigationButton type="link" onClick={() => handleOnClick("Resume")}>
              Resume
            </NavigationButton>
            <NavigationButton type="link" onClick={() => handleOnClick("Skill")}>
              Skill
            </NavigationButton>
            <NavigationButton type="link" onClick={() => handleOnClick("Contact")}>
              Contact
            </NavigationButton>
          </Navigation>
          <Content>
            <ContentIcon>
              <RxDividerVertical/>
            </ContentIcon>
            <Introduction>
              <Name>SUPRAJA SRI R B</Name>
              <Bio>Enthusiastic developer</Bio>
            </Introduction>
          </Content>
        </BackgroundImage>
      </NavigationAndContent>
      <AboutComponent>
        <About />
      </AboutComponent>
      <SkillComponent>
        <Skill />
      </SkillComponent>
      <ProjectComponent>
        <Project />
      </ProjectComponent>
      <ResumeComponent>
        <Resume />
      </ResumeComponent>
      <ContactComponent>
        <Contact />
      </ContactComponent>
    </HomeComponent>
  );
};

export default Home;

const HomeComponent = styled.div`
    margin: 0;
    padding: 0;
`;

const NavigationAndContent = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100%;
`;

const BackgroundImage = styled.div`
  width: 96%;
  height: 88vh;
  left: 0px;
  top: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url(${bgImage.src});
  background-size: cover;
  border-radius: 0px 0px 100px 0px;
`;

const Navigation = styled.nav`
  padding-left: 23%;
  padding-top: 1.6%;
`;

const NavigationButton = styled(Button)`
  &&& {
    color: #fff;
    margin-right: 2.5rem;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
  }
  &&&:hover,
  &&&:focus {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Content = styled.div`
  color: #fff;
  position: absolute;
  display: flex;
  flex: 1;
  margin-top: 24%;
  margin-left: 2%;
`;

const ContentIcon = styled.div`
  margin-top: 22%;
  svg {
    font-size: 460%;
  }
`;

const Introduction = styled.div`
  margin-top: 21%;
`;

const Name = styled.div`
  font-size: 190%;
`;

const Bio = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 110%;
  margin-top: 6%;
`;

const BaseStyledForAllComponent = styled.div`
  height: 100vh;
  width: 100%;
  position absolute;
`;

const ColoredBasedOnProps = styled(BaseStyledForAllComponent)`
  background-color: ${props => props.color};
`;

const AboutComponent = styled(ColoredBasedOnProps)`
  background-color: beige;
`;

const SkillComponent = styled(ColoredBasedOnProps)`
  background-color: gray;
`;

const ProjectComponent = styled(ColoredBasedOnProps)`
  background-color: lightBlue;
`;

const ResumeComponent = styled(ColoredBasedOnProps)`
  background-color: white;
`;

const ContactComponent = styled(ColoredBasedOnProps)`
  background-color: lavender;
`;
