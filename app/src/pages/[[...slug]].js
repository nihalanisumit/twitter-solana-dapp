import { Box } from '@chakra-ui/react'
import Header from 'components/header'
import TrippleSectionLayout from 'components/layout'

export default function Home() {
  return (
    <TrippleSectionLayout>
      <Header />
      <Box borderLeft="1px solid #eee" borderRight="1px solid #eee" height="100vh" />
      <Box />
    </TrippleSectionLayout>
  )
}
