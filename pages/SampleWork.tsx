import { BackgroundColor, ButtonColor, TextColor } from "@/theme/color";
import { Button } from "antd";
import { NextPage } from "next";
import styled from "styled-components";

import todoList from "../public/images/expedu-bg-img.jpeg";
import dnsManager from "../public/images/dns-manager.jpg";

const SampleWork: NextPage = () => {
    return (
        <SampleWorkPage>
            <SampleWorkContent>
                <Title>
                    Sample Work
                </Title>
                <Content>
                    <TaskNote>
                      <HostPage>
                        <a href="https://task-note-ab071.web.app/" target="_blank" rel="noopener noreferrer">
                          <TaskNoteHostPage />
                        </a>
                      </HostPage>
                        <Description>
                            <WorkTitle>
                                Task Note
                            </WorkTitle>
                            <WorkDescription>
                                Designed intuitive UI with ReactJS, JavaScript, Redux, and Ant Design for efficient task management, 
                                including CRUD operations, ensuring seamless user experience.
                            </WorkDescription>    
                        </Description>
                        <SourceCode>
                            <a href="https://github.com/suprajasribalaji/task_note" target="_blank" rel="noopener noreferrer">
                                <StyledButton type="link" size="large">Source Code</StyledButton>
                            </a>
                        </SourceCode>
                    </TaskNote>
                    <DNSManager>
                      <HostPage>
                        <a href="https://dns-manager-8da5e.web.app/" target="_blank" rel="noopener noreferrer">
                            <DNSManagerHostPage />
                        </a>
                      </HostPage>
                        <Description>
                            <WorkTitle>
                                DNS Manager
                            </WorkTitle>
                            <WorkDescription>
                                Designed a user-friendly UI with ReactJS, TypeScript, and Ant Design for 
                                effortless DNS record management, integrating AWS Route53, supporting CRUD operations.
                            </WorkDescription>
                        </Description>
                        <SourceCode>
                            <a href="https://github.com/suprajasribalaji/DNSManager" target="_blank" rel="noopener noreferrer">
                                <StyledButton type="link" size="large">Source Code</StyledButton>
                            </a>
                        </SourceCode>
                    </DNSManager>
                </Content>
            </SampleWorkContent>
        </SampleWorkPage>
    )
}

export default SampleWork;

const StyledButton = styled(Button)`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
`;

const SampleWorkPage = styled.div`
  height: 100vh;
  width: 100%;
  color: ${TextColor.secondaryWhite}
`;

const SampleWorkContent = styled(SampleWorkPage)`
  background-color: ${BackgroundColor.sampleWorkBg};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 350%;
  font-weight: bold;
  text-align: center;
  margin-top: 4%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-right: 25%;
`;

const TaskNote = styled.div`
  margin-right: 7%;
`;

const DNSManager = styled.div`
  margin-left: 1%;
`;

const HostPage = styled.div`
  margin-left: 37%;
`;

const TaskNoteHostPage = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${todoList.src});
  cursor: pointer;
  align-items: flex-end; 
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }

  &::after {
    content: '\u{1F517}'; 
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: ${TextColor.primaryWhite};
    font-weight: bold; 
    font-size: 120%; 
    transform: rotate(8deg);
    opacity: 0; 
    transition: opacity 0.3s ease; 
  }

  &:hover::after {
    opacity: 1;
  }
`;

const DNSManagerHostPage = styled(TaskNoteHostPage)`
  background-image: url(${dnsManager.src});
`;


const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    margin-left: 24%;
`;

const SourceCode = styled.div`
  margin-top: 15%;
  margin-left: 24%; 
`;

const WorkTitle = styled.div`
  margin-right: 5%;
  margin-bottom: 4%;
  margin-top: -6%;
  font-weight: bold;

`;

const WorkDescription = styled.div`
  line-height: 140%;
`;
