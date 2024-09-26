├── snackbar-proto  
│   ├── public  
│   │   ├── icons # App Icons für verschiedene Plattformen und Auflösungen, automatisch generiert  
│   │   ├──	favicon.ico # Icon für Browser-Tab  
│   ├── src # Hauptverzeichnis der Frontend-Komponenten  
│   │   ├── assets # Grafiken, Bilder o.Ä. für die Anwendung  
│   │   ├── boot # Initialisierung verschiedener grundlegender Module  
│   │   ├──	axios.js # Setup des http-clients für Serveranfragen  
│   │   ├── components # In Pages und Layouts verwendbare Komponenten  
│   │   ├── css # CSS- und SCSS-Dateien für globales Styling der Anwendung  
│   │   │   ├── app.scss # Globale Styling-Definitionen  
│   │   │   ├── quasar.variables.scss # Definition der Quasar-Variablen  
│   │   ├── i18n # Modul für Internationalierung/Mehrsprachigkeit, automatisch generiert  
│   │   ├── layouts # Für Pages verwendbare Layouts  
│	│   │   ├──	MainLayout.vue # hauptsächlich genutzt für die pages  
│	│   │   ├──	LoginLayout.vue # genutzt für Login und Audio-Player  
│   │   ├── pages  
│	│   │   ├──	AudioPlayerPage.vue  
│	│   │   ├──	ErrorNotFound.vue  
│	│   │   ├──	FavoritesPage.vue # (noch) nicht genutzte Seite für Favoriten  
│	│   │   ├──	HomePage.vue  
│	│   │   ├──	LibraryPage.vue # Audiothek mit Übersicht der Inhalte  
│	│   │   ├──	LoginPage.vue  
│	│   │   ├──	ProfilePage.vue  
│	│   │   ├──	SettingsPage.vue  
│   │   ├── router # Vue Router für die Navigation der Anwendung  
│	│   │   ├──	index.js # Setup des Routers  
│	│   │   ├──	routes.js # Definition der Routen mit Layouts und Pages  
│   │   ├── services  
│	│   │   ├── api # Definition der Client-Anfragen an das Backend/den Server  
│	│	│   │   ├──		ApiAudioService.js  
│	│   │	│   ├──		ApiAuthService.js  
│	│   │   │   ├──		ApiUserService.js  
│	│   │   ├──	helper.js # Helfer für verschiedene Daten-bezogene Anwendungen  
│	│   │   ├──	NotifyService.js # Anzeigen von Notifications/Toasts  
│   │   ├── stores # Definitionen der Pinia-Stores, lokale Zustandsverwaltung  
│	│   │   ├──	audio.js  
│	│   │   ├──	auth.js  
│	│   │   ├──	favorites.js # (noch) ungenutzt  
│	│   │   ├──	user.js  
│	│   │   ├──	index.js # Setup des Pinia-Stores  
│	App.vue # Startpunkt der Anwendung  
│   ├── src-capacitor # Capacitor-Hauptverzeichnis für mobile Plattformen, automatisch generiert  
│   ├── src-pwa # automatisch generiert  
│   ├── src-ssr # Hauptverzeichnis für Backend-Komponenten  
│   │   ├── constants  
│	│   │   ├──	errorCodes.js # Fehlercodes für Logging, aus anderem Projekt übernommen  
│   │   ├── controllers # Definition der Controller, Verarbeitung von Serveranfragen vom Router, Weiterleitung an Datenmanager  
│	│   │   ├──	AudioItemController.js  
│	│   │   ├──	AuthController.js  
│	│   │   ├──	UserController.js  
│   │   ├── data-managers # Verarbeitung der Daten aus der Datenbank nach Empfang der Serveranfrage  
│	│   │   ├──	AudioItemManager.js  
│	│   │   ├──	UserManager.js  
│   │   ├── database-manager  
│	│   │   ├──	DatabaseManager.js # Definition und Initialisierung der Datenbankverbindung via mongoose  
│   │   ├── entities # Definitionen der Datenstrukturen  
│	│   │   ├──	AudioItem.js  
│	│   │   ├──	Category.js # nicht genutzt  
│	│   │   ├──	User.js  
│   │   ├── middlewares # verschiedene Module zur Verarbeitung von Client- und Serveranfragen, aus anderem Projekt übernommen  
│	│   │   ├──	cors.js  
│	│   │   ├──	error.js  
│	│   │   ├──	logger.js  
│	│   │   ├──	loginRateLimit.js # ungenutzt  
│	│   │   ├──	render.js # Quasar-Komponente zum Rendern von Vue.js  
│	│   │   ├──	responseFormatter.js  
│	│   │   ├──	session.js  
│   │   ├── models # Modellierung der Datenstrukturen  
│	│   │   ├──	AudioItemModel.js  
│	│   │   ├──	UserModel.js  
│   │   ├── platform # Server-Module für die Bereitstellung der API-Schnittstelle, Definition der Backend-Routen  
│	│   │   ├── api  
│	│   │   │   ├──	audioRouter.js  
│	│   │   │   ├──	userRouter.js  
│	│   │   ├── auth  
│	│   │   │   ├──	authRouter.js  
│	│   │   ├──	server.js # Setup und Initialisierung des Servers, Festlegen der genutzten Server-Module  
│   ├── .gitignore  
│   ├──	docker-compose.yml # Setup des Datenbank-Containers  
│   ├──	Dockerfile  
│   ├──	index.html  
│   ├──	package.json # Definition der Abhängigkeiten, der backend-scripte sowie der Metadaten der Anwendung  
│   ├──	quasar.config.js # Setup der Quasar-Komponenten  
│   ├──	README.md  
