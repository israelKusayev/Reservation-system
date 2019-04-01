import React from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

function Loading({ loading }) {
  return (
    <>
      {loading ? (
        <div className='loading'>
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
