import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroBg, ArrowRight, VideoBg,HeroContent, HeroContainer, HeroH1, HeroP, HeroBtnWrapper, ArrowForward } from './HeroElements'

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Digital Currency Exploit</HeroH1>
                <HeroP>Sign up for Digital Currency news & get $25 start-up
                    Monetize all digital currencies
                </HeroP>
                <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>    
                </HeroBtnWrapper>            
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
