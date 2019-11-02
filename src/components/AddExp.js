import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class AddExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  submitForm = e => {
    e.preventDefault();
    const desc = this.refs.desc.value;
    const amount = this.refs.amount.value;
    const id = new Date()
      .getMilliseconds()
      .toString()
      .concat(desc.slice(0, 3));
    const type = this.refs.type.value;
    const action = {
      id,
      type,
      desc,
      amount
    };

    const error = this.props.submitFormP(action);

    this.setState({ error });

    if (!error) {
      this.refs.desc.value = "";
      this.refs.amount.value = "";
      this.refs.type.value = "exp";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <Form onSubmit={this.submitForm}>
          <Col>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Descripe your expense"
                  type="text"
                  size="lg"
                  ref="desc"
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Expense amount"
                  size="lg"
                  type="number"
                  ref="amount"
                />
              </Col>
              <Col>
                <Form.Control as="select" size="lg" ref="type">
                  <option value="exp">Expense</option>
                  <option value="inc">Incom</option>
                </Form.Control>
              </Col>

              <Col>
                <Button variant="primary" type="submit" size="lg">
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </div>
    );
  }
}
