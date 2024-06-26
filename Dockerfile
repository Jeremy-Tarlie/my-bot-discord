# Utilisation de l'image Node.js 18 comme image de base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json .
COPY package-lock.json .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port utilisé par votre application
EXPOSE 3000

# Commande à exécuter lors du démarrage du conteneur
CMD ["npm", "run", "dev"]
