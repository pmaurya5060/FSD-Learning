import {Link,Routes,Route} from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}
function Link1() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </div>

  )
}

export default Link1