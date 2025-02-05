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
enum work{
  ml,
  front
}

interface project {
  url: string;
  urlop: string;
  name: string;
  line1: string;
  line2: string;
  line3: string;
  site: string;
  index: string;
}

const data: project[] = [
  {
    url: "studydeck.svg",
    index:"01",
    urlop: "studydeckop.svg",
    name: "StudyDeck",
    line1:"",
    line2:"",
    line3:"",
    site: "https://studydeck.bits-sutechteam.org/",
  },
  {
    url: "/roomjsi.svg",
    name: "RoomBooking Portal",
    index:"02",
    urlop: "roomjaiop.svg",
    line1:"",
    line2:"",
    line3:"",
    site: "https://room.studydeck.bits-sutechteam.org/",
  },
  {
    url: "/spinx.svg",
    name: "Spinx Digital-Clone",
    urlop: "spinxop.svg",
    index:"03",
    line1:"",
    line2:"",
    line3:"",
    site: "https://jaivr.github.io/spinxdigitalclone.github.io/#",
  },
  {
    url: "/caljai.svg",
    name: "Calendar-Todo",
    urlop: "calop.svg",
    index:"04",
    line1:"",
    line2:"",
    line3:"",
    site: "https://jaivr.github.io/mycalendar.github.io/",
  },
];

const MLdata: project[] = [
  {
    url: "studydeck.svg",
    index:"01",
    urlop: "studydeckop.svg",
    name: "Federated Learning",
    line1:"I implemented federated learning to train object detection models across multiple edge devices, focusing on efficient client-server communication and data privacy",
    line2:"Implemented federated learning using FLWR",
    line3:"",
    site: "https://github.com/JaiVR/federated-learning-sop",
  },
  {
    url: "studydeck.svg",
    index:"02",
    urlop: "studydeckop.svg",
    name: "Credit Score pred",
    line1:"I learned about PySpark and its application to large datasets, focusing on efficient data processing and implementing regression, classification, and clustering models",
    line2:"Used PySpark and scikit-learn for data processing and model training",
    line3:"",
    site: "https://github.com/JaiVR/Credit_score-prediction-pySpark-",
  },
  {
    url: "studydeck.svg",
    index:"03",
    urlop: "studydeckop.svg",
    name: "Chemometrics",
    line1:"This was my first time using machine learning on real-world data, I applied PCA and PLS regression to analyze chemical data and predict wine quality, applying dimensionality reduction techniques effectively",    
    line2:"Used Pandas and Scikit-learn throughout the process",
    line3:"",
    site: "https://github.com/JaiVR/nir_chemometrics",
  },
  {
    url: "studydeck.svg",
    index:"04",
    urlop: "studydeckop.svg",
    name: "GPL Prediction",
    line1:"This was my first machine learning project, I explored regression and neural network models to predict GPL, learning the basics of ML models and neural networks along the way",    
    line2:"sed Scikit-learn for ML models and PyTorch for neural networks",
    line3:"",
    site: "https://github.com/JaiVR/suttmltask_1",
  }
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
function ProjectML({ projectData, width , height }: { projectData: project , width:number , height: number}) {

  return (
    <Link href={projectData.site} target="_blank" style={{ marginTop: "auto", marginBottom: "auto", padding: "1rem" }}>
    <div className={styles.projectML}>
      <div>
        <h1 style={{color:"#ffffff"}}>{projectData.name}</h1>
      </div>
      <br></br>
      <div>
        <div style={{height:"170px"}}>
          <h3>What I learnt?</h3>
          <p>{projectData.line1}</p>
        </div>
        <br></br>
        <div>
          <h3>Tech Stack</h3>
          <p>{projectData.line2}</p>
        </div>
      </div>
      <div className={styles.details}>
              <a href={projectData.site} className={styles.goTO} style={{ marginTop: "auto", marginBottom: "auto", color: "#808080" }} target="_blank" rel="noopener noreferrer">Go to project</a>
              <Image src="projicon.svg" height={14} width={14} alt="" style={{marginTop:"auto",marginBottom:"auto",marginLeft:"4px"}}></Image>
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
  const [word,setWork] = useState<work>(work.ml)
  

  return (
    <main className={styles.main}>
      <div className={styles.back} style={{position:"fixed", top:"2rem", left:"2rem"}} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
        {!isHovered && <Link href="/" style={{padding:"1rem"}}><Image src="/back.svg" height={32} width={32} alt="" className={styles.imgRotate}></Image></Link>}
        {isHovered && <Link href="/" style={{padding:"1rem"}}><Image src="/backop.svg" height={32} width={32} alt="" className={styles.imgRotate}></Image></Link>}
      </div>
      <div className={styles.content}>
      <div style={{ display: "flex", gap: "1rem", paddingBottom:"0rem" }}>
          <div
            onClick={() => setWork(work.ml)}
            className={`${styles.tab} ${word === work.ml ? styles.active : ''}`}
          >
            <h3>🤖ML</h3>
          </div>
          <div
            onClick={() => setWork(work.front)}
            className={`${styles.tab} ${word === work.front? styles.active : ''}`}
          >
            <h3>🌐Frontend</h3>
          </div>
        </div>
      {word==work.front&&
        <Carousel
        value={data}
        numVisible={2} numScroll={1} responsiveOptions={responsiveOptions}
        style={{padding:"1rem"}}
        circular
        autoplayInterval={3000}
        itemTemplate={(projectData: project) => <Project projectData={projectData}  height={height} width={width}/>}
      />
      }
      {word==work.ml&&
        <Carousel
        value={MLdata}
        numVisible={2} numScroll={1} responsiveOptions={responsiveOptions}
        style={{padding:"1rem"}}
        circular
        autoplayInterval={3000}
        itemTemplate={(projectData: project) => <ProjectML projectData={projectData}  height={height} width={width}/>}
      />
      }
        <div style={{display:"flex", justifyContent:"center"}}>More on<a href="https://github.com/JaiVR" target="_blank" style={{color:"#8c8c8c", marginTop:"auto", marginBottom:"auto"}}> @github</a></div>
      </div>
      <Navbar navigationType={NavigationType.project} />
    </main>
  );
}
