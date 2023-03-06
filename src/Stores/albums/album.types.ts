export interface IAlbum {
    id: number
    url: string
    coverUrl: string
    category: string
    title: string
    artistId: number
    plays: number
    songs: number[]
    releaseDate: string
    year: string
    labelTitle: string
}
