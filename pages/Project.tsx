import { NextPage } from "next";
import styled from "styled-components";
import { Button } from "antd";

const Project: NextPage = () => {
    return (
        <ProjectPage>
            <div>
                <h2>Project</h2>
                <div>
                    <h3>TODO LIST | 2023</h3>
                    <p>
                        Crafted an elegant user interface (UI) for a website that allows users to
                        manage tasks and their associated details with ease.
                        This was made possible through the integration of ReactJS with Redux and
                        Ant Design (Antd), resulting in a seamless and visually appealing user
                        experience.
                    </p>
                    <Button type="link">Host Link</Button>
                    <Button type="link">Source Code</Button>
                </div>
                <div>
                    <h3>Portfolio | 2024</h3>
                    <p>

                    </p>
                    <Button type="link">Host Link</Button>
                    <Button type="link">Source Code</Button>
                </div>
            </div>
            
        </ProjectPage>
    );
};

export default Project;

const ProjectPage = styled.div`

`;