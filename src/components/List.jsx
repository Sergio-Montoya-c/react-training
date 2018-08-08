import React from "react";
import Item from './Item';

const List = ({posts}) => {
  return(
    <ul>
      {posts.map(post => {
        return <Item key={post.id} title={post.title} body={post.body} />
      })}
    </ul>
  )
};

export default List;
