import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class {{ pascalCase name }}Container extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>{{ titleCase name }}</div>
    );
  }
}

{{ pascalCase name }}Container.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)({{ pascalCase name }}Container);
