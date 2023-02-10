import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../helper/ValidationHelper";
import {withRouter} from "react-router";
const ListTable = (props) => {

    let [DataList,SetDataList]=useState([]);


    useEffect(()=>{

        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[])


    const DeleteItem=(id)=>{
        Delete(id).then((result)=>{
            if(result===true){
                SuccessToast("Delete Success")
                props.history.push("/")
            }
            else{
                ErrorToast("Request Fail Try Again");
            }
        })
    }

    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

     if(DataList.length>0){
        return (
            <div>
                <table className='table table-border'>
                    <thead>
                    <tr>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Roll</th>
                    <th className='text-center'>Age</th>
                    <th className='text-center'>Class</th>
                    <th className='text-center'>Section</th>
                    <th className='text-center'>Hobby</th>
                    <th className='text-center'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            DataList.map((item,i)=>{
                                return(
                                <tr>
                                <td className='align-middle text-center'>{item.Name}</td>
                                <td className='align-middle text-center'>{item.Roll}</td>
                                <td className='align-middle text-center'>{item.Age}</td>
                                <td className='align-middle text-center'>{item.Class}</td>
                                <td className='align-middle text-center'>{item.Section}</td>
                                <td className='align-middle text-center'>{item.Hobby}</td>
                                <td className='align-middle text-center'>
                                    <button onClick={DeleteItem.bind(this,item._id)} className='btn btn-danger'><i className='fa fa-trash-alt'/></button>
                                    <button onClick={UpdateItem.bind(this,item._id)} className='btn  btn-success mx-1'><i className='fa fa-edit'/></button>
                                </td>
                                </tr>
                                ) 
                            })
                            
                        }
                       

                       
                    </tbody>
                    
                </table>
            </div>
        );
     }

     else{
        return(
            <div>
                <FullScreenLoader/>
            </div>
        )
     }
    
};

export default withRouter(ListTable)