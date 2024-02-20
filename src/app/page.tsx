"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import '@fontsource/poppins';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.metaKey && event.key === 'Enter') {
        router.push('/projects');
      }
      if (event.metaKey && event.key === 'Shift') {
        router.push('/experience');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
      <main className={styles.main}>
      <div className={styles.fixedBt}>
      </div>
      {/* <div className={styles.routerDiv}>
        <div className={styles.command1}>
          <Image src="/command.svg" width={24} height={24} alt="command" style={{ margin: "auto" }}></Image>
          <p>+</p>
          <p>return</p>
          <p>=</p>
          <h4>projects</h4>
        </div>
        <div className={styles.command2}>
          <Image src="/command.svg" width={24} height={24} alt="command" style={{ margin: "auto" }}></Image>
          <p>+</p>
          <p> <strong>shift</strong></p>
          <p>=</p>
          <p>experience</p>
        </div>
      </div> */}
          <Navbar/>
    </main>
  );
}
