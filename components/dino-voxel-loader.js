import { forwardRef } from "react"
import { Box, Spinner } from "@chakra-ui/react"

export const VoxelSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const VoxelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="dino-voxel"
        m="auto"
        mt="auto"
        mb="0"
        w="100%"
        h="250px"
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <VoxelContainer>
            <VoxelSpinner />
        </VoxelContainer>
    )
}

export default Loader