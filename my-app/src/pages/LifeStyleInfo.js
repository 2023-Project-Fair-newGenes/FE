import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from "../component/Header";
import { LifeStyleInfoComponent } from "../component/LifeStyleInfoComponent";
import axios from "axios";

export const LifeStyleInfo = ()=>{
    const location = useLocation();
    const [snp_id,setSnpId]=useState("rs9939609");
    const [charList, setCharList] = useState([])
    
    const URL ="http://ec2-54-234-221-150.compute-1.amazonaws.com:8080/requestInfo";


    useEffect(()=>{
        // setSnpId(location.id);
        

        axios.get(URL,{
            params:{id : snp_id}
        }).then(response =>{
            
            setCharList(response.data.lifestyle_info)
        })
    },[charList])

    
    return (
        <div class="mt-3 ms-5">
             <Header></Header>
             <div class="mt-5">
                 <div class="fs-4 mb-4">{snp_id}에 관한 정보입니다</div>
                <table class="table  table-hover">
                    <tbody>
                        {charList.map(data=>{
                            return <LifeStyleInfoComponent info={data}></LifeStyleInfoComponent>
                        })}
                    </tbody> 
                </table>
            </div>
        </div>
       
    );


    

}

export default LifeStyleInfo;