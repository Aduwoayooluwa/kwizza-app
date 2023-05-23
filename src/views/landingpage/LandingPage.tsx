
import React from 'react'
import Hero from './Hero'
import Fetures from './Fetures'
import { features } from './models/features'
import GetStartedSection from './Getstarted'
import Footer from '@/Layout/Footer'


type Props = {}



const LandingPage = (props: Props) => {
    return (
        <div className="h-full">
            <Hero />
            <Fetures features={features} />
            <GetStartedSection />

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default LandingPage