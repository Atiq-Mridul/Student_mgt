import axios from "axios";

export function Create(Name,Roll,Age,Class,Section,Hobby) {
    let URL="/api/v1/CreateStudent";
    let postBody= {
        Name:Name,
        Roll:Roll,
        Age:Age,
        Class:Class,
        Section:Section,
        Hobby:Hobby
    }
  return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }

    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Read() {
    let URL="/api/v1/ReadStudent"
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }

    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function ReadByID(id){
    let URL="/api/v1/ReadStudentByID/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}


export function Delete(id) {
    let URL="/api/v1/DeleteStudent/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
            }

    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Update(id,Name,Roll,Age,Class,Section,Hobby){
    let URL="/api/v1/UpdateStudent/"+id;
    let PostBody={
        Name:Name,
        Roll:Roll,
        Age:Age,
        Class:Class,
        Section:Section,
        Hobby:Hobby
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

