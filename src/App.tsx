import "./styles.css";
import theme from "./theme/theme";
import { UserCard } from "./components/UserCard";
import { Button, ChakraProvider, Box } from "@chakra-ui/react";
import { UseAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = UseAllUsers();

  const onClickFetchUser = () => {
    getUsers();
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
