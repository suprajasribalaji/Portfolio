import { BackgroundColor } from "@/theme/color";
import { NextPage } from "next";
import styled from "styled-components";

const SampleWork: NextPage = () => {
    return (
        <SampleWorkPage>

        </SampleWorkPage>
    )
}

export default SampleWork;

const SampleWorkPage = styled.div`
    // background-color: ${BackgroundColor.sampleWorkBg};
    height: 100vh;
    width: 100%;
`;