import React from 'react'
import { Box, Button, Grid, Text } from "@chakra-ui/react"


const Navbar = () => {
    return (
        <Box borderBottom="1px" borderColor="gray.200" mt={4} p={1}>
            <Grid templateColumns="repeat(4, 1fr)" gap="6">
                <Button variant="ghost">
                    <Text textStyle={'subtitle'}>
                        Home
                    </Text>
                </Button>
                <Button variant="ghost">
                    <Text textStyle={'subtitle'}>
                        Timeline
                    </Text>
                </Button>
                <Button variant="ghost">
                    <Text textStyle={'subtitle'}>
                        Work
                    </Text>
                </Button>
                <Button variant="ghost">
                    <Text textStyle={'subtitle'}>
                        Posts
                    </Text>
                </Button>
            </Grid>
        </Box>
    )
}

export default Navbar