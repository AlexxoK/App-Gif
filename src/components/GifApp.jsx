import { useGif } from "../hooks/useGif"

// functional component
export const GifApp = () => {

    const {gif, handleGetGif} = useGif()

    return(
        // fragment
        <>
            <div>
                <button onClick={handleGetGif} className="btn btn-outline-success position-absolute start-50">Generar Gif</button>
            </div>
            <div>
                <img className="w-50 m-5" src={gif} alt="gif" />
            </div>
        </>
    )
}