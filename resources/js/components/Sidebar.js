import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-bootstrap';

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
                    <Row>
                        <Col md={12} className="sidebar-point"
                             onClick={
                            () => { this.props.clickPoint(point.toLowerCase())}}
                             key={i} >
                            <p>{point}</p>
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
