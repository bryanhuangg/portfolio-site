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
import TimelineEvent from '../components/timeline/timeline-event';
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
                    {/* Tsinghua Exchange */}
                    <TimelineEvent
                        date="Feb 2025 - Jun 2025"
                        logoSrc="/svg/tsinghua.svg"
                        logoAlt="Tsinghua Logo"
                        title="Exchange Student" 
                        organization="Tsinghua University"
                        organizationUrl="https://www.tsinghua.edu.cn/"
                        description="Departments of Computer Science and Economics, on CLIC scholarship."
                    />


                    {/* MDA Space */}
                    <TimelineEvent
                        date="Jan 2024 - Dec 2024"
                        logoSrc="/svg/mda.svg"
                        logoAlt="MDA Space Logo"
                        title="Software Engineer Co-op"
                        organization="MDA Space"
                        organizationUrl="https://mda.space/"
                        description="Developed software for large scale correlation and beam-forming as part of Canada's 
                                    contribution to the Square Kilometer Array (SKA), a global initiative to build the 
                                    world's next-largest telescope array."
                        showButton={true}
                    />


                    {/* VSE */}
                    <TimelineEvent
                        date="Dec 2023 - Jun 2024"
                        logoSrc="/svg/ubc.svg"
                        logoAlt="UBC Logo"
                        title="Web Designer"
                        organization="VSE at UBC"
                        organizationUrl="https://economics.ubc.ca/"
                        description="Contracted to design and build a WordPress website for the 
                                    Cities in Motion research lab."
                        showButton={true}
                    />

                    {/* Tetra Tech */}
                    <TimelineEvent
                        date="Aug 2023 - Dec 2023"
                        logoSrc="/svg/tetratech.svg"
                        logoAlt="Tetra Tech Logo"
                        title="Fullstack Developer Co-op"
                        organization="Tetra Tech"
                        organizationUrl="https://www.tetratech.com/"
                        description="Worked as a fullstack developer on FusionMap, a web-based GIS platform for
                                    map-based data visualization and analysis."
                        showButton={true}
                    />


                    {/* CPSC TA */}
                    <TimelineEvent
                        date="Sep 2022 - Aug 2023"
                        logoSrc="/svg/ubc.svg"
                        logoAlt="UBC Logo"
                        title="Computer Science TA"
                        organization="UBC CS Department"
                        organizationUrl="https://www.cs.ubc.ca/"
                        description="Teaching assistant for UBC's CPSC 110.
                            Led weekly lab sessions and hosted office hours, providing instruction on concepts such as search algorithms, 
                            graph theory, and recursion."
                    />

                    {/* Hillhouse Education */}
                    <TimelineEvent
                        date="Sep 2022 - Jul 2023"
                        logoSrc="/svg/hillhouse.svg"
                        logoAlt="Hillhouse Logo"
                        title="Private Tutor"
                        organization="Hillhouse Education"
                        organizationUrl="https://hillhouseeducation.com/"
                        description="Provided academic support and guidance to high school students in mathematics, economics, and computer science through private tutoring sessions."

                    />


                    {/* UBC Notetaker */}
                    <TimelineEvent
                        date="Jan 2022 - Aug 2022"
                        logoSrc="/svg/ubc.svg"
                        logoAlt="UBC Logo"
                        title="Notetaker"
                        organization="UBC Centre for Accessibility"
                        organizationUrl="https://students.ubc.ca/about-student-services/centre-for-accessibility/"
                        description="Provided detailed notes for students in need of accommodations."

                    />


                    {/* Code Ninjas */}
                    <TimelineEvent
                        date="Jun 2021 - Sep 2022"
                        logoSrc="/svg/codeninjas.svg"
                        logoAlt="Code Ninjas Logo"
                        title="Coding Instructor"
                        organization="Code Ninjas"
                        organizationUrl="https://www.codeninjas.com/"
                        description="Introduced children between the ages of 7-14 to programming fundamentals through JavaScript, C++, and Lua."

                    />

                </VerticalTimeline>


                <Container alignContent={'center'} justifyContent={'center'} display={'flex'} mt={3}>
                    <Button variant='solid' size={'xs'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> Scroll back to top </Button>
                </Container>

            </SectionTransition>
        </Container >
    )
}
export default Page