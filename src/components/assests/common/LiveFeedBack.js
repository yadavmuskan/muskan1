
import React from "react";
import { useField } from "formik";
const LiveFeedBack = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);

    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    return (
        <div
            className={`${showFeedback ? (meta.error ? "invalid " : "valid ") : ""}`}
        >
            <div className="form-container">
                <label className="label_control_input" htmlFor={props.id}>{label}</label>{" "}
                <input
                    className="login_input"
                    {...props}
                    {...field}
                    aria-describedby={`${props.id}-feedback ${props.id}-help`}
                    onFocus={handleFocus}
                ></input>
            </div>
            {showFeedback ? (
                <div
                    id={`${props.id}-feedback`}
                    aria-live="polite"
                    className="input_error_label"
                >
                    {meta.error ? meta.error : ""}
                </div>
            ) : null}
            {/* For required more detail for input field we can show here  */}
            {/* <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
                {helpText}
            </div> */}
        </div>
    );
};

export default LiveFeedBack;
