import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Streams } from "@/components/home/Streams";
import { Methodology } from "@/components/home/Methodology";
import { Mentors } from "@/components/home/Mentors";
import { Achievers } from "@/components/home/Achievers";
import { Activities } from "@/components/home/Activities";
import { Clubs } from "@/components/home/Clubs";
import { Affiliates } from "@/components/home/Affiliates";
import { StudentToast } from "@/components/ui/Toast";
import styles from "./page.module.scss";

import { EnquiryPopup } from "@/components/home/EnquiryPopup";
import { Announcements } from "@/components/home/Announcements";

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <EnquiryPopup />
      <Header />
      <Hero />
      <Announcements />
      <Streams />
      <Methodology />
      <Mentors />
      <Achievers />
      <Activities />
      <Clubs />
      <Affiliates />
      <StudentToast />
      <Footer />
    </main>
  );
}
