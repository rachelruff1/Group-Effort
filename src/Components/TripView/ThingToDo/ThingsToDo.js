import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlace} from '../../ducks/reducer2';


class ThingsToDo extends Component {
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
    console.log(this.props.placeId);
    const {placeDetail} = this.props;
    return(
        <div>
            <h1>{placeDetail.name} </h1>
          
        </div>
    )
}
}

  const mapStateToProps = (state) => ({
    placeDetail: state.reducer2.placeDetail,
    test: state.reducer2.test,
    placeId: state.reducer1.placeId
  })

  export default connect(mapStateToProps, { getPlace })(
    ThingsToDo
  );