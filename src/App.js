import './App.css';

function App() {
  return (
    <div> 
      <Hearder />
      <Section />
    </div>
  )
}

function Hearder() {
  return(
    <div>
      <header>
        <img className="imgLogo" src="/assets/logo.png" alt='logo'/>
        <div  className="searchBar">
            <input/>
            <img src="./assets/searchicon.png" alt='searchingicon'/>
        </div>
        <div className="headerWriting">
            Mettre mon logement sur AirBnB
        </div>
    </header>
    </div>
  )
  
}

function Section(){
  return (
    <section className="cardsContainer">
    <div className="card">
        <i className="fa-light fa fa-heart"></i>
        <img src="./assets/img1.webp" alt='img1'/>
        <div>Texte</div>

    </div>
    <div className="card">
        <img src="./assets/img1.webp" alt='img1'/>
        <div>Texte</div>
    </div>
    <div className="card">
        <img src="./assets/img1.webp" alt='img1'/>
        <div>Texte</div>
    </div>
    <div className="card">
        <img src="./assets/img1.webp" alt='img1'/>
        <div>Texte</div>
    </div>
    <div className="card">
        <img src="./assets/img1.webp" alt='img1'/>
        <div>Texte</div>
    </div>

</section>
  )
}

export default App;
