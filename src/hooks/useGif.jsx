import { useState } from 'react'
import { reqGif } from '../services/gif'

export const useGif = () => {
    
    const [gifs, setGifs] = useState([])
    const [nombreCategoria, setNombreCategoria] = useState('')

    const handleGetGif = (e, categoria) => {
        // evita la recarga completa del navegador
        e.preventDefault()

        reqGif(categoria).then((gifs) => {
            setGifs(gifs)
        })

        setNombreCategoria(categoria)
    }

    // return hook -> espacio determinado para colocar la menos logica posible
    return{
        handleGetGif,
        gifs,
        nombreCategoria
    }
}