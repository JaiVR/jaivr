"use client"
import Image from "next/image";
import styles from "./projects.module.scss";
import Link from "next/link";
import React, { useState } from "react";

export default function Experience() {
  return (
    <main className={styles.main}>
      <div className={styles.headers}>
        <Link href="/">
          <div className={styles.back}>
            <div className={styles.img}>
              <Image
                src="leftarrow.svg"
                alt="right"
                width={32}
                height={32}
              ></Image>
            </div>
          </div>
        </Link>
        <div className={styles.projects}>
          <h2>experience</h2>
        </div>
      </div>
      <section className={styles.content}>

      </section>
    </main>
  );
}

