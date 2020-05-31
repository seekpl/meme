import React from "react"

function HeaderComponent(props) {
    return(
        <div className="header">
            <div class="logo">
                <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117"
                alt="Problem?"
                />
            </div>
            <h1 className="header__title">Meme <br /> Generator</h1>
        </div>
    )
}

export default HeaderComponent
