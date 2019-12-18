import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, ButtonToolbar, Button} from 'react-bootstrap';

/* Sidebar Component */
class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            points: ['Users', 'Groups', 'Keys', 'Projects'],
        };
    }

    componentDidMount() {
        //
    }

    renderSidebar() {
        return this.state.points.map((point, i) => {
            return (
                    <Row className="justify-content-md-center">
                        <Col md={9}
                             className = "sidebar-point"
                             onClick={
                            () => { this.props.clickPoint(point.toLowerCase())}}
                             key={i} >
                            <p>{point}</p>
                        </Col>
                        <Col md={3}>
                            <ButtonToolbar>
                                <Button variant="outline-primary" size="sm">+</Button>
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
                    {this.renderSidebar()}
                </Container>
            </div>
        );
    }
}

export default Sidebar;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main/>, document.getElementById('root'));
// }
