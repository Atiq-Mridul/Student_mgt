import React,{useRef} from 'react';
import {Create} from "../../APIServices/CRUDServices";
import FullScreenLoader from '../../components/Common/FullScreenLoader';
import {ErrorToast,isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {withRouter} from "react-router";


const CreateForm = (props) => {

    let Name,Roll,Age,Class,Section,Hobby,Loader=useRef();

    const SaveData=()=>{
        let Student_Name=Name.value;
        let Student_Roll=Roll.value;
        let Student_Age=Age.value;
        let Student_Class=Class.value;
        let Student_Section=Section.value;
        let Student_Hobby=Hobby.value;
       
        if(isEmpty(Student_Name)){
            ErrorToast("Product Name Required");
        }
        else if(isEmpty(Student_Roll)){
            ErrorToast("Product Code Required");
        }
        else if(isEmpty(Student_Age)){
            ErrorToast("Product Image Required");
        }
        else if(isEmpty(Student_Class)){
            ErrorToast("Product Unit Price Required");
        }
        else if(isEmpty(Student_Section)){
            ErrorToast("Product Qty Required");
        }
        else if(isEmpty(Student_Hobby)){
            ErrorToast("Product Total Price Required");
        }
       
        else{
            Loader.classList.remove("d-none")
            Create(Student_Name,Student_Roll,Student_Age,Student_Class,Student_Section,Student_Hobby)
            .then((Result)=>{
                Loader.classList.add("d-none")
                if(Result===true){
                    SuccessToast("Data Save Success");
                    props.history.push("/");

                }
                else{
                    ErrorToast("Request Fail Try Again");
                }
            })
        }
    }

    

    return (
        <div className='container'>
            <div className='row'>
                
                <div className='col-md-4 p-2'>
                    <label>Product Name</label>
                    <input ref={(input)=>Name=input} type='text' className='form-control'/>
                </div>
                <div className='col-md-4 p-2'>
                    <label>Product Code</label>
                    <input ref={(input)=>Roll=input} type='text' className='form-control'/>
                </div>
                <div className='col-md-4 p-2'>
                    <label>Image</label>
                    <input ref={(input)=>Age=input} type='text' className='form-control'/>
                </div>
                <div className='col-md-4 p-2'>
                    <label>Unit Price</label>
                    <input ref={(input)=>Class=input} type='text' className='form-control'/>
                </div>
                <div className='col-md-4 p-2'>
                    <label>Quantity</label>
                    <input ref={(input)=>Section=input} type='text' className='form-control'/>
                </div>
                <div className='col-md-4 p-2'>
                    <label>Total Price</label>
                    <input ref={(input)=>Hobby=input} type='text' className='form-control'/>
                </div>

            </div>
            <br/>
            <div className='row'>
            <div className='col-md-4 p-2'>
                    <button onClick={SaveData} className='btn btn-primary w-100'>Save</button>
                </div>
                <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>

            </div>
        </div>
    );
};

export default withRouter (CreateForm);