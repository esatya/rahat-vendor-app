import React, {useRef} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import colors from '../../../constants/colors';
import {AppIntro} from '../../../contents/AppIntro';
import RightArrow from '../../../assets/icons/RightArrow';
import {Spacing} from '../../../constants/utils';
import {CustomButton, RegularText, SmallText} from '../../components';

const {width} = Dimensions.get('window');

const LandingScreen = ({navigation}) => {
  var scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({item}) => {
    return (
      <View style={styles.introContainer}>
        <View>{item.image}</View>
        <View>
          <RegularText center>{item.title}</RegularText>
          <SmallText center>{item.description}</SmallText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={AppIntro}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
      <ExpandingDot
        data={AppIntro}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        activeDotColor={colors.blue}
        inActiveDotColor={colors.gray}
        dotStyle={styles.dotStyle}
        containerStyle={styles.dotContainerStyle}
      />
      {/* <CustomButton
        title="Get Started"
        icon={<RightArrow />}
        style={styles.button}
        onPress={() => navigation.navigate('GetStartedScreen')}
      /> */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('GetStartedScreen')}>
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: "center"}}>
          <RegularText center style={{paddingHorizontal: Spacing.hs / 2, color:colors.black}}>
            GET STARTED
          </RegularText>
          <RightArrow color={colors.black} />
        </View>
      </Pressable>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  introContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: Spacing.hs,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotContainerStyle: {
    bottom: 140,
  },
  button: {marginBottom: Spacing.vs * 2},
});