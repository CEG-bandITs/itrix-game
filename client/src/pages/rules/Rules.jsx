import React from "react";
import style from "./Rules.module.css";

function Rules() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>Rules</h1>
        <section className={style.ruletext}>
          <ul>
            <li>
              This is a treasure kind of a game in which the participant should
              try to find the answer by identifying the similarity and
              connecting the given images.
            </li>
            <li>The game will be live for three days.</li>
            <li>
              Each day is independent and one winner will be chosen each day.
            </li>
            <li>The UI of the website has no relation to the questions.</li>
            <li>Clues will be updated periodically in the specified time.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Rules;
