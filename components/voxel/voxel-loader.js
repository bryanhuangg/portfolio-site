import { forwardRef } from "react"
import { Box, Spinner } from "@chakra-ui/react"

export const VoxelSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="65%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const VoxelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="voxel"
        m="10px auto"
        w="100%"
        h="200px"
        position="relative"
        bg="lightblue"
        borderRadius="15px"
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