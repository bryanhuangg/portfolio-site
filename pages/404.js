import { Box, Button, Container, Text } from '@chakra-ui/react'

import SectionTransition from '../components/section-transition'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    return (
        <Container>
            <SectionTransition delay={0}>
                <Box textAlign="center" py={10}>
                    <Text 
                        textStyle={'title'} 
                        fontSize="6xl" 
                        mb={1}
                    >
                        404
                    </Text>
                    <Text 
                        textStyle={'subtitle'} 
                        mb={8}
                    >
                        Page not found
                    </Text>
                </Box>
            </SectionTransition>
        </Container>
    )
}

export default NotFound