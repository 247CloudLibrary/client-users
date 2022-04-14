const UserProfileForm = ({ userInfo }) => {
  return (
    <div>
      <h1>User Profile Form</h1>
      <div>이름: {userInfo.userName}</div>
      <div>성별: {userInfo.gender}</div>
      <div>주소: {userInfo.address}</div>
      <div>email: {userInfo.email}</div>
      <div>연락처: {userInfo.tel}</div>
      <div>생년월일: {userInfo.birth}</div>
    </div>
  );
};

export default UserProfileForm;
