import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlace} from '../../ducks/reducer2';

class TripView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

componentDidMount(){
    this.props.getPlace(this.props.placeId);
}


render(){
    console.log(this.props.placeDetail);
    return(
        <div>
            
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
      placeDetail: state.placeDetail,
      placeId: state.placeId
    };
  }

export default connect(mapStateToProps, {getPlace})(TripView);