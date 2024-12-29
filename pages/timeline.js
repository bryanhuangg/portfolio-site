import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Text,
    useColorModeValue,
    useTheme,
} from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { FaGithub } from "react-icons/fa";
import SectionTransition from "../components/section-transition";
import styled from "@emotion/styled";

const Page = () => {
    const theme = useTheme();
    return (
        <Container>
            <SectionTransition delay={0.0}>
                <Card>
                    <CardBody>
                        <Text textStyle={'subtitle'}>
                            CV Timeline
                        </Text>
                        <Text textStyle={'text'}>
                            Explore my professional journey through software development, academic achievements, and industry recognition. This timeline showcases key milestones that have shaped my career in technology.
                        </Text>
                    </CardBody>
                </Card>
            </SectionTransition>
            <SectionTransition delay={0.1}>

                <VerticalTimeline lineColor={useColorModeValue(theme.colors.customLight, theme.colors.customDark)} layout='2-columns'>

                    {/* MDA Space */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: useColorModeValue('#404258', '#F1F6F9') }}
                        contentArrowStyle={{ borderRight: `5px solid ${useColorModeValue('#404258', '#F1F6F9')}` }}
                        date="Jan 2024 - Dec 2024"
                        iconStyle={{ background: '#f2f2f0' }}
                        icon={
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%'
                            }}>
                                <Image
                                    src="/svg/mda.svg"
                                    alt="MDA Space Logo"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        }>

                        <Text textStyle={'subtitle'} fontSize={'14px'} color={useColorModeValue(theme.colors.customDark, theme.colors.customLight)}>
                            <b style={{ marginBottom: '-5px', display: 'block' }}> Software Engineer Co-op </b>
                            <Link href='https://mda.space/' target="_blank" style={{ display: 'inline-block' }}>MDA Space</Link>
                        </Text>

                        <Text textStyle={'text'} fontSize={'12px'} color={useColorModeValue(theme.colors.customDark, theme.colors.customLight)}>
                            Developed software for large scale correlation and beam-forming as part of Canada’s contribution to the Square Kilometer Array (SKA),
                            a global initiative to build the world’s next-largest telescope array.
                            <br />
                            <Button
                                variant={'solid'}
                                size={'xs'}
                                color={useColorModeValue('#404258', '#F1F6F9')}
                                backgroundColor={useColorModeValue(theme.colors.customDark, theme.colors.customLight)}
                                mt={3}
                            >
                                More details
                            </Button>
                        </Text>
                    </VerticalTimelineElement>


                    {/* VSE */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: useColorModeValue('#404258', '#F1F6F9') }}
                        contentArrowStyle={{ borderRight: `5px solid ${useColorModeValue('#404258', '#F1F6F9')}` }}
                        date="Dec 2023 - Jun 2024"
                        iconStyle={{ background: '#f2f2f0', color: '#394867' }}
                        icon={<div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%'
                        }}>
                            <Image
                                src="/svg/ubc.svg"
                                alt="UBC Logo"
                                width={26}
                                height={26}
                                mt={1}
                            />
                        </div>}
                    >
                        <Text textStyle={'subtitle'} fontSize={'14px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            <b style={{ marginBottom: '-5px', display: 'block' }}>Web Designer</b>
                            <Link href='https://economics.ubc.ca/' target="_blank" style={{ display: 'inline-block' }}>VSE at UBC</Link>
                        </Text>

                        <Text textStyle={'text'} fontSize={'12px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            Contracted to design and build a WordPress website for the Cities in Motion research lab.
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



                    {/* CPSC TA */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: useColorModeValue('#404258', '#F1F6F9') }}
                        contentArrowStyle={{ borderRight: `5px solid ${useColorModeValue('#404258', '#F1F6F9')}` }}
                        date="Sep 2022 - Aug 2023"
                        iconStyle={{ background: '#f2f2f0', color: '#394867' }}
                        icon={<div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%'
                        }}>
                            <Image
                                src="/svg/ubc.svg"
                                alt="UBC Logo"
                                width={26}
                                height={26}
                                mt={1}
                            />
                        </div>}
                    >
                        <Text textStyle={'subtitle'} fontSize={'14px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            <b style={{ marginBottom: '-5px', display: 'block' }}> Computer Science TA </b>
                            <Link href='https://economics.ubc.ca/' target="_blank" style={{ display: 'inline-block' }}>UBC CS Department</Link>
                        </Text>

                        <Text textStyle={'text'} fontSize={'12px'} color={useColorModeValue('#f2f2f0', '#394867')}>
                            Teaching assistant for UBC's CPSC 110.
                            Led weekly lab sessions and hosted office hours to support students’ understanding of course material and
                            provide individualized assistance.
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