import React from 'react';
import CommentIndexItem from './comments_index_item_container';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllComments(this.props.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postId !== nextProps.postId) {
      this
        .props
        .requestAllComments(nextProps.postId);
    }
  }

  render(){
    debugger;
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
import { withRouter } from 'react-router-dom';

import { requestAllComments } from '../../actions/comment_actions';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = ({comment}, ownProps) => ({
  postId: parseInt(ownProps.match.params.id),
  comments: selectAllComments(comment.entities)
});

const mapDispatchToProps = dispatch => ({
  requestAllComments: (id) => dispatch(requestAllComments(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex));

// export default CommentIndex;
