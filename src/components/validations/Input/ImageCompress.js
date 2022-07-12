import imageCompression  from 'browser-image-compression';

async function imageToBase64(file , setSelected) {
    if (file) {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920
      });
    //   var size = compressedFile.size / 1024 / 1024
      var reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onload = async () => {
        var base64 = reader.result;
        console.log(base64);
		setSelected((prevImages) => prevImages.concat(base64));
      };
      reader.onerror = (err) => {
        console.log(err);
      };
    }
  }

  export default imageToBase64