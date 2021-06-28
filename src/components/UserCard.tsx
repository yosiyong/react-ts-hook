import { VFC } from "react";
import { UserProfile } from "../types/userProfile";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <Wrap>
      <WrapItem>
        <Box maxW="sm" borderWidth="3px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                名前
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {user.name}
            </Box>
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                メールアドレス
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {user.email}
            </Box>
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                住所
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {user.address}
            </Box>
          </Box>
        </Box>
      </WrapItem>
    </Wrap>
  );
};
