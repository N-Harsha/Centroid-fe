import { Avatar } from "antd";
import styled from "styled-components";
import debounce from "../../common/utils";
import APIConstants from "../../common/constants/APIConstants";
import { api } from "../../common/utils/APIMethods";
import { useQuery } from "react-query";
import { useAuthContext } from "../../common/contexts/AuthContext";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import {
  AvatarWrapper,
  Container,
  RequestLink,
  StyledAddIcon,
  Username,
  UserRequestContainer,
  UserSearch,
  RequestModal,
  UserWrapper
} from "../../common/StyledComponents";

const Header = () => {
  const { username } = JSON.parse(window.sessionStorage.getItem("user"));
  const [searchText, setSearchText] = useState("");
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isTypeSent, setIsTypeSent] = useState(true);
  const { authConfig } = useAuthContext();
  const { userSearch, receivedUserRequests, sentUserRequests } = APIConstants;
  const fetchUsersWithQuery = () =>
    searchText !== "" &&
    api({ url: `${userSearch}?query=${searchText}` }, authConfig);

  const fetchReceivedUserRequests = () =>
    api({ url: receivedUserRequests }, authConfig);

  const fetchSentUserRequests = () =>
    api({ url: sentUserRequests }, authConfig);

  const {
    data = null,
    isLoading,
    refetch
  } = useQuery("fetchUserWithQuery", fetchUsersWithQuery, { enabled: false });

  const {
    data: recivedRequests = [],
    isLoading: isRecivedRequestsLoading,
    refetch: recivedRequestsRefetch
  } = useQuery("fetchReceivedUserRequests", fetchReceivedUserRequests, {
    enabled: false
  });
  const {
    data: sentRequests = [],
    isLoading: isSentRequestsLoading,
    refetch: sentRequestsRefetch
  } = useQuery("fetchReceivedUserRequests", fetchSentUserRequests, {
    enabled: false
  });
  //todo write mutates for add , reject, accept, and cancel except add all have same funcationality.
  //add sends a request to the user. if user tries to send the user request again send not possible.
  //or we can sent the dto such that a boolean is sent along with the userdata and marke that user as sent.(most possible.)

  const closeRequestModel = () => setIsRequestModalOpen(false);

  const debouncedSearch = debounce(() => {
    searchText !== "" && refetch();
  }, 400);
  useEffect(() => debouncedSearch(), [searchText]);

  const openSentRequests = () => {
    setIsTypeSent(true);
    sentRequestsRefetch();
    setIsRequestModalOpen(true);
  };

  const openReceivedRequests = () => {
    setIsTypeSent(false);
    recivedRequestsRefetch();
    setIsRequestModalOpen(true);
  };

  const userRequests =
    isRequestModalOpen &&
    !isSentRequestsLoading &&
    !isRecivedRequestsLoading &&
    (isTypeSent ? sentRequests : recivedRequests);

  const parsedUserRequests = () => {
    if (!userRequests) return null;
    if (userRequests === []) {
      return `No User Requests ${isTypeSent ? "Sent" : "Received"}`;
    }
  };
  console.log(parsedUserRequests());

  const parsedData = (data?.content ?? []).map((data) => (
    <UserWrapper key={data.id}>
      <div>{data.username}</div>
      <StyledAddIcon onClick={() => console.log(data.id)} />
    </UserWrapper>
  ));

  return (
    <Container>
      <UserRequestContainer>
        <RequestLink onClick={openSentRequests}>sent</RequestLink>|
        <RequestLink onClick={openReceivedRequests}>recived</RequestLink>
      </UserRequestContainer>
      <RequestModal
        title={isTypeSent ? "Sent Requests" : "Receiced Requests"}
        footer={null}
        open={isRequestModalOpen}
        onCancel={closeRequestModel}
      >
        {isSentRequestsLoading || isRecivedRequestsLoading ? (
          <Spin />
        ) : (
          parsedUserRequests
        )}
      </RequestModal>
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
