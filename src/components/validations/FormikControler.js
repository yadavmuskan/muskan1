import React from 'react';
import Input from './Input/Input';
import Radio from './radio/Radio';
import Select from './select/Select';
import Checkbox from './checkbox/Checkbox';
import Textarea from './textarea/Textarea';
import DatePicker from './datePicker/DatePicker';
import InputAnotherClass from './Input/InputAnotherClass';
import InputFile from './Input/InputFile';

function FormikControler(props) {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />
		case 'input1':
			return <InputAnotherClass {...rest} />
		case 'inputFile':
			return <InputFile {...rest} />
		case 'select':
			return <Select {...rest} />
		case 'textarea':
			return <Textarea {...rest} />
		case 'radio':
			return <Radio {...rest} />
		case 'checkbox':
			return <Checkbox {...rest} />
		case 'date':
			return <DatePicker {...rest} />
		default:
			return null;
	}
}

export default FormikControler;
