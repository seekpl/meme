import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1ur9b0.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //API
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemImg})
    }

    render () {
        return (
            <div>
                <form className="input-fields" onSubmit={this.handleSubmit}>
                    <input
                        className="input-fields__field"
                        type="text"
                        placeholder="GORNY TEKST"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-fields__field"
                        type="text"
                        placeholder="DOLNY TEKST"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button className="button-style">GENERUJ</button>
                </form>
                <main>
                    <div className="meme-content">
                        <img src={this.state.randomImg} alt="Meme generator" />
                            
                        <div className="meme-text">
                            <p className="top-text">{this.state.topText}</p>
                            <p className="bottom-text">{this.state.bottomText}</p>
                        </div>
                        
                    </div>
                </main>
            </div>
        )
    }
    
}

export default MemeGenerator
