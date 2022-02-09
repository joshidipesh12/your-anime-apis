var urlCreator = window.URL || window.webkitURL;

let uploaded = document.getElementById('upload-img');
let input = document.getElementsByClassName('upload-input')[0];
let input_img = document.getElementsByClassName('input-img')[0];
let original_div = document.getElementsByClassName('original')[0];
let avatar_div = document.getElementsByClassName('avatar_container')[0];
let avatar_loader = document.getElementsByClassName('loader')[0];
let imgForm = document.getElementsByClassName('img-form')[0];

uploaded.addEventListener('change', () => {
  const file_url = urlCreator.createObjectURL(uploaded.files[0]);
  original_div.style.display = 'none';
  avatar_div.style.display = 'flex';
  input.style.display = 'flex';
  input_img.src = file_url;

  const imgFormData = new FormData(imgForm);
  axios
    .post('/v1/yourAvatar', imgFormData)
    .then(resp => {
      document.getElementsByClassName('loader')[0].style.display = 'none';
      document.getElementsByClassName(
        'avatar-img',
      )[0].src = `data:image/png;base64,${window.btoa(
        unescape(encodeURIComponent(resp.data)),
      )}`;
    })
    .catch(err => console.log(err));
});
