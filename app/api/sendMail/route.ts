import { NextResponse, NextRequest } from "next/server";
var nodemailer = require("nodemailer");

interface Command {
    name: string;
    description: string;
}

interface RequestData {
    nameBot: string;
    priceNow: string;
    priceMounth: string;
    descriptionBot: string;
    imageBot: string;
    hostBot: string;
    activityBot: string;
    activityBotDescription: string;
    commentBot: string;
    delay: string;
    commands: string;
    discord: string;
    mail: string;
    jsonData: string;
}

export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        try {
            const requestData: RequestData = req.body as RequestData;
            
            const {
                nameBot,
                priceNow,
                priceMounth,
                descriptionBot,
                imageBot,
                hostBot,
                activityBot,
                activityBotDescription,
                commentBot,
                delay,
                commands,
                discord,
                mail,
                jsonData
            } = requestData;

            const jsonDataParsed = JSON.parse(jsonData || "[]") as Command[];
            const filteredCommands = jsonDataParsed.filter((command) => commands?.includes(command.name));
            const formattedDelay = Number(delay) / 10 <= 0 ? "0 jour" : `${Math.ceil(Number(delay) / 10)} jours`;

            const mailOptions = {
                from: "discord@tarlie.fr",
                to: "discord@tarlie.fr",
                subject: "Commande d'un bot",
                text: `Nom du bot : ${nameBot}`,
                attachments: [{
                    filename: "image.png",
                    content: imageBot.replace("blob:", ""),
                    contentType: "image/png"
                }],
                html: `<h1>Nom du bot : ${nameBot}</h1>
                <h3>Le prix est de ${priceNow}€ avec un hébergement à ${priceMounth}€/mois pour un délai de ${formattedDelay}</h3>
                <p>Voilà ce que je dois savoir de plus sur le bot :</p>
                <p>${commentBot}</p>
                <p>Voici la description qu'il y aura sur le bot :</p>
                <p>${descriptionBot}</p>
                <p>Son image de profil :</p>
                <img src="${imageBot}" alt="Image du bot">
                <p>L'activité du bot sera : ${activityBot}</p>
                <p>Le commentaire de l'activité du bot sera : ${activityBotDescription}</p>
                <p>Voici les commandes qui seront sur le bot :</p> 
                <ul>
                ${filteredCommands.map((command, key) => (
                    `<li key=${key}>${command.name} : ${command.description}</li>`
                )).join('')}
                </ul>
                <p>Le bot Discord a été commandé par ${discord} (${mail})</p>`,
            };

            const mailOptionsConfirmation = {
                from: "discord@tarlie.fr",
                to: mail,
                subject: "Confirmation de la commande",
                text: `Bonjour,
                Je vous confirme que la commande a bien été envoyée. Vous recevrez un e-mail pour confirmer si j'accepte la mission. 
                Le paiement s'effectuera via PayPal et aura lieu à la fin du projet, juste avant que je ne vous l'envoie.
                Bien cordialement`,
                html: `<p>Bonjour,</p>
                <br>
                <p>Je vous confirme que la commande a bien été envoyée. Vous recevrez un e-mail pour confirmer si j'accepte la mission. </p>
                <p>Le paiement s'effectuera via PayPal et aura lieu à la fin du projet, juste avant que je ne vous l'envoie.</p>
                <br>
                <p>Bien cordialement`,
            };

            await sendEmail(mailOptions, mailOptionsConfirmation);

            return NextResponse.json({ success: true });
        } catch (error : any) {
            console.error("Error sending email:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "Method Not Allowed : " }, { status: 405 });
    }
}

const transporter = nodemailer.createTransport({
    name: 'tarlie.fr',
    host: 'mail.tarlie.fr',
    port: 465,
    secure: true,
    auth: {
        user: process.env.PRIVARY_MAIL_USER,
        pass: process.env.PRIVARY_MAIL_PASSWORD
    }
});

async function sendEmail(mailOptions: any, mailOptionsConfirmation: any) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                console.error("Error sending email:", error);
                reject(error);
            } else {
                console.log("Email Sent");
                resolve(info);
                console.log(info);
            }
        });
        transporter.sendMail(mailOptionsConfirmation, function (error: any, info: any) {
            if (error) {
                console.error("Error sending email:", error);
                reject(error);
            } else {
                console.log("Email Sent");
                resolve(info);
                console.log(info);
            }
        });
    });
}
