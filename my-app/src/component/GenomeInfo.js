import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


export const GenomeInfo = (param)=>{
    const navigate = useNavigate();
    const [snp_id,setSnpId] = useState('');
    const [snp_name,setSnpName] = useState('');
    const [characteristic,setCharacteristics] = useState('');

    useEffect(()=>{
        setSnpId(param.snp_id);
        setSnpName(param.snp_name);
        setCharacteristics(param.characteristic);
    },[snp_id])


    const moveToGenomeINfo=()=>{
        navigate('/lifeStyleInfo',{
            state:{
                snp_id : snp_id
            }
        })

    }
    return (
        <tr>
            <td>{snp_name}</td>
            <td>{characteristic}</td>
            <td><button onClick={moveToGenomeINfo} class="btn btn-primary">개선 및 예방 방법 확인하기</button></td>
        </tr>
    );
}



export default GenomeInfo;