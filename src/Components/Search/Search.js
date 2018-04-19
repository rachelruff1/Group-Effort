import React from 'react';
import SearchBox from "./SearchBox";

const search = props => {
   return (
       <div>
       <SearchBox/>
       <Link to='/location/${props.latlng}'>Go</Link>
       </div>
   )
}

