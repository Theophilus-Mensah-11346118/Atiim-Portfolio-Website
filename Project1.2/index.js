import { registerRootComponent } from 'expo';
import App from './App';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

registerRootComponent(App);

AppRegistry.registerComponent(appName, () => App);
const rootTag = document.getElementById('root') || document.getElementById('main');
const root = createRoot(rootTag);
root.render(<App />);
