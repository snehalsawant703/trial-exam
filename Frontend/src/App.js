import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/header";
import { Mycard } from "./component/mycard";
import { Navigationbar1 } from "./component/Navigationbar";
import { useEffect, useState } from "react";
//import { map } from "bluebird";
import axios from "axios";

export default function App() {
  return (
    <div>
      <Navigationbar1 />
      <br />
      <br />
      <Header />
      <App1 />
      <Mycomponent />
    </div>
  );
}

function App1() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <div className="row">
        {list.map(() => (
          <div className="col-sm-12 col-md-3 mt-1">
            <Mycard />
          </div>
        ))}
      </div>
    </div>
  );
}

function Mycomponent() {
  const [username, setUsername] = useState("");
  // const [emailid, setEmailid] = useState("");
  // const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [list, setList] = useState([]);

  // const [ajaxList, setAjaxList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // const handleEmailid = (e) => {
  //   setEmailid(e.target.value);
  // };

  // const handleMobile = (e) => {
  //   setMobile(e.target.value);
  // };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const registerUser = () => {
  //   const user = {
  //     username: username,
  //     emailid: emailid,
  //     mobile: mobile,
  //     password: password,
  //   };

  //   const newList = [user, ...list];
  //   setList(newList);

  //   setUsername("");
  //   setEmailid("");
  //   setMobile("");
  //   setPassword("");
  // };

  const saveUser = async () => {
    const url = "http://localhost:4000/add-user";
    const user = {
      username: username,
      password: password,
    };

    await axios.post(url, user);
    const newList = [user, ...list];
    setList(newList);
    setUsername("");
    setPassword("");
  };

  // const callAjax = async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   setAjaxList(result);
  // };

  const getList = async () => {
    const url = "http://localhost:4000/user";
    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  useEffect(() => getList(), []);

  return (
    <div>
      <div>
        <input
          className="w-50 mt-2 p-2"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      {/* <div>
        <input
          type="text"
          placeholder="Enter emailid"
          value={emailid}
          onChange={handleEmailid}
        />
      </div> */}
      {/* <div>
        <input
          type="text"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={handleMobile}
        />
      </div> */}
      <div>
        <input
          className="w-50 mt-2 mb-2 p-2"
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        {/* <input type="button" value="Register" onClick={registerUser} /> */}
        {/* <input type="button" value="get user" onClick={callAjax} /> */}
        <input
          className="btn-success btn-outline-secondary text-light fs-5 w-50 m-1 p-2"
          type="button"
          value="save User"
          onClick={saveUser}
        />
        {/* <input type="button" value="get user" onClick={getList} /> */}
      </div>

      {list.map((item, index) => (
        <div key={index}>
          {item.username},
          {/* {item.emailid},
          {item.mobile}, */}
          {item.password}
        </div>
      ))}

      {/* {ajaxList.map((item) => (
        <div>
          {item.id},{item.title}
        </div>
      ))} */}
    </div>
  );
}
