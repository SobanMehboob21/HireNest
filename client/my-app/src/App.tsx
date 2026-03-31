import Navbar from "./components/Navbar";
import { Category } from "./Pages/Category";
import { Details } from "./Pages/Details";
import Home from "./Pages/Home";
import JobDetail from "./Pages/JobDetail";
import JobPage from "./Pages/JobPage";
import { Jobs } from "./Pages/Jobs";
import { News } from "./Pages/News";
import Testimonial from "./Pages/Testimonial";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Job" element={<JobPage />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
      </Routes>
    </>
  );
}
