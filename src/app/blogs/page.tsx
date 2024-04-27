"use client";
import Image from "next/image";
import styles from "./blogs.module.scss";
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
enum Field{
  dev,
  core
}
interface fData{
  n: number,
  topic: string,
  data: string,
  link: string
}
const dev: fData[] = [
  {
    n: 1,
    topic: "Predicting GPL - SuTT ML task",
    link:"https://github.com/JaiVR/suttmltask_1/tree/main",
    data:"This is my first machine learning project and my first blog aswell 😁 and those who are wondering what SuTT is? it is the Students Union Tech Team one of the coolest organizations in my university,now lets dive into the project to be precise you have to predict the GPL-birthday celeb :) of a student with parameters such as gender ,cgpa ,age and treats given etc...(time limit: 10 days)Starting off with data cleaning firstly I split the independent and dependent variables then I took care of the missing values in the numerical fields by replacing them with the mean of the respective column(Imputing method) and the one-hot encoding for the categorical data, then splitting the data into train and test for which i used the scikit learn library ,these are pretty standard procedures for data cleaning. Now moving onto analyzing the data I compared all the columns in the independent set with the dependent set(GPL) by the plotting various graphs (lib used: matplotlib and seaborn) then I drew some conclusions on how these independent variables affect the dependent variable. Then I did a Ridge Model(later i knew that it is also called as L2 regularization), now after rounding off the pred values and drawing the confusion matrix i got an accuracy of 77% ,tbh i thought this is very high until I saw the results of Neural Network I'll come to that soon 🙃. Then I predicted the results of some of my seniors , seems like none of them are having GPL... this is sad bro! Next we go to the neural network with T minus 2 days to go!! bruh💀 how did I pull it off ? Lets see So starting off I didn't know what a neural network was so looked up some videos on youtube and once I got a fair understanding of the topic i went thorugh the Pytorch documentation and again some youtube videos on how to implement a machine learning model using neural networks(would recommend StatQuest and Codemy) , now I defined my basic Neural Network model with 3 hidden layers and I used relu for it , I measured the error using cross entropy loss and used the adam optimizer to minimize the loss. Now setting the epochs to 100 i plotted the epochs vs loss plot evertything was pretty normal until I found the accuracy to be 56% i seriously didn't understand how on earth does a neural network have an accuracy less than the ridge model(77%) while looking upon i found that the predicted values of the GPL are almost 0 very few had values greater than 0.5(1 or 2 to be precise😐) then after playing around with different parameters I got my model working... the changes --> added Sigmoid in my nn model, lowered the learning rate to 0.001 and added a new parameter epsilon=1e-5, increased my epochs to 10000, and then then came the great move of changing my loss criterion to MSE loss, the accuracy skyrocketed to a whopping 95% oof finally!! and then i perdicted the results for my seniors and some random test set data. So thats it from this project but still there are a lot of key areas where i didn't know why i was doing that so there is a lot to learn and revisit and thats it from this blog see you in my next blog until then cheers!! and goodbye👋",
  },
];
const core: fData[] = [
  {
    n: 1,
    topic: "IoT?",
    data:"coming soon",
    link:""
  },
];
function Cont({data}:{data: fData}){
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const words1 = data.data.split(' ');
  const wl = words1.length
  

  const renderContent = () => {
    if (!showFullContent) {
      const words = data.data.split(' ');
      const truncatedContent = words.slice(0, 50).join(' ');
      return (
        <div className={styles.truncatedContent}>
          <p>{truncatedContent}</p>
        </div>
      );
    } else {
      return (
        <div className={styles.blogCont}>
          {data.data}
        </div>
      );
    }
  };
  

  const time = Math.round(wl/175);

  return (
    <div className={styles.data} style={{ paddingBottom: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <h2>{data.n}. {data.topic}</h2>
        <p style={{ marginTop: "auto", marginBottom: "auto", fontSize: "16px", color: "#727272" }} >📖 {time} min read</p>
      </div>
      {renderContent()}
      {!showFullContent && (
        <div onClick={toggleContent} style={{color:"#727272", cursor:"pointer"}}>Show More</div>
      )}
      {showFullContent && (
        <div onClick={toggleContent} style={{color:"#727272", cursor:"pointer"}}>Show Less</div>
      )}
      <div style={{ display: "flex", gap: "8px" }} className={styles.project}>
      <a href={data.link} style={{ marginTop: "auto", marginBottom: "auto", fontSize: "16px", color: "#808080" }} target="_blank" rel="noopener noreferrer">Go to project</a>
      <Image src="projicon.svg" height={14} width={14} alt="" style={{marginTop:"auto",marginBottom:"auto"}}></Image>
      </div>
    </div>
  );
}



export default function Projects() {
    const [field,setField] = useState<Field>(Field.dev)
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
      <div style={{ display: "flex", gap: "1rem", paddingBottom:"2rem" }}>
          <div
            onClick={() => setField(Field.dev)}
            className={`${styles.tab} ${field === Field.dev ? styles.active : ''}`}
          >
            <h3>🚀 Dev</h3>
          </div>
          <div
            onClick={() => setField(Field.core)}
            className={`${styles.tab} ${field === Field.core ? styles.active : ''}`}
          >
            <h3>💡Core</h3>
          </div>
        </div>
        {field=== Field.dev &&
          dev?.map((dev) => (
            <Cont data={dev}></Cont>
          ))
        }
        {field=== Field.core &&
          core?.map((core) => (
            <Cont data={core}></Cont>
          ))
        }
      </div>
      <Navbar navigationType={NavigationType.blogs} />
    </main>
  );
}
