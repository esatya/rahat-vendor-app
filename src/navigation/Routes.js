import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, AppState } from 'react-native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { colors } from '../constants';
import { Logo } from '../../assets/images';
import LockScreen from '../screens/app-screens/LockScreen';
import { setWalletData } from '../redux/actions/walletActions';
import { lockApp, setAuthData } from '../redux/actions/authActions';

const Routes = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const lockScreen = useSelector(state => state.authReducer.lockScreen);
  const rahatPasscode = useSelector(state => state.authReducer.rahatPasscode);
  const backingUpToDriveStatus = useSelector(state => state.authReducer.backingUpToDriveStatus);
  
  const userData = useSelector(state => state.authReducer.userData);
  const walletInfo = useSelector(state => state.walletReducer.walletInfo);
  const initializing = useSelector(state => state.authReducer.initializing);
  const activeLanguage = useSelector(state => state.languageReducer.activeLanguage);
  const activeAppSettings = useSelector(state => state.agencyReducer.activeAppSettings);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        rahatPasscode !== '' &&
          !backupToDriveStatus &&
          dispatch({ type: 'LOCK_APP' });
      }
    });

    return () => {
      subscription.remove();
    };
  }, [rahatPasscode, backupToDriveStatus]);

  useEffect(() => {
    AsyncStorage.getItem('activeLanguage')
      .then(res => {
        if (res !== null) {
          const activeLanguage = JSON.parse(res);
          i18n.changeLanguage(activeLanguage);
        }
      })
      .catch(e => { });
  }, []);

  useEffect(() => {
    const keys = [
      'walletInfo',
      'storedAppSettings',
      'transactions',
      'storedTokenIds'
    ];

    if (!wallet) {
      AsyncStorage.multiGet(keys)
        .then(res => {
          const walletInfo = JSON.parse(res[0][1]);
          const storedAppSettings = JSON.parse(res[1][1]);
          const storedTransactions = JSON.parse(res[2][1]);
          const storedTokenIds = JSON.parse(res[3][1]);

          if (walletInfo !== null) {
            let activeAppSetting = storedAppSettings[0];
            let provider = new ethers.providers.JsonRpcProvider(
              activeAppSetting?.networkUrl,
            );

            if (storedTransactions !== null) {
              const activeAgencyTransactions =  getActiveAgencyTransactions(activeAppSetting, storedTransactions);
              dispatch({
                type: 'SET_TRANSACTIONS',
                transactions: activeAgencyTransactions,
              });
            }

            if (storedTokenIds !== null) {
              let activeAgencyStoredAssets = storedTokenIds?.filter(item => item.agencyUrl === activeAppSetting?.agencyUrl);
              
              activeAgencyStoredAssets?.length && dispatch({ type: 'SET_STORED_TOKEN_IDS', storedTokenIds: activeAgencyStoredAssets })
            }
            const walletRandom = new ethers.Wallet(
              walletInfo.privateKey,
              provider,
            );
            dispatch({ type: 'SET_WALLET_INFO', payload: walletInfo });
            dispatch(setWallet(walletRandom));
            dispatch(setAppSettings(storedAppSettings,activeAppSetting));
            dispatch(
              getUserByWalletAddress(
                activeAppSetting.agencyUrl,
                walletInfo.address,
                onGetUserSuccess,
                onGetUserError,
              ),
            );
          } else {
            setInitializing(false);
          }
        })
        .catch(e => {
          // console.log(e,);
          setInitializing(false);
        });
    }
    
    dispatch(setAuthData())
  }, []);

  if (initializing) {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Logo />
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      </>
    );
  }
  return (
    <>
      <NavigationContainer>
        {userData === null && !lockScreen ? (
          <AuthStack />
        ) : userData !== null && lockScreen ? (
          <LockScreen />
        ) : (
          <AppStack />
        )}
      </NavigationContainer>
    </>
  );
};

export default Routes;