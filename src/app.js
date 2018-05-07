import React, { Component, Fragment } from 'react';
import PageNavbar from './page-navbar';
import Routes from './routes';
import {Grid, Row} from 'react-bootstrap';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <PageNavbar></PageNavbar>
                <Grid fluid>
                    <Row>
                        <Routes></Routes>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}