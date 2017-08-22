import React from 'react';
import {
	NavLink,
	Link
} from 'react-router-dom';
import Moment from 'react-moment';


export default class UserComments extends React.Component {
  constructor(props) {
		super(props);
		this.displayInfo = this.displayInfo.bind(this);
  }


  displayInfo() {

    if ( this.props.comments.length ) {
      return this.props.comments.sort((a, b) => (b.time_since - a.time_since)).map( ( el ) => {

        return (
					<Link to={`/posts/${el.post_id}`} key={Math.floor(Math.random(0,1) * 5000000)}>
            <li className='user-info-item'>
              <div className='user-info-item-pic'>
                <img src={el.main_image}/>
              </div>
              <div className='user-info-item-info'>
                  <div className="user">
                      <div className="comment-username">{el.user_name}</div>
                      <div className="comment-username spacer">{el.points} pts</div>
                      <div className='time-since-posted spacer'>
                        <Moment fromNow>
                          {el.time_since}
                        </Moment>
                      </div>
                    </div>
                    <p>{el.body}</p>
              </div>
            </li>
					</Link>
        );
      } );
    } else {
      return <p>Nothing to Show</p>;
    }

  }

	render(){

		return (
			<ul>

			{this.displayInfo()}
		</ul>

	);
	}
}
