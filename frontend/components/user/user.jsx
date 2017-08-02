import React from 'react';
import {
	NavLink
} from 'react-router-dom';
import Moment from 'react-moment';


class User extends React.Component {
	constructor( props ) {
		super( props );
    this.userId = this.props.match.params.id

    this.headerType = this.headerType.bind(this);
	}

  headerType() {
    switch (this.props.location.pathname.split('/')[3]) {
      case 'comments':
        return "Gallery Comments"
      case 'submitted':
        return 'Submitted Images'
      case 'favorites':
      return "Gallery Favorites"
      case 'replies':
        return 'Comment Replies'
      default:
      return "Gallery Comments"
    }
  }

componentDidMount() {
  this.props.requestOneUser(this.userId)
}


	render() {
    debugger;
		return (
			<div className='user-page'>
        <div className='user-comments'>
          <div className='panel-header-toolbox'>
            <div className='user-info left-side'>
              {this.headerType()}
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
            <NavLink to={`/users/${this.userId}/comments`} className='textbox'activeClassName="selected"> Comments </NavLink>
            <NavLink to={`/users/${this.userId}/submitted`} className='textbox' activeClassName="selected">Submitted Images</NavLink>
            <NavLink to={`/users/${this.userId}/favorites`} className='textbox' activeClassName="selected">Favorites</NavLink>
            <NavLink to={`/users/${this.userId}/replies`} className='textbox' activeClassName="selected">Replies</NavLink>
          </div>
          <div className='panel user-info-bio'>
            <div className='textbox'>{this.props.user ?
                <div style={{display: 'flex'}}>
                  Member since
                  <div className='spacer'></div>
                  <Moment fromNow>
                    {this.props.user.created_at}
                  </Moment>
                </div>
                : null }
              </div>
          </div>
          <div className='panel user-info-Notoriety'></div>
          <div className='panel user-info-trophy'></div>
        </div>

      </div>
		);
	}
}

export default User;
