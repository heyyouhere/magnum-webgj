import './ThreeBackground.css';
import Spline from '@splinetool/react-spline';

export default function Scene() {
  return (
    <div id="three_canvas">
        <Spline scene="/background.splinecode"/>
    </div>

  );
}
