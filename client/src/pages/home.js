import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard  from '../component/postCard'

function Home(props) {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3} >
      <Grid.Row>
        <h3>Recent Posts</h3>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>loading post</h1>
        ) : posts && posts.map(post => (
          <Grid.Column key={post._id} style={{ marginBottom: 20 }}>
            <PostCard post={post} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
