import React from 'react';
import "./Login.css";

const Login = () => {  
  const [gender,setGender]=useState("");
  const [branch,setBranch]=useState("");
  const [roll_no,setRoll]=useState("");
  const [batch,setBatch]=useState("");
  const [room_no,setRoom]=useState("");
  const [name,setName]=useState("");
  const [hostel_name,setHostel]=useState("");
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      }));

  };
  return (
    <div className="login">
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
            <h1> User Information.</h1>
            <input type="gender" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
            <input type="text" placeholder="branch" value={branch} onChange={(e) => setBranch(e.target.value)}/>
            <input type="text" placeholder="roll_no" value={roll_no} onChange={(e) => setRoll(e.target.value)}/>
            <input type="text" placeholder="batch" value={batch} onChange={(e) => setBatch(e.target.value)}/>
            <input type="text" placeholder="room_no" value={room_no} onChange={(e) => setRoom(e.target.value)}/>
            <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="hostel_name" value={hostel_name} onChange={(e) => setHostel(e.target.value)}/>
            <button type="submit" classname="submit__btn">Submit</button>
        </form>
      
    </div>
  );
}

export default Login;
