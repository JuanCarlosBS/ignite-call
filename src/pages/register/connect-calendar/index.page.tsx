import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { signIn } from 'next-auth/react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister() {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text size="sm">Google Calendar</Text>
          <Button
            variant="secondary"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
