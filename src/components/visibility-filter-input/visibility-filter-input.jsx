import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { setFilter } from "../../actions/actions";
import "./visibility-filter-input.scss";

function VisibilityFilterInput(props) {
  return <Form.Control id="search"
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="Search"
  />;
}

export default connect(null, { setFilter })(VisibilityFilterInput);