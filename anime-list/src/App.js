import './App.css';
import Cards from "./componenet/Cards";
import Title from "./componenet/Title"



function App(props) {
  return ( 
<>
<Title/>
<section class="main--container">
  

  <Cards title="Naruto" date="(2002)" image="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" story="Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village." />

  <Cards title="Bleach" date="(2004)" image="https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" story="High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'." />

  <Cards title="Attack on Titan" date="(2013)" image="https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" story="After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction." />

  <Cards title="Fullmetal Alchemist: Brotherhood" date="(2009)" image="https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" story="Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms." />

  <Cards title="Hunter x Hunter" date="(1999)" image="https://m.media-amazon.com/images/M/MV5BZGI5YTIwMDItMDFhNC00NTM1LThjYzEtM2ZhMzkyZmNiNzg5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg" story="Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger." />

  <Cards title="Steins;Gate" date="(2011)" image="https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg" story="After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans." />

  <Cards title="Vinland Saga" date="(2019)" image="https://m.media-amazon.com/images/M/MV5BMWE4OWE0NmMtYjlmOC00NGE1LWJiNDItNDgxNzVjYzViMGQ3XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" story="Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage." />

  <Cards title="Fate/Zero" date="(2011)" image="https://m.media-amazon.com/images/M/MV5BMDNiZjIzMzYtMDg1Zi00ZjM3LWFlZjUtZmNhMTQ1MDU3ODU0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg" story="Seven chosen mages and their summoned heroic spirits fight against each other to try and win the Holy Grail: a magical device that can grant any wish." />

  <Cards title="The Promised Neverland" date="(2011)" image="https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" story="When three gifted kids at an isolated idyllic orphanage discover the secret and sinister purpose they were raised for, they look for a way to escape from their evil caretaker and lead the other children in a risky escape plan." />


  </section>

</>
  )
}

export default App;
