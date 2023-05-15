import {Box, Container, SimpleGrid, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";
import { WorkGridItem } from "../components/grid-items";



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
                <SectionTransition delay={0}>
                    <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')}
                         p={2} align = "center" mb={5}>
                        <PressStart>
                            <Text color = "#212A3E">
                                Projects I have recently worked on:
                            </Text>
                        </PressStart>
                    </Box>
                </SectionTransition>
            </Text>

            <Text>
                <SectionTransition delay={0.1}>
                    <Text fontFamily="VT323"  align = "center">
                        Click in for more info!
                    </Text>
                </SectionTransition>
            </Text>


            <SimpleGrid columns={[1, 1, 2]} gap={6} justifyItems="center" >
                <SectionTransition delay={0.2}>
                    <WorkGridItem id="portfolio" title="Portfolio Website">
                        The site you're on right now! Made with Node.js frameworks such as Next.js, Three.js and more!
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.2}>
                    <WorkGridItem id="platodoro" title="Platodoro">
                        A pomodoro timer w/ a 3d platypus. For those who want to study with a friend.
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.25}>
                    <WorkGridItem id="insightUBC" title="InsightUBC">
                        UBC Query Engine along with a front-end web application. My CPSC 310 term partner-project.
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.25}>
                    <WorkGridItem id="checkers" title="Checkers">
                        Simple checkers application, coded in Java. My CPSC 210 term project.
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.3}>
                    <WorkGridItem id="tilegame" title="Tile-based Game">
                        Arcade themed puzzle game, where you rearrange blocks to get to the goal.
                    </WorkGridItem>
                </SectionTransition>
            </SimpleGrid>




        </Container>
    )
}

export default Projects