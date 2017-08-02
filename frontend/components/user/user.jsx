import React from 'react';
import {
	NavLink
} from 'react-router-dom';

class User extends React.Component {
	constructor( props ) {
		super( props );

	}

	render() {
    let userId = this.props.match.params.id
    debugger;
		return (
			<div className='user-page'>
        <div className='user-comments'>
          <div className='panel-header-toolbox'>
            <div className='user-info left-side'>
              Info Type
            </div>
            <div className='user-info right-side'>
              Options Stuff
            </div>
          </div>
          <div className='user-info display'>

          </div>

        </div>
        <div className='user-side-bar'>
          <div className='panel user-info-picker'>
            <NavLink to={`/users/${userId}/comments`} className='textbox'activeClassName="selected"> Comments </NavLink>
            <NavLink to={`/users/${userId}/submitted`} className='textbox' activeClassName="selected">Submitted Images</NavLink>
            <NavLink to={`/users/${userId}/favorites`} className='textbox' activeClassName="selected">Favorites</NavLink>
            <NavLink to={`/users/${userId}/replies`} className='textbox' activeClassName="selected">Replies</NavLink>
          </div>
          <div className='panel user-info-bio'></div>
          <div className='panel user-info-Notoriety'></div>
          <div className='panel user-info-trophy'></div>
        </div>

      </div>
		);
	}
}

export default User;
