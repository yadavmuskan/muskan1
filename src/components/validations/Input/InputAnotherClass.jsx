import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';
import { useField } from 'formik';

function InputAnotherClass(props) {
	const { label, name, ...rest } = props;
	const [field, meta] = useField(props);

	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<Field
				id={name}
				name={name}
				{...rest}
				className={`form-control pan ${meta.touched && meta.error && 'is-invalid'}`}
				autoComplete='off'
				{...field}
				{...props} />

			<ErrorMessage
				name={name}
				component={TextError} />
		</div>
	);
}

export default InputAnotherClass;
