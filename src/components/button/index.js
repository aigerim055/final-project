import React from 'react';

const Button = ({text}) => {
    return (
        <div className={'custom-button'}>
            <button>
                {text}
            </button>
        </div>
    );
};

export default Button;