import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POSTS, ADD_USERS } from '../../redux/actionTypes';
import PostCard from '../PostCard/PostCard';
import NotFound from '../NotFound/NotFound';

function PostsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => dispatch({ type: ADD_POSTS, payload: posts }))
      .catch((error) => console.log(error));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => dispatch({ type: ADD_USERS, payload: users }))
      .catch((error) => console.log(error));
  }, []);

  const { posts, search } = useSelector((store) => store);

  const [filterPosts, setFilterPosts] = useState([]);

  const searchPost = (posts, phrase) => {
    if (phrase.length === 0) {
      return posts;
    }
    return posts.filter((el) => {
      return Object.values(el).join(',').indexOf(phrase.toLowerCase()) > -1;
    });
  };

  useEffect(() => {
    setFilterPosts(searchPost(posts, search));
  }, [posts, search]);

  return (
    <>
      {filterPosts.length > 0 
       ?  filterPosts.map((post, i) => <PostCard key={i} post={post} />)
       : <NotFound />
      }
    </>
  );
}

export default PostsList;
