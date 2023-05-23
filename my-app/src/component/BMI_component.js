import { UNSAFE_getPathContributingMatches } from '@remix-run/router';
import React, { useState, useEffect } from 'react';


export const BMI_component = (props)=>{

    
    const [userBMI,setUserBMI]=useState(0);
    const [userBmiText,setUserBmiText]=useState("");
    const [userName,setUserName] =useState("")

    useEffect(()=>{
        setUserBMI(props.userBMI);
        setUserName(props.userName);
        
        if(userBMI<=18.5) setUserBmiText("저체중"); 
        if(userBMI>18.5 & userBMI<=23) setUserBmiText("정상"); 
        if(userBMI>23 & userBMI<=25) setUserBmiText("과체중"); 
        if(userBMI>25) setUserBmiText("경도비만"); 
    },[userBMI])


    return (
        <div class="d-flex flex-row ">
            <div class="ms-5 mt-3 me-5">
                <span class="fs-3">{userName}님은 현재 {userBmiText}입니다...</span>
            </div>
            <div class="ms-5 mt-3 border">
                <img src="..\img\bmi.jpg" alt="어머 왜 안보이지"></img>
            </div>
        </div>
    );
}

export default BMI_component;