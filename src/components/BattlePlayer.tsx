import { useState } from "react";
import MyIcon from "./MyIcon";

interface Props {
  title: string;
  onSubmitUser: (user: string) => void;
}
const BattlePlayer = (props: Props) => {
  const [username, setUsername] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isDisabled = username === "";

  const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isLoading) {
      return;
    }
    setUsername(e.target.value);
    setIsChecked(false);
    setError(null);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  }

  const handleSubmit = async () => {
    if (isDisabled) {
      return;
    }

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(data => {
        console.log(data);
        setIsChecked(true);
        props.onSubmitUser(username);
      })
      .catch((error) => {
        error.json().then((err: any) => {
          setError(err?.message || "Something went wrong");
        });
      })
      .finally(() => setIsLoading(false));
  }
  return (
    <div>
      <h4 className="text-sm font-medium leading-6 text-gray-900">Player Two</h4>
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            value={username}
            onKeyDown={handleKeyDown}
            onChange={handleChangeUsername}
            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Github Username"
          ></input>
          {isChecked && <div className="absolute right-2 top-2.5 text-green-600"><MyIcon name="check" /></div>}
        </div>
        <button
          type="button"
          className="ml-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {isLoading ? "Loading..." : "SUBMIT"}
        </button>
      </div>
      <div className="mt-1 text-xs text-red-500 h-[16px]">{error}</div>
    </div>
  );
}

export default BattlePlayer;