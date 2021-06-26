import React, { Component,Fragment } from 'react';
import Menu from "../components/Menu";
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/CourseFeature";
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>

            </Fragment>
        );
    }
}

export default HomePage;