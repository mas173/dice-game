import React, { useState } from "react";
import styles from "./Second.module.css";
import Rules from "./Rules";
const Second = () => {

  
let Randomvalue;
// let SelectedValue ="0";
const [SelectedValue , SetSelectedValue] = useState("0");
const [warning , setWarning] = useState(false);
const [show , Setshow] = useState(false);
const [Score , SetScore] = useState(0);
const [imgpath , setimgPath] = useState("Images/dice/dice_1.png");
// const [Randomvalue , SetRandomValue] = useState();
  
const ShowRules = ()=>{
Setshow(!show);
}
    const   onClickDice = ()=>{
      Randomvalue = Math.floor(Math.random() * 6) + 1;
// SetRandomValue(randomvalue);
// console.log(SelectedValue);
//     console.log(Randomvalue);
  
  
  
  
  }
  const imgShuffle = ()=>{
    if(SelectedValue === "0"){
      console.log("please select a value");
  setWarning(true);
      return;
    }

    setWarning(false);
    onClickDice();

    let images = ["Images/dice/dice_1.png", "Images/dice/dice_2.png", "Images/dice/dice_3.png", "Images/dice/dice_4.png", "Images/dice/dice_5.png", "Images/dice/dice_6.png"];
          
            let index = 0;
    let interval = setInterval(() => {
      setimgPath(images[index])
      index++;

      if (index === images.length) {
          clearInterval(interval);
      }
      setTimeout(() => {
        setimgPath(images[Randomvalue - 1]); // Adjust for 0-based index
      }, 200);

      setTimeout(() => {
    Check();
      }, 1900);

  }, 300);

  // Check();
  }

const Check =()=>{

SetSelectedValue("6");
  if(Randomvalue == SelectedValue){
    console.log("value matched");
    SetScore(Score + Number(SelectedValue));
  }
  if(Randomvalue != SelectedValue){
    console.log("value not matched ")
    SetScore(Score -2);
  SetSelectedValue("0");

  }

  
}


  return (
    <div className={`${styles.mainBox}`}>
      <div className={`${styles.header} flex`}>
        <div className={`${styles.ScoreBox}`}><h1> {Score} </h1>
        <p className="para">score</p></div>
        <div className={`${styles.btnBox}`}>
          { warning && <p className="choose warning">select a number before proceed</p>}
          <div>
          <button className={`${styles.btnStyle} ${SelectedValue === "1" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("1")} value="1">1</button>
          <button className={`${styles.btnStyle} ${SelectedValue === "2" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("2")}value="2">2</button>
          <button className={`${styles.btnStyle} ${SelectedValue === "3" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("3")}value="3">3</button>
          <button className={`${styles.btnStyle} ${SelectedValue === "4" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("4")}value="4">4</button>
        
          <button className={`${styles.btnStyle} ${SelectedValue === "5" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("5")}value="5">5</button>
          <button className={`${styles.btnStyle} ${SelectedValue === "6" ? "btn btn-primary" : ""}`}  onClick={()=>SetSelectedValue("6")}value="6">6</button></div>

          <p className="choose">Choose a number</p>
          </div>
      </div>
      <div className={`${styles.centerBox} fullFlex`}>
        <img src={`${imgpath}`} alt="" onClick={  imgShuffle} />
        <p className="choose">Click on Dice to Roll</p>
        <button className={`${styles.ceterbtn1}`} onClick={ShowRules}>Show Rules</button>
        <button className={`${styles.ceterbtn2}`} onClick={()=>SetScore(0)}>Reset Score</button>

        {show && <Rules/>}
      </div>
    
    </div>
  );
};

export default Second;
