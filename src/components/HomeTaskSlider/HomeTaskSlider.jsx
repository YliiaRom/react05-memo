import img1 from "../../assets/img/calc.jpg";
import img2 from "../../assets/img/grid.jpg";
import img3 from "../../assets/img/window.jpg";
import img4 from "../..//assets/img/timer.jpg";
import styles from "./HomeTaskSlider.module.css";
const arrImg = [img1, img2, img3, img4];
function HomeTaskSlider() {
  return (
    <div
      className={styles.slider}
      style={{
        "--width": "250px",
        "--height": "250px",
        "--quantity": "4",
      }}
    >
      <div className={styles.sliderBody}>
        {arrImg.map((el, index) => (
          <div
            key={index}
            className={styles.sliderItem}
            style={{ "--position": index + 1 }}
          >
            <img src={el} alt="picture" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeTaskSlider;
