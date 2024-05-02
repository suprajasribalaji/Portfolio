import { NextPage } from "next";
import styled from "styled-components";
import ExpEduBackgroundImage from "../public/images/expedu-bg-img.jpeg";
import { ButtonColor, LinearGradientColor, TextColor } from "@/theme/color";
import type { ConfigProviderProps } from 'antd';
import { Button } from "antd";
import { useState } from "react";

type SizeType = ConfigProviderProps['componentSize'];

const ExperienceAndEducation: NextPage = () => {

    const [size, setSize] = useState<SizeType>('large');

    return (
        <ExperienceAndEducationPage>
            <BackgroundImage>
                <ExperienceAndEducationContent>
                    <Title>
                        Experience & Education
                    </Title>
                    <Content>
                        <InternshipExperience>
                            <InternshipEndYear>
                                2024
                            </InternshipEndYear>
                            <Internship>
                                <InternshipDesignation>INTERN - FULL STACK DEVELOPER</InternshipDesignation>
                                <AboutInternship>
                                    <InternshipAt>
                                        5C NETWORK PVT LTD, Coimbatore, TN, India
                                    </InternshipAt>
                                    <About>
                                        Developed, installed, and configured internal applications, as well as new application releases into test and production environments. 
                                        As an intern, I undertook various tasks and successfully resolved numerous bugs in the production environment across our company's products.
                                    </About>
                                </AboutInternship>
                            </Internship>
                        </InternshipExperience>
                        <UGEducation>
                            <UGPassedOutYear>
                                2024
                            </UGPassedOutYear>
                            <UG>
                                <UGBranch>
                                    B.E IN COMPUTER SCIENCE AND ENGINEERING
                                </UGBranch>
                                <AboutUG>
                                    Dr. N.G.P. Institute of Technology
                                    <br/>
                                    Coimbatore, TN, India
                                    <br/>
                                    CGPA: 8.8 / 10
                                </AboutUG>
                            </UG>
                        </UGEducation>
                        <HSCEducation>
                            <HSCPassedOutYear>
                                2020
                            </HSCPassedOutYear>
                            <HSC>
                                <HSCBranch>
                                    HIGHER SECONDAY SCHOOL CERTIFICATE (HSC)
                                </HSCBranch>
                                <AboutHSC>
                                    Rajan Matriculation Higher Secondary School
                                    <br/>
                                    Madurai, TN, India
                                    <br/>
                                    Percentage: 73.83 / 100
                                </AboutHSC>                            
                            </HSC>
                        </HSCEducation>
                    </Content>
                </ExperienceAndEducationContent>
                <ActionButton>
                    <NextPageButton>
                        <DownloadButton>
                            <StyledButton type="link" shape="round" size={size}>Download</StyledButton>
                        </DownloadButton>
                        <SkillsAndProficiencyButton>
                            <StyledButton type="link" shape="round" size={size}>Skills & Proficiency</StyledButton>
                        </SkillsAndProficiencyButton>
                    </NextPageButton>
                </ActionButton>
            </BackgroundImage>
        </ExperienceAndEducationPage>
    )
}

export default ExperienceAndEducation;

const ExperienceAndEducationPage = styled.div`
    margin: 0;
    padding: 0;
    color: ${TextColor.primaryWhite};
`;

const BackgroundImage = styled.div`
    background: linear-gradient(0deg, ${LinearGradientColor.expeduLG}, ${LinearGradientColor.expeduLG}),
    url(${ExpEduBackgroundImage.src});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const ExperienceAndEducationContent = styled.div`
    display: flex;
    padding-top: 6%;
    margin-left: 8.5%;
`;

const Title = styled.div`
    font-family: "Fira Sans", sans-serif;
    font-weight: bold;
    font-size: 370%;
    margin-top: 4%;
    margin-right: 10%;
`;

const Content = styled.div`
    margin-top: 2%;
    margin-left: 10%;
`;

const StyledDivForTwoInnerDiv = styled.div`
    display: flex;
`;

const InternshipEndYear = styled.div`
    font-family: "Public Sans", sans-serif;
    font-size: 100%;
    font-weight: 800;
    font-size: 96%;
`;

const Internship = styled.div`
    font-family: "DM Sans", sans-serif;
    margin-left: 17%;
`;

const InternshipExperience = styled(StyledDivForTwoInnerDiv)`
    margin-right: 19%;
    text-align: justify;
`;

const InternshipDesignation = styled.div`
    font-weight: 700;
    font-size: 96%;
`;

const AboutInternship = styled.div`
    font-size: 84%;
`;

const InternshipAt = styled.div`
    padding-top: 4%;
`;

const About = styled.div`
    padding-top: 5%;
    line-height: 154%;
`;

const UGEducation = styled(StyledDivForTwoInnerDiv)`
    margin-top: 4%;
    margin-right: 3%;
`;

const UGPassedOutYear = styled(InternshipEndYear)``;

const UG = styled.div`
    font-family: "DM Sans", sans-serif;
    margin-left: 14%;
`;

const UGBranch = styled(InternshipDesignation)``;

const AboutUG= styled.div`
    padding-top: 4%;
    line-height: 154%;
    font-size: 84%;
`;

const HSCEducation = styled(StyledDivForTwoInnerDiv)`
    margin-top: 4%;
    margin-right: 3%;
`;

const HSCPassedOutYear = styled(InternshipEndYear)``;

const HSC = styled(UG)``;

const HSCBranch = styled(InternshipDesignation)``;

const AboutHSC = styled(AboutUG)``;

const ActionButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 7%;
    margin-top: 5%;
`;

const NextPageButton = styled.div`
    display: flex;
    flex-direction: row;
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

const DownloadButton = styled.div`
  margin-right: 16%;
`;

const SkillsAndProficiencyButton = styled.div`
  margin-right: 12%;
`;