import {Avatar, Title, Name, Tag, Location, StarsList, StarsItems, Container} from "./Profile.styled";
import PropTypes from "prop-types";


export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
  const addComa = (val) => {
    return Number(val).toLocaleString('en')
  }
  return (
    <Container>
      <Title>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Title>

      <StarsList>
        <StarsItems>
          <span>Followers</span>
          <span>{addComa(followers)}</span>
        </StarsItems>
        <StarsItems>
          <span>Views</span>
          <span>{addComa(views)}</span>
        </StarsItems>
        <StarsItems>
          <span>Likes</span>
          <span>{addComa(likes)}</span>
        </StarsItems>
      </StarsList>
    </Container>

  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
