import React from 'react';
import Logo from '../../components/Logo'
import Profile from '../../components/Profile'
const Homepage = ({props}) => {
    return <div>
        {/* 컴포넌트이동은 react route 부분에서 구현합니다. */}
        <Logo />
        <a href="#">About</a><br />
        <a href="#">Notice</a><br />
        <a href="#">Service</a><br />
        <a href="#">UserInfo</a><br />
        Homepage
        <p>{props.id}님 환영합니다.</p>
        <Profile email={props.email} img={props.img} />
        </div>;
}


export default Homepage;