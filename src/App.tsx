import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState
} from 'react';

import classes from './App.module.css';

import Switch from './UI//Switch/Switch';

import Logo from './logo.svg';

const App = () => {
  const [volume, setVolume] = useState('100');
  const [actualMusic, setActualMusic] = useState<null | HTMLAudioElement>(null);
  const [turnedOn, setTurnedOn] = useState<null | boolean>(true);
  const [whichSet, setWhichSet] = useState(1);

  const appEl = useRef<HTMLDivElement>(null);
  const displayEl = useRef<HTMLDivElement>(null);
  const qEl = useRef<HTMLDivElement>(null);
  const wEl = useRef<HTMLDivElement>(null);
  const eEl = useRef<HTMLDivElement>(null);
  const aEl = useRef<HTMLDivElement>(null);
  const sEl = useRef<HTMLDivElement>(null);
  const dEl = useRef<HTMLDivElement>(null);
  const zEl = useRef<HTMLDivElement>(null);
  const xEl = useRef<HTMLDivElement>(null);
  const cEl = useRef<HTMLDivElement>(null);

  type element = [string, string, React.RefObject<HTMLDivElement>, string];
  const set1: element[] = [
    [
      'https://www.looperman.com/media/loops/3988681/looperman-l-3988681-0269173-lenoxbeatmaker-softcell.mp3',
      'Q',
      qEl,
      'Guitar Loop 1'
    ],
    [
      'https://www.looperman.com/media/loops/3135270/looperman-l-3135270-0268733-gunna-x-young-thug-guitar-loop.mp3',
      'W',
      wEl,
      'Guitar Loop 2'
    ],
    [
      'https://www.looperman.com/media/loops/3410835/looperman-l-3410835-0268436-izo-down-piano-loop.mp3',
      'E',
      eEl,
      'Piano Loop 1'
    ],
    [
      'https://www.looperman.com/media/loops/3194251/looperman-l-3194251-0266229-finally-over-you.mp3',
      'A',
      aEl,
      'Piano Loop 2'
    ],
    [
      'https://www.looperman.com/media/loops/3194251/looperman-l-3194251-0264829-if-you-want-me-to.mp3?d=20210906152533',
      'S',
      sEl,
      'Piano Loop 3'
    ],
    [
      'https://www.looperman.com/media/loops/4546841/looperman-l-4546841-0264328-kayy-harmonic-keys.mp3',
      'D',
      dEl,
      'Hip Hop Loop'
    ],
    [
      'https://www.looperman.com/media/loops/2273068/looperman-l-2273068-0263888-frank-ocean-x-asap-rocky-pad.mp3',
      'Z',
      zEl,
      'Pop Loop'
    ],
    [
      'https://www.looperman.com/media/loops/3041481/looperman-l-3041481-0263294-1999-lil-uzi-vert.mp3',
      'X',
      xEl,
      'Trap Loop 1'
    ],
    [
      'https://www.looperman.com/media/loops/4837352/looperman-l-4837352-0260703-galaxy.mp3',
      'C',
      cEl,
      'Trap Loop 2'
    ]
  ];

  const set2: element[] = [
    [
      'https://www.looperman.com/media/loops/4598745/looperman-l-4598745-0267103-drill-session-prodfaze.mp3',
      'Q',
      qEl,
      'Drill Loop'
    ],
    [
      'https://www.looperman.com/media/loops/2738011/looperman-l-2738011-0241757-classic-old-school-liquid-drum-n-bass-drumbeat.mp3',
      'W',
      wEl,
      'Drum Beat'
    ],
    [
      'https://www.looperman.com/media/loops/934083/looperman-l-0934083-0247391-alienations.mp3',
      'E',
      eEl,
      'Alien Loop'
    ],
    [
      'https://www.looperman.com/media/loops/1069771/looperman-l-1069771-0244485-dnb-drums.mp3',
      'A',
      aEl,
      'DNB Drums'
    ],
    [
      'https://www.looperman.com/media/loops/4413470/looperman-l-4413470-0234576-130-bpm-trap-drum-loop.mp3',
      'S',
      sEl,
      'Trap Drum Loop'
    ],
    [
      'https://www.looperman.com/media/loops/291301/looperman-l-0291301-0226917-dnb-jungle-drumloop.mp3',
      'D',
      dEl,
      'Jungle Loop'
    ],
    [
      'https://www.looperman.com/media/loops/3296004/looperman-l-3296004-0224101-ronny-j-type-hard-drums.mp3',
      'Z',
      zEl,
      'Hard Drums'
    ],
    [
      'https://www.looperman.com/media/loops/3104241/looperman-l-3104241-0195248-ps1-vintage-racing-game-vibe.mp3',
      'X',
      xEl,
      'Synth Loop'
    ],
    [
      'https://www.looperman.com/media/loops/2852656/looperman-l-2852656-0192348-jaybird-drums-80bpm.mp3',
      'C',
      cEl,
      'Slow Drum'
    ]
  ];

  const setHandler = (getSet: number) => {
    setWhichSet(getSet);
  };

  const isOn = (state: boolean) => {
    setTurnedOn(state);
  };

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value);
    if (actualMusic) {
      actualMusic.volume = +volume / 100;
    }
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (turnedOn) {
      switch (e.key) {
        case 'q':
          qEl.current!.click();
          break;
        case 'w':
          wEl.current!.click();
          break;
        case 'e':
          eEl.current!.click();
          break;
        case 'a':
          aEl.current!.click();
          break;
        case 's':
          sEl.current!.click();
          break;
        case 'd':
          dEl.current!.click();
          break;
        case 'z':
          zEl.current!.click();
          break;
        case 'x':
          xEl.current!.click();
          break;
        case 'c':
          cEl.current!.click();
          break;
      }
    }
  };

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (turnedOn) {
      const target = e.target as HTMLDivElement;
      const audio = target.lastChild as HTMLAudioElement;

      target.classList.add(classes.DrumpadClicked);
      setTimeout(() => {
        target.classList.remove(classes.DrumpadClicked);
      }, 200);

      if (actualMusic) {
        actualMusic.pause();
      }
      audio.currentTime = 0;

      audio.play();
      audio.volume = +volume / 100;
      setActualMusic(audio);

      displayEl.current!.innerText = audio.innerHTML;
    }
  };

  const hoverHandler = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const audio = target.lastChild as HTMLAudioElement;

    if (turnedOn) {
      if (!actualMusic) {
        displayEl.current!.innerText = '';
        displayEl.current!.innerText = audio.innerHTML;
      }
    }
  };

  const mouseLeaveHandler = () => {
    if (turnedOn && !actualMusic) {
      displayEl.current!.innerHTML = '<span>Select loop</span>';
    }
  };

  if (actualMusic) {
    actualMusic.addEventListener('ended', () => {
      setActualMusic(null);
      displayEl.current!.innerText = 'Press another loop!';
    });
  }

  useEffect(() => {
    if (!turnedOn) {
      displayEl.current!.classList.add(classes.Disabled);
      displayEl.current!.classList.remove(classes.Enabled);

      displayEl.current!.innerText = '';
      qEl.current!.classList.add(classes.Disabled);
      qEl.current!.classList.remove(classes.Enabled);
      wEl.current!.classList.add(classes.Disabled);
      wEl.current!.classList.remove(classes.Enabled);

      eEl.current!.classList.add(classes.Disabled);
      eEl.current!.classList.remove(classes.Enabled);

      aEl.current!.classList.add(classes.Disabled);
      aEl.current!.classList.remove(classes.Enabled);

      sEl.current!.classList.add(classes.Disabled);
      sEl.current!.classList.remove(classes.Enabled);

      dEl.current!.classList.add(classes.Disabled);
      dEl.current!.classList.remove(classes.Enabled);

      zEl.current!.classList.add(classes.Disabled);
      zEl.current!.classList.remove(classes.Enabled);

      xEl.current!.classList.add(classes.Disabled);
      xEl.current!.classList.remove(classes.Enabled);

      cEl.current!.classList.add(classes.Disabled);
      cEl.current!.classList.remove(classes.Enabled);

      if (actualMusic) {
        actualMusic.currentTime = 0;
        actualMusic.pause();
      }
    } else {
      displayEl.current!.classList.remove(classes.Disabled);
      displayEl.current!.classList.add(classes.Enabled);
      qEl.current!.classList.remove(classes.Disabled);
      qEl.current!.classList.add(classes.Enabled);
      wEl.current!.classList.remove(classes.Disabled);
      wEl.current!.classList.add(classes.Enabled);
      eEl.current!.classList.remove(classes.Disabled);
      eEl.current!.classList.add(classes.Enabled);
      aEl.current!.classList.remove(classes.Disabled);
      aEl.current!.classList.add(classes.Enabled);
      sEl.current!.classList.remove(classes.Disabled);
      sEl.current!.classList.add(classes.Enabled);
      dEl.current!.classList.remove(classes.Disabled);
      dEl.current!.classList.add(classes.Enabled);
      zEl.current!.classList.remove(classes.Disabled);
      zEl.current!.classList.add(classes.Enabled);
      xEl.current!.classList.remove(classes.Disabled);
      xEl.current!.classList.add(classes.Enabled);
      cEl.current!.classList.remove(classes.Disabled);
      cEl.current!.classList.add(classes.Enabled);
    }
  }, [turnedOn, actualMusic]);

  useEffect(() => {
    displayEl.current!.innerText = `Set ${whichSet}`;
  }, [whichSet]);

  useEffect(() => {
    appEl.current!.focus();
    displayEl.current!.innerHTML = '<span>Welcome to Music Machine!</span>';
  }, []);

  window.addEventListener('click', () => {
    if (appEl.current) {
      appEl.current.focus();
    }
  });

  return (
    <div
      className={classes.App}
      id="drum-machine"
      onKeyDown={keyDownHandler}
      tabIndex={0}
      ref={appEl}
    >
      <div className={classes.Pad} onMouseLeave={mouseLeaveHandler}>
        {whichSet === 1
          ? set1.map(el => {
              return (
                <div
                  className={classes.Drumpad}
                  ref={el[2]}
                  onClick={clickHandler}
                  onMouseOver={hoverHandler}
                  onMouseLeave={mouseLeaveHandler}
                  key={el[1]}
                >
                  {el[1]}
                  <audio src={el[0]} id={el[1]} className="clip">
                    {el[3]}
                  </audio>
                </div>
              );
            })
          : set2.map(el => {
              return (
                <div
                  className={classes.Drumpad}
                  ref={el[2]}
                  onClick={clickHandler}
                  onMouseOver={hoverHandler}
                  onMouseLeave={mouseLeaveHandler}
                  key={el[1]}
                >
                  {el[1]}
                  <audio src={el[0]} id={el[1]} className="clip">
                    {el[3]}
                  </audio>
                </div>
              );
            })}
      </div>

      <div className={classes.Controls}>
        <div className={classes.Logo}>
          <object data={Logo} width="80" height="80" aria-label="logo"></object>
        </div>
        <div id="display" className={classes.Display} ref={displayEl}>
          <span>Welcome to Music Machine!</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Switch title="Power" checkState={isOn} />
          <Switch title="Set" whichSet={setHandler} />
        </div>
        {!turnedOn && (
          <h5
            style={{
              color: 'red',
              zIndex: 2,
              position: 'fixed',
              transform: 'translateY(5rem) translateX(3rem)'
            }}
          >
            Music machine is turned off
          </h5>
        )}
        {actualMusic && turnedOn && (
          <input
            type="range"
            name="volume"
            id="volume"
            min="0"
            max="100"
            value={volume}
            className={classes.Slider}
            onChange={changeVolume}
          />
        )}
        {actualMusic && turnedOn && <p>Volume: {volume}</p>}
      </div>
    </div>
  );
};

export default App;
