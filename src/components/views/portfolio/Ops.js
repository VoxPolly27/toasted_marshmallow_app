import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Page } from "./Main/Page";



export class Ops extends Component {
    static displayName = Ops.name;

    state = {}
    render() {
        return (
            <Container fluid={true} className="padding-none">
                <Page color="tm-bg-dark" />
                <Page color="tm-bg-light" />
                <Page color="tm-bg-dark" />
            </Container>
        );
    }
}

