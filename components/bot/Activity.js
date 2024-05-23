import React from 'react'


const Activity = ({style, activityBot, setActivityBot, activityBotDescription, setActivityBotDescription}) => {
  const changeActivity = (event) => {
    setActivityBot(event.target.value)
  }

  const changeActivityComment = (event) => {
    setActivityBotDescription(event.target.value)
  }

  return (
    <div className={style.d_flex_column}>
        <label>Activité du bot :</label>
        <select name="activity" onChange={changeActivity} value={activityBot}>               
            <option value="default" hidden selected>Choisissez une activité pour votre bot.</option>
            <option value="Streaming">Streaming</option>
            <option value="Watching">Watching</option>
            <option value="Playing">Playing</option>
        </select>
        <input type="text" onChange={changeActivityComment} value={activityBotDescription}/>
    </div>
  )
}

export default Activity