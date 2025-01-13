import { Button, Image, Link, Text, useColorModeValue, useTheme } from '@chakra-ui/react'

import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const TimelineEvent = ({
    date,
    logoSrc,
    logoAlt,
    title,
    organization,
    organizationUrl,
    description,
    showButton = false,
    onButtonClick
}) => {
    const theme = useTheme();
    const bgColor = useColorModeValue('#404258', '#F1F6F9')
    const textColor = useColorModeValue(theme.colors.customDark, theme.colors.customLight)

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: bgColor }}
            contentArrowStyle={{ borderRight: `5px solid ${bgColor}` }}
            date={date}
            iconStyle={{ background: '#f2f2f0' }}
            icon={
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={26}
                        height={26}
                    />
                </div>
            }
        >
            <Text textStyle={'subtitle'} fontSize={'14px'} color={textColor}>
                <b style={{ marginBottom: '-5px', display: 'block' }}>{title}</b>
                <Link href={organizationUrl} target="_blank" style={{ display: 'inline-block' }}>
                    {organization}
                </Link>
            </Text>

            <Text textStyle={'text'} fontSize={'12px'} color={textColor}>
                {description}
                {showButton && (
                    <>
                        <br />
                        <Button
                            variant={'solid'}
                            size={'xs'}
                            color={bgColor}
                            backgroundColor={textColor}
                            mt={3}
                            onClick={onButtonClick}
                        >
                            More details
                        </Button>
                    </>
                )}
            </Text>
        </VerticalTimelineElement>
    )
}

export default TimelineEvent