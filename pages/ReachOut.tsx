import styled from "styled-components";
import { MailOutlined, LinkedinFilled, GithubOutlined } from "@ant-design/icons";

import reachOutSideImg from "../public/images/reach-out.jpeg";
import { BackgroundColor, TextColor } from "@/theme/color";
import { Button } from "antd";
import { NextPage } from "next";


const ReachOut: NextPage = () => {
    return (
        <ReachOutPage>
            <SideImage />
            <Content>
                <Title>
                    Reach out
                </Title>
                <ReachOutByMail>
                    <Name>Supraja Sri R B</Name>
                    <Email>
                        <StyledButton type="link" href="mailto:suprajasri.balaji@gmail.com">suprajasri.balaji@gmail.com</StyledButton>
                    </Email>
                </ReachOutByMail>
                <ConnectWithMe>
                    <ConnectWithMeTitle>CONNECT WITH ME</ConnectWithMeTitle>
                    <SocialMedialProfileLinks>
                        <LinkedInProfileLink>
                            <StyledButton type="link" href="https://www.linkedin.com/in/suprajasrirb/" target="_blank" rel="noopener noreferrer" icon={<LinkedinFilled  style={{fontSize: '180%'}} />}></StyledButton>
                        </LinkedInProfileLink>
                        <GithubProfileLink>
                            <StyledButton type="link" href="https://github.com/suprajasribalaji" target="_blank" rel="noopener noreferrer" icon={<GithubOutlined  style={{fontSize: '180%'}} />}></StyledButton>
                        </GithubProfileLink>
                        <EmailIDLink>
                            <StyledButton type="link" href="mailto:suprajasri.balaji@gmail.com" icon={<MailOutlined style={{fontSize: '180%'}} />}></StyledButton>
                        </EmailIDLink>
                    </SocialMedialProfileLinks>
                </ConnectWithMe>
            </Content>
        </ReachOutPage>
    )
}

export default ReachOut;

const ReachOutPage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${BackgroundColor.reachOutBg};
    color: ${TextColor.primaryWhite};
    display: flex;
`;

const SideImage = styled.div`
    position: relative;
    width: 27.6%;
    height: 80vh;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-image: url(${reachOutSideImg.src});

    margin-top: 5%;
    margin-left: 5.8%;
    
`;

const Content = styled.div`
    margin-top: 12%;
    margin-left: 6%;
    font-weight: bold;
    font-family: "Fira Sans", sans-serif;
`;

const Title = styled.div`
    font-size: 160%;
    margin-left: 7%;
`;

const ReachOutByMail = styled.div`
    margin-top: 45%;
`;

const Name = styled.div`
    font-size: 120%;
    margin-left: 7%;
`;

const Email = styled.div`
    margin-top: 7%;
    font-size: 86%;
`;

const ConnectWithMe = styled.div`
    margin-top: 63%;
`;

const ConnectWithMeTitle = styled.div`
    font-size: 80%;
    margin-left: 6%;
`;

const SocialMedialProfileLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    margin-left: 6%;
`;

const LinkedInProfileLink = styled.div``;

const GithubProfileLink = styled.div`
    margin-left: 5%;
`;

const EmailIDLink = styled(GithubProfileLink)``;

const StyledButton = styled(Button)`
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    color: ${TextColor.lightWhite};
  }
`;