import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import NavBar from './NavBar';

class Destiny extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render () {
    return (
      <div>
        <NavBar />
        {/* {this.fetchData()} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state };
}

export default connect(mapStateToProps, { fetchData })(Destiny);