import React from 'react';
import imageIcon from '../../images/image.svg';
import gificon from '../../images/gif.svg';
import chartIcon from '../../images/chart.svg';
import smileIcon from '../../images/smile.svg';
import calendarIcon from '../../images/calendar.svg';


interface ModalTeetBtnsProps {
    handleAddTweet: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ModalTweetBtns: React.FC<ModalTeetBtnsProps> = ({ handleAddTweet }) => {

    return (
        <>
            <div className="tweet__list">
                <img className="tweet__list-item" src={imageIcon} alt="icon-img" />
                <img className="tweet__list-item" src={gificon} alt="icon-gif" />
                <img className="tweet__list-item" src={chartIcon} alt="icon-chart" />
                <img className="tweet__list-item" src={smileIcon} alt="icon-smile" />
                <img className="tweet__list-item" src={calendarIcon} alt="icon-calendar" />
            </div>
            <button onClick={handleAddTweet} className="tweet__btn">Твитнуть</button>
        </>
    )
}

export default ModalTweetBtns;
