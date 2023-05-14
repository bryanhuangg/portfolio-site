import {Box, Container, SimpleGrid, Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../components/section-transition";
import { WorkGridItem } from "../components/grid-items";

import thumbPortfolioWebsite from '../public/images/thumbDino.png'
import thumbCheckers from '../public/images/thumbCheckers5.png'
import thumbTileGame from '../public/images/thumbTile.png'
import thumbInsight from '../public/images/thumbInsight.png'


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


            <SimpleGrid columns={[1, 1, 2]} gap={6} justifyItems="center" >
                <SectionTransition delay={0.2}>
                    <WorkGridItem id="portfolio" title="Portfolio Website" thumbnail={thumbPortfolioWebsite}>
                     The site you're on right now!
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.2}>
                    <WorkGridItem id="insightUBC" title="InsightUBC" thumbnail={thumbInsight}>
                        UBC Query Engine
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.25}>
                    <WorkGridItem id="checkers" title="Checkers" thumbnail={thumbCheckers}>
                        Java Checkers Application
                    </WorkGridItem>
                </SectionTransition>

                <SectionTransition delay={0.25}>
                    <WorkGridItem id="tilegame" title="Tile-based Game" thumbnail={thumbTileGame}>
                        Arcade themed puzzle game
                    </WorkGridItem>
                </SectionTransition>
            </SimpleGrid>




        </Container>
    )
}

export default Projects