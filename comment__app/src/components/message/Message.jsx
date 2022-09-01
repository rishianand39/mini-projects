import React, { useState } from "react";
import styles from "./message.module.css";
import CommentBox from "../commentBox/CommentBox";
import SubMessage from "../subMessage/SubMessage";
const Message = (props) => {
  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const handleArrowUpDown = () => {
    setArrowUp(!arrowUp);
  };

  const handleDelete = () => {};

  const handleOpenReply = () => {
    setOpenReply(!openReply);
  };
  return (
    <>
      <section className={styles.message__container}>
        <div className={styles.top}>
          <i className="fa-solid fa-circle-user"></i>
          <div className={styles.name}>{props.user}</div>
        </div>
        <div className={styles.center}>
          <div>{props.message}</div>
        </div>
        <div className={styles.bottom}>
          <i className="fa-solid fa-thumbs-up"></i>
          <span>{props.likes}</span>
          <i className="fa-solid fa-thumbs-down"></i>
          <span>{props.dislike}</span>
          {props.editable ? (
            <div onClick={handleDelete}>Delete</div>
          ) : (
            <div onClick={handleOpenReply}>Reply</div>
          )}
        </div>
        <div className={styles.openReply__box}>
          {openReply && (
            <CommentBox handleOpenReply={handleOpenReply} autoFocus={true} />
          )}
        </div>
        <div className={styles.arrowReplies}>
          <div onClick={handleArrowUpDown}>
            {arrowUp ? (
              <i className="fa-solid fa-caret-up"></i>
            ) : (
              <i className="fa-solid fa-caret-down"></i>
            )}
            View 4 replies
          </div>
          {arrowUp && (
          <section>
            <SubMessage user="Dummy user" message="dummy sub reply" />
          </section>
        )}
        </div>
        
      </section>
    </>
  );
};

export default Message;
