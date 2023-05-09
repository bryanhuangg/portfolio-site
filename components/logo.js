import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from "@chakra-ui/react";
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-family: "Press Start 2P";
    font-weight: normal;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;

    &:hover img {
    transform: rotate(-10deg);
    }
`

const Logo = () => {
    const dinoImg = `/images/dino${useColorModeValue('-dark3', '-light2')}.png`
    return (
        <Link legacyBehavior href="/">
            <a>
                <LogoBox>
                    <Image src={dinoImg} width={30} height={30} alt="logo" />
                    <Text
                        color = {useColorModeValue('#212A3E', 'white.800')}
                        ml={2}>
                        BHUANG-DEV
                    </Text>
                </LogoBox>
            </a>

        </Link>
    );
}

export default Logo