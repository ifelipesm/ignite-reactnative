import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

export default function Home(){
  const [participants,setParticipants] = useState<string[]>([])
  const [participantName,setParticipantName] = useState('');
  
  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert("Participant exists","There is already a participant with this name.");
    }
    
    setParticipants(prevState => [...prevState,participantName]);
    setParticipantName('');  
  }
  
  function handleParticipantRemove(name: string){
    Alert.alert('Remove',`Remove participant ${name} from the list?`,[
      {
        text:'Yes',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:'No',
        style:'cancel'
      }
    ])
  
  }

  function handleState(state:string){
    setParticipantName(state);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName} >Event Name</Text>
      <Text style={styles.eventDate} >Day, Month, 00 of 0000</Text>
    
      <View style={styles.form}>
        <TextInput 
        style={styles.input} 
        placeholder="Participant Name"  
        placeholderTextColor="#6b6b6b"
        onChangeText={handleState}
        value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText} >
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data={participants}
      keyExtractor={item  =>  item}
      renderItem={({  item  })  =>  (
        <Participant 
        key={item} 
        name={item}  
        onRemove={()  =>  handleParticipantRemove(`${item}`)}/>
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text style={styles.listEmptyText}>Participants hasn't arrived yet? Add participants to the event list</Text>
      )}
      />


    </View>
  )
}