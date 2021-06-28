import { useState } from "react";
import axios from "axios";
import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";

//全ユーザー一覧取得
export const UseAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
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
  return { getUsers, userProfiles, loading, error };
};
