import React, { Component,Fragment } from 'react';
import Menu from "../components/Menu";
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/CourseFeature";
import CoursePlanHome from "../components/CoursePlanHome";
import PaymentGuide from "../components/PaymentGuide";
import FreeClassHome from "../components/freeClassHome";
import MoreSeries from "../components/moreSeries";
import Footer from "../components/Footer";
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
                <CoursePlanHome/>
                <PaymentGuide/>
                <FreeClassHome/>
                <MoreSeries/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;