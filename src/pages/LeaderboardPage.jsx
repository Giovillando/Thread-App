import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateLeaderboards } from "../states/leaderboard/action";
import LeaderBoardItem from "../components/LeaderboardItem";

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Leaderboards</h1>
        <div className="grid">
          <div className="grid-item">
            <h2 className="subtitle">10 Pengguna Teratas</h2>
          </div>
          <div className="grid-item">
            <h2 className="subtitle">Skor</h2>
          </div>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}
