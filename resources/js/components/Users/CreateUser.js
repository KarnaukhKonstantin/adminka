import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, ButtonToolbar, Accordion, Card} from 'react-bootstrap';

/* CreateUser Component */
class CreateUser extends Component {

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

    renderCreateUser() {
        return (
            <Row className="justify-content-md-between">
                <Col md={12}>
                    <p>Check User Create Component</p>
                </Col>
                <Col md={12}>
                    <div className="create-user-card">
                        <div className="create-user-header">
                            <span>header</span>
                        </div>
                        <div className="create-user-body">
                            <span>body</span>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div>
                <Container fluid={true} className="unit-block">
                    {this.renderCreateUser()}
                </Container>
            </div>
        );
    }
}

export default CreateUser;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main/>, document.getElementById('root'));
// }
