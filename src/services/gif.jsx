const api_key = '2PpxD5rJcsRFJjJAnJJCQAEdDggwr4G0'
const limit = 4

export const reqGif = async(categoria) => {
    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ categoria }&limit=${ limit }`)
        const { data } = await resp.json()
        const gifs = data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url
        }))

        return gifs
    } catch (err) {
        console.error(err)
    }
}
