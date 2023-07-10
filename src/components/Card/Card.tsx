import * as React from 'react';
import {cn} from 'utils/classname';

import './Card.scss';

const block = cn('card');

interface CardLink {
    text: string;
    url: string;
}

interface CardProps {
    image?: string;
    title: React.ReactNode;
    text: React.ReactNode;
    link?: CardLink | React.ReactNode;
}
export function Card({text, title, image, link}: CardProps) {
    const imageContent = image ? <img className={block('image')} src={image} alt="Image" /> : null;
    const titleContent = typeof title === 'string' ? <h5 className={block('title')}>{title}</h5> : title;
    const textContent = typeof text === 'string' ? <p className={block('text')}>{text}</p> : text;
    const linkContent = isCardLink(link) ? (
        <a className={block('link')} href={link.url}>
            {link.text}
        </a>
    ) : (
        link
    );

    return (
        <div className={block()}>
            {imageContent}
            <div className={block('content')}>
                {titleContent}
                {textContent}
                {linkContent && linkContent}
            </div>
        </div>
    );
}

function isCardLink(data: CardLink | React.ReactNode | undefined): data is CardLink {
    if (typeof data === 'object' && data !== null && 'url' in data) {
        return true;
    }

    return false;
}
