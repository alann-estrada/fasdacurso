import { useState } from 'react';
import ComponentsOne from './components/ComponetsOne';
import fasdatec from './assets/sass/app.module.scss';

function App() {
  const array = [
    {
      id: 1,
      name: "Miguel Ángel Durán",
      country: "Barcelona, España",
      image: "https://porfolio.dev/midudev.webp",
      imageInformation: "Midudev",
      positionInTheCompany: "Creador de contenido",
      company: "YouTube",
      testimony: "Soy Miguel Ángel Durán, más conocido como Midudev. Soy Ingeniero de Software y Creador de Contenido sobre Programación de Barcelona, España 🇪🇸. Especializado en el desarrollo de aplicaciones web únicas. Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub. Pásate por mi canal para enterarte de las ultimas novedades!"
    },
    {
      id: 2,
      name: "Brais Moure",
      country: "A Coruña, España",
      image: "https://yt3.ggpht.com/a/AATXAJxSZmqePEjgZObrFnPdRIF_BTkNvZFG0JZk3g=s900-c-k-c0xffffffff-no-rj-mo",
      imageInformation: "MoureDev",
      positionInTheCompany: "Creador de contenido",
      company: "YouTube",
      testimony: "Soy Brais Moure, más conocido como MoureDev. Soy ingeniero de software y actualmente trabajo como freelance full-stack developer iOS y Android. Además, creo contenido formativo sobre programación en redes."
    },
    {
      id: 3,
      name: "Carlos Azaustre",
      country: "Madrid, España",
      image: "https://mypublicimpact.com/wp-content/uploads/2023/01/Carlos_Azaustre.jpg",
      imageInformation: "Carlos Azaustre",
      positionInTheCompany: "Creador de contenido",
      company: "YouTube",
      testimony: 'Soy Carlos Azaustre, Profesor Asociado en la Universidad Europea, Creador de Contenido para Desarrolladores e Ingeniero en Telemática. Tengo más de 10 años de experiencia en el sector trabajando como Ingeniero de Software y "Developer Relations" para empresas como Google, IBM Research y Eventbrite. Disfruto participar en eventos y meetups de comunidad, conferencias y eventos en línea, contribuyendo al campo y aprendiendo de otros en el camino.'
    },
    {
      id: 4,
      name: "Carmen Ansio",
      country: "Barcelona, Cataluña, España",
      image: "https://static.platzi.com/ms-community/teachers/Carmen_Ansio_plano_cerca.png",
      imageInformation: "Carmen Ansio",
      positionInTheCompany: "Design Engineer y Creadora de contenido",
      company: "Platzi, YouTube",
      testimony: "Soy Carmen Ansio, Design Engineer y Creadora de contenido. En mi canal de Youtube encontrarás contenido sobre diseño, tecnología, te recomiendo mis cursos en Platzi para aprender más sobre diseño y tecnología."
    },
    {
      id: 5,
      name: "Nicolás Schürmann Lindemann",
      country: "Auckland, Auckland, Nueva Zelanda",
      image: "https://th.bing.com/th/id/OIP.imQHbZ19Ce14zeZHCydXPQAAAA?rs=1&pid=ImgDetMain",
      imageInformation: "HolaMundo",
      positionInTheCompany: "Creador de contenido",
      company: "YouTube",
      testimony: "Soy Nicolás Schürmann Lindemann, más conocido como HolaMundo. Especializado en ingeniería de software y con experiencia en el desarrollo de soluciones y optimizaciones de algoritmos. Experiencia trabajando con metodologías ágiles, youtuber e instructor de software en udemy."
    }
  ];

  return (
    <main>
      <header className={fasdatec.header}>
        <h1 className={fasdatec.title}>"Top creadores de contenido populares en el 2024"</h1>
      </header>
      <div className={fasdatec.generalContainer}>
        {array.map((item) => (
          <ComponentsOne
            key={item.id}
            name={item.name}
            country={item.country}
            image={item.image}
            imageInformation={item.imageInformation}
            positionInTheCompany={item.positionInTheCompany}
            company={item.company}
            testimony={item.testimony}
          />
        ))}
      </div>
      <footer className={fasdatec.footer}>
        <p>© 2024 Fasdatec. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

export default App
