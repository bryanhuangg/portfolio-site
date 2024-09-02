import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from '@emotion/styled'

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;

    &:hover img {
    transform: rotate(-15deg);
    }
`

const Logo = () => {
    return (
        <LogoBox>
            <Image src={'/images/favicon.png'} width={30} height={30} alt="logo" />
        </LogoBox>
    );
}

export default Logo