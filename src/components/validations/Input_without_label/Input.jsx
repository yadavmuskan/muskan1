import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';

function Input(props) {
	const { label, name,className, ...rest } = props;
	return (
		<>
			<Field id={name} name={name} {...rest} className={className} autoComplete='off' />
			<ErrorMessage name={name}  component={TextError} />
		</>
	);
}

export default Input;
