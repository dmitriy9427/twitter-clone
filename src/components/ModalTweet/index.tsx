import React, { useEffect, useState } from "react";
import closeIcon from '../../images/close.svg';


import './ModalTweet.scss'
import ModalTweetBtns from "../ModalTeetBtns";

type PropsModalTweet = {
    openModalTweet: boolean,
    setOpenModalTweet: (i: boolean) => void,
}


const ModalTweet: React.FC<PropsModalTweet> = ({ openModalTweet, setOpenModalTweet }) => {
    const [modalText, setModalText] = useState<string>('')

    useEffect(() => {
        if (openModalTweet) {
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = "unset"
            };
        } else {
            document.body.style.overflow = "unset"
        }
    }, [openModalTweet]);

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setModalText(e.currentTarget.value)
        }
    }

    const handleAddTweet = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
    }



    return (

        <>
            {openModalTweet && <div className="tweet">
                <div className="tweet__background"></div>

                <form className="tweet__form">
                    <div className="tweet__header">
                        <img onClick={() => setOpenModalTweet(false)} className="tweet__header-close" src={closeIcon} alt="close-icon" />
                        <button className="tweet__header-button">Неотправленные твиты</button>
                    </div>

                    <label className="tweet__label">
                        <img className="tweet__label-avatar" src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg" alt="avatar" />
                        <textarea value={modalText} onChange={handleChangeTextArea} className="tweet__label-textarea" name="tweet-form" id="tweet-form" cols={20} rows={20} placeholder="Что происходит?"></textarea>
                    </label>
                    <div className="tweet__btns">
                        <ModalTweetBtns handleAddTweet={handleAddTweet} />
                    </div>
                </form>
            </div>}</>
    )
}

export default ModalTweet;