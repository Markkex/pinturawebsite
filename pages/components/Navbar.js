import Image from "next/image";

import style from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.paddingLeft}>
        <Image src="/revesticor.png" alt="Logo" width={200} height={80} />
      </div>
      <div className={(style.container, style.alignItems)}>
        <p className={style.paddingRight}>Home</p>
        <p className={style.paddingRight}>Home</p>
        <p className={style.paddingRight}>Home</p>
      </div>
    </div>
  );
}
