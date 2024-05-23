"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/presentation/Card';
import NextStep from '@/components/NextStep';
import PreviousStep from '@/components/PreviousStep';
import Bot from '@/components/bot/Bot';
import Command from '@/components/command/Command';


export default function Home() {
  const [numberStep, setNumberStep] = useState(0);
  const [price, setPrice] = useState({ now: 0, mounth: 0 });

  const [nameBot, setNameBot] = useState('');
  const [descriptionBot, setDescriptionBot] = useState('');
  const [imageBot, setImageBot] = useState('');
  const [hostBot, setHostBot] = useState(false);
  const [activityBot, setActivityBot] = useState('');
  const [activityBotDescription, setActivityBotDescription] = useState('');
  const [commentBot, setCommentBot] = useState('');

  const [commands, setCommands] = useState([]);
  const [commandsDescription, setCommandsDescription] = useState([]);
  const [delay, setDelay] = useState(0);
  const [jsonData, setJsonData] = useState(null);
  const [command, setCommand] = useState('');
  const [description, setDescription] = useState('');
  const [numberCommand, setNumberCommand] = useState(0);
  const [discord, setDiscord] = useState('');
  const [mail, setMail] = useState('');

  const [captcha, setCaptcha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (captcha) {
        const url = '/api/sendMail';

        const data = {
          nameBot,
          priceNow: price.now,
          priceMounth: price.mounth,
          descriptionBot,
          imgBot: imageBot,
          hostBot,
          activityBot,
          activityBotDescription,
          commentBot,
          delay,
          commands: JSON.stringify(Array.from(commands)),
          jsonData: JSON.stringify(jsonData),
          discord,
          mail,
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });


        if (response.ok) {
          alert(`Merci pour votre intérêt! Nous vous répondrons bientôt !`);
        }
      }
      else {
        alert('Excusez-nous! Veuillez réessayer.');
      }
    } catch (error) {
      console.log(error);
      alert('Oups ! Malheureusement, une erreur s\'est produite.');
    }
  };

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit} method="GET">
        {numberStep === 0 ? (
          <>
            <Card title="Commander le bot de vos rêves" description="Explorez l'opportunité passionnante de personnaliser et d'acquérir le bot parfaitement adapté à vos aspirations et besoins uniques." number={1} />
            <Card title="Un bot personnalisé avec des fonctions innovantes" description="Découvrez l'exclusivité d'un assistant virtuel façonné selon vos exigences, doté de fonctionnalités novatrices pour une expérience inégalée." number={2} />
            <Card title="Façonnez votre propre bot, doté de fonctionnalités selon vos préférences." description="Créez votre propre assistant virtuel sur mesure, équipé de fonctionnalités qui correspondent parfaitement à vos préférences individuelles." number={3} />
          </>
        ) : numberStep === 1 ? (
          <Bot
            price={price}
            setPrice={setPrice}
            nameBot={nameBot}
            setNameBot={setNameBot}
            descriptionBot={descriptionBot}
            setDescriptionBot={setDescriptionBot}
            imageBot={imageBot}
            setImageBot={setImageBot}
            hostBot={hostBot}
            setHostBot={setHostBot}
            activityBot={activityBot}
            setActivityBot={setActivityBot}
            activityBotDescription={activityBotDescription}
            setActivityBotDescription={setActivityBotDescription}
            commentBot={commentBot}
            setCommentBot={setCommentBot}
          />
        ) : (
          <Command
            price={price}
            setPrice={setPrice}
            delay={delay}
            setDelay={setDelay}
            commands={commands}
            setCommands={setCommands}
            jsonData={jsonData}
            setJsonData={setJsonData}
            command={command}
            setCommand={setCommand}
            description={description}
            setDescription={setDescription}
            numberCommand={numberCommand}
            setNumberCommand={setNumberCommand}
            discord={discord}
            setDiscord={setDiscord}
            mail={mail}
            setMail={setMail}
            commandsDescription={commandsDescription}
            setCommandsDescription={setCommandsDescription}
            captcha={captcha}
            setCaptcha={setCaptcha}
          />
        )}

        {numberStep < 2 ? <NextStep numberStep={numberStep} setNumberStep={setNumberStep} /> : null}

        {numberStep > 0 ? <PreviousStep numberStep={numberStep} setNumberStep={setNumberStep} /> : null}
      </form>
    </main>
  );
}
