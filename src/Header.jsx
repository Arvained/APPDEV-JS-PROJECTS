export default function Header(){
  return(
      <header style={headerStyle}>
          <h1 style={titleStyle}>This is my List of Favourite Games</h1>
          <hr style={hrStyle} />
      </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  marginBottom: '20px'
}

const titleStyle = {
  color: '#333',
  fontSize: '24px',
  fontFamily: 'Arial, sans-serif'
}

const hrStyle = {
  border: 'none',
  height: '1px',
  backgroundColor: '#ccc'
}

