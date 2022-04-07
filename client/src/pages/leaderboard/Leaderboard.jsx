import React from "react";
import style from "./Leaderboard.module.css";

const userRank = 6;
const data = [
  {
    rank: 1,
    name: "Player1",
    level: 1,
  },
  {
    rank: 2,
    name: "Player2",
    level: 2,
  },
  {
    rank: 3,
    name: "Player3",
    level: 3,
  },
  {
    rank: 4,
    name: "Player4",
    level: 4,
  },
  {
    rank: 5,
    name: "Player5",
    level: 5,
  },
  {
    rank: 6,
    name: "Player6",
    level: 6,
  },
  {
    rank: 7,
    name: "Player7",
    level: 7,
  },
  {
    rank: 8,
    name: "Player8",
    level: 8,
  },
  {
    rank: 9,
    name: "Player9",
    level: 9,
  },
  {
    rank: 10,
    name: "Player10",
    level: 10,
  },
];

function Leaderboard() {
  return (
    <div className={style.wrapper}>
      <div className={style.greyCover}>
        <h1>LeaderBoard</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {data.map((personDetails) => {
              if (personDetails.rank == userRank)
                return (
                  <tr
                    style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
                    key={personDetails.rank}
                  >
                    <td>{personDetails.rank}</td>
                    <td>{personDetails.name}</td>
                    <td>{personDetails.level}</td>
                  </tr>
                );
              else
                return (
                  <tr key={personDetails.rank}>
                    <td>{personDetails.rank}</td>
                    <td>{personDetails.name}</td>
                    <td>{personDetails.level}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        <div className={style.navigator}>
          <div className={style.navigator_up}>
            <img src="/images/first_page.png" alt="" srcset="" />
            <img src="/images/page_up.png" alt="" srcset="" />
          </div>
          <div className={style.navigator_down}>
            <img src="/images/last_page.png" alt="" srcset="" />
            <img src="/images/page_down.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
