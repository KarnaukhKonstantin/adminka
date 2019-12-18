import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, ButtonToolbar, Button} from 'react-bootstrap';

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

    renderActionsComponent() {
        return this.props.staff.map((unit, i) => {
            return (
                <Row>
                    <Col md={6} className="sidebar-point"
                         onClick={
                             () => { this.props.clickUnit(unit)}}
                         key={i} >
                        <p>{unit.name}</p>
                    </Col>
                    <Col md={2}>
                        <ButtonToolbar>
                            <Button variant="outline-primary" size="sm">Edit</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col md={2}>
                        <ButtonToolbar>
                            <Button variant="outline-danger" size="sm">Delete</Button>
                        </ButtonToolbar>
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
