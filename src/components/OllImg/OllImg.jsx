import styles from "./OllImg.module.css";
import img1 from "../../assets/img/idPlusInput.jpg";
import img2 from "../../assets/img/task02.jpg";
import img3 from "../../assets/img/word03.jpg";
import img4 from "../../assets/img/scales.jpg";
import img5 from "../../assets/img/every.jpg";
import img6 from "../../assets/img/schedule.jpg";
import img7 from "../../assets/img/shop01.jpg";
import img8 from "../../assets/img/use.jpg";
import img9 from "../../assets/img/ls.jpg";
import img10 from "../../assets/img/online.jpg";
import { memo } from "react";
const arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
function Ollimg() {
  return (
    <div
      className={styles.sliderContainer}
      style={{
        "--width": "100px",
        "--height": "100px",
        "--quantity": "10",
      }}
    >
      {/* <div className={styles.sliderBody}>
        <div className={styles.item} style={{ "--position": 1 }}>
          <img src={img1} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 2 }}>
          <img src={img2} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 3 }}>
          <img src={img3} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 4 }}>
          <img src={img4} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 5 }}>
          <img src={img5} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 6 }}>
          <img src={img6} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 7 }}>
          <img src={img7} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 8 }}>
          <img src={img8} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 9 }}>
          <img src={img9} alt="picture" />
        </div>
        <div className={styles.item} style={{ "--position": 10 }}>
          <img src={img10} alt="picture" />
        </div>
      </div> */}
      <div className={styles.sliderBody}>
        {arrImg.map((el, index) => (
          <div
            key={el}
            className={styles.item}
            style={{ "--position": index + 1 }}
          >
            <img src={el} alt={`picture-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(Ollimg);
