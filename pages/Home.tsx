'use client'

import { ButtonColor, LinearGradientColor, TextColor } from "@/theme/color";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import HomeBgImg from "../public/images/home-bg-img.jpeg";
import { Button } from "antd";
import type { ConfigProviderProps } from 'antd';
import About from "./About";
import ExperienceAndEducation from "./ExperienceAndEducation";
import SkillsAndProficiency from "./SkillsAndProficiency";

type SizeType = ConfigProviderProps['componentSize'];

const Home: NextPage = () => {
  const [size, setSize] = useState<SizeType>('large');

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
              <StyledButton type="link" shape="round" size={size}><TextInButton>KNOW MORE</TextInButton></StyledButton>
            </KnowMoreButton>
            <ReachOutButton>
              <StyledButton type="link" shape="round" size={size}><TextInButton>REACH OUT</TextInButton></StyledButton>
            </ReachOutButton>
          </ActionButtons>
        </Content>
      </BackgroundImage>
      <AboutPage>
        <About />
      </AboutPage>
      <ExperienceAndEducationPage>
        <ExperienceAndEducation />
      </ExperienceAndEducationPage>
      <SkillsAndProficiencyPage>
        <SkillsAndProficiency />
      </SkillsAndProficiencyPage>
    </HomePage>
  )
}

export default Home;

const HomePage = styled.div`
  margin: 0;
  padding: 0;
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
  margin-top: 63%;
`;

const SubTitle = styled.div`
  font-weight: 250;
  color: ${TextColor.secondaryWhite};
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
  &&&:hover,
  &&&:focus {
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