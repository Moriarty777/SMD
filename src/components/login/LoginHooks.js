import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Navbar from "../navbar/navbar";
import BlogPage from "../blog/blog_page";

// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken"
import { ThreeDRotation } from '@material-ui/icons';

const clientId =
  '739780891982-42f11bv2adht5jrl2u93sig77rifsf6e.apps.googleusercontent.com';

function LoginHooks() {
  const [users,setUsers] = useState([])
  const [loadinguser, setLoadinguser] = useState(true);
  const [id, setId] = useState("")

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    setUsers(res.profileObj);
  
    // console.log(users, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
    const data = {
      email: users.email,
      password: users.name,
      image: users.imageUrl
      // image: "image 1"
    }
    localStorage.setItem('user_email', users.email)
    localStorage.setItem('user_name', users.name)
    localStorage.setItem('user_image', users.imageUrl)
    let u = localStorage.getItem('user_email')
    console.log(data, "data$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(JSON.stringify(data), "JSON stringified data****************************888")
    console.log(typeof(users.email),"image url type")
    console.log(u,"^^^^^^^^^^^^^^^^^^^^getting from local storage^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        fetch('http://0.0.0.0:8004/blog/api/user/create_user/',{
          method: "POST",
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
            // "X-CSRFToken": getCookie("csrftoken")
          },
          body: JSON.stringify(data)
        })
        // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
        .then(response => response.json())
        .then(data => {console.log(data, "user id")

        // console.log(data.length(),'user_id_length')
        // localStorage.setItem('thread_likes_id', JSON.stringify(data))
        // var a = JSON.parse(localStorage.getItem('thread_likes_id')).length
        // var b = data[a-1]
        localStorage.setItem('id',data)
        setId(data)
       
        }
        );

        
        
      };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button" style={{color:"orange", backgroundColor:"black", fontSize:"25px"}}>

      <span className="buttonText" >Login</span>
      {
        // users?<Navbar users={users}/>:null
      }
      
    </button>
  );
}

export default LoginHooks;