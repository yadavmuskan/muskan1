import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';
import { useField } from 'formik';
// import { useSelector } from 'react-redux';

function Input(props) {
	const { label, textView, setTextView, icon, name, clsname, placeholder, labelColor, ...rest } = props;
	const [field, meta] = useField(props);
	// var { user } = useSelector((state) => state.auth);
	return (
		// <div className={user ? "" : "col"}>
		// <label htmlFor={name}>{label}</label>
		// <div className={user ? '' : 'col'}>
		// <div className={'col'}>
		<>
			<label className={`fs-14 ${labelColor}`} htmlFor={name}>
				{label}
			</label>
			<Field style={{ zIndex: '1' }} id={name} name={name} placeholder={placeholder} {...rest} className={`form-control ${clsname} ${meta.touched && meta.error && 'is-invalid fs-6'}`} autoComplete='off' {...field} {...props} />
			{icon && (
				<div className='input_icon'>
					<img onClick={() => setTextView(!textView)} src={icon} alt='' />
				</div>
			)}
			<ErrorMessage name={name} component={TextError} />
			{/* </div> */}
		</>
	);
}

export default Input;
