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
    useDisclosure,
    useTheme,
} from '@chakra-ui/react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import SectionTransition from "../components/section-transition";
import TimelineEvent from '../components/timeline/timeline-event';
import TimelineWorkPopup from '../components/timeline/timeline-popup-work';
import styled from "@emotion/styled";

const Page = () => {
    const theme = useTheme();
    const { isOpen: isMDAOpen, onOpen: onMDAOpen, onClose: onMDAClose } = useDisclosure()
    const { isOpen: isVSEOpen, onOpen: onVSEOpen, onClose: onVSEClose } = useDisclosure()
    const { isOpen: isTTEKOpen, onOpen: onTTEKOpen, onClose: onTTEKClose } = useDisclosure()

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


                    {/* Quantatitative RA */}
                    <TimelineEvent
                        date="Feb 2025 - Jun 2025"
                        logoSrc="/svg/ubc.svg"
                        logoAlt="UBC Logo"
                        title="Quantatitative RA"
                        organization="UBC Sauder School for Business"
                        organizationUrl="https://www.sauder.ubc.ca/"
                        description="Built NLP pipelines and applied econometric methods to identify relationships between textual patterns and business outcomes."
                        showButton={false}
                    />

                    {/* Tsinghua Exchange */}
                    <TimelineEvent
                        date="Feb 2025 - Jun 2025"
                        logoSrc="/svg/tsinghua.svg"
                        logoAlt="Tsinghua Logo"
                        title="Exchange Student"
                        organization="Tsinghua University"
                        organizationUrl="https://www.tsinghua.edu.cn/"
                        description="Departments of Computer Science and Economics, on CLIC scholarship."
                        showButton={false}
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
                        onButtonClick={onMDAOpen}
                    />

                    {/* VSE */}
                    <TimelineEvent
                        date="Dec 2023 - Jun 2024"
                        logoSrc="/svg/ubc.svg"
                        logoAlt="UBC Logo"
                        title="Web Designer"
                        organization="The Vancouver School of Economics at UBC"
                        organizationUrl="https://economics.ubc.ca/"
                        description="Contracted to design and build a WordPress website for the 
                                    Cities in Motion research lab."
                        showButton={true}
                        onButtonClick={onVSEOpen}
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
                        onButtonClick={onTTEKOpen}
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


            <TimelineWorkPopup
                isOpen={isMDAOpen}
                onClose={onMDAClose}
                title={"Software Engineer Co-op"}
                organization={"MDA Space"}
                date={"Jan 2024 - Dec 2024 (1 year)"}
                logoSrc={"/svg/mda.svg"}
                description={"Developed software for large scale correlation and beam-forming as part of Canada's contribution to the Square Kilometer Array (SKA), a global initiative to build the world's next-largest telescope array."}
                techStack={["Python", "C++", "Kubernetes", "FPGA", "Docker", "Elasticsearch","Linux"]}
                contributions={["Achieved a 100% increase in hardware utilization efficiency by optimizing the system initialization algorithm to enable parallelization of FPGA usage.",
                                "Overhauled the master and control system to enable multi-threaded commands to the signal chain, enhancing processing speed and integrating critical client-required features.",
                                "Facilitated the onboarding of new team members and provided ongoing support to the team, ensuring effective collaboration and timely resolution of technical challenges."]}
                organizationUrl={"https://mda.space/"}
                productUrl={"https://www.skao.int/"}
            />

            <TimelineWorkPopup
                isOpen={isVSEOpen}
                onClose={onVSEClose}
                title={"VSE"}
                organization={"VSE at UBC"}
                date={"Dec 2023 - Jun 2024"}
                logoSrc={"/svg/ubc.svg"}
                description={"..."}
                techStack={["Figma", "JavaScript", "WordPress"]}
                organizationUrl={"https://mda.space/"}
            />

            <TimelineWorkPopup
                isOpen={isTTEKOpen}
                onClose={onTTEKClose}
                title={"Fullstack Developer Co-op"}
                organization={"Tetra Tech"}
                date={"Dec 2023 - Jun 2024"}
                logoSrc={"/svg/ubc.svg"}
                description={"..."}
                techStack={["Figma", "JavaScript", "WordPress"]}
                organizationUrl={"https://mda.space/"}
            />


            



        </Container >
    )
}
export default Page