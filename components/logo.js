import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router';

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    cursor: pointer;
    &:hover img {
    transform: rotate(-15deg);
    }
`

const Logo = () => {
    const router = useRouter();
    return (
        <LogoBox onClick={() => router.push('/')}>
            <Image src={'/images/favicon.png'} width={30} height={30} alt="logo"/>
        </LogoBox>
    );
}

export default Logo