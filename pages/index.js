import gif from './assets/love-i-love-you-gif.gif';

function Home ( ){

    return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

        <h1>Renata Souza, você é uma vencedora, te amo!! Bjs</h1>
        <img
            src={gif}
            alt="Mensagem de amor"
            style ={{ maxWidth: '100%', borderRadius: '10px' }}
            />
        </div>
    );
}
export  default Home;