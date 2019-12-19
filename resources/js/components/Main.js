import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar';
import  Actions from './Actions';
import Unit from './Unit';
import CreateUser from './Users/CreateUser';

/* Main Component */
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            point: null,
            users: [],
            staff: [],
            unit: {},
            type: ''
        };
        this.clickPoint = this.clickPoint.bind(this);
        this.clickUnit = this.clickUnit.bind(this);
        this.createEntity = this.createEntity.bind(this);
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

    clickUnit(value) {
        this.setState({ unit: value });
    }

    createEntity(type) {
        console.log(type);
    }

    renderPage() {
        console.log(this.state.point);
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={2} className="sidebar-column">
                        <Sidebar clickPoint = {this.clickPoint}/>
                    </Col>
                    <Col md={2} className="actions-column">
                        <Actions staff = {this.state.staff} point = {this.state.point} clickUnit = {this.clickUnit} createEntity = {this.createEntity}/>
                    </Col>
                    <Col md={8} className="work-column">
                        {/*{this.state.type == "add user" ? (*/}
                        {/*    <LogoutButton onClick={this.handleLogoutClick} />*/}
                        {/*) : (*/}
                        {/*    <LoginButton onClick={this.handleLoginClick} />*/}
                        {/*)}*/}
                        <CreateUser/>
                        {/*<Unit unit={this.state.unit} point = {this.state.point}/>*/}
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
