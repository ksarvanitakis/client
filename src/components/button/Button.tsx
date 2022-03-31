import { useState } from 'react';

interface ButtonProperties {
    btnText: string,
    handleClick: React.MouseEventHandler<HTMLDivElement>,
    bgColor: string, 
    txtColor: string,
    hoverColor: string,
}

export default function Button({btnText, handleClick, bgColor, txtColor, hoverColor}: ButtonProperties) {
    const [hover, setHover] = useState(false);

    const buttonStyle: React.CSSProperties = {
        backgroundColor: `${hover ? hoverColor : bgColor}`,
        borderRadius: '6px',
        border: '1px solid',
        borderColor: 'black',
        color: `${txtColor}`,
        padding: '8px 16px'
    } as unknown as React.CSSProperties;

    return (
        <div
            style={buttonStyle}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={handleClick}>
            {btnText}
        </div>
    )
}