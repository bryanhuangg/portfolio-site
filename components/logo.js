import Image from 'next/image'
import styled from '@emotion/styled'

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
    const handleClick = () => {
        window.location.href = '/';
    };

    return (
        <LogoBox onClick={handleClick}>
            <Image src={'/images/favicon.png'} width={30} height={30} alt="logo"/>
        </LogoBox>
    );
}

export default Logo