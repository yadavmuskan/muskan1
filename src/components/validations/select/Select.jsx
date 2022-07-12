import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/TextError';

function Select(props) {
	const { label, name, options,clsname, placeholder, ...rest } = props;
	return (
		<div className='form-group col mb-0 '>
			<label className='fs-16' htmlFor={name}>
				{label}
			</label>
			<Field as='select' className={`form-select form-control select2 ${clsname}`} name={name}{...rest}>
				<option className='fc-secondary' value={''} disabled>
					{placeholder}
				</option>
				{options.map((e , index) => {
					return (
						<option key={index} value={e.value}>
							{e.key}
						</option>
					);
				})}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Select;
