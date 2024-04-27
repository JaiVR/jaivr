"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import Link from "next/link";
import { type } from "os";

enum NavigationType {
    default,
    project,
    exp,
    blogs
  }
  
interface NavbarProps {
    navigationType: NavigationType;
  }

export default function Navbar({ navigationType }: NavbarProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.metaKey && event.key === "Enter") {
        router.push("/projects");
      }
      if (event.metaKey && event.key === "Shift") {
        router.push("/experience");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div className={styles.card} style={{display:"flex", gap:"5rem"}}>
          <div style={{display:"flex", gap:"1rem"}}>
            <Image src="jai.svg" height={48} width={48} alt="" style={{borderRadius:"50%"}}></Image>
            <h1 style={{color:"#ffffff"}}>Jai</h1>
          </div>
    <div
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        gap: "1rem",
      }}
    >
        {navigationType=== NavigationType.default && 
            <>
                <div className={styles.cardimg}>
        <Link href="/projects"><p>/Projects</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/exp"><p>/Exp</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/blogs"><p>/Blog</p></Link>
      </div>
      
            </>
        }
        {navigationType=== NavigationType.project && 
            <>
                <div className={styles.cardimg} style={{color:"white"}}>
        <Link href="/projects"><p>/Projects</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/exp"><p>/Exp</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/blogs"><p>/Blog</p></Link>
      </div>
            </>
        }
        {navigationType=== NavigationType.exp && 
            <>
                <div className={styles.cardimg}>
        <Link href="/projects"><p>/Projects</p></Link>
      </div>
      <div className={styles.cardimg} style={{color:"white"}}>
        <Link href="/exp"><p>/Exp</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/blogs"><p>/Blog</p></Link>
      </div>
            </>
        }
        {navigationType=== NavigationType.blogs && 
            <>
                <div className={styles.cardimg}>
        <Link href="/projects"><p>/Projects</p></Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/exp"><p>/Exp</p></Link>
      </div>
      <div className={styles.cardimg} style={{color:"white"}}>
        <Link href="/blogs"><p>/Blog</p></Link>
      </div>
            </>
        }
    </div>
    </div>
  );
}
