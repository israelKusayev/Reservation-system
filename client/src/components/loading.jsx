import React from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
function Loading(props) {
  return <div>{props.loading ? <Spinner color='dark' /> : null}</div>;
}

const mapStateToProps = state => {
  return { loading: state.auth.loading };
};

export default connect(mapStateToProps)(Loading);
