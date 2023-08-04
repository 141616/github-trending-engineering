import { resultPath } from "@/App";
import BattleInstructions from "@/components/BattleInstructions";
import BattlePlayer from "@/components/BattlePlayer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props { }

const BattlePage: React.FC<Props> = (props: Props) => {
  const [playerOne, setPlayerOne] = useState<string>('');
  const [playerTwo, setPlayerTwo] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (playerOne && playerTwo) {
      // console.log(`/${resultPath}?playerOne=${playerOne}&playerTwo=${playerTwo}`)
      navigate(`${resultPath}?playerOne=${playerOne}&playerTwo=${playerTwo}`);
    }
  }, [playerOne, playerTwo]);

  return (
    <div className="py-4 h-full flex flex-col items-center">
      <BattleInstructions />
      <div className="w-full mt-20">
        <h3 className="text-xl text-center mb-6">Players</h3>
        <div className="flex items-center justify-between">
          <div className="flex-1 w-[50%] mr-10">
            <BattlePlayer title="Play One" onSubmitUser={(val) => setPlayerOne(val)} />
          </div>
          <div className="flex-1 w-[50%]">
            <BattlePlayer title="Play Two" onSubmitUser={(val) => setPlayerTwo(val)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;