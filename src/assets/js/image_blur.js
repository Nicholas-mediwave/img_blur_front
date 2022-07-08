console.log("Hello anto");
let file;

function uploadImage(){
    console.log("upload is clicked")
    $('#new-image-upload').click();
}

function handleImageSelect($event) {
  file = $event.target.files;
  $('#originalimageid').attr('src', `${URL.createObjectURL($event.target.files[0])}`);
  $('#BlurImagebtn').removeClass('d-none')
  $('#uploadImagebtn').addClass('d-none')
  $('#originalimagecontid').removeClass('d-none')
}


function addFilter() {
    console.log(file)
    const formData = new FormData()
    formData.append('fd', file[0])
    fetch('http://localhost:1337/imgblur', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.data.bluredimageurl)
      $('#blurimagecontid').removeClass('d-none')
      $('#bluredimageid').attr('src', `${data.data.bluredimageurl}`);
    })
    .catch(error => {
      console.error(error)
    })
  }