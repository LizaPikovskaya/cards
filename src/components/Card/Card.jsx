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
import { useState } from "react";

export const Card = ({ id, avatar, followers, tweets }) => {
  const savedFollowerCount = localStorage.getItem(`followerCount-${id}`);
  const [follower, setFollower] = useState(
    savedFollowerCount ? JSON.parse(savedFollowerCount) : Number(followers)
  );
  const savedIsFollow = localStorage.getItem(`isFollow-${id}`);
  const [isFollow, setIsFollow] = useState(
    savedIsFollow ? JSON.parse(savedIsFollow) : false
  );
  const handleOnFollow = (evt) => {
    setFollower((prevFollower) => {
      const updatedFollower = isFollow ? prevFollower - 1 : prevFollower + 1;
      localStorage.setItem(
        `followerCount-${id}`,
        JSON.stringify(updatedFollower)
      );
      return updatedFollower;
    });
    setIsFollow((prevIsFollow) => {
      const updatedIsFollow = !prevIsFollow;
      localStorage.setItem(`isFollow-${id}`, JSON.stringify(updatedIsFollow));
      return updatedIsFollow;
    });
  };
  const formattedFollower = follower.toLocaleString("en-US");
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
        <Text style={{ marginBottom: 26 }}> {formattedFollower} Followers</Text>
        <Button onClick={handleOnFollow} isFollow={isFollow} type="button">
          {isFollow ? "Following" : "Follow"}
        </Button>
      </ContentContainer>
    </StyledCard>
  );
};
