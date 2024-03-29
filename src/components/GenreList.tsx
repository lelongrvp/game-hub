import useGenres from "../hooks/useGenres"
import { List, ListItem, HStack, Image, Button, Spinner } from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-url"
import { Genre } from "../hooks/useGenres"
interface Props {
  onSelectedGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null
  if (isLoading) { return <Spinner /> }

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='10px'>
          <HStack>
            <Image boxSize='32px' borderRadius='8px' src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={() => onSelectedGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>))}
    </List>
  )
}

export default GenreList
