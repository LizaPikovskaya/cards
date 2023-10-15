import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/GlobalStyles/Container.styled";
import { fetchAllCards, fetchCards } from "../../services/axios";
import { List, LoadMoreButton } from "./Tweets.styled";
import { Loader } from "../../components/Loader/Loader";
import { Dropdown } from "./Dropdown/Dropdown";
import toast from "react-hot-toast";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [emptyData, setEmptyData] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const [loading, setLoading] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCards(page);
        if (!users.length) {
          setUsers(data);
        } else {
          if (data.length === 0) {
            setEmptyData(true);
          }
          setUsers((prevUsers) => [...prevUsers, ...data]);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const showAll = async () => {
      try {
        const allCards = await fetchAllCards();
        setAllUsers(allCards);
      } catch (error) {
        console.log(error);
      }
    };
    showAll();
  }, []);

  useEffect(() => {
    let filteredUsers = [];
    if (selectedOption === "all") {
      filteredUsers = allUsers;
      setHideButton(true);
    } else if (selectedOption === "follow") {
      filteredUsers = allUsers.filter((user) =>
        JSON.parse(localStorage.getItem(`isFollow-${user.id}`))
      );
      setHideButton(true);
    } else if (selectedOption === "following") {
      filteredUsers = allUsers.filter(
        (user) => !JSON.parse(localStorage.getItem(`isFollow-${user.id}`))
      );
      setHideButton(true);
    } else {
      filteredUsers = users;
    }
    setFilteredUsers(filteredUsers);
  }, [selectedOption, users, allUsers]);

  const handlerOnLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleOptionChange = (evt) => {
    setSelectedOption(evt.target.value);
  };
  const isHideButton = emptyData || hideButton;
  return (
    <section style={{ padding: "30px 0px" }}>
      <Container>
        <Dropdown
          handleOptionChange={handleOptionChange}
          value={selectedOption}
        />
        <List>
          {filteredUsers.map(({ name, id, avatar, followers, tweets }) => (
            <li key={`${name}-${id}`}>
              <Card
                avatar={avatar}
                followers={followers}
                tweets={tweets}
                id={id}
              />
            </li>
          ))}
        </List>
        {loading && <Loader />}
        {filteredUsers.length ? (
          isHideButton ? null : (
            <LoadMoreButton onClick={handlerOnLoadMoreClick}>
              Load more
            </LoadMoreButton>
          )
        ) : null}
      </Container>
    </section>
  );
};
