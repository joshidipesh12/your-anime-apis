let uploaded = document.getElementById('upload-img');
let input = document.getElementsByClassName('upload-input')[0];
let input_img = document.getElementsByClassName('input-img')[0];
let original_div = document.getElementsByClassName('original')[0];
let avatar_div = document.getElementsByClassName('avatar_container')[0];
let avatar_loader = document.getElementsByClassName('loader')[0];

uploaded.addEventListener('change', f => {
  const file_url = URL.createObjectURL(uploaded.files[0]);
  original_div.style.display = 'none';
  avatar_div.style.display = 'flex';
  input.style.display = 'flex';
  input_img.src = file_url;
});

let background_video = document.getElementById('background-video');
background_video.src =
  'https://rr7---sn-8vq54voxpo-qxas.googlevideo.com/videoplayback?expire=1643938962&ei=MjD8YcHULaCoz7sP3--G0AM&ip=2402%3A3a80%3A1bec%3A9640%3A5df6%3A367c%3A78fe%3Afd00&id=o-ABdFOCKyjT81E1wA5WkFlurVoC8GwjAZkNRy8tHfpn6B&itag=18&source=youtube&requiressl=yes&mh=8A&mm=31%2C26&mn=sn-8vq54voxpo-qxas%2Csn-cvh7knzd&ms=au%2Conr&mv=m&mvi=7&pl=48&initcwndbps=376250&vprv=1&mime=video%2Fmp4&ns=qvIqQMpmukt9FUDfwslD2iwG&gir=yes&clen=18304481&ratebypass=yes&dur=197.694&lmt=1500529032476768&mt=1643917038&fvip=5&fexp=24001373%2C24007246&c=WEB&n=riebWMsX0hU3auN&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALI-nylnQRKa3XAi6qRlQdoanOwm5jc6aeLM94BjE3nsAiEAv0WVftnWAjznmOQrJZslwXMklzikff5vCSzyN64fiPA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMEltKJ53Vt1BnP1FJtNNDzlodNX_J_PjbYjFYChnvz6AiEAnNqzAmoMfy9z82iQQwzl9nS7t-NXJ42q3s_8OjzNLM4%3D';
