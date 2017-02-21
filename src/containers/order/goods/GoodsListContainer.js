/**
 * Created by shiyuwudi on 2017/2/14.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import GoodsList from './GoodsList';

class GoodsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    this.props.fetchList({ orderId: this.props.orderId });
  }
  render() {
    return (
      <GoodsList
        allGoods={this.props.data}
        maxCount={3}
        open={this.state.open}
        onOpenClick={() => this.setState({ open: !this.state.open })}
      />
    );
  }
}


GoodsListContainer.propTypes = {
  fetchList: React.PropTypes.func.isRequired,
  orderId: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({ data: state.orderGoodsReducer[props.orderId] || [] });
const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer);
