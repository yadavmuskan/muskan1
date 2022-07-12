import React from 'react'
import loadingLogo from '../images/logo.svg';
import '../../../index.css';

function Button(
    {
        type, className, label, loading
    }
) {
    const getCursore = () => {
        if (loading) {
            return "progress"
        } else {
            return "pointer"
        }
    }
    return (
        <>
            <button disabled={true} className={className} style={{ cursor: getCursore() }} type={type}>
                <span>
                    {label}
                </span>
                {
                    loading ? <img className='loader_button' src={loadingLogo} alt="loading..." />
                        : ""
                }
            </button>
        </>
    )
}

export default Button