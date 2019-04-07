import React from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

function Loading({ loading }) {
  return (
    <>
      {loading ? (
        <div className='loading'>
          <Spinner style={{ width: '5rem', height: '5rem' }} color='danger' />
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(Loading);
