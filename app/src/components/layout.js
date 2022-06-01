import { Box, Grid, Fade } from '@chakra-ui/react'

function TrippleSectionLayout(props) {
  return (
    <Box minHeight="100vh" bg="brand.background" color="brand.primary">
      <Fade in={true}>
        <Grid
          columnGap={0}
          gridTemplateColumns={{ base: '20vw 80vw', lg: `25vw 50vw 25vw` }}
          overflowX={{ base: 'hidden', xl: 'inherit' }}
          {...props}
        />
      </Fade>
    </Box>
  )
}

export default TrippleSectionLayout
