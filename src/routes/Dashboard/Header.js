import { Select, Avatar } from "antd";
import styled from "styled-components";
import debounce from "../../common/utils";
import APIConstants from "../../common/constants/APIConstants";
import { api } from "../../common/utils/APIMethods";
import { useQuery } from "react-query";
import { useAuthContext } from "../../common/contexts/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Username = styled.div`
  font-weight: bold;
  color: white;
  font-size: 15px;
  padding: 5px 5px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

const UserSearch = styled(Select)`
  min-width: 400px;
`;

const UserWrapper = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
`;
const ActionWrapper = styled.div``;
const StyledAddIcon = styled(PlusCircleOutlined)`
  color: #3b80dc;
  font-size: 25px;
  padding: 3px;
`;
const StyledRemoveIcon = styled(CloseCircleOutlined)`
  color: #eb3941;
  font-size: 25px;
  padding: 3px;
`;

const Header = () => {
  const { username } = JSON.parse(window.sessionStorage.getItem("user"));
  const [searchText, setSearchText] = useState("");

  const { authConfig } = useAuthContext();
  const { userSearch } = APIConstants;
  const fetchUsersWithQuery = () =>
    searchText !== "" &&
    api({ url: `${userSearch}?query=${searchText}` }, authConfig);
  const {
    data = null,
    isLoading,
    refetch
  } = useQuery("fetchUserWithQuery", fetchUsersWithQuery, { enabled: false });

  const debouncedSearch = debounce(() => {
    searchText !== "" && refetch();
  }, 400);
  useEffect(() => debouncedSearch(), [searchText]);

  const parsedData = (data?.content ?? []).map((data) => (
    <UserWrapper key={data.id}>
      <div>{data.username}</div>
      <StyledAddIcon onClick={() => console.log(data.id)} />
    </UserWrapper>
  ));
  return (
    <Container>
      <UserSearch
        showSearch
        allowClear
        placeholder="Enter any username"
        value={searchText}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={(query) => {
          setSearchText(query);
        }}
        notFoundContent={null}
      >
        {parsedData}
      </UserSearch>

      <AvatarWrapper>
        <Avatar style={{ color: "#f1faee", backgroundColor: "#457b9d" }}>
          {username.charAt(0).toUpperCase()}
        </Avatar>
        <Username>{username}</Username>
      </AvatarWrapper>
    </Container>
  );
};
export default Header;
