import { Avatar, Space, Spin, message } from "antd";
import debounce from "../../common/utils";
import APIConstants from "../../common/constants/APIConstants";
import { api } from "../../common/utils/APIMethods";
import { useQuery, useMutation } from "react-query";
import { useAuthContext } from "../../common/contexts/AuthContext";
import { useEffect, useState } from "react";
import {
  AvatarWrapper,
  Container,
  RequestLink,
  StyledAddIcon,
  Username,
  UserRequestContainer,
  UserSearch,
  RequestModal,
  UserRequestWrapper,
  StyledRemoveIcon,
  StyledAcceptIcon
} from "../../common/StyledComponents";

const Header = () => {
  const { username } = JSON.parse(window.sessionStorage.getItem("user"));
  const [searchText, setSearchText] = useState("");
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isTypeSent, setIsTypeSent] = useState(true);
  const { authConfig } = useAuthContext();
  const {
    userSearch,
    receivedUserRequests,
    sentUserRequests,
    sendUserRequestURL,
    acceptUserRequestURL,
    cancelUserRequestURL,
    rejectUserRequestURL
  } = APIConstants;
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

  //add sends a request to the user. if user tries to send the user request again send not possible.
  //or we can sent the dto such that a boolean is sent along with the userdata and marke that user as sent.(most possible.)

  const { mutate: sendUserRequset, isLoading: isSendRequestLoading } =
    useMutation(
      (id) =>
        api({ url: `${sendUserRequestURL}/${id}`, method: "POST" }, authConfig),
      {
        onSuccess: (response) => {
          if (response?.message) message.success(response.message);
        },
        onError: (response) => {
          if (response?.message) message.error(response.message);
        }
      }
    );

  const { mutate: acceptUserRequest, isLoading: isacceptUserRequestLoading } =
    useMutation(
      (id) =>
        api(
          { url: `${acceptUserRequestURL}/${id}`, method: "PUT" },
          authConfig
        ),
      {
        onSuccess: (response) => {
          if (response?.message) message.success(response.message);
          recivedRequestsRefetch();
        },
        onError: (response) => {
          if (response?.message) message.error(response.message);
        }
      }
    );

  const { mutate: rejectUserRequest, isLoading: isRejectUserRequestLoading } =
    useMutation(
      (id) =>
        api(
          { url: `${rejectUserRequestURL}/${id}`, method: "PUT" },
          authConfig
        ),
      {
        onSuccess: (response) => {
          if (response?.message) message.success(response.message);
          recivedRequestsRefetch();
        },
        onError: (response) => {
          if (response?.message) message.error(response.message);
        }
      }
    );
  const { mutate: cancelUserRequest, isLoading: isCancelUserRequestLoading } =
    useMutation(
      (id) =>
        api(
          { url: `${cancelUserRequestURL}/${id}`, method: "PUT" },
          authConfig
        ),
      {
        onSuccess: (response) => {
          if (response?.message) message.success(response.message);
          sentRequestsRefetch();
        },
        onError: (response) => {
          if (response?.message) message.error(response.message);
        }
      }
    );
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

  const handleRemoveRequest = (id) => {
    if (isTypeSent) {
      cancelUserRequest(id);
    } else {
      rejectUserRequest(id);
    }
  };
  const handelAcceptRequest = (id) => {
    acceptUserRequest(id);
  };
  const handleSendRequest = (id) => {
    sendUserRequset(id);
  };

  const userRequests =
    isRequestModalOpen &&
    !isSentRequestsLoading &&
    !isRecivedRequestsLoading &&
    (isTypeSent ? sentRequests : recivedRequests);

  const parsedUserRequests = () => {
    if (!userRequests) return null;
    if (userRequests.length === 0) {
      return `No User Requests ${isTypeSent ? "Sent" : "Received"}`;
    }
    return userRequests.map((request) => (
      <UserRequestWrapper>
        <h2 style={{ color: "black" }}>
          {isTypeSent ? request.receiver : request.sender}
        </h2>
        <Space direction="horizontal">
          <StyledRemoveIcon onClick={() => handleRemoveRequest(request.id)} />
          {!isTypeSent && (
            <StyledAcceptIcon onClick={() => handelAcceptRequest(request.id)} />
          )}
        </Space>
      </UserRequestWrapper>
    ));
  };

  const parsedData = (data?.content ?? []).map((data) => (
    <UserRequestWrapper key={data.id}>
      <h3>{data.username}</h3>
      <StyledAddIcon onClick={() => handleSendRequest(data.id)} />
    </UserRequestWrapper>
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
        {isSentRequestsLoading ||
        isRecivedRequestsLoading ||
        isacceptUserRequestLoading ||
        isCancelUserRequestLoading ||
        isRejectUserRequestLoading ? (
          <Spin />
        ) : (
          <>{parsedUserRequests()}</>
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
        loading={isLoading}
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
