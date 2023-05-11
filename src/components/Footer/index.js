import React from 'react';
import './index.css';
import YoutubeIcon from './icons/youtube.svg'
import FacebookIcon from './icons/facebook.svg'
import InstagramIcon from './icons/instagram.svg'
import WhatsappIcon from './icons/whatsapp.svg'

const Footer = () => {
    return (
        <div className={'container'}>
            <div className={'footer d-flex flex-column gap-3'}>
                <div className="line">
                    <svg width="1312" height="2" viewBox="0 0 1312 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="1312" y2="1" stroke="#313131" stroke-width="2"/>
                    </svg>
                </div>
                <div className="contacts d-flex justify-content-between">
                    <p> Боконбаева, 183 / Турусбекова </p>
                    <p> | </p>
                    <p> Отзывы и предложения: +996 551 63 11 11 </p>
                    <p> | </p>
                    <p> Доставка: +996 551 63 11 11 </p>
                </div>
                <div className="icons">
                    <><a href="#"> <img src={YoutubeIcon} alt="" width={25} height={19}/> </a></>
                    <><a href="#"> <img src={FacebookIcon} alt="" width={25} height={19}/> </a></>
                    <><a href="#"> <img src={InstagramIcon} alt="" width={25} height={19}/> </a></>
                    <><a href="#"> <img src={WhatsappIcon} alt="" width={25} height={19}/> </a></>
                </div>
            </div>
        </div>
    );
};

export default Footer;