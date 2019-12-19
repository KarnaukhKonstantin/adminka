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

    renderAuthUser() {

    }

    renderLogo() {
        return(
            <Row className="justify-content-center">
                <Col md={6}>

                </Col>
            </Row>
        );
    }

    renderSidebar() {
        return this.state.points.map((point, i) => {
            return (
                    <Row className="justify-content-md-center">
                        <Col md={12}
                             className = "sidebar-point"
                             onClick={
                            () => { this.props.clickPoint(point.toLowerCase())}}
                             key={i} >
                            <p><i className="fa fa-home fa-2x mx-2"></i>{point}</p>
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
                <Container fluid={true} className="sidebar">
                    {this.renderLogo()}
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
