import {Select,Avatar} from 'antd';
import styled from 'styled-components';
import debounce from '../../common/utils';
import APIConstants from "../../common/constants/APIConstants";
import { api } from "../../common/utils/APIMethods";
import { useQuery } from "react-query";
import { useAuthContext } from '../../common/contexts/AuthContext';
import { useState } from 'react';


const Username = styled.div`
font-weight: bold;
color: white;
font-size: 15px;
padding: 5px 5px
`

const AvatarWrapper = styled.div`
display: flex;
flex-direction: row;
position: absolute;
top:20px;
right:20px;
`;

const Container = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
padding:20px;
`;

const UserSearch = styled(Select)`
min-width: 400px;
`

const Header = ()=>{
    const {username} = JSON.parse(window.sessionStorage.getItem('user'));
    const [searchText,setSearchText] = useState("");


    const {authConfig} = useAuthContext();
    const {userSearch} = APIConstants;
    const fetchUsersWithQuery = (query)=>api({url: `${userSearch}?query=${searchText}`},authConfig);
    const {data,isLoading,refetch} = useQuery("fetchUserWithQuery",fetchUsersWithQuery);

    const debouncedSearch = debounce((query)=>{
        setSearchText(query)
        refetch()},400);


    console.log(data);

    return  <Container>
        <UserSearch
      showSearch
      allowClear
      placeholder="Enter any username"
      value={searchText}
      defaultActiveFirstOption={false}
      showArrow={true}
      filterOption={false}
      onSearch={(query)=>debouncedSearch(query)}
      notFoundContent={null}
    //   options={(data || []).map((d) => ({
    //     value: d.value,
    //     label: d.text,
    //   }))}
    />

    <AvatarWrapper>
    <Avatar style={{ color: '#f1faee', backgroundColor: '#457b9d' }}>{username.charAt(0).toUpperCase()}</Avatar>
    <Username>{username}</Username>
    </AvatarWrapper>
    </Container>
}
export default Header