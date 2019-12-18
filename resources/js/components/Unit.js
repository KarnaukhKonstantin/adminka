import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';

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

    renderUnit() {
        return (
            <Row>
                <Col md={12}>
                    <p>{this.props.unit.name}</p>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    {this.renderUnit()}
                </Container>
            </div>
        );
    }
}

export default Unit;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main/>, document.getElementById('root'));
// }
