import { useEffect, useState } from 'react';
import classes from './Switch.module.css';

const Switch: React.FC<{
  title: string;
  checkState?: (state: boolean) => void;
  whichSet?: (set: number) => void;
}> = props => {
  const [clicked, setClicked] = useState(false);
  const [toLeft, setToLeft] = useState(0);
  const [actualSet, setActualSet] = useState(1);

  useEffect(() => {
    if (props.whichSet) {
      props.whichSet(actualSet);
    }
  }, [actualSet, props]);

  return (
    <div
      className={classes.Switch}
      onClick={() => {
        setClicked(!clicked);
        setToLeft(prevState => (prevState = 1));
        if (props.checkState) {
          props.checkState(clicked);
        }
        if (props.whichSet) {
          if (actualSet === 2) {
            setActualSet(1);
          } else {
            setActualSet(2);
          }
        }
      }}
    >
      <div
        className={`${classes.Button} ${
          toLeft > 0 && clicked ? classes.slideLeft : ''
        } ${!clicked ? classes.slideRight : ''} `}
      ></div>
      <div className={classes.Description}>{props.title}</div>
    </div>
  );
};

export default Switch;
