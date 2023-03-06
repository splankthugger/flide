import { AlbumsItemsData } from './data/albums'

export default function handler(req, res) {
  res.status(200).json(AlbumsItemsData)
}
