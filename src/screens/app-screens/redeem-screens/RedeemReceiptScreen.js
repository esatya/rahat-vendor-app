import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RNToasty} from 'react-native-toasty';
import {useDispatch} from 'react-redux';
import colors from '../../../../constants/colors';
import {Spacing} from '../../../../constants/utils';

import {CustomButton, CustomHeader, SmallText, Card} from '../../../components';

const RedeemReceiptScreen = ({navigation, route}) => {
  const {receiptData, from} = route.params;
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const RedeemDetail = ({title, detail, detailColor, onPress}) => (
    <Pressable style={styles.chargeDetail} onPress={onPress}>
      <SmallText>{title}</SmallText>
      <View>
        {typeof detail === 'object' ? (
          detail.map((item, index) => (
            <SmallText
              key={index}
              ellipsizeMode="tail"
              numberOfLines={1}
              color={detailColor || colors.black}
              style={styles.detailText}>
              {item.name} ({item.balance})
            </SmallText>
          ))
        ) : (
          <SmallText
            ellipsizeMode="tail"
            numberOfLines={1}
            color={detailColor || colors.black}
            style={styles.detailText}>
            {detail}
          </SmallText>
        )}
      </View>
    </Pressable>
  );

  const storeReceipt = async () => {
    try {
      const transactions = await AsyncStorage.getItem('transactions');
      if (transactions !== null) {
        const parsedTransaction = JSON.parse(transactions);
        const newTransactionArray = [receiptData, ...parsedTransaction];
        await AsyncStorage.setItem(
          'transactions',
          JSON.stringify(newTransactionArray),
        );
        dispatch({type: 'SET_TRANSACTIONS', transactions: newTransactionArray});
      }
      if (transactions === null) {
        const temp = [receiptData];
        await AsyncStorage.setItem('transactions', JSON.stringify(temp));
        dispatch({type: 'SET_TRANSACTIONS', transactions: temp});
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (from === 'redeemScreen') {
      storeReceipt();
    }
  }, []);

  const copyToClipboard = string => {
    Clipboard.setString(string);
    RNToasty.Show({title: `${t('Copied to clipboard')}`, duration: 0});
  };

  return (
    <>
      <CustomHeader hideBackButton title={`${t('Redeem')} ${t('Receipt')}`} />
      <View style={styles.container}>
        <Card>
          <RedeemDetail
            title={t('Status')}
            detail={t('Success')}
            detailColor={colors.green}
          />
          <RedeemDetail
            title={t('To')}
            detail={receiptData.to}
            detailColor={colors.blue}
            onPress={() => copyToClipboard(receiptData.to)}
          />

          <RedeemDetail title={t('Date')} detail={receiptData.timeStamp} />
          <RedeemDetail title={t('Amount')} detail={receiptData.amount} />
          {receiptData?.packages && (
            <RedeemDetail
              title={t('Packages (QTY)')}
              detail={receiptData.packages}
            />
          )}
        </Card>
        <CustomButton
          title={t('Back To Home')}
          color={colors.green}
          onPress={() => navigation.navigate('HomeScreen', {refresh: true})}
        />
      </View>
    </>
  );
};

export default RedeemReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.hs,
    justifyContent: 'space-between',
    paddingBottom: Spacing.vs * 3,
  },
  chargeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingBottom: Spacing.vs / 3 ,
  },
  detailText: {width: wp(37), textAlign: 'right'},
});