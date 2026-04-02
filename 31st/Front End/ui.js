import { GetData, UploadProfilePicture } from "./service.js"

console.log(await GetData());

const formElemet = document.getElementById("fileUploadForm")
formElemet.addEventListener("submit",async (e) => {
    e.preventDefault();

    const fileUploadElement = document.getElementById("fileUploadInput");
    const file = fileUploadElement.files[0];
    console.log(file);
    await UploadProfilePicture(file);
    formElemet.reset();
})