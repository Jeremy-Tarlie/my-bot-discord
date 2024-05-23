"use client"
import React, { useState } from 'react';
import Activity from '@/src/components/bot/Activity';
import Comment from '@/src/components/bot/Comment';
import Description from '@/src/components/bot/Description';
import Host from '@/src/components/bot/Host';
import Image_bot from '@/src/components/bot/Image_bot';
import Price from '@/src/components/Price';
import Title_bot from '@/src/components/bot/Title_bot';
import style_bot from '@/src/assets/css/bot.module.css';
import style from '@/app/page.module.css';
import Image from 'next/image';

             

const Bot = ({ price, setPrice, nameBot, setNameBot, descriptionBot, setDescriptionBot, imageBot, setImageBot, hostBot, setHostBot, activityBot, setActivityBot, activityBotDescription, setActivityBotDescription, commentBot, setCommentBot}) => {
  return (
    <div className={`${style.d_flex} ${style.justify_center} ${style_bot.bot_disposition}`}>
      <div className={style_bot.bot}>
        <div>
          <div className={style.d_flex}>
            <Image
              src="/profile-bot.png"  // Adjust the path to the actual location of your image
              width={400}
              height={600}
              alt="Picture of the author"
              className={style_bot.image_base}
            />
          </div>
          
          <Image
              src={imageBot ? imageBot : "/image-profile-default.png"}  // Adjust the path to the actual location of your image
              width={110}
              height={110}
              alt="Picture of the author"
              className={style_bot.image_bot}
            />
          <p className={style_bot.name_bot}>{nameBot}</p>          
          <p className={style_bot.description_bot}>{descriptionBot}</p>

        </div>
      </div>
      <div className={`${style.d_flex_column} ${style_bot.width_50}`}>
        
        <div className={`${style.d_flex} ${style.justify_between} ${style_bot.margin_top_10} ${style.margin_10}`}>
          <Title_bot name={nameBot} setName={setNameBot} style={style} style_bot={style_bot}/>
          <Activity  style={style} style_bot={style_bot} activityBot = {activityBot} setActivityBot = {setActivityBot} activityBotDescription = {activityBotDescription} setActivityBotDescription = {setActivityBotDescription}/>
        </div>
        <div className={`${style.d_flex} ${style.justify_between} ${style.margin_10} ${style_bot.image_host}`}>
          <Image_bot image={imageBot} setImage={setImageBot} style={style} style_bot={style_bot}/>
          <Host  style={style} style_bot={style_bot} price={price} setPrice={setPrice} hostBot={hostBot} setHostBot = {setHostBot}/>
        </div>

        <div className={style.margin_10}>
        <Description description={descriptionBot} setDescription={setDescriptionBot} style={style} style_bot={style_bot}/>
        </div>
        <div className={style.margin_10}>
          <Comment style={style} style_bot={style_bot} commentBot={commentBot} setCommentBot={setCommentBot}/>
        </div>
        
      </div>
    </div>
  );
};

export default Bot;
