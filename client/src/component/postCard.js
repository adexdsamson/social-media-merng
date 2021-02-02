import { Card, Icon, Label, Image } from 'semantic-ui-react'
import moment from 'moment';
import { Link } from'react-router-dom'

function postCard(props) {
  const { body, createdAt, username, likeCount, commentCount, likes, id } = props.post
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header> {username} </Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}> {moment(createdAt).fromNow(true)} </Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h3>Buttons</h3>
      </Card.Content>
    </Card>
  );
}

export default postCard;