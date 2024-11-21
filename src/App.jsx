import { useEffect } from 'react';
import './App.css';

function HandleClips(e) {
  const clips = document.querySelectorAll(".clip");
  const display = document.getElementById("display");
  const drumPads = document.querySelectorAll(".drum-pad");
  
  const key = e.key ? e.key.toUpperCase() : e.target.id.toUpperCase();
  
  for (let i = 0; i < clips.length; i++) {
    if (key === clips[i].id) {
      clips[i].currentTime = 0;
      clips[i].play();
      display.innerText = clips[i].title;
      drumPads[i].style.opacity = 0.5;
      setTimeout(() => {
        drumPads[i].style.opacity = 1;
      }, 100);
    }
  }
}

function HandleVolume() {
  const clips = document.querySelectorAll(".clip");
  const display = document.getElementById("display");
  const range = document.getElementById("volume");
  clips.forEach(clip => {
    clip.volume = range.value / 100;
  });
  display.innerText = "Volume: "+range.value;

}

function App() {
  useEffect(() => {
    const handleKeydown = (e) => {
      HandleClips(e);
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className="main" id="drum-machine">
      <div className="pad-container">
        <div className="drum-pad" id="Q" onClick={HandleClips}>
          <audio id="Q" className="clip" src="/assets/Heater-1.mp3" title="Heater 1"></audio>
          Q
        </div>
        <div className="drum-pad" id="W" onClick={HandleClips}>
          <audio id="W" className="clip" src="/assets/Heater-2.mp3" title="Heater 2"></audio>
          W
        </div>
        <div className="drum-pad" id="E" onClick={HandleClips}>
          <audio id="E" className="clip" src="/assets/Heater-3.mp3" title="Heater 3"></audio>
          E
        </div>
        <div className="drum-pad" id="A" onClick={HandleClips}>
          <audio id="A" className="clip" src="/assets/Heater-4_1.mp3" title="Heater 4"></audio>
          A
        </div>
        <div className="drum-pad" id="S" onClick={HandleClips}>
          <audio id="S" className="clip" src="/assets/Heater-6.mp3" title="Heater 6"></audio>
          S
        </div>
        <div className="drum-pad" id="D" onClick={HandleClips}>
          <audio id="D" className="clip" src="/assets/Cev_H2.mp3" title="Closed HH"></audio>
          D
        </div>
        <div className="drum-pad" id="Z" onClick={HandleClips}>
          <audio id="Z" className="clip" src="/assets/Kick_n_Hat.mp3" title="kick n'hat"></audio>
          Z
        </div>
        <div className="drum-pad" id="X" onClick={HandleClips}>
          <audio id="X" className="clip" src="/assets/RP4_KICK_1.mp3" title="kick"></audio>
          X
        </div>
        <div className="drum-pad" id="C" onClick={HandleClips}>
          <audio id="C" className="clip" src="/assets/Dsc_Oh.mp3" title="Open HH"></audio>
          C
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div id="display"></div>
        <input type="range" id="volume" max={100} min={0} defaultValue={50} step={1} style={{width:"80%"}} onChange={HandleVolume} />
      </div>
    </div>
  );
}

export default App;
