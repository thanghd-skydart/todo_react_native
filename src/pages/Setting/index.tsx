import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {colors} from '../../constants';
import UIHeader from '../../components/elements/UIHeader';
import {ElementSetting} from './elements/ElementSetting';
import HeaderSetting from './elements/HeaderSetting';

function Settings() {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(false);
  const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);

  //   //navigation
  //   const {navigation, route} = props;
  //   //functions of navigate to/back
  //   const {navigate, goBack} = navigation;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        <HeaderSetting title="Common" />
        <ElementSetting
          iconLeftName="globe"
          title={'Language'}
          subtitle="English"
          iconRightName="chevron-right"
        />
        <ElementSetting
          iconLeftName="cloud"
          title={'Environment'}
          subtitle="Production"
          iconRightName="chevron-right"
        />
        <HeaderSetting title="Account" />

        <ElementSetting
          iconLeftName="phone"
          title={'Phone number'}
          iconRightName="chevron-right"
        />
        <ElementSetting
          iconLeftName="envelope"
          title={'Email'}
          iconRightName="chevron-right"
        />
        <ElementSetting
          iconLeftName="sign-out-alt"
          title={'Sign out'}
          iconRightName="chevron-right"
        />
        <HeaderSetting title="Security" />

        <ElementSetting
          iconLeftName="door-closed"
          title={'Lock app in background'}
          valueSwitch={isEnabledLockApp}
          thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
          onValueChange={() => {
            setEnabledLockApp(!isEnabledLockApp);
          }}
        />
        <ElementSetting
          iconLeftName="fingerprint"
          title={'Use fingerprint'}
          valueSwitch={isUseFingerprint}
          thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
          onValueChange={() => {
            setEnabledLockApp(!isUseFingerprint);
          }}
        />
        <ElementSetting
          iconLeftName="lock"
          title={'Change password'}
          valueSwitch={isEnabledChangePassword}
          thumbColor={
            isEnabledChangePassword ? colors.primary : colors.inactive
          }
          onValueChange={() => {
            setEnabledLockApp(!isEnabledChangePassword);
          }}
        />
        <HeaderSetting title="Misc" />

        <ElementSetting
          iconLeftName="file-alt"
          title={'Term of Service'}
          iconRightName="chevron-right"
        />
        <ElementSetting
          iconLeftName="passport"
          title={'Open source licenses'}
          iconRightName="chevron-right"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Settings;
