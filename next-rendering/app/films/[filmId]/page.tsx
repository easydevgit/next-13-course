import {getFilm} from "@/app/actions/getFilm"
import {getAllFilms} from "@/app/actions/getAllFilms"

interface Params {
    params: {
        filmId: number
    }
}

export default async function Film({params: {filmId}}: Params) {
    const film = await getFilm(filmId)

    return (
        <div>
            <h1>{film.result.properties.title}</h1>
        </div>
    )
}

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.result.map((film) => ({
        filmId: film.uid
    }))
}
