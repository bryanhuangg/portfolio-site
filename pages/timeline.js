import { Box, Button, Container, Heading, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { FaGithub } from "react-icons/fa";
import SectionTransition from "../components/section-transition";
import styled from "@emotion/styled";

const Page = () => {
    return (
        <Container>
            <SectionTransition delay={0.0}>

            </SectionTransition>
            <SectionTransition delay={0.1}>

                <VerticalTimeline lineColor={useColorModeValue('#394867', '#f2f2f0')} layout='2-columns'>

                    {/* MDA Space */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: useColorModeValue('#404258', '#F1F6F9') }}
                        date="Jan 2024 - Dec 2024"
                        iconStyle={{ background: '#f2f2f0', color: '#394867' }}
                        icon={<FaGithub />}
                    >
                        <Text textStyle={'subtitle'} fontSize={'14px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            <b style={{ marginBottom: '-5px', display: 'block' }}>Software Engineer Co-op</b>
                            <Link href='https://mda.space/' target="_blank" style={{ display: 'inline-block' }}>MDA Space</Link>
                        </Text>

                        <Text textStyle={'text'} fontSize={'12px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            Developed software for large scale correlation and beam-forming as part of Canada’s contribution to the Square Kilometer Array (SKA), a global initiative to build the world’s next-largest telescope array
                            <br />
                            <Button
                                variant={'solid'}
                                size={'xs'}
                                color={useColorModeValue('#404258', '#F1F6F9')}
                                backgroundColor={useColorModeValue('#f2f2f0', '#394867')}
                                mt={3}
                            >
                                More details
                            </Button>
                        </Text>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: useColorModeValue('#404258', '#F1F6F9') }}
                        date="Dec 2023 - Jun 2024"
                        iconStyle={{ background: '#f2f2f0', color: '#394867' }}
                        icon={<FaGithub />}
                    >
                        <Text textStyle={'subtitle'} fontSize={'14px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            <b style={{ marginBottom: '-5px', display: 'block' }}>Web Designer</b>
                            <Link href='https://economics.ubc.ca/' target="_blank" style={{ display: 'inline-block' }}>VSE at UBC</Link>
                        </Text>

                        <Text textStyle={'text'} fontSize={'12px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                        Contracted to design and build a WordPress website for the Cities in Motion Lab
                            <br />
                            <Button
                                variant={'solid'}
                                size={'xs'}
                                color={useColorModeValue('#404258', '#F1F6F9')}
                                backgroundColor={useColorModeValue('#f2f2f0', '#394867')}
                                mt={3}
                            >
                                More details
                            </Button>
                        </Text>
                    </VerticalTimelineElement>



                </VerticalTimeline>


                <Container alignContent={'center'} justifyContent={'center'} display={'flex'} mt={3}>
                    <Button variant='solid' size={'xs'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> Scroll to top </Button>
                </Container>

            </SectionTransition>
        </Container >
    )
}
export default Page