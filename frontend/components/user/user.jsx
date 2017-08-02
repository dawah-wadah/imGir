import React from 'react';

class User extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
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
            <div className='textbox'>Comments</div>
            <div className='textbox'>Submitted Images</div>
            <div className='textbox'>Favorites</div>
            <div className='textbox'>Replies</div>
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
