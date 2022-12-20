import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import styled from "styled-components";
import "./Member.css";
import { UserOutlined } from "@ant-design/icons";
import { Badge, Avatar, Spin, Modal, Space, Input, Button } from "antd";
import COLORS from "../../common/constants/Colors";
import { useQuery } from "react-query";
import APIConstants from "../../common/constants/APIConstants";
import { api } from "../../common/utils/APIMethods";
import { useAuthContext } from "../../common/contexts/AuthContext";
import { useEffect, useState, useMemo } from "react";
import { ConversationHeader, Username } from "../../common/StyledComponents";
import SockJS from "sockjs-client";
import { over } from "stompjs";

const UserNameWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const StyledWrapper = styled.div`
  margin-top: 30px;
`;
const StyledAvatar = styled(Avatar)`
  background-color: transparent;
  color: black;
`;
const StyledMessageContainer = styled.div`
  min-height: 400px;
  max-height: 400px;
  min-width: 100%;
  max-width: 100%;
  overflow-y: scroll;
`;
const LeftMessageWrapper = styled.div`
  width: 100%;
  justify-content: left;
`;
const RightMessageWrapper = styled.div`
  width: 100%;
  justify-content: right;
`;
const MessageWrapper = styled.span`
  color: rgb(173, 173, 173);
`;

var stompClient = null;
export default function Members(props) {
  const { username } = JSON.parse(window.sessionStorage.getItem("user"));
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 10,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  const { fetchUserConversationsURL, fetchConversationMessagesURL } =
    APIConstants;
  const { authConfig } = useAuthContext();
  const fetchConversationMessages = () =>
    api(
      {
        url: `${fetchConversationMessagesURL}/${currentConversation.conversationId}`
      },
      authConfig
    );

  const fetchUserConversations = () =>
    api({ url: fetchUserConversationsURL }, authConfig);
  const { data = [], isLoading: isConversationsLoading } = useQuery(
    ["fetchUserConversations"],
    fetchUserConversations,
    {
      onSuccess: (response) => {
        registerUser(response);
        setConversations([...response]);
      }
    }
  );
  const {
    data: messages,
    isLoading: isMessagesLoading,
    refetch: loadMessages
  } = useQuery(["fetchMessages"], fetchConversationMessages, {
    enabled: false
  });
  const handleSubscriptionResponse = (payload, conversationId) => {
    if (
      currentConversation &&
      currentConversation.conversationId === conversationId
    ) {
      console.log("later");
    } else {
      const updatedConversations = conversations;
      const foundVal = updatedConversations.filter(
        (conversation) => conversation.conversationId === conversationId
      );
      foundVal.newMessages++;
      console.log(updatedConversations);
      setConversations(updatedConversations);
    }
  };

  const registerUser = (response) => {
    let Sock = new SockJS("http://localhost:8090/ws");
    stompClient = over(Sock);
    stompClient.connect({}, () => onConnected(response), onError);
  };
  const onConnected = (response) => {
    response.forEach((ele) => {
      stompClient.subscribe(`/conversation/${ele.conversationId}`, (payload) =>
        handleSubscriptionResponse(payload, ele.conversationId)
      );
    });
  };
  const onError = () => {
    console.log("failure");
  };

  const ChatModalHeader = currentConversation && (
    <ConversationHeader
      style={{
        margin: "auto",
        width: "20%",
        minWidth: "300px",
        justifyContent: "center"
      }}
    >
      <Avatar
        style={{
          color: "black",
          backgroundColor: currentConversation.color,
          fontSize: "20px"
        }}
      >
        {currentConversation.conversationName.charAt(0).toUpperCase()}
      </Avatar>
      <Username
        style={{ color: "black", fontSize: "20px", padding: "0px 10px" }}
      >
        {currentConversation.conversationName}
      </Username>
    </ConversationHeader>
  );
  const getColor = () => COLORS[Math.round(Math.random() * COLORS.length)];

  const children = useMemo(
    () =>
      conversations.map((data) => {
        const color = getColor();
        return (
          <div
            className="child"
            style={{
              backgroundColor: color
            }}
            onClick={() => {
              setCurrentConversation({ ...data, color });
              loadMessages();
              setIsChatModalOpen(true);
            }}
            key={data.conversationId}
          >
            <StyledWrapper>
              <center>
                <Badge
                  count={data.newMessages}
                  style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
                >
                  <StyledAvatar size={90} icon={<UserOutlined />} />
                </Badge>
                <UserNameWrapper>{data.conversationName}</UserNameWrapper>
              </center>
            </StyledWrapper>
          </div>
        );
      }),
    [conversations]
  );

  const ChatModalFooter = (
    <Input.Group compact>
      <Input
        style={{ width: "90%", textAlign: "left" }}
        placeholder="write something to send a message..."
      />
      <Button
        type="primary"
        style={{
          width: "10%"
        }}
      >
        send
      </Button>
    </Input.Group>
  );

  const parsedMessages = isChatModalOpen
    ? messages ??
      [].map((message) => {
        if (message.fromUser === username) {
          return (
            <RightMessageWrapper>
              <MessageWrapper>message.messageText</MessageWrapper>
            </RightMessageWrapper>
          );
        } else {
          return (
            <LeftMessageWrapper>
              <MessageWrapper>message.messageText</MessageWrapper>
            </LeftMessageWrapper>
          );
        }
      })
    : null;

  return isConversationsLoading ? (
    <Spin />
  ) : (
    <>
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
      <Modal
        open={isChatModalOpen}
        onCancel={() => setIsChatModalOpen(false)}
        title={ChatModalHeader}
        width="40%"
        footer={ChatModalFooter}
      >
        <StyledMessageContainer>
          {isMessagesLoading ? <Spin /> : parsedMessages}
        </StyledMessageContainer>
      </Modal>
    </>
  );
}
