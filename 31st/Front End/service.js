

export const GetData = async () =>{
    const response = await fetch("http://localhost:5163/somedata")
    const data = await response.json();
    return data;
}