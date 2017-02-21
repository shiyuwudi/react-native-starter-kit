import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Index from './Index';

export class Container extends React.Component {


  render() {
    const { edit } = this.props.indexState;
    const { onFieldsChange } = this.props;
    return (
      <Index
        edit={edit}
        onFieldsChange={onFieldsChange}
      />
    );
  }
}


Container.propTypes = {
  indexState: React.PropTypes.object.isRequired,
  onFieldsChange: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  indexState: state.indexReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
