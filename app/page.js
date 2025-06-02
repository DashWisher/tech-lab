import Header from '../components/Header';
import Activity from '../components/Activity';

export default function Home() {
  return (
    <main>
      <div className={`container d-flex flex-between`}>
        <div className="f-col">
          <Header></Header>
          <Activity></Activity>
        </div>
      </div>
    </main>
  );
}
