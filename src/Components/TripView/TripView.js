import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlace} from '../../ducks/reducer2';

class TripView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            testId: 'ChIJPZQJvBo8TIYRov7INbBx08o'
        }
    }

componentDidMount(){
    this.props.getPlace(this.state.testId);
}


render(){
    console.log(this.props);
    return(
        <div>
            
        </div>
    )
}
}

let mapStateToProps = state => {
    const { placeDetail, placeId, test } = state;
    return {
      placeDetail,
      placeId,
      test
    };
  };

  export default connect(mapStateToProps, { getPlace })(
    TripView
  );