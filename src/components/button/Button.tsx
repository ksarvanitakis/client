import { useState } from 'react';

interface ButtonProperties {
    className: string,
    btnText: string,
    bgColor: string,
    txtColor: string,
    hoverColor: string,
    handleClick: React.MouseEventHandler<HTMLDivElement>,
}

export default function Button({className, btnText, bgColor, txtColor, hoverColor, handleClick}: ButtonProperties) {
    const [hover, setHover] = useState(false);

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '5px 12px',
        margin: '1rem 0',
        color: `${txtColor}`,
        backgroundColor: `${hover ? hoverColor : bgColor}`,
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