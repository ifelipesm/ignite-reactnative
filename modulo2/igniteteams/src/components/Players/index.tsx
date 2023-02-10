import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Form } from './styles';
import { FlatList } from 'react-native'
import { useState } from 'react';
import { HeaderList, NumbersOfPlayers } from '@components/Filter/styles';

export function Players() {
  const [team,setTeam] = useState('Time A');
  const [players, setPlayers] = useState('');

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
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}