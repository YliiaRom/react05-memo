import bgImg from "../../assets/img/idPlusInput.jpg";
import { useFetch } from "./useFetch";

function FetchComp() {
  const { data, isLoading, error } = useFetch({
    url: "https://dog.ceo/api/breeds/image/random",
  });

  let dataValue;
  if (isLoading) dataValue = <p>Завантаження</p>;
  else if (error) dataValue = <p>ERROR</p>;
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">11</p>
        <h2>useFetch</h2>
        <div>
          <p>
            Зробити хук - універсальний для всіх запитів , щоб давая url
            отримали -loading/error/data
          </p>
        </div>
      </div>
      {/* https://dog.ceo/api/breeds/image/random */}
      <div className="solution">
        <h2>
          const &#123; data, isLoading, error &#125; = <br /> useFetch(&#123;
          url: <br />
          "https://dog.ceo/api/
          <br />
          breeds/image/random", &#125;);
        </h2>
        {dataValue}
        {data?.message && (
          <div>
            <img src={data.message} alt="dog" width="200" />
          </div>
        )}
      </div>
    </div>
  );
}
export default FetchComp;
