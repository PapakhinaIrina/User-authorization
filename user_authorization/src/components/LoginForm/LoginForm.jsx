import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { authContext } from '../../helper/helper';
import axios from 'axios';
import './style.css';
import "react-toastify/dist/ReactToastify.css";


export default function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logged, setLogged } = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
      if (email !== "" && password !== "") {
        await axios
          .post("your login api here", {
            email,
            password,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              if (res.data.status === 401) {
                toast.error("Information not reconize in our system", {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
  
              if (res.data.status === 200) {
                localStorage.setItem("userToken", res.data.token);
                setLogged(true);
              }
            }
          });
      } else {
  
        toast.error("Please fill the form", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
  }

    useEffect(() => {
      checkLogin();
    }, []);

  const checkLogin = () => {
    if (localStorage.getItem("userToken")) {
      setLogged(true);
      console.log("You are connected");
    }
  };

  return (
    <div className='wrapperLoginForm'>
      <ToastContainer />
        <form className='containerLoginForm' onSubmit={handleSubmit}>
          <label> Почта {logged ? "true" : ""} </label>
          <input 
            type="text" 
            placeholder="Логин" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <label> Пароль </label>
            <input 
              type="password" 
              placeholder="Пароль" 
              name="password" 
              autoComplete="on" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select name="interests" id="interests">
              <option value="1">Интерес 1</option>
              <option value="2">Интерес 2</option>
              <option value="3">Интерес 3</option>
            </select>

          <div className='wrapperBtn'>
            <button  className='btnSubmit' type="submit">Подтвердить</button>
          </div>
        </form>
    </div>
  )
}