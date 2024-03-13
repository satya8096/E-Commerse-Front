import React, { useEffect} from "react";
import {useNavigate } from "react-router-dom";

export default function Order() {
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(!auth){
            navigate('/login')
        }
    })
  return <div>Order</div>;
}
