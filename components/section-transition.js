import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

// source : github.com/craftzdog

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const SectionTransition = ({ children, delay = 0 }) => (
    <StyledDiv
        initial={{ y: -7, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay }}
        mb={3}
    >
        {children}
    </StyledDiv>
)

export default SectionTransition