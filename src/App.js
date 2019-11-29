import React from "react";
import logo from "./logo.svg";
import Nav from "./Nav.jsx";
import Lead from "./Lead.jsx";
import "./App.css";
import Box from "./Box.jsx";
import Partners from "./Partners.jsx";
import Stats from "./Stats.jsx";
import Improve from "./Improve.jsx";
import Offices from "./Offices.jsx";
import Footer from "./Footer.jsx";

const tab = [
  { link: "#", title: "About Us", isActive: false },
  {
    link: "#",
    title: "Carrer",
    isActive: true
  },
  {
    link: "#",
    title: "Department",
    isActive: true,
    submenu: [
      "Marketing & PR",
      "Customer Success & Sales",
      "IT,Products,Design & UX",
      "Finance & Administration",
      "HR & More"
    ]
  }
];
const doctor = [
  {
    title: "For patient",
    subtitle: "Find a doctor, book a visit and solve any health-related doubt",
    button: [
      "CHOOSE COUNTRY",
      "Australia",
      "Argentina",
      "Brazil",
      "chile",
      "colombie",
      "czech"
    ],
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    class: "service-patient"
  },
  {
    title: "For doctors",
    subtitle: "Save time managing visits and cut no-shows by half",
    image: "https://www.docplanner.com/img/screen-saas@2x.png",
    class: "service-doctor"
  }
];

const grid = [
  {
    logo: "https://www.docplanner.com/img/flag.png",
    titre: "Leader in 10 countries",
    soustitre:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    logo: "https://www.docplanner.com/img/visits.png",
    titre: "1.5 million appointments",
    soustitre: "booked last month"
  },
  {
    logo: "https://www.docplanner.com/img/patients.png",
    titre: "30 million unique patients",
    soustitre: "visit us every month"
  },
  {
    logo: "https://www.docplanner.com/img/doctors.png",
    titre: "2 million active doctors",
    soustitre: "trust in our solutions"
  }
];
const Office = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    title: "Warsaw",
    button: "SEE OPENING"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    title: "Barcelone",
    button: "SEE OPENING"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    title: "Istanbul",
    button: "SEE OPENING"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    title: "Rome",
    button: "SEE OPENING"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    title: " Mexico city",
    button: "SEE OPENING"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    title: "Curitiba",
    button: "SEE OPENING"
  }
];

function App() {
  return (
    <div>
      <Nav x={tab} />
      <Lead />
      <Box z={doctor} />
      <Partners />
      <Stats grid={grid} />
      <Improve />
      <Offices Office={Office} />
      <Footer />
    </div>
  );
}

export default App;
