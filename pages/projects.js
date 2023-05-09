import {Container, Text} from "@chakra-ui/react";
import styled from "@emotion/styled";

const PressStart = styled.span`
  font-family: "Press Start 2P";
  justify-content: center;
  font-size: 10px;
  font-weight: lighter;
`
const Projects =()=> {
    return(
        <Container>
            <Text>
                <PressStart>
                    <Text>
                        Sorry, this part of the site is still WIP! [Projects]
                    </Text>
                </PressStart>
            </Text>
        </Container>
    )
}

export default Projects