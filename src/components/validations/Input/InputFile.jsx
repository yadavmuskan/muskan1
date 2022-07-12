import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';
import { useField } from 'formik';
import imageCompression from 'browser-image-compression';
import { useState } from 'react';

function InputFile(props) {
	const { label, type, name,uploadicon,id } = props;
	const [field] = useField(props);
	const [photo, setPhoto] = useState("");
	async function imageToBase64(file) {
		console.log("--log");
	  if (file) {
		const compressedFile = await imageCompression(file, {
		  maxSizeMB: 0.05,
		  maxWidthOrHeight: 1920
		});
		// var size = compressedFile.size / 1024 / 1024
		// console.log(size.slice(0,4));
		console.log(` file size (compressedFile.size / 1024 / 1024 ) mb`);
		var reader = new FileReader();
		reader.readAsDataURL(compressedFile);
		reader.onload = async () => {
		  var base64 = reader.result;
		  console.log(base64);
		  setPhoto(base64);
		};
		reader.onerror = (err) => {
		  console.log(err);
		};
	  }
	}

	return (
		// <div className='form-group'>
		// 	<label htmlFor={name}>{label}</label>
		// 	<div className='custom-file'>
		// 		<Field id={name} name={name} {...rest} type='file' className='custom-file-input' {...field} {...props} />
		// 		<label htmlFor={name} className='custom-file-label'>
		// 			{label}
		// 		</label>

		// 		<ErrorMessage name={name} component={TextError} />
		// 	</div>
		// </div>
		<div className='form group'>
		 <Field
        type={type}
        // accept="image/*"
        accept="*"
		role="button"
        name={name}
		className='custom-file-input'
        id={id}
		{...field} {...props}
        style={{ display: "none" }}
        onChange={(e) => imageToBase64(e.target.files[0])}
      />
      <div>
        {photo === "" ? (
          <img
            height="100px"
            width="100px"
		role="button"

            onClick={() => {
              document.getElementById(id).click();
            }}
            src={uploadicon}
            alt="--"
          />
        ) : (
          <img
            onClick={() => {
              document.getElementById(id).click();
            }}
            
		role="button"
		style={{borderRadius: label ? "0px" : "50px" , height: label ? "100px" : "80px" ,  width: label ? "100px" : "80px"  }}

            src={photo}
            alt="---"
          />
        )}
		<div className='text-center'>
		{
			label ? <label htmlFor={name}>{label}</label> : ""
		}</div>
		<ErrorMessage name={name} component={TextError} />
      </div>
		</div>
	);
}

export default InputFile;
