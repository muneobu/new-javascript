const id = document.querySelector("#id");
const name = document.querySelector("#name")
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw:confirmPw.value
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
        location.href = "/playground";  //로그인후 이동 주소
      } else {
        alert(res.msg);
      }
    }).catch((err) => {
      const tteokbokki = new Error("떡볶이먹고싶당");
      console.error(tteokbokki);
    });
}
