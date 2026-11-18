import "./Header.css"

export default function Header({ searchTerm, updateSearchTerm }){
  return (
    <div className="header">
      <h1>Pokemon!</h1>
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        onChange={(event) => updateSearchTerm(event.target.value)}
        placeholder="Search by name..."/>
      </div>
  )
}
