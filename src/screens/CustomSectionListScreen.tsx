import React, { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const CustomSectionListScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <SectionList
        sections={casas}
        renderItem={({ item }) => (
          <Text style={{ color: colors.text }}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={
          <View style={{ marginBottom: 10 }}>
            <HeaderTitle title={`Total casas: ${casas.length}`} />
          </View>
        }
        stickySectionHeadersEnabled // header fixed on the top Android
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: colors.background }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total data: ${section.data.length}`} />
        )}
        showsVerticalScrollIndicator={false}
        // SectionSeparatorComponent={() => <ItemSeparator />}  Separación en lineas para sección
        ItemSeparatorComponent={() => <ItemSeparator />} //  Separación en lineas para item
      />
    </View>
  );
};
