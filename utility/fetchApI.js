import React from 'react';
import { useState,useEffect } from "react";

export default function FetchAPI(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    const response= await fetch('https://personal-portfolio-backend-9t80.onrender.com/users');
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
    return data
}

