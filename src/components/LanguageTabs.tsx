import { LanguageList } from "@/constants";

interface Props {
  language: string;
  onChange: (language: string) => void;
}

const LanguageTabs = (props: Props) => {
  return (
    <div className="flex items-center justify-center mb-4">
      {LanguageList.map((item) => {
        const isActive =
          item.toLocaleLowerCase() === props.language.toLocaleLowerCase();
        return (
          <button
            className={`mx-2 ${isActive ? "text-orange-500" : ""}`}
            key={item}
            onClick={() => props.onChange(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
export default LanguageTabs;