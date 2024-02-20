"use client"
import Image from "next/image";
import styles from "./projects.module.scss";
import Link from "next/link";
import { Carousel } from 'primereact/carousel';
import React, { useState } from "react";

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
    urlop:"studydeckop.svg",
    name: "StudyDeck",
    details:
      "StudyDeck is a versatile platform that serves multiple purposes. First, it allows students to create and manage their times tables easily. This feature helps students stay organized and plan their study schedules effectively. Additionally, StudyDeck provides a space where students can upload their study materials, such as notes, presentations, or other resources. They can also access and view study materials shared by their peers.",
    site: "https://studydeck.bits-sutechteam.org/",
  },
  {
    url: "/roomjai.svg",
    name: "RoomBooking Portal",
    urlop:"roomjaiop.svg",
    details:
      "An accessible platform enabling users to reserve rooms for academic purposes, with administrators able to approve requests seamlessly within the portal.",
    site: "https://room.studydeck.bits-sutechteam.org/",
  },
  {
    url: "/spinxjai.svg",
    name: "Spinx Digital-Clone",
    urlop:"spinxop.svg",
    details: "Personal Project-Clone",
    site: "https://jaivr.github.io/spinxdigitalclone.github.io/#",
  },
  {
    url: "/caljai.svg",
    name: "Calendar-Todo",
    urlop:"calop.svg",
    details: "Personal Project- To Do Cal",
    site: "https://jaivr.github.io/mycalendar.github.io/",
  },
];

function Project({ projectData }: { projectData: project }) {
  return (
    <div
  className={styles.project}
  style={{
    backgroundImage: `url(${projectData.url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "background-image 0.5s ease", // Smooth transition effect
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundImage = `url(${projectData.urlop})`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage = `url(${projectData.url})`;
  }}
>
  <div className={styles.name}>
  <a href={projectData.site} target="_blank">
    {projectData.name}
  </a>
  <Image src="rightsmallrrow.svg" width={32} height={32} alt="" style={{marginTop:"auto", marginBottom:"auto"}}></Image>
  </div>
</div>

  );
}

export default function Projects() {
  if (!data) {
    return <div>Loading...</div>;
  }

  const projectTemplate = (project: project) => (
    <Project projectData={project} />
  );
  const customNextIcon = (
<Image src="rightsmallrrow.svg" height={32} width={32} alt='oo' style={{marginTop:"auto",marginBottom:"auto",transform:"rotate(-270deg)", border:"3px solid #01c4ef ", borderRadius:"50%", padding:"5px"}}></Image>
  );

  const customPrevIcon = (
    <Image src="rightsmallrrow.svg" height={32} width={32} alt='oo' style={{marginTop:"auto",marginBottom:"auto",transform:"rotate(-90deg)", border:"3px solid #01c4ef ", borderRadius:"50%", padding:"5px"}}></Image>
  );


  const [x,setX] =useState<number>(3000)
  const handleMouseEnter = () => {
    setX(10000000000000)
  };

  const handleMouseLeave = () => {
    setX(3000);
  };

  return (
    <main className={styles.main} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
          <h2>projects</h2>
        </div>
      </div>
      <section className={styles.content}>
        <Carousel
          value={data}
          itemTemplate={projectTemplate}
          numVisible={1}
          numScroll={1}
          responsiveOptions={[]}
          circular
          autoplayInterval={x}
          orientation="vertical" verticalViewPortHeight="90vh"
          nextIcon={customNextIcon}
      prevIcon={customPrevIcon}
        />
      </section>
    </main>
  );
}

