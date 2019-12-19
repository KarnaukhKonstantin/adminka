import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, ButtonToolbar, Accordion, Card} from 'react-bootstrap';

/* Unit Component */
class Unit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            unit: {}
        };
    }

    componentDidMount() {
        //
    }

    renderActionButtons() {
        return (
            <Row className="justify-content-md-between">
                <Col md={6}>
                    <ButtonToolbar>
                        <Button variant="outline-primary" className="unit-button px-5">Edit</Button>
                    </ButtonToolbar>
                </Col>
                <Col md={6}>
                    <ButtonToolbar>
                        <Button variant="outline-danger" className="unit-button px-5">Delete</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }

    renderUnit() {
        return (
            <Row>
                <Col md={12}>
                    <p>{this.props.unit.name}</p>
                </Col>
            </Row>
        );
    }

    renderDetails() {
        return (
            <Row className="justify-content-md-center mt-5">
                <Col md={12}>
                    <Accordion className="accordion-block">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <Row className="justify-content-md-between">
                                    <span>Info</span>
                                    <i className="fa fa-chevron-down"></i>
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <Row className="justify-content-md-between">
                                    <span>Details</span>
                                    <i className="fa fa-chevron-down"></i>
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div>
                <Container fluid={true} className="unit-block">
                    {this.renderUnit()}
                    {this.renderActionButtons()}
                    {this.renderDetails()}
                </Container>
            </div>
        );
    }
}

export default Unit;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main/>, document.getElementById('root'));
// }
