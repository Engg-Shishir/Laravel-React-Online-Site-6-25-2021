import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import HomeBanner from "../components/HomeBanner";
class FreeClass extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
            </Fragment>
        );
    }
}

export default FreeClass;
