import React from 'react';
import {
	NavLink, Link
} from 'react-router-dom';
import Moment from 'react-moment';


class User extends React.Component {
	constructor( props ) {
		super( props );
		this.userId = this.props.match.params.id

		this.headerType = this.headerType.bind( this );
		this.displayInfo = this.displayInfo.bind( this );
	}

	headerType() {
		switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
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
		this.props.requestOneUser( this.userId )
		switch ( this.props.location.pathname.split( '/' )[ 3 ] ) {
		case 'comments':
			this.props.requestUserComments( parseInt( this.userId ), 'Post' )
			break;
		case 'submitted':
			this.props.requestUserPosts( this.userId )
			break;
		case 'favorites':
			return "Gallery Favorites"
		case 'replies':
			this.props.requestUserComments( parseInt( this.userId ), 'Comment' )
			break
		default:
			this.props.requestUserComments( this.userId )
			break;

		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( this.props.match.params.id !== nextProps.match.params.id ) {
			this.props.requestOneUser( nextProps.match.params.id );
		} else if ( this.props.location.pathname.split( '/' )[ 3 ] !== nextProps.location
			.pathname.split( '/' )[ 3 ] ) {
			switch ( nextProps.location.pathname.split( '/' )[ 3 ] ) {
			case 'comments':
				this.props.requestUserComments( parseInt( this.userId ), 'Post' )
				break;
			case 'submitted':
				this.props.requestUserPosts( this.userId )
				break;
			case 'favorites':
				return "Gallery Favorites"
			case 'replies':
				this.props.requestUserComments( parseInt( this.userId ), 'Comment' )
				break
			default:
				this.props.requestUserComments( this.userId )
				break;
			}

		}
	}

	displayInfo() {
		let param = this.props.location.pathname.split( '/' )[ 3 ];
		if ( this.props[ param ] ) {
			return this.props[ param ].map( ( el ) => {
				return (
					<Link to={`/posts/${el.post_id}`}>
					  <div className='user-info-item'>
					    <div className='user-info-item-pic'>
					      <img src={el.main_image}/>
					    </div>
							<div className='user-info-item-info'>
									<div className="author">
											<div className="comment-username">{el.author_name}</div>
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
				)
			} )
		} else {
			return <p>WE GOT NOTHING</p>
		}

	}

	render() {
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
						{this.displayInfo()}
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
