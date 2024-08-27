import {useState} from 'react'

export const useGif = () => {
    
    const [gif, setGif] = useState('')
    
    const reqGif = async() => {
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=RcCR91TAv9j2mGomD9ZGoOnl8qZgm7vB').then(async(resp) => {
            await resp.json().then(({data}) => {
                setGif(data.images.original.url)
            })
        }).catch(console.err)
    }

    const handleGetGif = () =>{
        reqGif()
    }

    // return hook
    return{
        gif,
        handleGetGif
    }
}