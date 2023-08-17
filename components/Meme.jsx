import React from "react"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function changeText(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form>
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={changeText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    type="button"
                >Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 src={meme.topText} className="meme--text top">{meme.topText}</h2>
                <h2 src={meme.bottomText} className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme