# snackbar  
(not related to the Android Snackbar-Component!)

### ECC Audio Podcast App

Diese App ist im Rahmen der Bachelorarbeit von Timm Lohmann <timm.lohmann@e-c-crew.de> an der FH Kiel entstanden.
Betreut wurde die Arbeit von Prof. Dr.-Ing. Jens Ehlers <jens.ehlers@fh-kiel.de>
sowie von Lennard Scheffler <lennard.scheffler@e-c-crew.de> bei der ECC GmbH. <https://e-c-crew.de>

### Beschreibung

Die App stellt Podcasts zu den Themen Kultur- und Führungskräfteentwicklung bereit, die im Rahmen der Projekte bei der ECC GmbH entstehen.

## Technologien

- Quasar Framework
- Vue.js
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Material Design


## Installation
- Voraussetzungen:
  - node.js <https://nodejs.org/en/download/prebuilt-installer>
  - docker & docker compose <https://docs.docker.com/compose/install/>
  - quasar cli <https://quasar.dev/start/quasar-cli>
```bash
npm i -g @quasar/cli
```

### Abhängigkeiten installieren
- Im App-Verzeichnis
```bash
yarn
# oder
npm install
```

### Den Docker Container für die Datenbank starten
- Voraussetzung: Docker und Docker Compose sind installiert
- Der Container wird im Hintergrund gestartet und sollte mit Initialdaten gefüllt werden
- Login-Daten für die Anwendung:
  - Benutzername: timm
  - Passwort: 1234
```bash
docker-compose up -d
```

### Die App im Entwicklungsmodus starten
- Server Side Rendering
- Aufruf der Anwendung im Browser über http//localhost:3000
```bash
quasar dev -m ssr
```
- Android App
```bash
quasar dev -m capacitor -T android
``` 
