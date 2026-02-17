import react from 'react';

function button({label, onClick,className,type='button'}){
    return(
        <button
        type={type}
        onClick={onClick}
        className={`btn ${className}`}>
        { label}
        </button>
    )
}