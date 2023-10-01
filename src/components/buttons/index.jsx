import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";

// Button with styles for filled and outline
export const Button = ({ label, isFilled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${isFilled ? styles.filled_btn : styles.outlined_btn}`}>
      {label}
      {!isFilled && (
        <Image
          src='/angle_right.svg'
          alt='angle_right'
          width={10}
          height={10}
          className='ml-3'
        />
      )}
    </button>
  );
};

// Sign in with Google Button
export const SignInWithGoogleBtn = ({ label }) => {
  return (
    <button className={styles.google_btn}>
      <Image
        src='/google.svg'
        alt='google icon'
        width={32}
        height={32}
        className='mr-3'
      />
      {label}
    </button>
  );
};

// Submit Button
export const SubmitBtn = ({ label, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.submit_btn}`}>
      {label}
    </button>
  );
};
