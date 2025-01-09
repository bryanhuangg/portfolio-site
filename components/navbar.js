import { Box, Button, Grid, Text, useColorModeValue } from "@chakra-ui/react"

import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    return (
        <Box position="relative" mt={3} p={1} mb={3}>
            <Box position="relative">
                <Grid templateColumns="repeat(4, 1fr)" gap="6">
                    <Button 
                        variant="ghost" 
                        onClick={() => router.push('/')}
                    >
                        <Text textStyle={'subtitle'} color={currentPath === '/' ? 'blue.400' : 'inherit'}>Posts</Text>
                    </Button>

                    <Button 
                        variant="ghost" 
                        onClick={() => router.push('/timeline')}
                    >
                        <Text textStyle={'subtitle'} color={currentPath === '/timeline' ? 'blue.400' : 'inherit'}>CV Timeline</Text>
                    </Button>

                    <Button 
                        variant="ghost" 
                        onClick={() => router.push('/works')}
                    >
                        <Text textStyle={'subtitle'} color={currentPath === '/works' ? 'blue.400' : 'inherit'}>Works</Text>
                    </Button>

                    <Button 
                        variant="ghost" 
                        onClick={() => router.push('/activity')}
                    >
                        <Text textStyle={'subtitle'} color={currentPath === '/activity' ? 'blue.400' : 'inherit'}>Activity</Text>
                    </Button>
                </Grid>
                
                <Box
                    position="absolute"
                    bottom="0"
                    borderRadius={4}
                    height="3px"
                    bg="blue.500"
                    width="calc(25% - 18px)"
                    transform={`translateX(${
                        currentPath === '/' ? '0' :
                        currentPath === '/timeline' ? 'calc(100% + 24px)' :
                        currentPath === '/works' ? 'calc(200% + 48px)' :
                        'calc(300% + 72px)'
                    })`}
                    transition="transform 0.3s ease"
                    zIndex={1}
                />
                <Box 
                    position="absolute" 
                    bottom="0" 
                    left="0" 
                    right="0" 
                    height="1px" 
                    bg={useColorModeValue("gray.200", "gray.600")}
                />
            </Box>
        </Box>
    )
}

export default Navbar