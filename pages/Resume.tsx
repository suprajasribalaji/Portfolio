import { Button } from "antd";
import { NextPage } from "next";
import styled from "styled-components";

const Resume: NextPage = () => {
    return (
        <ResumePage>
            <DownloadResume>
                <Button>Download</Button>
            </DownloadResume>
            <Experience>
                <h2>Experience</h2>
                <h3>5C NETWORK | Intern - Full Stack Developer</h3>
                <h4>OCT 2023 - Present | Coimbatore, TN, INDIA</h4>
                <ul>
                    <li>Demonstrated proficiency in scripting languages like JavaScript and
                        TypeScript, showcasing a robust capability for API integration.</li>
                    <li>Played a key role in developing core platform features and the seamless
                        integration of microservices.</li>
                    <li>Enhanced JavaScript code proficiency by leveraging React, Redux, and NextJS adeptly.</li>
                    <li>Skilled in utilizing ORMs such as Sequelize and Prisma in conjunction with PostgreSQL.</li>
                    <li>Competent in a versatile technology stack encompassing ReactJS, Redux,
                        NestJS, Express for API development, Ant Design, NextJS, and the synergistic
                        ORM pairing of Sequelize and Prisma.</li>
                </ul>
            </Experience>
            <AreaOfInterest>
            <h2>Area Of Interest</h2>
            <ul>
                <li>Full Stack Development</li>
                <li>Python</li>
                <li>Data Structures</li>
            </ul>
            </AreaOfInterest>
            <Achievement>
                <h2>Achievement</h2>
                <ul>
                    <li>Attained a GOLD BATCH rating in PYTHON, a SILVER BATCH ratings in both
                        JAVA and C on Hackerrank</li>
                    <li>Successfully resolved around 86 problems on Leetcode</li>
                    <li>Secured the 3rd position in the paper presentation competition at TCE,
                        Coimbatore, in 2022</li>
                    <li>Attained a flawless score in computer science during HSC in 2020</li>
                </ul>
            </Achievement>
        </ResumePage>
    );
};

export default Resume;

const ResumePage = styled.div``;

const Experience = styled.div``;

const AreaOfInterest = styled.div``;

const DownloadResume = styled.div``;

const Achievement = styled.div``;