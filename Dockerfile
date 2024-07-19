# Verwendet das offizielle Node.js 20 Image als Basis
FROM node:20-slim

# Setzt das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiert 'package.json' und 'package-lock.json' ins Arbeitsverzeichnis
COPY package.json ./

# Installiert die Projekt-Abhängigkeiten
RUN npm install

# Kopiert den restlichen Quellcode des Projekts ins Arbeitsverzeichnis
COPY . .

# Baut die Anwendung für die Produktion
RUN npm run build

RUN npm install -g serve

# Startet die NuxtJS-Anwendung mit dem optimierten Produktionsbefehl
CMD ["serve", "-s", "dist"]
