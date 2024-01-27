"use client"
import React, { useState } from 'react';
import Header from '../src/components/Header';
import Card from '../src/components/presentation/Card';
import NextStep from '@/src/components/NextStep';
import PreviousStep from '@/src/components/PreviousStep';
import Bot from '@/src/components/bot/Bot';
import Command from '@/src/components/command/Command';

export default function Home() {
  const [numberStep, setNumberStep] = useState(0);
  const [price, setPrice] = useState({ now: 0, mounth: 0 });

  const [nameBot, setNameBot] = useState('');
  const [descriptionBot, setDescriptionBot] = useState('');
  const [imageBot, setImageBot] = useState('');
  const [hostBot, setHostBot] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    // if (price.now < 0 || price.mounth < 0 || nameBot === '' || !commands || discord === '' || mail === '') {
    //   alert('Merci de rentrer les champs obligatoires');
    //   return;
    // }

    const queryParams = new URLSearchParams({
      nameBot,
      price: JSON.stringify(price), // Convertissez price en chaîne JSON
      descriptionBot,
      imageBot,
      hostBot,
      activityBot,
      activityBotDescription,
      commands: JSON.stringify(commands), // Convertissez commands en chaîne JSON
      delay,
      command,
      description,
      discord,
      mail,
      jsonData: JSON.stringify(jsonData), // Convertissez jsonData en chaîne JSON
      commandsDescription: JSON.stringify(commandsDescription), // Convertissez commandsDescription en chaîne JSON
    });

    try {
      // Utilisez les paramètres d'URL dans l'URL de la requête GET
      const response = await fetch(`/api/send.js?${queryParams}`, {
        method: 'GET',
      
      });
    
      console.log(response);
    
      if (response.ok) {
        alert(`Merci pour votre intérêt! Nous vous répondrons bientôt !`);
        // Réinitialisez le formulaire ou naviguez vers une page de réussite
      } else {
        alert('Excuses! Veuillez réessayer.');
      }
    } catch (error) {
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
            commandsDescription = {commandsDescription}
            setCommandsDescription = {setCommandsDescription}
          />
        )}

        {numberStep < 2 ? <NextStep numberStep={numberStep} setNumberStep={setNumberStep} /> : null}

        {numberStep > 0 ? <PreviousStep numberStep={numberStep} setNumberStep={setNumberStep} /> : null}
      </form>
    </main>
  );
}
