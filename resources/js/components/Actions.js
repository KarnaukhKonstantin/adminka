import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-bootstrap';

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
                    <Col md={12} className="sidebar-point"
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
