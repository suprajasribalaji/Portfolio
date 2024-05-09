import { BackgroundColor, TextColor } from "@/theme/color";
import { Card, Carousel } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";

const { Meta } = Card;

const taskNoteImageSrc = "/images/expedu-bg-img.jpeg";
const taskNoteDemoLink = "https://task-note-ab071.web.app/";
const taskNoteSourceCodeLink = "https://github.com/suprajasribalaji/task_note";

const dnsManagerImageSrc = "/images/dns-manager.jpg";
const dnsManagerDemoLink = "https://dns-manager-8da5e.web.app/";
const dnsManagerSourceCodeLink = "https://github.com/suprajasribalaji/DNSManager";

const portfolioImageSrc = "/images/portfolio.jpeg";
const portfolioDemoLink = "";
const portfolioSourceCodeLink = "https://github.com/suprajasribalaji/portfolio";

const projectDetails = [
  {
    title: "Task Note",
    description:
      "Designed intuitive UI with ReactJS, JavaScript, Redux, and Ant Design for efficient task management, including CRUD operations, ensuring seamless user experience.",
    demoLink: `${taskNoteDemoLink}`,
    sourceCodeLink: `${taskNoteSourceCodeLink}`,
    imageSrc: `${taskNoteImageSrc}`,
  },
  {
    title: "DNS Manager",
    description:
      "Designed a user-friendly UI with ReactJS, TypeScript, and Ant Design for effortless DNS record management, integrating AWS Route53, supporting CRUD operations.",
    demoLink: `${dnsManagerDemoLink}`,
    sourceCodeLink: `${dnsManagerSourceCodeLink}`,
    imageSrc: `${dnsManagerImageSrc}`,
  },
  {
    title: "Portfolio",
    description:
      "Driven by Next.js, TypeScript, and MongoDB, our portfolio exemplifies sophistication in design and functionality. It delivers a refined and elegant user interface.",
    demoLink: `${portfolioDemoLink}`,
    sourceCodeLink: `${portfolioSourceCodeLink}`,
    imageSrc: `${portfolioImageSrc}`,
  },
];

const SampleWork: NextPage = () => {
  return (
    <SampleWorkPage>
      <SampleWorkContent>
        <Title>
          Sample Work
        </Title>
        <Content>
          <StyledCarousel arrows dots={false} slidesPerRow={3}>
            {
              projectDetails.map((project, index) => (
                <ProjectDetails key={index}>
                  <StyledCard
                    style={{ width: 300 }}
                    cover={
                      <Image
                        alt={project.title}
                        src={project.imageSrc}
                        width={300} // Specify width
                        height={200} // Specify height
                      />
                    }
                    actions={[
                      <StyledCardActions key="actions">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                        <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </StyledCardActions>
                    ]}
                  >
                    <StyledMeta
                      title={project.title}
                      description={project.description}
                    />
                  </StyledCard>
                </ProjectDetails>
              ))
            }
          </StyledCarousel>
        </Content>
      </SampleWorkContent>
    </SampleWorkPage>
  )
}

export default SampleWork;

const StyledCarousel = styled(Carousel)`
  margin-left: 10%;
  margin-right: 10%;
  overflow: hidden; 
`;

const StyledCard = styled(Card)`
  margin-left: 10%;
`;

const StyledCardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMeta = styled(Meta)`
  text-align: justify;
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
  margin-top: 5%;
  gap: 4%;
  justify-content: center;
`;

const ProjectDetails = styled.div``;
