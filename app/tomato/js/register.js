const id = document.querySelector("#id");
const name = document.querySelector("#name")
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("Enter your id")
  if(pw.value !== confirmPw.value)return alert("Check your password again");


  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

  fetch("/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        location.href = "/login";  //로그인후 이동 주소
      } else {
        alert(res.msg);
      }
    }).catch((err) => {
      const tteokbokki = new Error("떡볶이먹고싶당");
      console.error(tteokbokki);
    });
}
