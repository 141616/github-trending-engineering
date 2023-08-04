import style from "./Myicon.module.css";

interface MyIconProps {
  className?: string;
  name: string;
}

const MyIcon = (props: MyIconProps) => {
  return (
    <svg className={`${style.icon} ${props.className}`} aria-hidden="true">
      {/* <use xlink="#icon-star"></use> */}
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  );
}

export default MyIcon;