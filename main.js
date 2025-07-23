let body = document.getElementById('body')
body.style.backgroundColor = "blue"

let ism = prompt ("Ismingizni kiriting")
let title = document.createElement('h1')
title.innerText = ism
body.appendChild(title)

title.style.color = "yellow"
title.style.fontSize = "80px";
title.style.fontWeight = "700";
title.style.marginTop = "350px"
title.style.textAlign = "center"
title.style.textShadow = "black 40px 40px 40px 40px"
