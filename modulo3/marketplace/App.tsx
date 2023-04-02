import { NativeBaseProvider, StatusBar, View } from "native-base";
import { Karla_400Regular, Karla_700Bold, useFonts } from '@expo-google-fonts/karla'
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { THEME } from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold})
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </NativeBaseProvider>
  );
}
