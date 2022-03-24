var urlCreator = window.URL || window.webkitURL;

let uploaded = document.getElementById('upload-img');
let input = document.getElementsByClassName('upload-input')[0];
let original_div = document.getElementsByClassName('original')[0];
let avatar_div = document.getElementsByClassName('avatar_container')[0];
let avatar_loader = document.getElementsByClassName('loader')[0];
let imgForm = document.getElementsByClassName('img-form')[0];

let input_img = document.getElementsByClassName('input-img')[0];
let input_img_bg = document.getElementsByClassName('input-img blur')[0];
let avatar_img = document.getElementsByClassName('avatar-img')[0];
let avatar_img_bg = document.getElementsByClassName('avatar-img blur')[0];

uploaded.addEventListener('change', () => {
  const file_url = urlCreator.createObjectURL(uploaded.files[0]);

  original_div.style.display = 'none';
  avatar_div.style.display = input.style.display = 'flex';
  input_img.src = input_img_bg.src = file_url;

  let imgFormData = new FormData(imgForm);
  requestAvatar(imgFormData);
});

const requestAvatar = (imgFormData, depth = 0) => {
  depth++;
  axios
    .post('/v1/yourAvatar', imgFormData)
    .then(resp => {
      avatar_img.src = avatar_img_bg.src = resp.data;
    })
    .catch(err => {
      if (depth < 6) {
        console.log(`Error: ${err.message}\nLoading Again...!!!`);
        requestAvatar(imgFormData, depth);
      }
    });
};

avatar_img.addEventListener('load', e => {
  document.getElementsByClassName('loader')[0].style.display = 'none';
  avatar_img.style.position = 'block';
  anime({
    targets: '.avatar-img',
    opacity: 1,
    duration: 4000,
  });
});

// avatar_img.addEventListener('error', requestAvatar);
