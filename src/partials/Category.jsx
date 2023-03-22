import React from "react";

const Category = ({ title, description, image, spotify }) => (
  <div style={styles.cardListContainer} data-aos="zoom-y-out">
  <div style={{ ...styles.cardContainer, backgroundImage: `url(${image})` }}>
  <div style={styles.textContainer} className = "text-orange-500 font-poppins font-semibold bg-black">
      <h2 style={styles.cardTitle}>{title}</h2>
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
    height: "150px",
    width: "280px",
    borderRadius: "18px",
    backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
    margin: "20px",
    animation: "bannermove 10s linear infinite",
    boxShadow: "0px 0px 10px 2px gray",
    "@keyframes bannermove" : {
        "0%" : {
            transform: "translate(0, 0)"
        },
        "100%" : {
            transform: "translate(-50%, 0)",
        }
      },
    "@media (maxwidth: 400px)": {
      width: "100%",
      height: "150px"
    }
  },
  textContainer: {
    padding: "5px",
    width: "100%",
    borderRadius: "0 0 10px 10px"
  },
  cardTitle: {
    margin: 0,
    fontSize: "20px",
    textAlign: "center"
  },
  cardDescription: {
    margin: 0,
    fontSize: "16px",
    textAlign: "center"
  },
};


export default Category;