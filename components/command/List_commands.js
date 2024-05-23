  "use client"
  import React, { useEffect, useState } from 'react';
  import list from "@/app/list_command.json"


  const List_commands = ({
    delay,
    setDelay,
    styles_command,
    styles,
    price,
    setPrice,
    commands,
    setCommands,
    jsonData,
    setJsonData,
    command,
    setCommand,
    description,
    setDescription,
    numberCommand,
    setNumberCommand,
    commandsDescription,
    setCommandsDescription,
  }) => {

      
      const handleChange = (event) => {
        setCommand(event.target.value);
      };

      const textareaChange = (event) => {
        setDescription(event.target.value);
      };

      const delayCalcul = (event) => {
        for (let index = 0; index < jsonData.length; index++) {
          if (event.target.checked && jsonData[index].name === event.target.parentNode.id) {
            setDelay(delay+jsonData[index].delay)
            setNumberCommand(numberCommand + 1)
            if (numberCommand > 20 && (numberCommand-20)%3 == 0 && jsonData[index].price == 1) {
              setPrice(prevPrice => ({ ...prevPrice, now: prevPrice.now + jsonData[index].price }));
            } else if(jsonData[index].price == 2) {
              setPrice(prevPrice => ({ ...prevPrice, now: prevPrice.now + jsonData[index].price }));
            }
            setCommands((prevCommands) => new Set([...prevCommands, jsonData[index].name]));
            setCommandsDescription((prevCommandsDescription) => new Set([...prevCommandsDescription, jsonData[index].description]));
          } else if(jsonData[index].name === event.target.parentNode.id){
            setDelay(delay-jsonData[index].delay)
            setNumberCommand(numberCommand - 1)
            if (numberCommand > 20 && (numberCommand-20)%3 == 0 && jsonData[index].price == 1) {
              setPrice(prevPrice => ({ ...prevPrice, now: prevPrice.now - jsonData[index].price }));

            } else if(jsonData[index].price == 2) {
              setPrice(prevPrice => ({ ...prevPrice, now: prevPrice.now - jsonData[index].price }));

            }
            setCommands((prevCommands) => {
              const updatedCommands = new Set(prevCommands);
              updatedCommands.delete(jsonData[index].name);
              return updatedCommands;
            });
            setCommandsDescription((prevCommandsDescription) => {
              const updatedCommandsDescription = new Set(prevCommandsDescription);
              updatedCommandsDescription.delete(jsonData[index].description);
              return updatedCommandsDescription;
            });
          }
        }     
      }

      const addCommand = () => {
        const textarea = document.getElementById("textareaCommand")
        const input = document.getElementById("commandName")
        if (command && textarea.value) {
          
          setJsonData((prevData) => [
            ...prevData,
            {
              name: command,
              description: description,
              delay : 20,
              price : 2
            },
          ]);
          
          setCommand("");
          textarea.value = "";
          input.value = "";
          
        } else {
          alert("Merci de mettre une commande")
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            if (!jsonData) {
              setJsonData(list.list_command);
            }
          } catch (error) {
            console.error('Erreur lors du chargement du fichier JSON :', error);
          }
        };
    
        const checkCommand = () =>{
          try {
            commands.forEach((command) => {
              document.getElementById(command).children[0].checked = true;
            });
            
          } catch (error) {
            console.error('Erreur lors du chargement :', error);
          }
      }
  
      
  
      checkCommand()
        fetchData();
      }, [commands]);

      return (
          <div className={`${styles_command.list_commands} ${styles.margin_10}`}>
            
            {jsonData ? (
              <ul className={styles_command.list_commands_ul}>
                  {jsonData.map(command => (
                    <li key={command.name} id={command.name} className={styles_command.command}>  
                      <input type="checkbox" className={styles_command.checkbox_command} onClick={delayCalcul} /> 
                      <strong>
                        {command.name}
                      </strong>
                      : {command.description}
                    </li>
                  ))}
                  <li id={command} className={`${styles.d_flex} ${styles_command.other_command}`}>
                    <input type="text" id='commandName' onChange={handleChange}/>
                    <strong>
                      :
                    </strong>
                    <textarea id='textareaCommand' onChange={textareaChange}></textarea>
                    <button type="button" onClick={addCommand}> Ajouter la commande </button>
                  </li>
              </ul>
            ) : (
              <p>Chargement des données...</p>
            )}
          </div>
        );
  }

  export default List_commands