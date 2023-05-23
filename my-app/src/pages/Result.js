import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {BMI_component} from "../component/BMI_component"
import { GenomeInfo } from "../component/GenomeInfo";
import { Header } from "../component/Header";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export const Result = () =>{
    const location = useLocation();
    const [userHeight, setUserHeight] = useState(0.0);
    const [userWeight, setUserWeight] = useState(0.0);
    const [user_id,setUserID] = useState("");
    const [userBMI, setUserBMI] = useState(0);
    const [userName, setUserName] = useState("카리나");
    const [genomeCharacteristicList,setGenomeCharacteristicList]=useState([
        {
            "id" : "LUCY",
            "snp_name" : "신예찬",
            "characteristic" :"혜진스와 결혼할 남자."
        },
        {
            "id" : "호피폴라",
            "snp_name" : "하현상",
            "characteristic" :"혜진스와 평생을 함께 할 남자."
        }
    ]);



    useEffect(()=>{
        setUserHeight(location.state.userHeight/100);
        setUserWeight(location.state.userWeight);
        setUserID(location.state.userId);

        var calculate = userWeight/(userHeight**2);
        setUserBMI(calculate.toFixed(2));

        // axios.get("api/result",{
        //     user_id : user_id
        // }).then(response =>{
        //     setGenomeCharacteristicList(response);
        // })

    },[genomeCharacteristicList])



    return(
        <div>
            <Header></Header>
            <BMI_component userBMI={userBMI} userName={userName}></BMI_component>
            <div class="ms-5 mt-3">
                <div class="mt-4" >
                    <span class="fs-5">{userName}님은 아래와 같은 유전자를 보유하고 있습니다.</span>
                </div>
                <div class="mt-3">
                    <table class="table  table-hover">
                        <thead>
                            <tr>
                                <th>유전자 이름</th>
                                <th>유전자 특성</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {genomeCharacteristicList.map(data=>{
                                return <GenomeInfo snp_id={data.id} 
                                snp_name={data.snp_name} characteristic={data.characteristic}></GenomeInfo>;
                            })}
                        </tbody> 
                    </table>
                </div>
                
            </div>
            
        </div>
    );
}
export default Result;