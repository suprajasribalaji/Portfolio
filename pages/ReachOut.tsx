import { NextPage } from "next";
import styled from "styled-components";
import { LinkedinFilled, InstagramOutlined, MailOutlined } from "@ant-design/icons";

import reachOutSideImg from "../public/images/reach-out.jpeg";
import { BackgroundColor, TextColor } from "@/theme/color";


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
                    <Email>suprajasri.balaji@gmail.com</Email>
                </ReachOutByMail>
                <ConnectWithMe>
                    <ConnectWithMeTitle>CONNECT WITH ME</ConnectWithMeTitle>
                    <SocialMedialProfileLinks>
                        <InstagramProfileLink>
                            <InstagramOutlined />
                        </InstagramProfileLink>
                        <LinkedInProfileLink>
                            <LinkedinFilled />
                        </LinkedInProfileLink>
                        <EmailIDLink>
                            <MailOutlined />
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
`;

const ReachOutByMail = styled.div`
    margin-top: 45%;
`;

const Name = styled.div`
    font-size: 120%;
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
`;

const SocialMedialProfileLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8%;
    font-size: 198%;
`;

const InstagramProfileLink = styled.div``;

const LinkedInProfileLink = styled.div`
    margin-left: 15%;
`;

const EmailIDLink = styled(LinkedInProfileLink)``;