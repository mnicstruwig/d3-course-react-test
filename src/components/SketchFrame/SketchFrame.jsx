import './SketchFrame.css';


export default function SketchFrame({ children, image }) {
  return (
    <div className="sketch-frame" style={{ '--frame-image': `url("${image}")` }}>
      {children}
    </div>
  );
}
