import React from 'react';

import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
    return (
        <>


            <PageBanner pageTitle="Contact Us" />

            <ContactInfo />

            <GoogleMap />

            {/* <ContactForm /> */}

            <Footer />
        </>
    )
}

export default Contact;