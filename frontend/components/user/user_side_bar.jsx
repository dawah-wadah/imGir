import React from 'react';
import {
	NavLink,
	Link
} from 'react-router-dom';
import Moment from 'react-moment';

export default class UserSideBar extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className='user-side-bar'>
        <div className='panel user-info-picker'>
          <NavLink to={`/users/${this.props.userId}/comments`} className='textbox'activeClassName="selected"> Comments </NavLink>
          <NavLink to={`/users/${this.props.userId}/submitted`} className='textbox' activeClassName="selected">Submitted Images</NavLink>
          <NavLink to={`/users/${this.props.userId}/favorites`} className='textbox' activeClassName="selected">Upvoted Posts</NavLink>
          <NavLink to={`/users/${this.props.userId}/replies`} className='textbox' activeClassName="selected">Replies</NavLink>
        </div>
        <div className='panel user-info-bio'>
          <div className='textbox'>{this.props.user ?
              <div style={{display: 'flex'}}>
                {this.props.user.votes} points
                · Member since
                <div className='spacer'></div>
                <Moment fromNow>
                  {this.props.user.created_at}
                </Moment>
              </div>
              : window.images.loading }
            </div>
        </div>
        <div className='panel user-info-Notoriety'></div>
        <div className='panel user-info-trophy'></div>
      </div>
    );
  }
}
