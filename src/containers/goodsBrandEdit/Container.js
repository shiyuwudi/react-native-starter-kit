import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Edit from './Edit';

export class Container extends React.Component {

  render() {
    const { edit } = this.props.goodsBrandEditState;
    const { onFieldsChange, fetchSave } = this.props;
    return (
      <Edit
        edit={edit}
        onFieldsChange={onFieldsChange}
        fetchSave={fetchSave}
      />
    );
  }
}

Container.propTypes = {
  goodsBrandEditState: React.PropTypes.object.isRequired,
  onFieldsChange: React.PropTypes.func.isRequired,
  fetchSave: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goodsBrandEditState: state.goodsBrandEditReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
