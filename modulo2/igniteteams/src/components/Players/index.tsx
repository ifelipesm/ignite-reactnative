import { useState } from 'react';
import { FlatList } from 'react-native'

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Highlight } from '@components/Highlight';
import { PlayerCard } from '@components/PlayerCard';
import { Filter } from '@components/Filter';
import { HeaderList, NumberOfPlayers } from '@components/Filter/styles';

import { Container, Form } from './styles';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  const [team,setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton/>

      <Highlight 
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times!"  
      />

      <Form>  
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        
        <ButtonIcon
          icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Filter
          title={item}
          isActive={item === team}
          onPress={() => setTeam(item)}
          />
        )}
        horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      
      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard 
            name={item} 
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent = {()=>  (
          <ListEmpty
            message="Não há jogadores neste time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom:100},
          players.length === 0 && { flex:1 }
          ]}
      />

      <Button
      title="Remover Time"
      type="SECONDARY"
      />
    </Container>
  );
}