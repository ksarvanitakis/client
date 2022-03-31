import { useState } from 'react';

interface ButtonProperties {
    className: string,
    btnText: string,
    handleClick: React.MouseEventHandler<HTMLDivElement>,
    bgColor: string, 
    txtColor: string,
    hoverColor: string,
}

export default function Button({className, btnText, handleClick, bgColor, txtColor, hoverColor}: ButtonProperties) {
    const [hover, setHover] = useState(false);

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '5px 12px',
        margin: '1rem 0',
        color: `${txtColor}`,
        backgroundColor: `${hover ? hoverColor : bgColor}`,
        borderRadius: '6px',
        border: '1px solid',
        borderColor: `${txtColor}`,
    } as unknown as React.CSSProperties;

    return (
        <div
            className={className}
            style={buttonStyle}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={handleClick}>
            {btnText}
        </div>
    )
}