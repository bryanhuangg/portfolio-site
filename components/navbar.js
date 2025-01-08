import { Box, Button, Grid, Text } from "@chakra-ui/react"

import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    return (
        <Box borderBottom="1px" borderColor="gray.200" mt={3} p={1} mb={3}>
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
        </Box>
    )
}

export default Navbar