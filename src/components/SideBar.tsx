import { Button } from "./Button";

interface SideBarProps{
  genres: Array<{
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string
  }>,
  onHandleClickButton: (id: number) => void,
  selectedGenreId: number,

}

export function SideBar({genres, onHandleClickButton, selectedGenreId}: SideBarProps) {

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onHandleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}