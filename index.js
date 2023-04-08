/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '@src/App';
import { name as appName } from './app.json';
import { ProviderContext as ProviderTheme } from '@src/context/Theme';

const upTask = () => (
    <ProviderTheme>
        <App />
    </ProviderTheme>
);


AppRegistry.registerComponent(appName, () => upTask);
