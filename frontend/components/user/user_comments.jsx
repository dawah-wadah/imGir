import React from 'react';
import {
	NavLink,
	Link
} from 'react-router-dom';
import Moment from 'react-moment';


export default class UserComments extends React.Component {
  constructor(props) {
		super(props);
  }

	
  displayInfo() {
    let param;
    let postId;
    switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
    case 'comments': case 'replies':
      param = 'comments';
      break;
    case 'submitted': case 'favorites':
      param = 'posts';
      break;
    default:
      param = 'comments';
      break;

    }


    if ( this.props[ param ] ) {
      return this.props[ param ].map( ( el ) => {
        postId = param === 'comments' ? el.postId : el.id;
        return (
          <Link to={`/posts/${postId}`}>
            <div className='user-info-item'>
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
            </div>
          </Link>
        );
      } );
    } else {
      return <p>Nothing to Show</p>;
    }

  }

	render(){

		return <h1>User Comments</h1>;
	}
}
