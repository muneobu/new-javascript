const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");

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
      // console.log(res,"login.js 22번째줄");
      if (res.success) {
        location.href = "/playground";  //로그인후 이동 주소
      } else {
        alert(res.msg);
        console.log(res, "login.js 27번째줄")
      }
    }).catch((err) => {
      const maratang = new Error("로그인 중 마라탕먹고싶음 이슈");
      console.error(maratang);
    });
    //에러던지기
}
