import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Error from './Error'
import axios from 'axios'
export default function Protected(props) {
    const {Component} = props;
    const [status,setStatus] =useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        const id = localStorage.getItem('userId');
        const headers = {
          id:id
        }
        const validation = async()=>{
          await axios.get("http://127.0.0.1/validation",{headers})
          .then((res)=>{
            if (res.data.status==="valid") {
              setStatus(true)
            }else{
              setStatus(false)
            }
          })
        }
        if (id) {
          validation()
        }
    },[])
    return(
      <>
      {status ? <Component/> : <Error/>}
      </>
    )
}
