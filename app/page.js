import Header from '../components/Header';
import Activity from '../components/Activity';
import Courses from '../components/Courses';
import BestMentors from '../components/BestMentors';

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Activity></Activity>
      <Courses></Courses>
      <BestMentors></BestMentors>
    </main>
  );
}
