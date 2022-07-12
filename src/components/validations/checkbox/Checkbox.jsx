import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';

function Checkbox(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div className='form-group'>
			<label>{label}</label>
			<Field name={name}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<div className='form-check'>
									<input className='form-check-input' type='checkbox' id='{option.value}' {...field} {...rest} defaultValue='{option.value}' />
									<label className='form-check-label' htmlfor='{option.value}'>
										{option.key}
									</label>
								</div>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default Checkbox;
