import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Image,
    List,
    ListItem,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SectionTransition from "../../components/section-transition";
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io5";

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

const TileGame=()=> {
    return(
        <Container>
            <SectionTransition delay={0}>
                <Box bg = {useColorModeValue('#9BA4B5', '#F4EEE0')} p={2} align = "center" mb={5}>
                    <PressStart>
                        <Text color = "#212A3E">
                            School Project: Tile-based Puzzle Game
                        </Text>
                    </PressStart>
                </Box>
            </SectionTransition>

            <SectionTransition delay={0.25}>
                <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/bhuang-dev/hs-capstone-tilegame" target="_blank">
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
                    A retro arcade themed tiled-based puzzle game created for my high school senior year capstone project.
                    Coded completely in Java from scratch on the Eclipse IDE.

                </Body>
            </SectionTransition>


            <SectionTransition delay={0.25}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        Preview
                    </Title>
                    <Center mt={4}>
                        <Image src="/images/tilegame.gif" alt="Preview GIF" maxWidth="80%" />
                    </Center>
                </Body>
            </SectionTransition>

            <SectionTransition delay={0.3}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        DevLog
                    </Title>
                    <Center mt={4}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <iframe
                                style={{ flex: 'auto' }}
                                width="80%"
                                height="255"
                                src="https://www.youtube.com/embed/1aOVbxQRisI"
                                frameborder="0"

                            ></iframe>
                        </div>
                    </Center>
                </Body>
            </SectionTransition>

            <SectionTransition delay={0.35}>
                <Body>
                    <Title color={useColorModeValue("#394867", "#f2f2f0")}>
                        Made with
                    </Title>
                    <List borderLeftWidth={2} borderLeftColor={useColorModeValue('#394867', '#f2f2f0')} pl={3}>
                        <ListItem>
                            Java (from scatch)
                        </ListItem>
                        <ListItem>
                            Photoshop
                        </ListItem>
                        <ListItem>
                            Assets from 16x16 DungeonTileSet II by 0x72
                        </ListItem>
                    </List>
                </Body>
            </SectionTransition>
        </Container>
    )
}

export default TileGame