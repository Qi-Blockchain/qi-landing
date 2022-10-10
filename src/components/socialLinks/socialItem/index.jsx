import React from 'react';

const SocialItem = ({link, children}) => {
    return (
        <a href={link} target='_blank'>
            {children}
        </a>
    );
};

export default SocialItem;