import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/GlobalStyles/Container.styled";
import { fetchCards } from "../../services/axios";
import { List } from "./Tweets.styled";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setSetError] = useState(null);
  console.log(users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCards();
        setUsers(data);
      } catch (error) {
        setSetError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <List>
        {users.map(({ id, name, avatar, followers, tweets }) => (
          <li key={id}>
            <Card avatar={avatar} followers={followers} tweets={tweets} />
          </li>
        ))}
      </List>
    </Container>
  );
};
