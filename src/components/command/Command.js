import React from 'react'
import { useState } from 'react';
import Time_estimate from '@/src/components/command/Time_estimate';
import Delivery from '@/src/components/command/Delivery';
import List_commands from '@/src/components/command/List_commands';
import Prefix from '@/src/components/command/Prefix';
import Tech from '@/src/components/command/Tech';
import Precision from '@/src/components/command/Precision';
import Price from '@/src/components/Price';
import Discord from '@/src/components/command/Discord';
import Email from '@/src/components/command/Email';
import styles from '@/app/page.module.css';
import styles_command from '@/src/assets/css/command.module.css';

const Command = ({price, setPrice, commands, setCommands, delay, setDelay, jsonData, setJsonData, command, setCommand, description, setDescription, numberCommand, setNumberCommand,  mail, setMail, discord, setDiscord, commandsDescription, setCommandsDescription, captcha, setCaptcha}) => {

  return (
    <div className={`${styles.d_flex} ${styles.justify_space_around} ${styles_command.command_all}`}>
        <div className={styles_command.parent_list_commands}>
            <List_commands 
              delay={delay} 
              setDelay={setDelay} 
              styles_command={styles_command} 
              styles={styles} 
              price={price} 
              setPrice={setPrice} 
              commands = {commands} 
              setCommands = {setCommands}
              jsonData={jsonData}
              setJsonData={setJsonData}
              command={command}
              setCommand={setCommand}
              description={description}
              setDescription={setDescription}
              numberCommand={numberCommand}
              setNumberCommand={setNumberCommand}
              commandsDescription={commandsDescription}
              setCommandsDescription={setCommandsDescription}/>
        </div>
        <div className={styles_command.detail_command}>
            <div className={`${styles.d_flex} ${styles.justify_space_around}`}>
              <Prefix styles_command={styles_command} styles={styles}/>
              <Price styles_command={styles_command} styles={styles} price={price} setPrice={setPrice}/>
            </div>
            <Tech styles_command={styles_command} styles={styles}/>
            <Precision styles_command={styles_command} styles={styles}/>
            <Time_estimate delay={delay} setDelay={setDelay} styles_command={styles_command} styles={styles}/>
            <div className={`${styles.d_flex} ${styles_command.contact}`}>
              <Discord styles_command={styles_command} styles={styles} discord={discord} setDiscord={setDiscord}/>
              <Email styles_command={styles_command} styles={styles}  mail={mail} setMail={setMail}/>
            </div>
            <Delivery styles_command={styles_command} styles={styles} captcha={captcha} setCaptcha={setCaptcha}/>
        </div>
    </div>
  )
}

export default Command