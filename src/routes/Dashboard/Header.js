import {Space,Select,Avatar} from 'antd';
import styled from 'styled-components';
import {useState,useEffect} from 'react';

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

    const handleChange = (e)=>{
        
    }
    useEffect(()=>console.log(searchText),[searchText]);


    return  <Container>
        <UserSearch
      showSearch
      allowClear
      value={searchText}
      placeholder="Enter any username"
      defaultActiveFirstOption={false}
      showArrow={true}
      filterOption={false}
      onSearch={()=>debounced}
      onChange={handleChange}
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