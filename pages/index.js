import React from 'react';
import MainBanner from '@/components/Common/MainBanner';
import DiscoverArea from '@/components/Common/DiscoverArea';
import Services from '@/components/Common/Services';
import BigdataFunFacts from '@/components/Common/Facts';
import Feedback from '@/components/Common/Feedback';
import IndustriesWeServe from '@/components/Common/IndustriesWeServe';

import Footer from "@/components/_App/Footer";

const Index = () => {
    return (
        <>

            <MainBanner />
            {/* <WhatWeOffer /> */}
            <Services />
            <DiscoverArea />
            <IndustriesWeServe />
            <BigdataFunFacts />

            <Footer />
        </>
    )
}

export default Index;