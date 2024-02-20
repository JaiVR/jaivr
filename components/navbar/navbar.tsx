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

export default function Navbar() {
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
            <h1>Jai</h1>
          </div>
    <div
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        gap: "1rem",
      }}
    >
      <div className={styles.cardimg}>
        <Link href="/projects">Projects</Link>
      </div>
      <div className={styles.cardimg}>
        <Link href="/experience">Experience</Link>
      </div>
    </div>
    </div>
  );
}
