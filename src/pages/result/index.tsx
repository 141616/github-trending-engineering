import { battlePath } from "@/App";
import Loading from "@/components/Loading";
import PlayerCard from "@/components/PlayerCard";
import TextButton from "@/components/TextButton";
import { IUserInfo } from "@/types";
import { getPlayersFromUrl } from "@/utils";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function fetchPlayer(username: string): Promise<IUserInfo> {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(data => {
        resolve(data);
      })
      .catch((error) => {
        error.json().then((err: any) => {
          reject(err?.message || "Something went wrong")
        });
      });
  });
}

interface Props { }

const BattleResultPage: React.FC<Props> = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerOne, playerTwo } = getPlayersFromUrl(location.search);
  const [playerOneData, setPlayerOneData] = useState<IUserInfo | null>(null);
  const [playerTwoData, setPlayerTwoData] = useState<IUserInfo | null>(null);

  useEffect(() => {
    if (playerOne) {
      fetchPlayerOne()
    }
    if (playerTwo) {
      fetchPlayerTwo();
    }
  }, [playerOne, playerTwo]);

  const fetchPlayerOne = async () => {
    try {
      const user = await fetchPlayer(playerOne);
      setPlayerOneData(user);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchPlayerTwo = async () => {
    try {
      const user = await fetchPlayer(playerTwo);
      setPlayerTwoData(user);
    } catch (error) {
      console.log(error);
    }
  }

  const handleReset = () => {
    navigate(battlePath)
  }

  if (!playerOne || !playerTwo) {
    return (
      <div className="py-4 h-full flex flex-col items-center">
        <h1 className="pb-4">用户信息不足</h1>
        <TextButton text="reset" onClick={handleReset} />
      </div>
    );
  }

  if (!playerOneData || !playerTwoData) {
    return (
      <div className="py-4 h-full flex flex-col items-center">
        <Loading />
      </div>
    );
  }

  const winner = playerOneData.public_repos > playerTwoData.public_repos ? playerOne : playerTwo;

  return (
    <div className="py-4 h-full flex flex-col items-center">
      <div className="flex w-full mb-10">
        <div className="w-1/2">
          <PlayerCard title={winner === playerOne ? "Winner" : 'Loser'} data={playerOneData} />
        </div>
        <div className="w-1/2">
          <PlayerCard title={winner === playerTwo ? "Winner" : 'Loser'} data={playerTwoData} />
        </div>
      </div>
      <TextButton text="reset" onClick={handleReset} />
    </div>
  );
};

export default BattleResultPage;