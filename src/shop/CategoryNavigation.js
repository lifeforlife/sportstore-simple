import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import ToggleLink from '../ToggleLink';


export default class CategoryNavigation extends Component {
  render() {
    return (
      <>
        <ToggleLink exact={false} to={`${this.props.baseUrl}/all`}>
            All
        </ToggleLink>
        { this.props.categories && this.props.categories.map(cat =>
            <ToggleLink  key={ cat } to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                {cat}
            </ToggleLink>    
        )}
      </>
    );
  }
}
