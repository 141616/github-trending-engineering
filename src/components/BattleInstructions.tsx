import MyIcon from "./MyIcon";

const BattleInstructions = () => {
  return <div className="w-full">
    <h2 className="text-2xl text-center">Instructions</h2>
    <div className="mt-4 flex items-center justify-around">
      <div className="flex-1 flex-col flex items-center justify-center">
        <h4 className="mb-2">Enter Two Github Users</h4>
        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
          <MyIcon name="users" className="text-[#f3c080] text-8xl" />
        </div>
      </div>

      <div className="flex-1 flex-col flex items-center justify-center">
        <h4 className="mb-2">Battle</h4>
        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
          <MyIcon name="jet" className="text-[#727272] text-8xl" />
        </div>
      </div>

      <div className="flex-1 flex-col flex items-center justify-center">
        <h4 className="mb-2">See the winner</h4>
        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
          <MyIcon name="cup" className="text-[#f8d649] text-8xl" />
        </div>
      </div>
    </div>
  </div>
}

export default BattleInstructions;