/**
 * 
 * @returns Makes the navigation bar to the website.
 */

export default function NavBar () {
    const buttonStyle = ' rounded-full bg-sky-600 p-6 transition '
    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <header className="text-xl font-bold text-sky-600 ">My Movie Mash</header>
            <ol className="flex gap-6">
                <li className={buttonStyle}>
                    <a href='/list'>
                        <div className="transition-all transform">
                            <div>

                            </div>
                        </div>
                    </a>
                </li>
                <li className={buttonStyle}>
                    <a href='/random-show'></a>
                </li>
                <li className={buttonStyle}>
                    <a href='/random-movie'></a>
                </li>
            </ol>
            <input type="search" id="movie-search" className="bg-sky-100 border-2 border-sky-600 rounded-full"/>
        </div>
    )
}