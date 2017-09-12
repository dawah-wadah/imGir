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
			class: 'notoriety-list textbox close'
		};
  }

	expand(e){
		e.preventDefault();
		this.setState({
			open: !this.state.open,
			class: this.state.class === 'notoriety-list textbox close' ? 'notoriety-list textbox open' : 'notoriety-list textbox close'
		});
		console.log('clicked');
	}

	list(){
		return (
			<div className={this.state.class}>
                    <table>
                        <tbody><tr>
                            <td><h2>Notoriety</h2></td>
                            <td><h2>Reputation Points</h2></td>
                        </tr>
                        <tr>
                            <td>Glorious</td>
                            <td className="stat">20,000</td>
                        </tr>
                        <tr>
                            <td>Renowned</td>
                            <td className="stat">8,000 to 19,999</td>
                        </tr>
                        <tr>
                            <td>Idolized</td>
                            <td className="stat">4,000 to 7,999</td>
                        </tr>
                        <tr>
                            <td>Trusted</td>
                            <td className="stat">2,000 to 3,999</td>
                        </tr>
                        <tr>
                            <td>Liked</td>
                            <td className="stat">1,000 to 1,999</td>
                        </tr>
                        <tr>
                            <td>Accepted</td>
                            <td className="stat">400 to 999</td>
                        </tr>
                        <tr>
                            <td>Neutral</td>
                            <td className="stat">under 400</td>
                        </tr>
                    </tbody></table>
                </div>
		);
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
              : <img src={window.images.loading}/>}
            </div>
        </div>
        <div className='panel user-info-Notoriety'>
					{this.props.user ?
						<Notoriety points={this.props.user.votes}/>
              : <img src={window.images.loading}/> }
							{this.list()}
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
