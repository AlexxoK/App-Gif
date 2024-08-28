export const ContenedorGifs = ({ gifs, nombreCategoria }) => {

    return (
        <>
            <div className="">
                {gifs.map(({ id, title, url }) => {
                    return(
                        <img key={id} className="w-50 m-5" src={ url } alt="gif" />
                    )
                })}
            </div>
        </>
    )
}
