import React from 'react';
import Navigation from '../../Shared/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Information from '../Information/Information';
import InformationTwo from '../InformationTwo/InformationTwo';
import PatientSays from '../PatientSays/PatientSays';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>

            <Banner></Banner>

            <Information></Information>

            <Services></Services>

            <InformationTwo />

            <AppointmentBanner></AppointmentBanner>

            <Testimonial></Testimonial>

            <PatientSays></PatientSays>

            <Blogs></Blogs>
        </div>
    );
};

export default Home;