import { useState } from "react";
import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";
import { Button, ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true); //loading start
    setError(false); //none error

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        //error 発生
        setError(true);
      })
      .finally(() => {
        //stop loading
        setLoading(false);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {loading ? (
          <Button isLoading colorScheme="teal" onClick={onClickFetchUser}>
            データ取得
          </Button>
        ) : (
          <Button colorScheme="teal" onClick={onClickFetchUser}>
            データ取得
          </Button>
        )}
        <br />
        {error ? (
          <Box bg="tomato" w="100%" p={4} color="white">
            データ取得に失敗しました。
          </Box>
        ) : (
          userProfiles.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </ChakraProvider>
  );
}
