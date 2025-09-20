import LikeButton from './like-button'; // Tuodaan LikeButton komponentti samasta kansiosta
 
function Header({ title }) { // Määritellään Header komponentti joka ottaa title-propin
  return <h1>{title ? title : 'Default title'}</h1>; // Palautetaan h1 elementti, käytetään propia tai oletusarvoa
}
 
export default function HomePage() { // Pääkomponentti joka viedään oletuksena
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']; // Lista nimistä
 
  return ( // Palautetaan JSX (komponenttien visuaalinen rakenne)
    <div> {/* Päätason div-elementti joka sisältää kaiken sisällön */}
      <Header title="Develop. Preview. Ship." /> {/* Header komponentti title-propilla */}
      <ul> {/* Lista-elementti */}
        {names.map((name) => ( // Käydään nimet läpi ja luodaan li-elementti jokaiselle
          <li key={name}>{name}</li> // Lista-alkio, key on Reactin vaatima tunniste
        ))}
      </ul> {/* Lista loppuu */}
      <LikeButton /> {/* LikeButton komponentti joka sisältää oman state:nsa */}
    </div> // Päätason div loppuu
  ); // return loppuu
}