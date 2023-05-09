import {Container, Text} from "@chakra-ui/react";
import styled from "@emotion/styled";

const PressStart = styled.span`
  font-family: "Press Start 2P";
  justify-content: center;
  font-size: 10px;
  font-weight: lighter;
`
const Contact =()=> {
    return(
        <Container>
            <PressStart>
                <Text>
                   Sorry, this part of the site is still WIP! [Contact]
                </Text>
            </PressStart>
        </Container>
    )
}

export default Contact