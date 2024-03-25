import  Layout from "../../Components/Layout/Layout.jsx";
import { getUser } from "../../Services/users.js";
import  User from "../User/User.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './OtherUser.css';

function OtherUser() {
    
   // get the id from params
   const id =  useParams();
   console.log('userId', id);

   const [userObj, setUserObj] = useState({});

   // fetch the user with id from params
   useEffect( () => {
    const fetchUser = async () => {
        try {
          const item = await getUser(id.id);
          setUserObj(item);
        } catch {
            console.error("can't find that user mate");
        }    
    }
    fetchUser();
   }, [id]);
   console.log('user other user', userObj)
  
   return (
    <div>
        
        <Layout user={userObj}>
            <User user={userObj} />
        </Layout> 

    </div>
  )
}

export default OtherUser;