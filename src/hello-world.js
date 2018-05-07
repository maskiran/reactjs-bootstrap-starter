import React from 'react';
import {Col} from 'react-bootstrap';

export default class HelloWorld extends React.Component {
    render() {
        return (
            <Col xs={6}>Hello World {this.props.match.params.name}</Col>
        );
    }
}