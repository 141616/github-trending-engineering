
interface Props {
  loading?: boolean;
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  className?: string;
}

const ButtonDefaultClass = `disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`;

const TextButton: React.FC<Props> = (props: Props) => {

  return (
    <button
      type="button"
      className={`${ButtonDefaultClass} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.loading ? "Loading..." : props.text}
    </button>
  );
};

export default TextButton;