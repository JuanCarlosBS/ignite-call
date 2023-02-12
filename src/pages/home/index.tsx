import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado.</Heading>
        <Text size="lg">
          Conete seu calendário e permita que as pessoas marquem agendamentos no
          seu tempo livre
        </Text>
      </Hero>
      <Preview></Preview>
    </Container>
  )
}
