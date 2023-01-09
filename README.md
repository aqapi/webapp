# Projekt frontendu aplikacji webowej z użyciem React.js oraz React-Leaflet

Celem projektu było stworzenie aplikacji webowej za pomocą react oraz serwisu udostępniającego dane map, by zwizualizować dane na temat jakosci powietrza w Polsce.
Żródłem danych na temat jakości powietrza jest [GIOŚ](https://powietrze.gios.gov.pl/pjp/content/api). Dostawcą map jest OpenStreetMaps, a biblioteka generująca mapę na stronie i umożliwiająca jej edycję to Leaflet.

## Użyte technologie:

- [React.js](https://reactjs.org/docs/getting-started.html)
- [React-Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)
- [OpenStreetMaps API](https://wiki.openstreetmap.org/wiki/API)

## Funkcje i komponenty React-Leaflet:

- MapContainer - [odnośnik do Leaflet](https://leafletjs.com/reference.html#mapcontainer)
- TileLayer - [odnośnik do Leaflet](https://leafletjs.com/reference.html#tilelayer)
- Marker - [odnośnik do Leaflet](https://leafletjs.com/reference.html#marker)
- Popup - [odnośnik do Leaflet](https://leafletjs.com/reference.html#popup)
- Tooltip - [odnośnik do Leaflet](https://leafletjs.com/reference.html#tooltip)
- useMapEvents

## Funkcje i komponenty React:

- useEffect - [odnośnik do React](https://reactjs.org/docs/hooks-effect.html)
- useState - [odnośnik do React](https://reactjs.org/docs/hooks-state.html)

## Funkcje i komponenty React własne

- MainMap - komponent zajmujący się całym wygenerowaniem mapy i jej elementów. Zawiera w sobie MapContainer, TileLayer, Marker, Popup, Tooltip z pakietu React-Leaflet






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Deployment

This project uses GitHub Actions workflow. On every push to the `main` branch the website code is built, uploaded to S3 bucket and it's associated Cloudfront Distribution is invalidated.
