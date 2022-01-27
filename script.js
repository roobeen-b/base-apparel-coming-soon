const btn = document.getElementsByTagName("button");

function validation() {
  let email = document.myForm.email.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("Fill out the email field correctly!");
  return false;
}

btn[0].addEventListener("click", validation);
