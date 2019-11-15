import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import api from '~/services/api'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

import { Container, ProvidersList, Provider, Avatar, Name } from './styles'

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers')
      setProviders(response.data)
    }
    loadProviders()
  }, [])
  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtrator={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime', { provider })
              }}
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url.replace('localhost', '192.168.15.9') // `https://api.adorable.io/avatars/50/abott@adorable.pngCopy` // provider.avatar.url
                    : `https://api.adorable.io/avatars/50/${provider.name}.pngCopy`
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  )
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o Prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard')
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  )
})
