/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const stressApp = () => (
    <RecoilRoot>
        <SafeAreaProvider>
            {/* <Provider store={store}> */}
            <App />
            {/* </Provider> */}
        </SafeAreaProvider>
    </RecoilRoot>
);

AppRegistry.registerComponent(appName, () => stressApp);
