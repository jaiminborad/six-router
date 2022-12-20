import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/myapps" element={<Navigate replace to="/learn" />} /> */}

        <Route path="learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<CourseId />}></Route>
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}
function Learn() {
  return (
    <div>
      <h1>Learn route</h1>
      <h4>All courses are listed here.</h4>
      <Link to="/learn/courses">Courses</Link>
      <Link /> <Link to="/learn/bundles">Bundle</Link>
      <Outlet />
    </div>
  );
}
// function MyApps() {
//   return (
//     <div>
//       <h1>My Apps</h1>
//       <h4>All courses are listed here.</h4>
//     </div>
//   );
// }
function Courses() {
  const courseList = ["React", "Angular", "Vue", "Node.js"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      <h1>course list</h1>
      <h4>course Card</h4>

      <p>More Test</p>
      <NavLink
        style={(isActive) => {
          return {
            backgroundColor: isActive ? "red" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink to={`/learn/courses/tests`}>tests</NavLink>
      <Outlet />
    </div>
  );
}
function Bundles() {
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}
function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL params is : {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid });
        }}
      >
        Price
      </button>
      <Link to="/dashboard" state={"DJANGO"}>
        Test Link
      </Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is {location.state}</h1>
    </div>
  );
}

export default App;
