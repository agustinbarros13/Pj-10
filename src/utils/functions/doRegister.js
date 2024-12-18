import { API } from "../API/API";

export const doRegister = async (e) =>{
  e.preventDefault();
  console.log(e);
  const [emailInput, passwordInput] = e.target;
  const formData = new FormData ();
  formData.append("email", emailInput.value);
  formData.append("password", passwordInput.value);

  const res = await API ({endpoint: "/users/register", body: formData, method: "Post"});
  console.log(res)
}