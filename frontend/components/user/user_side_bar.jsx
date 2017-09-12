import React from 'react';
import {
	NavLink,
	Link
} from 'react-router-dom';
import Moment from 'react-moment';
import Notoriety from './notoriety';
import Trophies from './trophies';

export default class UserSideBar extends React.Component {
  constructor(props){
    super(props);
		this.expand = this.expand.bind(this);
		this.state = {
			open: false,
		};
  }

	expand(e){
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
		console.log('clicked');
	}


  render(){
    return (
      <div className='user-side-bar'>
        <div className='panel user-info-picker'>
          <NavLink to={`/users/${this.props.userId}/comments`} className='textbox blue'activeClassName="selected"> Comments </NavLink>
          <NavLink to={`/users/${this.props.userId}/submitted`} className='textbox blue' activeClassName="selected">Submitted Images</NavLink>
          <NavLink to={`/users/${this.props.userId}/favorites`} className='textbox blue' activeClassName="selected">Upvoted Posts</NavLink>
          <NavLink to={`/users/${this.props.userId}/replies`} className='textbox blue' activeClassName="selected">Replies</NavLink>
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
        <div className='panel user-info-Notoriety'>
					{this.props.user ?
						<Notoriety points={this.props.user.votes}/>
              : window.images.loading }
							<div className='left-end'>{
									this.state.open ?
									<p onClick={(e) => this.expand(e)}>hide list</p>
									: <p onClick={(e) => this.expand(e)}>show list</p>
								}

							</div>
        </div>
        <div className='panel user-info-trophy'>
					<Trophies />
        </div>
      </div>
    );
  }
}
