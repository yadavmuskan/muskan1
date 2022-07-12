import { ErrorMessage, Field } from 'formik';
import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from '../textError/TextError';

function DatePicker(props) {
	const { label, name, ...rest } = props;
	return (
		<div className='form-control'>
			<label className='fs-16' htmlFor={name}>
				{label}
			</label>
			<Field name={name}>
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;
					return <DateView
						dateFormat=" yyyy, MMMM d"

						id={name} {...field} {...rest} selected={value} onChange={(val) => setFieldValue(name, val)} />;

				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default DatePicker;
