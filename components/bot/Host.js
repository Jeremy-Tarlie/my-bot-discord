import React from 'react';

const Host = ({ style_bot, price, setPrice, hostBot, setHostBot }) => {
  const changeHost = (event) => {
    if (event.target.value === "true") {
      setPrice({ ...price, mounth: 10 });
    } else {
      setPrice({ ...price, mounth: 0 });
    }

    setHostBot(event.target.value);
  };

  return (
    <div className={style_bot.host_bot}>
      <label>Héberger le bot ? </label>
      <select name="host" onChange={changeHost} value={hostBot}>
        <option value={false}>Non</option>
        <option value={true}>Oui</option>
      </select>
    </div>
  );
};

export default Host;
