"use client";
import Image from "next/image";
import styles from "./exp.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";

enum NavigationType {
  default,
  project,
  exp,
}
interface exp {
  role: string;
  organization: string;
  imgs: string[];
  dp: string;
  details: string
}
const exp: exp[] = [
  {
    role: "Frontend Developer",
    organization: "SU Tech Team",
    imgs: ["nexticon.svg", "react.svg", "typescript.svg", "scss.svg"],
    dp: "sutt.svg",
    details:"Create a campus-wide digital platform for over 4000 students at BITS Pilani, integrating academic support tools"
  },
  {
    role: "Intern",
    organization: "NutShell",
    imgs: ["figma_logo.svg"],
    dp: "nutshell.svg",
    details:"A @bitspilani based Agri-Tech Startup"
  },
  {
    role: "Volunteer",
    organization: "Student Alumni Relations Cell",
    imgs: ["figma_logo.svg","react.svg"],
    dp: "sarc.svg",
    details:"Alumni relations"
  },
];

function Experience({ exp }: { exp: exp }) {
  return (
    <div className={styles.expCard}>
      <div className={styles.expmainmain}>
        <h2 style={{color:"#ffffff"}}>{exp.role}</h2>
        <div className={styles.expOrg}>
        <Image src={exp.dp} height={32} width={32} alt=""></Image>
          <h3 style={{color:"#9c9c9c"}}>{exp.organization}</h3>
        </div>
        <p style={{color:"#c3c3c3", fontSize:"0.75rem", paddingTop:"0.5rem"}}>{exp.details}</p>
      </div>
      <div className={styles.techStack}>
      <p style={{color:"#6c6c6c"}}>Tech Stack</p>
      {exp?.imgs.map((exp) => (
          <Image src={exp} height={24} width={24} alt="" style={{margin:"10px",marginLeft:"0"}}></Image>
        ))}
      </div>
    </div>
  );
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className={styles.main}>
      <div
        className={styles.back}
        style={{ position: "fixed", top: "2rem", left: "2rem" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && (
          <Link href="/" style={{ padding: "1rem" }}>
            <Image
              src="/back.svg"
              height={32}
              width={32}
              alt=""
              className={styles.imgRotate}
            ></Image>
          </Link>
        )}
        {isHovered && (
          <Link href="/" style={{ padding: "1rem" }}>
            <Image
              src="/backop.svg"
              height={32}
              width={32}
              alt=""
              className={styles.imgRotate}
            ></Image>
          </Link>
        )}
      </div>
      <div className={styles.content}>
        {exp?.map((exp) => (
          <Experience exp={exp}></Experience>
        ))}
      </div>
      <Navbar navigationType={NavigationType.exp} />
    </main>
  );
}
