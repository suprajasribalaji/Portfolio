import { ButtonColor, LinearGradientColor, TextColor } from "@/theme/color";
import { NextPage } from "next";
import styled from "styled-components";
import SkillsProficiencyBgImg from "../public/images/skillprof-bg-img.jpeg";
import { Button, ConfigProviderProps, Progress } from "antd";
import { useState } from "react";

type SizeType = ConfigProviderProps['componentSize'];

const SkillsAndProficiency: NextPage = () => {

    const [size, setSize] = useState<SizeType>('large');

    return (
        <SkillsAndProficiencyPage>
            <BackgroundImage>
                <SkillsAndProficiencyContent>
                    <Title>
                        Skills &<br/>Proficiencies
                    </Title>
                    <AboutSkillsAndProficiency>
                        <TechnicalSkillsAndProficiency>
                            <TechnicakSkillsTitle>
                                TECHNICAL SKILLS
                            </TechnicakSkillsTitle>
                            <TechnicalSkills>
                                <Skills>
                                    Python, JavaScript, TypeScript
                                    <TechnicalSkillsProgressBar>
                                        <Progress percent={70} strokeColor='#b4b0ab' trailColor="#FFFFFF" strokeLinecap="butt" showInfo={false} />
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                                <Skills>
                                    ReactJS, Redux, NextJS, ExpressJS, CSS (Bootstrap, Ant Design), REST API
                                    <TechnicalSkillsProgressBar>
                                        <Progress percent={50} strokeColor='#b4b0ab' trailColor="#FFFFFF"  strokeLinecap="butt" showInfo={false} />
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                                <Skills>
                                    Django, AWS, MongoDB, GIT, ORM 
                                    <TechnicalSkillsProgressBar>
                                        <Progress percent={30} strokeColor='#b4b0ab' trailColor="#FFFFFF"  strokeLinecap="butt" showInfo={false} />
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                            </TechnicalSkills>
                        </TechnicalSkillsAndProficiency>
                        <ToolsAndProficiency>
                            <ToolsTitle>
                                TOOLS
                            </ToolsTitle>
                            <Tools>
                                <Tool>
                                    IDE - Visual Studio Code
                                    <ToolsProgressBar>
                                        <Progress percent={85} strokeColor='#b4b0ab' trailColor="#FFFFFF"  strokeLinecap="butt" showInfo={false}/>
                                    </ToolsProgressBar>
                               </Tool>
                                <Tool>
                                    DESIGN TOOL - CANVA
                                    <ToolsProgressBar>
                                        <Progress percent={30}  strokeColor='#b4b0ab' trailColor="#FFFFFF"  strokeLinecap="butt" showInfo={false} />
                                    </ToolsProgressBar>
                                </Tool>
                            </Tools>
                        </ToolsAndProficiency>
                    </AboutSkillsAndProficiency>
                    <ActionButton>
                        <DownloadResumeButton>
                            <StyledButton type="link" shape="round" size={size}>Download</StyledButton>
                        </DownloadResumeButton>
                        <SampleWorkButton>
                            <StyledButton type="link" shape="round" size={size}>Sample Work</StyledButton>
                        </SampleWorkButton>
                    </ActionButton>
                </SkillsAndProficiencyContent>
            </BackgroundImage>
        </SkillsAndProficiencyPage>
    )
}

export default SkillsAndProficiency;

const SkillsAndProficiencyPage = styled.div`
    margin: 0;
    padding: 0;
    color: ${TextColor.primaryWhite};
`;

const BackgroundImage = styled.div`
    background: linear-gradient(0deg, ${LinearGradientColor.expeduLG}, ${LinearGradientColor.expeduLG}),
    url(${SkillsProficiencyBgImg.src});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const SkillsAndProficiencyContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin-top: 6.5%;
    margin-left: 8.5%;
    font-family: "Fira Sans", sans-serif;
    font-weight: bold;
    font-size: 350%;
`;

const AboutSkillsAndProficiency = styled.div`
    display: flex;
    margin-left: 9%;
    margin-top: 5.5%;
`;

const TechnicalSkillsAndProficiency = styled.div``;

const TechnicakSkillsTitle = styled.div`
    font-family: "PT Sans Caption", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 120%;
`;

const TechnicalSkills = styled.div`
    font-family: "DM Sans", sans-serif;
    margin-top: 9%;
    font-size: 110%;
    color: ${TextColor.SemiLightWhite};
    padding-right: 48%;
`;

const Skills = styled.div`
    margin-top: 8%;
`;

const ToolsAndProficiency = styled.div`
    margin-left: 6%;
    margin-right: 6%;
`;

const ToolsTitle = styled(TechnicakSkillsTitle)``;

const Tools = styled.div`
    margin-top: 28%;
`;

const Tool = styled.div`
    margin-bottom: 20%;
    color: ${TextColor.SemiLightWhite};
`;

const TechnicalSkillsProgressBar = styled.div`
    padding-top: 6%;
`;

const ToolsProgressBar = styled.div`
    padding-top: 10%;
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

const ActionButton = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 77%;
`;

const DownloadResumeButton = styled.div`
  margin-right: 6%;
`;

const SampleWorkButton = styled.div`
  margin-left: 6%;
`;