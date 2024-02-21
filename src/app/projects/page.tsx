"use client";
import Image from "next/image";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";
import { Slide, Hinge, Roll, JackInTheBox } from "react-awesome-reveal";
import { Fieldset } from "primereact/fieldset";
import { Navigation } from "swiper/modules";

interface social {
  name: string;
  link: string;
  img: string;
  imgop: string;
}

enum NavigationType {
  default,
  project,
  exp,
}

interface project {
  url: string;
  urlop: string;
  name: string;
  details: string;
  site: string;
}

const data: project[] = [
  {
    url: "studydeck.svg",
    urlop: "studydeckop.svg",
    name: "StudyDeck",
    details:
      "StudyDeck is a versatile platform that serves multiple purposes. First, it allows students to create and manage their times tables easily. This feature helps students stay organized and plan their study schedules effectively. Additionally, StudyDeck provides a space where students can upload their study materials, such as notes, presentations, or other resources. They can also access and view study materials shared by their peers.",
    site: "https://studydeck.bits-sutechteam.org/",
  },
  {
    url: "/roomjai.svg",
    name: "RoomBooking Portal",
    urlop: "roomjaiop.svg",
    details:
      "An accessible platform enabling users to reserve rooms for academic purposes, with administrators able to approve requests seamlessly within the portal.",
    site: "https://room.studydeck.bits-sutechteam.org/",
  },
  {
    url: "/spinxjai.svg",
    name: "Spinx Digital-Clone",
    urlop: "spinxop.svg",
    details: "Personal Project-Clone",
    site: "https://jaivr.github.io/spinxdigitalclone.github.io/#",
  },
  {
    url: "/caljai.svg",
    name: "Calendar-Todo",
    urlop: "calop.svg",
    details: "Personal Project- To Do Cal",
    site: "https://jaivr.github.io/mycalendar.github.io/",
  },
];

function Project({ projectData }: { projectData: project }) {
  return <div className={styles.project}>
      <Fieldset legend={projectData.name} style={{borderRadius:"1rem", padding:"2rem"}}></Fieldset>
  </div>;
}

export default function Projects() {
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
      <div>
        <Link href="/">Back</Link>
      </div>
      <div className={styles.content}>
        {data?.map((projectData, index) => (
          <Project key={index} projectData={projectData}></Project>
        ))}
      </div>
      <Navbar navigationType={NavigationType.project} />
    </main>
  );
}
