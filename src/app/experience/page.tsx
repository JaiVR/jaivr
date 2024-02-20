"use client";
import Image from "next/image";
import styles from "./projects.module.scss";
import Link from "next/link";
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import React from "react";


interface TimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

export default function Exp() {

  const events = [
    { name:"SU Tech Team",status: 'Frontend Developer', date: 'Jul 2023 - Present', icon: 'sutt.svg'},
    { name:"Nutshell",status: 'UI/UX intern', date: 'Apr 2023 - May 2023', icon: 'nutshell.svg'},
];
const customizedMarker = (item:any) => {
  return (
      <span className={styles.cardimgDiv}>
          <Image src={item.icon} height={64} width={64} alt=""></Image>
      </span>
  );
};

const customizedContent = (item:any) => {
  return (
      <span className={styles.cardDiv}>
        <h2>{item.status}</h2>
        <h3>{item.name}</h3>
        <p>{item.date}</p>
      </span>
  );
};
  return (
    <main className={styles.main}>
    <div className={styles.headers}>
    <Link href="/">
      <div className={styles.back}>
        <div className={styles.img}>
        <Image src='leftarrow.svg' alt='right' width={32} height={32}></Image>
        </div>
      </div>
    </Link>
    <div className={styles.projects}>
      <h2>experience</h2>
    </div>
    <div>
    </div>
    </div>
    </main>
  );
}
        
