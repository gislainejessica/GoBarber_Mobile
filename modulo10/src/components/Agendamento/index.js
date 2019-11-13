import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Info, Name, Time, Avatar } from './styles'

export default function Agendamento() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.pngCopy'
          }}
        />
        <Info>
          <Name> Gislaine Jéssica </Name>
          <Time> Em 3 horas </Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="f64c75" />
      </TouchableOpacity>
    </Container>
  )
}
