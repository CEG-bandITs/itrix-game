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
        <div className={style.card}>
          <p>Your Rank</p>
          <h1>{userRank}</h1>
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
