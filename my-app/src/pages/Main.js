import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../component/Header";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";



export const Main = () =>{
    const navigate = useNavigate();
    const [userHeight, setUserHeight] = useState('');
    const [userWeight, setUserWeight] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userGenomeFile, setUserGenomeFile] = useState('');
    const [user_id , setUserId] = useState("000000")
    var BMI;

    const loadGenomeFile = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        
        
        if(e.target.files){
        const uploadFile = e.target.files[0]
        formData.append('file',uploadFile)
        setUserGenomeFile(uploadFile)
        console.log(uploadFile)
        console.log('===useState===')
        console.log(userGenomeFile)
        }

        const genome_file ={
            data : formData,
            headers : {
                "Content-Type":"multipart/form-data"
            }
        }

        setUserGenomeFile(JSON.stringify(genome_file))
    }


    const uploadGenomeFile = async(e)=>{
        alert("분석을 진행합니다.");
        setUserId(String(Math.floor(Math.random()*1000000)).padStart(6, "0"))


        const URL ="api/upload";


        // axios.post(URL,{
        //     user_id : user_id,
        //     genome_file : userGenomeFile
        //     },
        //     {
        //         headers : {
        //         "Content-Type":"multipart/form-data"
        //         }
        //     }).then(response=>{
        //     console.log(response)
        //     navigate('/result',{
        //         state:{
        //             userHeight : userHeight,
        //             userWeight : userWeight,
        //             userId : user_id
        //         }
        //     });
        // },e =>{
        //     alert("요청이 처리되지 않았습니다. : "+ e);
        // })
        navigate('/result',{
            state:{
                userHeight : userHeight,
                userWeight : userWeight,
                userId : user_id
            }
        });

        
    }

    const handleRadioBtn = (e)=>{
        setUserGender(e.target.value);
        console.log(userGender);
    }

    

    return(
        <div class="d-flex flex-column ">
            <Header></Header>
            <div class="d-flex flex-row" >
                <div class="d-flex flex-column ms-5 mt-3 ps-5">
                    <div class="">
                        <span class="fs-4">당신의 유전자형 정보를 입력하세요</span>
                    </div>
                    <div class="mt-3">
                        <form s class="border border-primary border-2 rounded-4">
                            <input type="file" name="genomeFileUpload" class="m-5 p-5 " onChange={loadGenomeFile}></input>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column ms-5 mt-3 ps-5">
                    <div class="">
                        <span class="fs-4">비만도 계산을 위한 신장과 체중 정보를 입력해주세요.</span>
                    </div>
                    <div class="d-flex flex-row mt-4">
                        <div class="d-flex flex-row ms-3">
                            <div class="me-2">
                                <input type="radio" name="gender" value="man" onChange={handleRadioBtn} class="me-1"></input><label>남</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" value="woman" onChange={handleRadioBtn} class="me-1"></input><label>여</label>
                            </div>
                        </div>
                        <div class="d-flex flex-row ms-3">
                            <div class="">
                                <span class="me-1">신장</span> 
                                <input className="userHeight" onChange={(e)=>setUserHeight(e.target.value)}></input> 
                                <span class="ms-1">cm</span>
                            </div>
                            <div class="ms-3">
                                <span class="me-1">체중</span>
                                <input className="userWeight" onChange={(e)=>setUserWeight(e.target.value)}></input>
                                <span class="ms-1">kg</span>
                            </div>

                        </div>
                    </div>
                    <div class="mt-4 ms-3">
                        <button onClick={uploadGenomeFile} class="btn btn-primary">분석 진행하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;