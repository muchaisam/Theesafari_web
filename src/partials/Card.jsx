import React from "react";
import { FaLocationArrow, FaInstagram } from "react-icons/fa";




const Card = ({ title, description, image, location }) => (
  <div style={styles.cardListContainer} data-aos="zoom-y-out">
  <div style={{ ...styles.cardContainer, backgroundImage: `url(${image})` }}>
  <div style={styles.textContainer} className = "text-black font-poppins font-semibold">
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardDescription}>{description}</p>
      {location && (
          <li style={styles.iconContainer}>
            <a href={location}>
              <FaLocationArrow style={styles.icon} />
            </a>
            <a href={location}>
              <FaInstagram style={styles.icon} />
            </a>
          </li>
        )}
    </div>
  </div>
  </div>
);

const styles = {
  cardListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "310px",
    width: "180px",
    borderRadius: "18px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    margin: "20px",
    boxShadow: "5px 3px 10px 2px teal",
    "@media (maxwidth: 400px)": {
      width: "100%",
      height: "150px"
    }
  },
  textContainer: {
    padding: "5px",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "100%",
    borderRadius: "0 0 10px 10px"
  },
  cardTitle: {
    margin: 0,
    fontSize: "17px",
    textAlign: "center"
  },
  cardDescription: {
    margin: 0,
    fontSize: "16px",
    textAlign: "center"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },
  icon: {
    fontSize: "30px",
    color : "#e45724",
    margin: "0 10px",
    textAlign: "center"
  },
};


export default Card;