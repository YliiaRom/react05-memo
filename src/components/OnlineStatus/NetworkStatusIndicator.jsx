import { useState } from "react";
import bgImg from "../../assets/img/online.jpg";
import { useOnlineStatus } from "./useOnlineStatus";
function NetworkStatusIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">10</p>
        <h2>
          use... -Custom Hook <br />
          useOnlineStatus()
        </h2>
        <div>
          <p>Відобразити стан "online" / "offline"</p>
        </div>
        <div className="more" onClick={() => setIsOpen((v) => !v)}>
          code use...
        </div>
        {isOpen && (
          <div className="moreBody">
            <h2>useOnlineStatus ....return onlineStatus;</h2>
            <p>
              export const useOnlineStatus = () =&gt; &#123;
              <br />
              const [onlineStatus, setOnlineStatus] =
              useState(navigator.onLine);
              <br />
              useEffect(() =&gt; &#123;
              <br />
              const handleOnline = () =&gt; setOnlineStatus(true);
              <br />
              const handleOffline = () =&gt; setOnlineStatus(false);
              <br />
              window.addEventListener("online", handleOnline);
              <br />
              window.addEventListener("offline", handleOffline);
              <br />
              return () =&gt; &#123;
              <br />
              window.removeEventListener("online", handleOnline);
              <br />
              window.removeEventListener("offline", handleOffline);
              <br />
              &#125;;
              <br />
              &#125;, []);
              <br />
              return onlineStatus;
              <br />
              &#125;;
              <br />
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <h2>const onlineStatus = useOnlineStatus();</h2>
        <div>{onlineStatus ? "online" : "offline"}</div>
      </div>
    </div>
  );
}
export default NetworkStatusIndicator;
