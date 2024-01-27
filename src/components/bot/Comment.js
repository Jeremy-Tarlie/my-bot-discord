import React from 'react'


const Comment = ({style_bot, style, commentBot, setCommentBot}) => {

  const changeComment = (event) => {
    setCommentBot(event.target.value)
  }

  return (
    <div className={`${style.d_flex_column} ${style_bot.comment}`}>
        <label>Commentaire à donner en plus :</label>
        <textarea rows="10" cols="20" onChange={changeComment}>{commentBot}</textarea>
    </div>
  )
}

export default Comment