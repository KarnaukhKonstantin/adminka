import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar';
import  Actions from './Actions';

/* Main Component */
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            point: null,
            users: [],
            staff: [],
        };
        this.clickPoint = this.clickPoint.bind(this)
    }

    componentDidMount() {
        //
    }

    clickPoint(value) {
        this.setState({ point: value });
        axios.get('/api/'+ value)
            .then(response => {
                this.setState({ staff: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderPage() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={8} className="work-column">
                        <h1>Render 1</h1>
                    </Col>
                    <Col md={2} className="actions-column">
                        <Actions staff = {this.state.staff}/>
                    </Col>
                    <Col md={2} className="sidebar-column">
                        <Sidebar clickPoint = {this.clickPoint}/>
                    </Col>
                </Row>
            </Container>
        );
    }

    renderProducts() {
        //
    }

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
