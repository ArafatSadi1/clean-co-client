import React, { useEffect, useState } from "react";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services)
  useEffect(()=>{
    (async()=>{
      const res = await fetcher.get('/service');
      setServices(res.data)

    })()
  },[])
  return (
    <div>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
    </div>
  );
};

export default Services;
