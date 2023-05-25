import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {BMI_component} from "../component/BMI_component"
import { GenomeInfo } from "../component/GenomeInfo";
import { Header } from "../component/Header";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export const Result = () =>{
    const location = useLocation();
    const [isLaoded,setIsLoaded] = useState(false);
    const [userHeight, setUserHeight] = useState(0.0);
    const [userWeight, setUserWeight] = useState(0.0);
    const [user_id,setUserID] = useState("FB1234");
    const [userBMI, setUserBMI] = useState(0);
    const [genomeCharacteristicList,setGenomeCharacteristicList]=useState([]);
    const URL ="http://ec2-54-234-221-150.compute-1.amazonaws.com:8080/result";



    useEffect(()=>{
        setUserHeight(location.state.userHeight/100);
        setUserWeight(location.state.userWeight);
        // setUserID(location.state.userId);

        var calculate = userWeight/(userHeight**2);
        setUserBMI(calculate.toFixed(2));


        axios.get(URL,{params:
            {user_id : user_id}
        }).then(response =>{
            console.log(response.data)

            setGenomeCharacteristicList(response.data);
            setIsLoaded(true);
        },e=>{
        })

    },[isLaoded])



    return(
        <div>
            <Header></Header>
            <BMI_component userBMI={userBMI} ></BMI_component>
            <div class="ms-5 mt-3">
                <div class="mt-4" >
                    <span class="fs-5">당신은 아래와 같은 유전자를 보유하고 있습니다.</span>
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
                                snp_name={data.snp_name} characteristic={data.characteristics}></GenomeInfo>;
                            })}
                        </tbody> 
                    </table>
                </div>
                
            </div>
            
        </div>
    );
}
export default Result;