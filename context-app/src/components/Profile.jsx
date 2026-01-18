// import UserContext from '../context/UserContext';
import { useUser } from '../context/UserContext';

function Profile() {
  // const { user } = useUser();
  const si = useUser();

  console.log('Profile user:', si )
  // if (!test1) {
  //   return <div>Please log in to view your profile.</div>
  // }
  return (
    <>
      {/* <div>Hi {user.username}</div>
      <div>Your password is: {user.password}</div> */}
      {/* <div>Hi {test1[1]}</div> */}
      <div>Hi {si.username}</div>
    </>
  )
}

export default Profile