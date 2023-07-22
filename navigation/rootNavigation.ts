
import { StackActions, CommonActions, createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

type RootName = keyof RootStackParamList

export function navigateTo(name: RootName, params: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function replaceTo(name: RootName, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}

export function goBack() {
    if (navigationRef.isReady()) {
        const isCanBack = navigationRef.canGoBack();
        if (isCanBack) {
            navigationRef.dispatch(CommonActions.goBack());
        } else {
            return;
        }
    }
}

export function push(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(name, params));
    } else {
        //Before mount
    }
}

export function popToTop() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.popToTop());
    } else {
        //Before mount
    }
}

export function pop(count?: number) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.pop(count));
    } else {
        //Before mount
    }
}

export function navigateAndReset(routes: { name: string }[], index: number) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes,
            }),
        );
    } else {
        //Before mount
    }
}

export default {
    navigateTo,
    push,
    replaceTo,
    pop,
    popToTop,
    navigateAndReset,
};
