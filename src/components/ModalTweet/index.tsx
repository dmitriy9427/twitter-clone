import React, { useEffect } from "react";
import closeIcon from '../../images/close.svg';
import imageIcon from '../../images/image.svg';
import gificon from '../../images/gif.svg';
import chartIcon from '../../images/chart.svg';
import smileIcon from '../../images/smile.svg';
import calendarIcon from '../../images/calendar.svg';

import './ModalTweet.scss'

const ModalTweet: React.FC = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset"
        };
    }, []);

    return (
        <div className="tweet">
            <div className="tweet__background"></div>

            <form className="tweet__form">
                <div className="tweet__header">
                    <img className="tweet__header-close" src={closeIcon} alt="close-icon" />
                    <button className="tweet__header-button">Неотправленные твиты</button>
                </div>
                <label className="tweet__label">
                    <img className="tweet__label-avatar" src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg" alt="avatar" />
                    <textarea className="tweet__label-textarea" name="tweet-form" id="tweet-form" cols={20} rows={20} placeholder="Что происходит?"></textarea>
                </label>
                <div className="tweet__btns">
                    <div className="tweet__list">
                        <img className="tweet__list-item" src={imageIcon} alt="icon-img" />
                        <img className="tweet__list-item" src={gificon} alt="icon-gif" />
                        <img className="tweet__list-item" src={chartIcon} alt="icon-chart" />
                        <img className="tweet__list-item" src={smileIcon} alt="icon-smile" />
                        <img className="tweet__list-item" src={calendarIcon} alt="icon-calendar" />
                    </div>
                    <button className="tweet__btn">Твитнуть</button>
                </div>
            </form>
        </div>
    )
}

export default ModalTweet;