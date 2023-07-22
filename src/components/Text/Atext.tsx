import { Colors, Fonts, isIOS } from '@config';
import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';

type NTtextStyle = {
    txtStyle?: TextStyle | Array<TextStyle>,
    children?: any,
    title?: boolean,
    h11?: boolean,
    h12?: boolean,
    h14?: boolean,
    h16?: boolean,
    h18?: boolean,
    h20?: boolean,
    h22?: boolean,
    h24?: boolean,
    h26?: boolean,
    h28?: boolean,
    h30?: boolean,
    color?: string,
    w400?: boolean,
    w500?: boolean,
    w600?: boolean,
    w700?: boolean,
    w900?: boolean,
    font_Heavy?: boolean,
    font_Book?: boolean,
    center?: boolean,
    numberOfLines?: number,
}

const AText: FC<NTtextStyle & TextProps> = props => {
    const { txtStyle, children, title = false, h12 = true, h14 = false, h16 = false, h18 = false, h20 = false, h22 = false, h24 = false, h26 = false, h28 = false, h11, h30,
        font_Heavy = false, font_Book = false, center = false, numberOfLines, color = Colors.black333, w400, w500, w600, w700, w900, ...rest
    } = props;


    return (
        <Text
            numberOfLines={numberOfLines || null}
            {...rest}
            style={[
                center && styles.center,
                title && styles.title,
                h11 && { fontSize: 11 },
                h12 && { fontSize: 12 },
                h14 && { fontSize: 14 },
                h16 && { fontSize: 16 },
                h18 && { fontSize: 18 },
                h20 && { fontSize: 20 },
                h22 && { fontSize: 22 },
                h24 && { fontSize: 24 },
                h26 && { fontSize: 26 },
                h28 && { fontSize: 28 },
                h30 && { fontSize: 30 },
                w400 && styles.w400,
                w500 && styles.w500,
                w600 && styles.w600,
                w700 && styles.w700,
                w900 && styles.w900,

                { color: color, fontFamily: Fonts.medium },
                font_Heavy && { fontFamily: Fonts.thin },
                font_Book && { fontFamily: Fonts.bold },
                txtStyle,
            ]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: '900',
        textTransform: 'uppercase',
        fontSize: 30,
        lineHeight: 40,
        color: Colors.gray4D4D4D,
    },
    w400: { fontWeight: '400' },
    w500: { fontWeight: isIOS ? '500' : 'bold' },
    w600: { fontWeight: isIOS ? '600' : 'bold' },
    w700: { fontWeight: isIOS ? '700' : 'bold' },
    w900: { fontWeight: isIOS ? '900' : '900' },
    center: {
        textAlign: 'center',
    },
});

export default AText;
