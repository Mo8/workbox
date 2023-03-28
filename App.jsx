
import { useEffect, useState } from "react";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  window;
  useEffect(() => {
    window.addEventListener(
      "beforeinstallprompt",
      (e) => {
        setDeferredPrompt(e);
      },
      []
    );
  });
  return (
    <div>
      <div>
        {deferredPrompt && (
          <button
            onClick={async () => {
              if (deferredPrompt !== null) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === "accepted") {
                  setDeferredPrompt(null);
                }
              }
            }}
          >
            Install
          </button>
        )}
      </div>
      <div>L'application est installable via ce bouton si vous le voyez.</div><br/>
      <div>Sinon il se pourrait que votre navigateur ne le supporte pas !</div><br/>
      <div>voici les navigateur pouvant accueillir une PWA :</div><br/>
      <ul>
        <li>Windows/Chrome</li>

        <li>Windows/Edge</li>

        <li>Windows/Brave</li>

        <li>MacOS/Chrome</li>

        <li>MacOS/Edge</li>

        <li>iOS/Safari</li>

        <li>Android/Chrome</li>

        <li>Android/Samsung Internet</li>
      </ul>
      <div>Pour voir les fonctionnlité accessible via votre appareil et celle existante vous pouvez cliquer <a href="https://whatwebcando.today/">ici</a></div><br/>
    </div>
  );
}

export default App;
