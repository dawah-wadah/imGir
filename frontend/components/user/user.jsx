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

        </div>

      </div>
    );
  }
}

export default User;
