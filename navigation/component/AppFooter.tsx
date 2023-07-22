import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { Colors, fullWidth, isIOS } from '@config';
import i18n from '@i18n';
import { ICON_TYPE, IconX } from '@components';
import { normalize, scaleHeight, scaleWidth } from 'util';

const AppFooter = ({ state, descriptors, navigation }) => {
    // const dispatch = useDispatch();
    const renderItem = (route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = (i) => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
        };
        let IMAGE = 'home';
        let TAB_NAME = i18n.t('home.title1');
        let ICON_SIZE = { width: scaleWidth(28), height: scaleHeight(28) };
        switch (index) {
            case 0:
                IMAGE = 'home';
                TAB_NAME = i18n.t('home.title1');
                break;
            case 1:
                IMAGE = 'setting';
                TAB_NAME = i18n.t('setting.title1');
                break;
            case 2:
                IMAGE = 'hearto';
                TAB_NAME = i18n.t('profile.title1');
                ICON_SIZE = { width: scaleWidth(28), height: scaleHeight(28) };
                break;
            default:
                IMAGE = 'home';
                TAB_NAME = i18n.t('home.title1');
                break;
        }
        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.5}
                accessibilityRole='button'
                // accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.containerItem}
                onLongPress={onLongPress}>
                <View style={styles.btnItem}>
                    <View style={{ height: scaleHeight(32), alignItems: 'center' }}>
                        <IconX
                            origin={ICON_TYPE.ANT_ICON}
                            name={IMAGE}
                            size={30}
                            color={isFocused ? Colors.blue3D95CE : Colors.grayD8D8D8}
                        />
                    </View>
                    <Text
                        style={{
                            color: isFocused ? Colors.blue3D95CE : Colors.grayD8D8D8,
                            fontSize: 14,
                            // fontFamily: isFocused ? Fonts.fontAvenir_Heavy : Fonts.fontAvenir_Book,
                        }}>
                        {TAB_NAME}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return <View style={styles.content}>{state.routes.map((route, index) => renderItem(route, index))}</View>;
};

export default AppFooter;
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width: fullWidth,
        alignItems: 'center',
        shadowColor: isIOS ? '#00000080' : '#000000',
        height: isIOS ? scaleHeight(84) : scaleHeight(64),
        backgroundColor: Colors.white,
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 5,
        shadowOpacity: isIOS ? 0.23 : 0.45,
        elevation: 3,
    },
    containerItem: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: isIOS ? 'flex-start' : 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    btnItem: {
        height: scaleHeight(51),
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: isIOS ? normalize(7.5) : 0,
    },
    iconItem: {
        width: scaleWidth(32),
        height: scaleHeight(32),
        marginBottom: normalize(3),
    },
});
