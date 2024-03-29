import './App.css'
import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid.tsx"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"


const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: "1fr",
        lg: "fit-content 1fr"
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
