import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { SignUp } from "@screens/SignUp";
import { SignIn } from "@screens/SignIn";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps  = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen  } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){

  return (
    <Navigator screenOptions={{headerShown:false}}  >
      <Screen
      name="signIn"
      component={SignIn}
      />
      <Screen
      name="signUp"
      component={SignUp}
      />

    </Navigator>
  )
}
