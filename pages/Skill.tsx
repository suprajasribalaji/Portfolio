import { Button } from "antd";
import { NextPage } from "next";
import styled from "styled-components";

const Skill: NextPage = () => {
    return (
        <SkillPage>
            <div>
                <h2>Skills</h2>
            </div>
            <div>
                <h3>Programming</h3>
                <h4>Intermediate</h4>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                </ul>
                <h4>Basics</h4>
                <ul>
                    <li>Django</li>
                    <li>Typescript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>SQL</li>
                </ul>
                <h4>Basics</h4>
                <li>GIT</li>
                <li>Postgresql</li>
            </div>
            <div>
                <h3>Tools</h3>
                <ul>
                    <li>VS Code</li>
                    <li>Eclipse</li>
                    <li>Jupyter</li>
                </ul>
            </div>
            <div>
                <Button>Explore Projects</Button>
            </div>
        </SkillPage>
    );
};

export default Skill;

const SkillPage = styled.div``;