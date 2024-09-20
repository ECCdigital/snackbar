FROM node:22

# Arbeitsverzeichnis im Docker-Image festlegen
WORKDIR /app

# Abhängigkeiten kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm ci
RUN npm i --only=dev

# Rest des Projektcodes kopieren
COPY src .

# Quasar CLI global installieren
RUN npm install -g @quasar/cli

# Quasar Build ausführen
RUN quasar build -m ssr

# Port, auf dem die Anwendung läuft, freigeben
EXPOSE 3000
