import React, { useRef } from 'react'
import { Image } from 'react-native'
import Background from '~/components/Background'

import logo from '~/assets/logo.png'
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText
} from './styles'

export default function SingUp({ navigation }) {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Acessar </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SingIn')}>
          <SignText>Já tenho conta</SignText>
        </SignLink>
      </Container>
    </Background>
  )
}
