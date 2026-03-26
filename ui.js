import { GetCurrentUser, SetCurrentUser } from "./domain.js";

const setUserInQueryString= ()=>{
    const user = GetCurrentUser();
    // if('URLSearchParams' in window){
    //     const url = new URL(window.location)
    //     url.searchParams.set("name",user)
    //     history.pushState(null,'',url)
    // }
    localStorage.setItem("name", user)
}

const logInUserFromQueryString = ()=>{
    // const url = new URL(window.location)
    // const currentUser = url.searchParams.get("name")??""
    // SetCurrentUser(currentUser)

    const currentUser = localStorage.getItem("name")?? ""
    SetCurrentUser(currentUser)
}

const renderLoginForm = () => {
  const formElement = document.createElement("form");
  const nameLabelElement = document.createElement("label");
  const nameInputElement = document.createElement("input");
  const breakElement = document.createElement("br");
  const submitElement = document.createElement("button");

  nameLabelElement.textContent = "Name";
  nameLabelElement.appendChild(nameInputElement);

  submitElement.textContent = "Submit";

  formElement.replaceChildren(nameLabelElement, breakElement, submitElement);

    formElement.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(nameInputElement.value)
        SetCurrentUser(nameInputElement.value)
        setUserInQueryString();
        renderWholePage();
    })

  const containerElement = document.getElementById("pageContent");
  containerElement.replaceChildren(formElement);
};

const renderAuthenticatedPage = ()=>{
    const userName = GetCurrentUser();
    const containerElement = document.getElementById("pageContent")
    containerElement.textContent = `hello ${userName}`

    const breakElement = document.createElement("br")
    const logOutButton = document.createElement("button");
    logOutButton.textContent = "Log Out";
    logOutButton.addEventListener("click",()=>{
        SetCurrentUser("");
        setUserInQueryString();
        renderWholePage();
    })
containerElement.appendChild(breakElement);
    containerElement.appendChild(logOutButton);
}

const renderWholePage = ()=>{
    const user = GetCurrentUser();
    if (!user){
        renderLoginForm();
    }else{
        renderAuthenticatedPage();
    }

}

logInUserFromQueryString();
renderWholePage();
