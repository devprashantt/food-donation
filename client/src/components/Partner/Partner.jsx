import React from "react";
import Card from "../UI/Card";
import "./Partner.css";

const Partner = () => {
  const data = [
    {
      id: 1,
      name: "Robin Hood Army",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Logo_of_the_Robin_Hood_Army.jpg",
      description:
        "The Robin Hood Army is a zero-funds volunteer organization that works to get surplus food from restaurants and communities to serve the less fortunate.The lesser fortunate sections of society we serve include homeless families and orphans",
    },
    {
      id: 2,
      name: "Uday Foundation",
      img: "https://yt3.googleusercontent.com/ytc/AL5GRJXx6H2mK-ZfXG4MmVALh1brpbVjw_-o6VGfeNIxOA=s900-c-k-c0x00ffffff-no-rj",
      description:
        "Uday Foundation is a reputed NGO in Delhi, committed to making a positive impact in the lives of underprivileged families in India. We offer a range of programs, including food donation, old clothes donation and unused medicine donation. ",
    },
    {
      id: 3,
      name: "Feed India",
      img: "https://cdn-images-1.medium.com/max/1200/1*REBDuJ5U4usD7krlVQXuiw.png",
      description:
        "All efforts are concerted towards providing better food to more people. Through our targeted interventions for child and maternal malnutrition, we are working towards bringing large-scale systemic transformation.",
    },
  ];
  return (
    <div className="partner-page">
      <div className="title">
        <h1>Our Partnered NGO's</h1>
      </div>
      <div className="partner">
        {data.map((partner) => {
          return (
            <Card
              name={partner.name}
              des={partner.description}
              img={partner.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
