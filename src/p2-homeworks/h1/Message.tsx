import React from 'react'
import style from './Message.module.css'

type PropsType = {
  avatar: string,
  name: string,
  message: string,
  time: string,
}

function Message({avatar, name, message, time}: PropsType) {
    return (
        <div className={style.wrapper}>
          <div className={style.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={style.message}>
            <div className={style.messageInfo}>
              <div className={style.name}>{name}</div>
              <div className={style.text}>{message}</div>
            </div>
            <div className={style.messageTime}>{time}</div>

          </div>
        </div>
    )
}

export default Message
