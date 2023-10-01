/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Image src='/logo.png' alt='logo' width={25} height={25} />
      <div className={styles.brand}>SecureMask</div>
    </div>
  );
};

export default Logo;
