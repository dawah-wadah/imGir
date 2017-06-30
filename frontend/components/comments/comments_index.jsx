import React from 'react';
import CommentIndexItem from './comments_index_item';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    const allComments = this.props.comments.map((comment) => (
      <CommentIndexItem key={comment.id} comment={comment}/>
    ));
    return(
      <div>
        {allComments}
      </div>
    );
  }
}

import { connect } from 'react-redux';

// import {requestAllComments} from '../../actions/comment_actions';
// import { selectAllComments } from '../../reducers/selectors';
//
// const mapStateToProps = ({comment}) => ({
//   comments: selectAllComments(comment.entities)
// });

// const mapDispatchToProps = dispatch => ({
//   requestAllComments: () => dispatch(requestAllComments())
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CommentIndex);

export default CommentIndex;
