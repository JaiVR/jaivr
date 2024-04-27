"use client";
import Image from "next/image";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";
import { Carousel } from 'primereact/carousel';

enum NavigationType {
  default,
  project,
  exp,
  blogs
}

interface project {
  url: string;
  urlop: string;
  name: string;
  details: string;
  site: string;
  index: string;
}

const data: project[] = [
  {
    url: "studydeck.svg",
    index:"01",
    urlop: "studydeckop.svg",
    name: "StudyDeck",
    details:
      "StudyDeck is a versatile platform that serves multiple purposes. First, it allows students to create and manage their times tables easily. This feature helps students stay organized and plan their study schedules effectively. Additionally, StudyDeck provides a space where students can upload their study materials, such as notes, presentations, or other resources. They can also access and view study materials shared by their peers.",
    site: "https://studydeck.bits-sutechteam.org/",
  },
  {
    url: "/roomjsi.svg",
    name: "RoomBooking Portal",
    index:"02",
    urlop: "roomjaiop.svg",
    details:
      "An accessible platform enabling users to reserve rooms for academic purposes, with administrators able to approve requests seamlessly within the portal.",
    site: "https://room.studydeck.bits-sutechteam.org/",
  },
  {
    url: "/spinx.svg",
    name: "Spinx Digital-Clone",
    urlop: "spinxop.svg",
    index:"03",
    details: "Personal Project-Clone",
    site: "https://jaivr.github.io/spinxdigitalclone.github.io/#",
  },
  {
    url: "/caljai.svg",
    name: "Calendar-Todo",
    urlop: "calop.svg",
    index:"04",
    details: "Personal Project- To Do Cal",
    site: "https://jaivr.github.io/mycalendar.github.io/",
  },
];

function Project({ projectData, width , height }: { projectData: project , width:number , height: number}) {

  return (
    <Link href={projectData.site} target="_blank" style={{ marginTop: "auto", marginBottom: "auto", padding: "1rem" }}>
      <div className={styles.project}>
        <div>
          <h1 style={{color:"#ffffff"}}>{projectData.name}</h1>
        </div>
        <div className={styles.img}>
          <Image alt="" src={projectData.url} height={height} width={width}></Image>
        </div>
        <div className={styles.index} style={{color:"#5c5c5c"}}>
          <h1 style={{color:"#5c5c5c"}}>{projectData.index}</h1>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const router = useRouter();

  const [numVisible, setNumVisible] = React.useState(2); // Default number of visible items

  const responsiveOptions = [
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

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
  const [width,setWidth]= useState<number>(225.6)
  const [height,setHeight]= useState<number>(150)
  React.useEffect(() => {
    const handleResize = () => {
      // Update numVisible based on screen width
      if (window.innerWidth <= 500) {
        setHeight(100);
        setWidth(175)
      };
    };
  
    handleResize(); // Call it initially to set the appropriate value
    window.addEventListener('resize', handleResize); // Listen for window resize events
  
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener
    };
  }, [])
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <main className={styles.main}>
      <div className={styles.back} style={{position:"fixed", top:"2rem", left:"2rem"}} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
        {!isHovered && <Link href="/" style={{padding:"1rem"}}><Image src="/back.svg" height={32} width={32} alt="" className={styles.imgRotate}></Image></Link>}
        {isHovered && <Link href="/" style={{padding:"1rem"}}><Image src="/backop.svg" height={32} width={32} alt="" className={styles.imgRotate}></Image></Link>}
      </div>
      <div className={styles.content}>
      <Carousel
          value={data}
          numVisible={2} numScroll={1} responsiveOptions={responsiveOptions}
          style={{padding:"1rem"}}
          circular
          autoplayInterval={3000}
          itemTemplate={(projectData: project) => <Project projectData={projectData}  height={height} width={width}/>}
        />
        <div style={{display:"flex", justifyContent:"center"}}>More on<a href="https://github.com/JaiVR" target="_blank" style={{color:"#8c8c8c", marginTop:"auto", marginBottom:"auto"}}> @github</a></div>
      </div>
      <Navbar navigationType={NavigationType.project} />
    </main>
  );
}
