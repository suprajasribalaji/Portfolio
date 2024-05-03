'use client'

import { ButtonColor, LinearGradientColor, TextColor } from "@/theme/color";
import { NextPage } from "next";
import { useRef } from "react";
import styled from "styled-components";
import HomeBgImg from "../public/images/home-bg-img.jpeg";
import { Button } from "antd";
import About from "./About";
import ExperienceAndEducation from "./ExperienceAndEducation";
import SkillsAndProficiency from "./SkillsAndProficiency";
import SampleWork from "./SampleWork";
import ReachOut from "./ReachOut";

const Home: NextPage = () => {
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const reachOutPageRef = useRef<HTMLDivElement>(null);
  const experienceAndEducationPageRef = useRef<HTMLDivElement>(null);
  const skillsAndProficiencyPageRef = useRef<HTMLDivElement>(null);
  const sampleWorkPageRef = useRef<HTMLDivElement>(null);

  const handleKnowMoreClick = () => {
    aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReachOutClick = () => {
    reachOutPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    experienceAndEducationPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeContinuationClick = () => {
    skillsAndProficiencyPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = () => {
    sampleWorkPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HomePage>
      <BackgroundImage>
        <Content>
          <TitleAndSubtitle>
            <Title>
              SUPRAJA SRI R B
            </Title>
            <SubTitle>
              Enthusiastic Developer
            </SubTitle>
          </TitleAndSubtitle>
          <ActionButtons>
            <KnowMoreButton>
              <StyledButton type="link" shape="round" size="large" onClick={handleKnowMoreClick}><TextInButton>KNOW MORE</TextInButton></StyledButton>
            </KnowMoreButton>
            <ReachOutButton>
              <StyledButton type="link" shape="round" size="large" onClick={handleReachOutClick}><TextInButton>REACH OUT</TextInButton></StyledButton>
            </ReachOutButton>
          </ActionButtons>
        </Content>
      </BackgroundImage>
      <AboutPage ref={aboutPageRef}>
        <About
          handleResumeClick={handleResumeClick}
          handleProjectClick={handleProjectClick}
        />
      </AboutPage>
      <ExperienceAndEducationPage ref={experienceAndEducationPageRef}>
        <ExperienceAndEducation 
          handleResumeContinuationClick={handleResumeContinuationClick}
        />
      </ExperienceAndEducationPage>
      <SkillsAndProficiencyPage ref={skillsAndProficiencyPageRef}>
        <SkillsAndProficiency 
          handleProjectClick={handleProjectClick}
        />
      </SkillsAndProficiencyPage>
      <SampleWorkPage ref={sampleWorkPageRef}>
        <SampleWork/>
      </SampleWorkPage>
      <ReachOutPage ref={reachOutPageRef}>
        <ReachOut />
      </ReachOutPage>
    </HomePage>
  )
}

export default Home;

const HomePage = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const BackgroundImage = styled.div`
  background: linear-gradient(0deg, ${LinearGradientColor.homeLG}, ${LinearGradientColor.homeLG}),
  url(${HomeBgImg.src});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Hanken Grotesk", sans-serif;
  color: ${TextColor.primaryWhite};
`;

const TitleAndSubtitle = styled.div`
  margin-bottom: 3%;
`;

const Title = styled.div`
  font-weight: 600; 
  font-size: 400%;
  margin-top: 56%;
`;

const SubTitle = styled.div`
  font-weight: 250;
  color: ${TextColor.tertiaryWhite};
  font-size: 180%;
  margin-top: 4%;
`;

const ActionButtons = styled.div`
  margin-top: 2%;
  display: flex;
  margin-right: 3%;
`;

const StyledButton = styled(Button)`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
`;

const KnowMoreButton = styled.div`
  margin-right: 5%;
`;

const ReachOutButton = styled.div`
  margin-left: 5%;
`;

const TextInButton = styled.span`
  font-size: 80%;
`;

const AboutPage = styled(HomePage)``;

const ExperienceAndEducationPage = styled(HomePage)``;

const SkillsAndProficiencyPage = styled(HomePage)``;

const SampleWorkPage = styled(HomePage)``;

const ReachOutPage = styled(HomePage)``;