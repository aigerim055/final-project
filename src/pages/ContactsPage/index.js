import React from 'react';
import  './index.css'
import Header from "../../components/header";
import YoutubeIcon from '../../components/Footer/icons/youtube.svg'
import FacebookIcon from '../../components/Footer/icons/facebook.svg'
import InstagramIcon from '../../components/Footer/icons/instagram.svg'
import WhatsappIcon from '../../components/Footer/icons/whatsapp.svg'



const ContactsPage = () => {
    return (
        <div className={'contacts_background_image'}>
            <Header />
            <div className={'container'}>
                <h2 className={'text-black pb-5 my-5'}> Контакты </h2>
                <div className="row align-items-start">
                    <div className="col-6">
                        <div className="adress d-flex flex-column gap-3 ">
                            <p> Боконбаева, 183 / Турусбекова </p>
                            <p> Отзывы и предложения:
                                +996 551 63 11 11 </p>
                            <p> доставка: +996 551 63 11 11 </p>
                        </div>
                        <div className="icons">
                            <><a href="#"> <img src={YoutubeIcon} alt="" width={25} height={19}/> </a></>
                            <><a href="#"> <img src={FacebookIcon} alt="" width={25} height={19}/> </a></>
                            <><a href="#"> <img src={InstagramIcon} alt="" width={25} height={19}/> </a></>
                            <><a href="#"> <img src={WhatsappIcon} alt="" width={25} height={19}/> </a></>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box mb-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1145658645005!2d74.58410719912939!3d42.86782004346962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec989750ffe25%3A0xb2826e0b1ffec277!2z0JzQsNC60LDRgNC-0L3QvdCw0Y8!5e0!3m2!1sru!2skg!4v1683790252019!5m2!1sru!2skg"
                                width="500" height="600"  allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;