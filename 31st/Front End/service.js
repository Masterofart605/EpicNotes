

export const GetData = async () =>{
    const response = await fetch("http://localhost:5163/somedata")
    const data = await response.json();
    return data;
}

export const UploadProfilePicture = async (file) =>{
    const formData = new FormData();
    formData.append("file",file)
    const response = await fetch("http://localhost:5163/profilePicture",{
        method:"POST",
        body:formData
    });
}