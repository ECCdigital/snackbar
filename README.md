# snackbar
___
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
### Abhängigkeiten installieren
```bash
yarn
# or
npm install
```

### Den Docker Container für die Datenbank starten
- Voraussetzung: Docker und Docker Compose sind installiert
```bash
docker-compose up -d
```

### Die App im Entwicklungsmodus starten
- Server Side Rendering
```bash
quasar dev -m ssr
```
- Android App
```bash
quasar dev -m capacitor -T android
```

### Die App für die Produktion bauen
- Server Side Rendering
```bash
quasar build -m ssr
```
- Android App
```bash
quasar build -m capacitor -T android
```
