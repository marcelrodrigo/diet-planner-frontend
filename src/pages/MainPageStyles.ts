import React from "react";

const header:React.CSSProperties = {
    position: 'sticky', 
    top: 0, 
    zIndex: 1, 
    width: '100%'
}

const logo:React.CSSProperties = {
    width: 64,
    height: 64,
    float: 'left',
    backgroundImage: 'url(/icon.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

export default {
    header,
    logo
};