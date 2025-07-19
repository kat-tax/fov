import {Icon} from 'react-exo/icon';
import {View, Text, Pressable} from 'react-native';
import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {useLingui} from '@lingui/react/macro';
import {useOwner} from '@evolu/react-native';
import {Identicon} from 'app/stacks/identicon';

import type {MenuProps} from './index';

export function MenuHeader(props: MenuProps) {
  const {profile} = props.context;
  const {styles, theme} = useStyles(stylesheet);
  const owner = useOwner();
  const {t} = useLingui();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Identicon
          id={owner?.id}
          width={20}
          height={20}
          linkable
        />
        <View style={styles.info}>
          <Text
            style={styles.name}
            numberOfLines={1}
            ellipsizeMode="tail">
            {profile?.name ?? t`Human`}
          </Text>
        </View>
        <Pressable onPress={(e) => {e.preventDefault()}}>
          <Icon
            name="ph:magnifying-glass"
            color={theme.colors.mutedForeground}
            size={16}
          />
        </Pressable>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    marginVertical: theme.display.space4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.display.space2,
    paddingEnd: theme.display.space1,
    paddingStart: 6,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.display.space1,
  },
  name: {
    userSelect: 'none',
    fontWeight: '500',
    fontFamily: theme.font.family,
    fontSize: theme.font.contentSize,
    lineHeight: theme.font.contentHeight,
    letterSpacing: theme.font.contentSpacing,
    color: theme.colors.foreground,
  },
}));

