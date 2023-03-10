import { VStack,Image,Text ,Center, Heading, ScrollView } from "native-base";
import BackgroundImg  from '@assets/background.png'
import  LogoSvg  from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1}} >

    <VStack flex={1} px={10} >
      <Center>

        <Image
          defaultSource={BackgroundImg}
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        
        {/* header */}
        <Center my={24}>  
          <LogoSvg  /> 
          <Text color="gray.100"  fontSize="sm" fontFamily="heading" >
          Treine sua mente e o seu corpo  
          </Text> 
        </Center>

        {/* Text Input */}
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input 
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"/>
          <Input 
          secureTextEntry
          placeholder="Senha"/>

        <Button title="Acessar" />

      </Center>

    <Center mt={24}>
      <Text 
      color="gray.100"
      fontSize="sm"
      mb={3}
      fontFamily="body"
      >
        Ainda não tem acesso?
      </Text>
      <Button 
      onPress={handleNewAccount}
      variant="outline" 
      title="Criar Conta" />
    </Center>

    </VStack>
    </ScrollView>
  )
}