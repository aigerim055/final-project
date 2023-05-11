import React from 'react';
import  './index.css'
import BackgroundImgRight from './image/contacts_right_background.png'
import BackgroundImgLeft from './image/contacts_left_background.png'


const ContactsPage = () => {
    return (
        <div className={'contacts_background_image'}>
            <img className={'right'} src={BackgroundImgLeft} alt="right_background"/>
            <img className={'left'} src={BackgroundImgRight} alt="left_background"/>
        </div>
    );
};

export default ContactsPage;