import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import styled from "styled-components";
import "./Member.css";
import { UserOutlined } from "@ant-design/icons";
import { Badge, Avatar } from "antd";
import COLORS from "../../common/constants/Colors";

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
export default function Members(props) {
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

  const data = [
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser",
    "harsha",
    "surya",
    "testUser"
  ];
  const children = data.map((data, i) => {
    return (
      <div
        className="child"
        style={{
          backgroundColor: COLORS[Math.round(Math.random() * COLORS.length)]
        }}
        key={i}
      >
        <StyledWrapper>
          <center>
            <Badge
              count={1}
              style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
            >
              <StyledAvatar size={90} icon={<UserOutlined />} />
            </Badge>
            <UserNameWrapper>{data}</UserNameWrapper>
          </center>
        </StyledWrapper>
      </div>
    );
  });

  return (
    <BubbleUI options={options} className="myBubbleUI">
      {children}
    </BubbleUI>
  );
}
