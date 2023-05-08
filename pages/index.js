import {Container, Box, Heading} from '@chakra-ui/react'
const Page =()=> {
    return (
        <Container>
            <Box borderRadius = "lg" bg = "red" p={3} align = "center" mb={6}>
                Hello, my name is Bryan. I am a computer science student.
            </Box>

            <Box display ={{ md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bryan Huang
                    </Heading>
                    <p>Computer Science Student at the University of British Columbia </p>
                </Box>
            </Box>

        </Container>
    )
}
export default Page