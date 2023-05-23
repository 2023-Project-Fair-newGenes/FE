import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from "../component/Header";
import { LifeStyleInfoComponent } from "../component/LifeStyleInfoComponent";
import axios from "axios";

export const LifeStyleInfo = ()=>{
    const location = useLocation();
    const [id,setSnpId]=useState("");
    const [charList, setCharList] = useState([])
    const [dataList,setDataList]=useState(
        {
            "id" : "LUCY",
            "info" : [
                "언젠가부터 혜진스의 마음을 점령한 큐티빠띠 뽀짝뽀짝 바이올리니스트",
                "생긴건 또 왜 저렇게 브루니처럼 생겨가지고 사람 맘을 휘저어두고 댕기는 지 모르겠지만",
                "일단 졀라리 귀여운 건 불변입니다."]
        }
    )


    useEffect(()=>{
        setSnpId(location.id);
        setCharList(JSON.parse(JSON.stringify(dataList.info)))
        console.log(charList[0])

        // axios.get("api/requestInfo",{
        //     id : id
        // }).then(response =>{
        //     setDataList(response);
        //     setCharList(JSON.parse(JSON.stringify(dataList.info)))
        // })
    },[dataList])

    
    return (
        <div class="mt-3 ms-5">
             <Header></Header>
             <div class="mt-5">
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