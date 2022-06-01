import { Stack, Text, Link as ChakraLink, Button } from '@chakra-ui/react'
import Link from 'next/link'

function Item({ title, page }) {
  return (
    <Stack _hover={{ bg: '#333', rounded: 'full' }} px={3} py={2}>
      <Link href={`${page}`} as={`${page}`} passHref>
        <ChakraLink _focus={{ boxShadow: 'none', textDecoration: 'none' }}>
          <Text fontSize="xl">{title}</Text>
        </ChakraLink>
      </Link>
    </Stack>
  )
}

function SelectWallet() {
  return (
    <Button bg="pink.700" rounded="full" mr={-4} _hover={{ bg: 'pink.500' }} fontSize="lg">
      Select Wallet
    </Button>
  )
}

function Header() {
  return (
    <Stack align="flex-end" mr={14} mt={20} spacing={6}>
      <Item title="Icon" page="/" />
      <Item title="Home" page="/" />
      <Item title="Topics" page="/topics" />
      <Item title="Users" page="/users" />
      <SelectWallet />
    </Stack>
  )
}

export default Header
