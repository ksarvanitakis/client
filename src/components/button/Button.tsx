import { useState } from 'react';

interface ButtonProperties {
    className: string,
    btnText: string,
    bgColor: string,
    txtColor: string,
    hoverColor: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled:boolean
}

export default function Button({className, btnText, bgColor, txtColor, hoverColor, handleClick,disabled}: ButtonProperties) {
    const [hover, setHover] = useState(false);

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '5px 12px',
        border:'none',
        margin: '1rem 0',
        color: `${txtColor}`,
        backgroundColor: `${hover ? hoverColor : bgColor}`,
        cursor:'pointer'
    } as unknown as React.CSSProperties;

    return (
        <button
            className={className}
            style={buttonStyle}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={handleClick}
            disabled={disabled}>
            {btnText}
        </button>
    )
}