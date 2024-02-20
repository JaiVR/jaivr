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
      <div className={styles.card} style={{display:"flex", gap:"5rem"}}>
          <div style={{display:"flex", gap:"1rem"}}>
            <Image src="jai.svg" height={48} width={48} alt="" style={{borderRadius:"50%"}}></Image>
            <h1>Jai</h1>
          </div>
          <div style={{marginTop:"auto", marginBottom:"auto", display:"flex", gap:"2rem"}}>
            <div className={styles.cardimg}><Link href="/projects"><Image src="projects.svg" height={32} width={32} alt="" style={{cursor:"pointer"}}></Image></Link></div>
            <div className={styles.cardimg}><Link href="/experience"><Image src="experience.svg" height={32} width={32} alt="" style={{cursor:"pointer"}}></Image></Link></div>
          </div>
      </div>
    </main>
  );
}
