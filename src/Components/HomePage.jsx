import styles from "./HomePage.module.css";

function HomePage({Setshowval}) {
  const onPlay = (event)=>{
    event.preventDefault();
    Setshowval(true);

  }
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.Container1}`}>
        <img src="Images/dices.png" alt="" />
      </div>
      <div className={`${styles.Container2}`}>
        <p>Dice Game</p>
        <button className={`${styles.button}`} onClick={onPlay}>Play Now</button>
      </div>
    </div>
  );
}

export default HomePage;
