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
