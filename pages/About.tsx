import { NextPage } from "next";
import styled from "styled-components";
import myImage from "../public/images/myImage.jpg";
import { Button } from "antd";

const About: NextPage = () => {
    return (
        <AboutPage>
            <ProfilePictureAndContent>
                <ProfilePicture>
                    <img src={myImage.src} />
                </ProfilePicture>
                <Content>
                    <div>Let's know eachother</div>
                    <div>
                        <h2>Supraja Sri R B</h2>
                        <p>
                            Graduated with 8.8 CGPA in B.E. Computer Science from Dr. N.G.P. Institute of Technology, Coimbatore, class of 2024.
                            My expertise spans across full stack development, acquired through hands-on experience and academic rigor.
                            During a 6 month internship at 5C Network Pvt Ltd, I honed my skills as a full stack developer, contributing to real-world projects and gaining valuable industry insights.
                            Passionate about problem-solving, I excel on platforms like Hackerrank and LeetCode, earning 5-star ratings in Python and 4-star ratings in Java and C on Hackerrank. 
                            Additionally, I've tackled 86 problems on LeetCode, demonstrating my dedication and skills.
                            <br /><br />
                            To know more about, Check out my resume.
                        </p>
                        <Button type="link">Explore Skills</Button>
                        <Button type="link">Expolre Projects</Button>
                    </div>
                </Content>
            </ProfilePictureAndContent>
        </AboutPage>
    );
};

export default About;

const AboutPage = styled.div``;

const ProfilePictureAndContent = styled.div`
display: flex;
flex: 1;
`;

const ProfilePicture = styled.div``;

const Content = styled.div``;

