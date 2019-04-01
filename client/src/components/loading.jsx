import React from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
function Loading(props) {
  return (
    <>
      {props.loading ? (
        <div
          style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0
          }}
        >
          <Spinner color='dark' />
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return { loading: state.auth.isFetching };
};

export default connect(mapStateToProps)(Loading);
