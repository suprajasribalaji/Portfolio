'use client'

import React, { useState } from "react";
import { Alert, Button, Space } from "antd";
import { BackgroundColor, ButtonColor, TextColor } from "@/theme/color";
import ProfilePicture from "../public/images/myImage.jpg";
import styled from "styled-components";


type Props = {
    handleResumeClick: () => void,
    handleProjectClick: () => void,
    resumeURL: string,
}

const About: React.FC<Props> = ({ handleResumeClick, handleProjectClick, resumeURL }) => {
    const [isResumeClicked, setIsResumeClicked] = useState<boolean>(false);

    const handleDownloadButton = () => {
        console.log(resumeURL, ' ------------');
        const link = document.createElement('a');
        link.href = resumeURL;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsResumeClicked(false);
    };

    return (
        <AboutPage>
            <AboutContent>
                <Title>
                    <TitleHeading>About Me</TitleHeading>
                </Title>
                <Content>
                    With 7 months' experience and an internship at 5C Network, I excel in full-stack development with 
                    JavaScript and TypeScript. Committed to resilient solutions, I drive pioneering projects and seek 
                    growth opportunities. My dedication to excellence fuels continuous skill enhancement, 
                    empowering me to contribute meaningfully to full-stack development.                
                </Content>
                <ResumeAlertPopup>
                    {
                        isResumeClicked && 
                            <Alert
                                message="Resume Options"
                                description="Do you want to download or view the resume?"
                                style={{ width: '100%'}}
                                action={
                                    <Space style={{ marginRight: '2%'}}>
                                        <StyledButton type="link" onClick={handleDownloadButton}> Download </StyledButton>
                                        <StyledButton type="link" onClick={() => {handleResumeClick(); setIsResumeClicked(false)}}> View </StyledButton>
                                    </Space>
                                }
                                onClose={() => setIsResumeClicked(false)}
                                closable
                            />
                    }
                </ResumeAlertPopup>
                <Buttons>
                    <ResumeButton>
                        <StyledButton type="link" shape="round" size="large" onClick={() => setIsResumeClicked(true)}>Resume</StyledButton>
                    </ResumeButton>
                    <ProjectButton>
                        <StyledButton type="link" shape="round" size="large" onClick={handleProjectClick}>Project</StyledButton>
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
  &&&:hover {
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

const ResumeAlertPopup = styled.div`
  margin-top: 6%;
`;