import { BackgroundColor, ButtonColor, TextColor } from "@/theme/color";
import { Button } from "antd";
import type { ConfigProviderProps } from 'antd';
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

type SizeType = ConfigProviderProps['componentSize'];

const SampleWork: NextPage = () => {
    const [size, setSize] = useState<SizeType>('large');

    return (
        <SampleWorkPage>
            <SampleWorkContent>
                <Title>
                    Sample Work
                </Title>
                <Content>
                    <TodoList>
                        <HostedPage>Image</HostedPage>
                        <Description>Description</Description>
                        <SourceCode>
                            <StyledButton type="link" size={size}>Source Code</StyledButton>
                        </SourceCode>
                    </TodoList>
                    <DNSManager>
                        <HostedPage>Image</HostedPage>
                        <Description>Description</Description>
                        <SourceCode>
                            <StyledButton type="link" size={size}>Source Code</StyledButton>
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
  &&&:hover,
  &&&:focus {
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
  margin-left: 1%;
`;

const TodoList = styled.div`
  margin-right: 7%;
`;

const DNSManager = styled.div`
  margin-left: 7%;
`;

const HostedPage = styled.div``;

const Description = styled.div`
  margin-top: 15%;
`;

const SourceCode = styled.div`
  margin-top: 15%;
`;