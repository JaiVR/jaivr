"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import "@fontsource/poppins";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import { Slide, Hinge,Roll,JackInTheBox
} from "react-awesome-reveal";
import { Navigation } from "swiper/modules";
import { AttentionSeeker } from 'react-awesome-reveal';

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

const data: social[] = [
  {
    img: "/github.svg",
    link:"https://github.com/JaiVR",
    name:"Github",
    imgop:"githubop.svg"
  },
  {
    img: "/linkedin.svg",
    link:"https://www.linkedin.com/in/jai-vr-291b2b250/",
    name:"LinkedIn",
    imgop:"linkedinop.svg"
  },
  {
    img: "/doge.svg",
    link:"https://twitter.com/Destryet",
    name:"Twitter",
    imgop:"doge.svg"
  },
  {
    img: "/insta.svg",
    link:"https://www.instagram.com/jai_.05/",
    name:"Instagram",
    imgop:"instaop.svg"
  },
];

function Socials({ social }: { social: social }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Example threshold, adjust as needed
  };

  // Add event listener when component mounts
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className={styles.socialBox} style={{display:"flex"}}>
      {!isSmallScreen&& <Link href={social.link} target="_blank" style={{display:"flex", gap:"8px"}} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
        <Image
          src={isHovered ? social.imgop : social.img}
          width={24}
          height={32}
          alt={social.name}
        />
        {isHovered && (
          <JackInTheBox
          className={styles.fadeText}>
            {social.name}
          </JackInTheBox>
        )}
      </Link>}
      {isSmallScreen&& <Link href={social.link} target="_blank" style={{display:"flex", gap:"8px"}} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
        <Image
          src={social.img}
          width={24}
          height={32}
          alt={social.name}
        />
          <JackInTheBox
          className={styles.fadeText} style={{color:"#ffffff"}}>
            {social.name}
          </JackInTheBox>
      </Link>}
    </div>
  );
}


export default function Home() {
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
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    if (contactRef.current) {
        observer.observe(contactRef.current);
    }

    return () => {
        if (contactRef.current) {
            observer.unobserve(contactRef.current);
        }
    };
}, []);

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
      <div className={styles.content}>
        <div
          style={{ borderBottom: "1px solid #393939", paddingBottom: "2rem" }}
          className={styles.heading}
        >
          <h1 style={{color:"#ffffff"}}>{typedText}</h1>
          <p style={{color:"#ffffff"}}>
            iam jai , undergrad{" "}
            <a
              href="https://twitter.com/bitspilaniindia"
              target="_blank"
              style={{ fontWeight: "500", color: "#696969", cursor: "pointer" }}
            >
              @bitspilaniindia
            </a>
          </p>
        </div>
        <div
          style={{ borderBottom: "1px solid #393939",paddingTop: "1rem", paddingBottom: "2rem" }}
          className={styles.heading}
        >
          <h1 style={{color:"#ffffff"}}>Interests</h1>
          <p style={{color:"#ffffff"}}>
          Curious and eager to explore the realms of AI/ML, embedded systems, and IoT, seeking opportunities to innovate and integrate cutting-edge technologies into practical solutions. With a keen interest in the intersection of these fields, I aim to contribute to forward-thinking projects that leverage the power of artificial intelligence, embedded systems, and IoT to address real-world challenges and drive positive change.
          </p>
        </div>
        <div
          style={{ paddingBottom: "2rem", paddingTop: "1rem" }}
          className={styles.footer}
          ref={contactRef}
        >
          <h2 style={{paddingBottom:"1rem",color:"#ffffff"}}>Contact</h2>
          <p style={{color:"#ffffff"}}>
            email me{" "}
            <a
              href="mailto:jaivr@protonmail.com"
              style={{ fontWeight: "500", color: "#696969", cursor: "pointer"}}
            >
              {isVisible && (
                        <AttentionSeeker effect="tada">
                            jaivr@protonmail.com
                        </AttentionSeeker>
                    )}
            </a>
          </p>
          <div className={styles.socials}>
          {data?.map((socialData, index: number) => (
            <Socials social={socialData}/>
    ))}
          </div>
        </div>
      </div>
      <Navbar navigationType={NavigationType.default} />
    </main>
  );
}
