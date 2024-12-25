import React from 'react'
import { Box, Button, Grid, Text } from "@chakra-ui/react"


const Navbar = () => {
    return (
        <Box borderBottom="1px" borderColor="gray.200" mt={4} p={2}>
            <Grid templateColumns="repeat(4, 1fr)" gap="6">
                <Button>
                    <Text textStyle={'subtitle'}>
                        Home
                    </Text>
                </Button>
                <Button>
                    <Text textStyle={'subtitle'}>
                        Timeline
                    </Text>
                </Button>
                <Button>
                    <Text textStyle={'subtitle'}>
                        Work
                    </Text>
                </Button>
                <Button>
                    <Text textStyle={'subtitle'}>
                        Posts
                    </Text>
                </Button>
            </Grid>
        </Box>
    )
}

export default Navbar