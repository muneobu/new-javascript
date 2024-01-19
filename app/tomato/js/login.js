const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.msg === "login success") {
        location.href = "/playground";  //로그인후 이동 주소
      } else {
        alert(res.msg);
      }
    });
  // .catch((err) => console.error(new Error()));
}
