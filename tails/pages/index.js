import Image from "next/image";
import { Header, NavBar } from "../components";
import { Inter } from "@next/font/google";
import catDog from "../public/imgs/cat_dog.png";
import logoText from "../public/imgs/logoText.png";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className={styles.home}>
        <div className={styles.home__header}>
          <div>
            <Image src={catDog} className={styles.home__catDogLogo} />
            <Image src={logoText} className={styles.home__logo} />
          </div>
          <div className={styles.home__aboutUs}>
            <h2>About Us</h2>
            <p>
              Founded in September of 2017, the purpose of Tails of the Midwest
              Rescue is to take in unwanted, abandoned, abused, or stray pets
              and attempt to find suitable forever-homes for them. This will
              prevent possible neglect and/or euthanasia. This rescue is created
              and run by local volunteers in the Bismarck-Mandan community. We
              are a 501(c)3 non-profit organization, and fully foster-based.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
