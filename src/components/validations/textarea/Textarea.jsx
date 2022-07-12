import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';

function Textarea(props) {
	const { label, name, ...rest } = props;
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Field className='form-control' rows='3' as='textarea' id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Textarea;
