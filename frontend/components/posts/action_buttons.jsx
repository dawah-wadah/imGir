import React from 'react';


const Footer = () => (
  <div className="post-footer">
    <div className="upvote-button" onClick={this.toggleUpvote}>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
    <div className="downvote-button spacer" onClick={this.toggleDownvote}>
      <i className="fa fa-arrow-down" aria-hidden="true"></i>
    </div>
  </div>
);

export default Footer;
