import { RecoilState, atom } from "recoil";
import ReactNativeRecoilPersist from 'react-native-recoil-persist';

type AppStatusType = {
    firstInstall: boolean;
    theme: 'default' | 'light' | 'dart';
    sizeText: 'normal' | 'big' | 'small';
    language: string;
    top: number,
    bottom: number,
};
export const appStatus_atom: RecoilState<AppStatusType> = atom({
    key: 'appStatus_atom',
    default: {
        firstInstall: false,
        theme: 'default',
        sizeText: 'normal',
        language: 'en',
        top: 0,
        boolean: 0
    },
    effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom], // persist-store
});
