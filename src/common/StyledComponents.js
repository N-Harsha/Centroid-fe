import styled from "styled-components";
import {
  PlusCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import { Select, Avatar, Modal } from "antd";

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
  width: 40%;
`;

const UserRequestWrapper = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
`;

const StyledAddIcon = styled(PlusCircleOutlined)`
  color: #3b80dc;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
`;
const StyledRemoveIcon = styled(CloseCircleOutlined)`
  color: #eb3941;
  font-size: 30px;
  padding: 3px;
  cursor: pointer;
`;
const StyledAcceptIcon = styled(CheckCircleOutlined)`
  color: #7ed81a;
  font-size: 30px;
  padding: 3px;
  cursor: pointer;
`;

const UserRequestContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 20px;
  left: 20px;
`;
const RequestLink = styled.div`
  color: #2e8adf;
  cursor: pointer;
  padding: 0px 5px;
`;

const RequestModal = styled(Modal)``;

export {
  RequestLink,
  UserRequestContainer,
  StyledRemoveIcon,
  StyledAddIcon,
  UserRequestWrapper,
  UserSearch,
  Container,
  AvatarWrapper,
  Username,
  RequestModal,
  StyledAcceptIcon
};
