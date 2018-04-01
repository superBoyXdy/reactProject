/**
 * Created by lingyangjiao
 * Date: 2018/1/3
 */

import React from 'react'
import CommentList from "../component/CommentList";

class CommentListContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      loading: true,
      error: null,
      value: null,
    }
  }
  
  componentDidMount() {
    this.props.promise.then(response => response.json())
    .then(value => this.setState({ loading: false, value }))
    .catch(error => this.setState({ loading: false, error }));
  }
  
  render() {
    const list = [
      { "name": "cam", "content": "It's good idea!", "publishTime": "2018-05-01" },
      { "name": "arcthur", "content": "Not bad.", "publishTime": "2018-05-01" } ]
    return (
        <CommentList comments={list}/>
    )
  }
}

export default CommentListContainer