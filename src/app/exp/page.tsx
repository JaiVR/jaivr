"use client";
import Image from "next/image";
import styles from "./exp.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";
import { Slide, Hinge,Roll,JackInTheBox
} from "react-awesome-reveal";
import { Navigation } from "swiper/modules";

interface social {
  name: string;
  link: string;
  img: string;
  imgop: string
}

enum NavigationType {
  default,
  project,
  exp
}


export default function Exp() {
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

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "Hello!";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.back} style={{position:"fixed", top:"2rem", left:"2rem"}}>
        <Link href="/" style={{padding:"1rem"}}><Image src="/back.svg" height={32} width={32} alt="" className={styles.imgRotate}></Image></Link>
      </div>
      <div className={styles.content}>
        
      </div>
      <Navbar navigationType={NavigationType.exp} />
    </main>
  );
}