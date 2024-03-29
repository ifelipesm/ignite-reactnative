import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "native-base";
import { Platform } from "react-native";

import { House, Tag   } from 'phosphor-react-native'

import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { AdCreate } from "@screens/AdCreate";
import { AdEdit } from "@screens/AdEdit";
import { AdPreview } from "@screens/AdPreview";
import { AdDetails } from "@screens/AdDetails";
import { useAuth } from "@hooks/useAuth";
import { TabBarLogout } from "@components/TabBarLogout";


type AppRoutes = {
  home: undefined;
  myads: undefined;
  adcreate: undefined;
  addetails: undefined;
  adpreview: undefined;
  adedit: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){

  const { sizes,colors } = useTheme();

  const iconSize = sizes[6];

  const { signOut } = useAuth();

  return (
    <Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard:true,
      tabBarActiveTintColor: colors.gray[200],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[700],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[7],
        paddingTop: sizes[7]
      }
    }} >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <House color={color} weight="bold" size={iconSize} />
          )
        }}
      />
      <Screen
        name="myads"
        component={MyAds}
        options={{
          tabBarIcon: ({color}) => (
            <Tag color={color} weight="bold" size={iconSize} />
          )
        }}
      />
      <Screen
        name="logout"
        component={Home}
        options={{
          tabBarIcon: () => (
              <TabBarLogout  iconSize={iconSize} onLogout={signOut} />
          )
        }}
      />
      <Screen
        name="adcreate"
        component={AdCreate}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null}}
      />
      <Screen
        name="adedit"
        component={AdEdit}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null}}
      />
      <Screen
        name="adpreview"
        component={AdPreview}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null}}
      />
      <Screen
        name="addetails"
        component={AdDetails}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null}}
      />
    </Navigator>
  )
}