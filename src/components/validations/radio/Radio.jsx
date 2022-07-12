import { Field, ErrorMessage } from 'formik';
import React from 'react';
import TextError from '../textError/TextError';

function Radio(props) {
	const { label, name, options, checked, ...rest } = props;
	return (
		<div className='form-group'>
			<label className='fs-16' htmlFor={name}>{label}</label>
			
				<div className='form-check pl-0'>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment >
								<div className='form-check-inline'>
									<input className='form-check-input' type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
									<label className='form-check-label' htmlFor={option.value}>
										{option.key}
									</label>
									</div>
							</React.Fragment>

);
});
}}
			</Field>
</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Radio;
/* <div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
  <label className="form-check-label" htmlFor="inlineRadio1">sdkfhdsdsfsdf</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
  <label className="form-check-label" htmlFor="inlineRadio2">sdfsdfsdfsdfds</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" disabled />
  <label className="form-check-label" htmlFor="inlineRadio3">dskljf sdjfnm,sd f s (disabled)</label>
</div>
</div> */