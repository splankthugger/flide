export interface IArtist {
    id: number;
    url: string;
    coverUrl: string;
    category: string;
    title: string;
    monthlyPlays: number;
    singles: number[];
    albums: number[];
    allReleases: number[];
    popularSongs: number[];
}