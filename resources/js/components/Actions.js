import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, ButtonToolbar, Button, Form} from 'react-bootstrap';

/* Actions Component */
class Actions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staff: [],
        };
    }

    componentDidMount() {
        //
    }

    renderActionButtons() {
        return (
            <Row className="actionPoint">
                <Col md={6} className="text-right" >
                    <ButtonToolbar>
                        <Button variant="outline-success"
                                size="sm"
                                onClick={() => { this.props.createEntity('Add' + this.props.point)}}>
                            Add {this.props.point}
                        </Button>
                    </ButtonToolbar>
                </Col>
                <Col md={6} className="text-right" >
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" size="sm" placeholder="Search" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        );
    }

    renderActionsComponent() {
        return this.props.staff.map((unit, i) => {
            return (
                <Row className="actionPoint">
                    <Col md={12} className="sidebar-point text-right"
                         onClick={
                             () => { this.props.clickUnit(unit)}}
                         key={i} >
                        <p>{unit.name}</p>
                    </Col>
                </Row>
            );
        })
    }

    renderProducts() {
        //
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    {this.renderActionButtons()}
                    {this.renderActionsComponent()}
                </Container>
            </div>
        );
    }
}

export default Actions;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main/>, document.getElementById('root'));
// }
