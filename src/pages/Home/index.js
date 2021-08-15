import { 
    Container,
    Header,
    Img
} from './styles'

import logo from '../../assets/logo.png'
import img from '../../assets/lol.png'
import { useState } from 'react'

function Home({ history }){
    const [summoner, setSummoner] = useState("")

    return (
        <Container>
            <Header>
                <img src={logo} alt="logo"/>
                <span>
                    <strong>LOL STATS</strong>
                </span>
            </Header>
            <h1>
                Search for <strong>summoner</strong> name!
            </h1>
            <form>
                <input
                    placeholder="Summoner"
                    value={summoner}
                    onChange={(e) => setSummoner(e.target.value)}
                />
                <label>BR1</label>
                <button
                    type="button"
                    onClick={() => history.push(`/summoner/${summoner}`)}
                >
                    <strong>Search</strong>
                </button>
            </form>
                <Img src={img} alt="background"/>
        </Container> 
    );
}

export default Home;