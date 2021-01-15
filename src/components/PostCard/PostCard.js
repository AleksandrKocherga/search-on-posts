import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import userIcon from './user-icon.png';

const PostContent = styled.div`
  font-family: 'adelle-sans', sans-serif;
  font-weight: 100;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  background-filter: blur(0.3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 48px auto;
  padding: 10px;
  width: 30rem;
  @media screen and (min-width: 768px) {
    width: 38rem;
  }
  @media screen and (min-width: 992px) {
    width: 50rem;
  }
  @media screen and (min-width: 1200px) {
    width: 60rem;
  }
  :hover {
    background: rgba(255, 204, 0, 0.1);
  }
  h3::before {
    background: url('${userIcon}');
    background-size: cover;
    border-radius: 50%;
    content: ' ';
    display: inline-block;
    height: 32px;
    margin-right: 0.5rem;
    position: relative;
    top: 8px;
    width: 32px;
  }
`;

function PostCard({ post }) {
  const { users } = useSelector((store) => store);

  return (
    <PostContent>
      <div>
        <div>
          <h3>
            {users &&
              users.map((user) =>
                user.id === post.userId ? user.username : false
              )}
          </h3>
          <h4>
            {users &&
              users.map((user) =>
                user.id === post.userId ? user.name : false
              )}
          </h4>
        </div>
      </div>
      <div>
        <div>
          <h1>{post.title}</h1>
        </div>
        <div>
          <p> {post.body}</p>
        </div>
      </div>
    </PostContent>
  );
}

export default PostCard;
