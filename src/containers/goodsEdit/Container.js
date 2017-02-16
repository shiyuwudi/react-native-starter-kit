import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Edit from './Edit';

export class Container extends React.Component {


  render() {
    const { edit } = this.props.goodsEditState;
    const { onFieldsChange } = this.props;
    return (
      <Edit
        edit={edit}
        onFieldsChange={onFieldsChange}
      />
    );
  }
}


Container.propTypes = {
  goodsEditState: React.PropTypes.object.isRequired,
  onFieldsChange: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goodsEditState: state.goodsEditReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
