import React from 'react';
import "./Logout.css"

const Logout = () => {
  const user =useSelector(selectUser);
  const dispatch =useDispatch();

  const handleLogout = (e) => {
      e.preventDefault();
        
      const dispatch = useDispatch();
      dispatch(logout());
  };
  return (
    <div classname="logout">
      <h1> Info Submitted for <span className="user__name" >user.name</span>.</h1>
      <h1> Thankyou!</h1>
      /* kartik will add a back to home button which whence clicked will navigate to home page.*/
      <button className="logout__button" onClick={(e) => handleLogout(e)}>Back</button>
    </div>
  );
};

export default Logout;
