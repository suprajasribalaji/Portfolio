'use client'

import { Button } from "antd";
import { NextPage } from "next";
import ProfilePicture from "../public/images/myImage.jpg";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, TextColor } from "@/theme/color";
import type { ConfigProviderProps } from 'antd';
import { useState } from "react";

type SizeType = ConfigProviderProps['componentSize'];

const About: NextPage = () => {

  const [size, setSize] = useState<SizeType>('large');

    return (
        <AboutPage>
            <AboutContent>
                <Title>
                    <TitleHeading>About Me</TitleHeading>
                </Title>
                <Content>
                With six months of experience and an internship at 5C Network, I have honed my skills in full-stack development utilizing JavaScript and TypeScript. Committed to delivering resilient solutions, I actively participate in pioneering projects and consistently pursue avenues for personal and professional growth. My unwavering dedication to excellence motivates me to consistently improve my skill set, enabling me to make meaningful contributions to the progression of full-stack development endeavors.
                </Content>
                <Buttons>
                    <ResumeButton>
                        <StyledButton type="link" shape="round" size={size}>Resume</StyledButton>
                    </ResumeButton>
                    <ProjectButton>
                        <StyledButton type="link" shape="round" size={size}>Project</StyledButton>
                    </ProjectButton>                    
                </Buttons>
            </AboutContent>
            <ProfilePhoto>
                <StyledImage src={ProfilePicture.src} />
            </ProfilePhoto>
        </AboutPage>
    )
}

export default About;

const AboutPage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${BackgroundColor.aboutBg};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const AboutContent = styled.div`
    margin-left: 13%;
    margin-bottom: 2%;
    line-height: 200%;
`;

const Title = styled.div`
    font-family: "Hanken Grotesk", sans-serif;
`;

const TitleHeading = styled.h3`
    font-size: 400%;
`;

const Content = styled.div`
    text-align: justify;
    font-size: 120%;
`;

const Buttons = styled.div`
    margin-top: 8%;
    display: flex;
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

const ResumeButton = styled.div`
  margin-left: 5%;
`;

const ProjectButton = styled.div`
    margin-left: 8%;
`;

const ProfilePhoto = styled.div`
    margin-left: 6%;
    margin-right: 15%;
`;

const StyledImage = styled.img`
    border-radius: 50%;
    object-fit: cover;
`;