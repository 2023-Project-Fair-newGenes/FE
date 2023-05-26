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
    const [uploadedGenomeFile, setUploadedGenomeFile] = useState('');
    const [user_id , setUserId] = useState("")
    var BMI;

    const handleRadioBtn = (e)=>{
        setUserGender(e.target.value);
    }

    const handleGenomeFileChange = (e)=>{
        setUploadedGenomeFile(e.target.files[0]);
    }
    

    const uploadGenomeFile = async(e)=>{
        alert("분석을 진행합니다.");
        var randomNum = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
        setUserId( randomNum)


        const URL ="http://ec2-54-234-221-150.compute-1.amazonaws.com:8080/upload";


        const formData = new FormData();
        formData.append("genome_file",uploadedGenomeFile)
        formData.append("user_id",user_id);

        fetch(URL, {
            method: 'POST',
            body:  formData,
            },{
                  headers : {
                  "Content-Type":"multipart/form-data"
                  }
            })
            .then(data => {
                console.log(user_id)
                console.log(formData)
                navigate('/result',{
                    state:{
                        userHeight : userHeight,
                        userWeight : userWeight,
                        userId : user_id
                    }
                });
            })
            .catch(error => {
            alert("요청이 처리되지 않았습니다. : "+ e);
            });
        
        // setUserGenomeFile(JSON.stringify(genome_file))
    
        
    }

 

    

    return(
        <div class="d-flex flex-column ">
            <Header></Header>
            <div class="d-flex flex-row" >
                <div class="d-flex flex-column ms-5 mt-3 ps-5 pt-3">
                    <div class="">
                        <span class="fs-4">당신의 유전자형 정보를 입력하세요</span>
                    </div>
                    <div class="mt-3">
                        <form s class="border border-primary border-2 rounded-4">
                            <input type="file" name="genomeFileUpload" class="m-5 p-5 " onChange={handleGenomeFileChange}></input>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column ms-5 mt-3 ps-5 pt-3">
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