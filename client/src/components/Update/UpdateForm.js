import React, {Fragment, useEffect, useRef} from 'react';
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {ReadByID, Update} from "../../APIServices/CRUDServices";
import {withRouter} from "react-router";
const UpdateForm = (props) => {
    let Name,Roll,Age,Class,Section,Hobby,Loader=useRef();

    const UpdateData=()=>{
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
            Update(props.id,Student_Name,Student_Roll,Student_Age,Student_Class,Student_Section,Student_Hobby)
                .then((Result)=>{
                    Loader.classList.add("d-none")
                    if(Result===true){
                        SuccessToast("Data Udpate Success")
                        props.history.push("/");
                    }
                    else {
                        ErrorToast("Request Fail Try Again");
                    }
                })
        }
    }

    useEffect(()=>{
        ReadByID(props.id).then((Result)=>{
            Name.value=Result[0]['Name']
            Roll.value=Result[0]['Roll']
            Age.value=Result[0]['Age']
            Class.value=Result[0]['Class']
            Section.value=Result[0]['Section']
            Hobby.value=Result[0]['Hobby']
        })
    })

    return (
        <Fragment>
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
                <button onClick={UpdateData} className='btn btn-primary w-100'>Update</button>
            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
            <FullScreenLoader/>
        </div>

        </div>
    </div>
    </Fragment>
    );
};

export default withRouter(UpdateForm);

