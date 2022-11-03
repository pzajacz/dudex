import fs from 'fs'
import path from 'path'

const getImages = (req, res) => {


  const dirRelativeToPublicFolder = `galleries/${req.query.id}`

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

/*  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))*/

  res.statusCode = 200
  res.json(filenames);
}

export default getImages;