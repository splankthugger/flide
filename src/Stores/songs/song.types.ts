export interface ISong {
    id: number;
    url: string;
    coverUrl: string;
    title: string;
    artistId: number;
    albumId: number;
    albumOrder: number;
    plays: number;
    duration: string;
    path: string;
}