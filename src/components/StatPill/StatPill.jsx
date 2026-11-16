import './StatPill.css'

export default function StatPill({ name, value, color}){
  const percentage = (value / 190) * 100;
  return (
    <div className="stat-row">
      <span className="pill-label">{name.toUpperCase()}</span>
    <div className="stat-track">
      <div
        className="stat-fill"
        style={{width: `${percentage}%`, backgroundColor: color}}
      >
        <span className="value-label"
              style={{
                color: percentage <= 25 ? "black" : "white",
                transform: percentage <= 25? 'translateX(calc(100% + 4px))': 'none'
                     }}
        >{value}</span>
        </div>
    </div>
      </div>
  )
}
