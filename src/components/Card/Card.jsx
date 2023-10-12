import {
  Button,
  ContentContainer,
  ImageBcg,
  ImageWrapper,
  Line,
  StyledCard,
  Text,
  UserContainer,
} from "./Card.styled";
import userLogo from "../../accets/images/hansel.png";
import { useState } from "react";

export const Card = ({ avatar, followers, tweets }) => {
  const [follower, setFollower] = useState(Number(followers));
  const [isFollow, setIsFollow] = useState(false);
  const handleOnFollow = (evt) => {
    if (isFollow) {
      setIsFollow(false);
      setFollower(follower - 1);
      return;
    }
    setFollower(follower + 1);
    setIsFollow(true);
  };
  return (
    <StyledCard>
      <UserContainer>
        <Line />
        <ImageWrapper>
          <ImageBcg>
            <img src={`${avatar}`} alt="user-img" />
          </ImageBcg>
        </ImageWrapper>
      </UserContainer>
      <ContentContainer>
        <Text> {tweets} tweets</Text>
        <Text style={{ marginBottom: 26 }}> {follower} Followers</Text>
        <Button onClick={handleOnFollow} isFollow={isFollow}>
          {isFollow ? "Unfollow" : "Follow"}
        </Button>
      </ContentContainer>
    </StyledCard>
  );
};
