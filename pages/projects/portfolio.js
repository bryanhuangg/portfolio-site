import {Box, Button, Container, Heading, List, ListItem, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";
import Link from "next/link";
import {ExternalLinkIcon, Icon} from "@chakra-ui/icons";
import {IoLogoGithub, IoLogoStackoverflow} from "react-icons/io5";
import {BsStack} from "react-icons/bs";

const PressStart = styled.span`
  font-family: "Press Start 2P";
  justify-content: center;
  font-size: 10px;
  font-weight: lighter;
`
const Body = styled.span`
  font-family: "VT323";
  font-size: 18px;
  font-weight: lighter;
  color: ${props => useColorModeValue("#212A3E", "#F4EEE0")};
`;

const Title = styled.span`
  font-family: "Press Start 2P";
  font-size: 13px;
  font-weight: normal;
`


const Portfolio=()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')} p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            Personal Project: Portfolio Site
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.25}>
                <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/bhuang-dev/portfolio-site" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="gray"
                                    leftIcon={<IoLogoGithub />}
                                    fontSize="lg"
                                    fontWeight="lighter"
                                >
                                    Project Repository
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>



            <SectionTransition delay={0.2}>
                <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                    Description
                </Title>
                <br/>
                <Body>
                    This project is the portfolio site you're looking at right now! This platform showcases my projects and professional experience,
                    aiming to impress potential employers. I drew inspiration from @craftzdog's next.js website tutorial and employed a similar tech stack for its development.
                    One of the highlights of this site is the captivating 3D model of a dinosaur voxel, which I personally crafted using @epthracy's MagicaVoxel and Blender.
                </Body>
            </SectionTransition>


            <SectionTransition delay={0.25}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        <Icon as={BsStack} boxSize={4} mr={2} />
                        Stack
                    </Title>
                    <List borderLeftWidth={2} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                        <ListItem>
                           Next.js
                        </ListItem>
                        <ListItem>
                            Three.js
                        </ListItem>
                        <ListItem>
                            ChakraUI
                        </ListItem>
                        <ListItem>
                            Framer Motion
                        </ListItem>
                        <ListItem>
                            Deployed on Vercel
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default Portfolio