import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="d-flex flex-between container f-col">
      <div className="topFooter">
        <div className="logo">
          <a href="#">
            <Image
              src="/logo(light).png"
              alt="logo"
              width={35}
              height={35}
              className="image"
            />
            TechLab
          </a>
        </div>
        <div className="content f-col">
          <span>Courses</span>
          <a href="">Lecturers</a>
          <a href="">Tutorials</a>
          <a href="">Webinars</a>
          <a href="">Help center</a>
        </div>
        <div className="content f-col">
          <span>AI Labs</span>
          <a href="">Machine Learning</a>
          <a href="">Computer Vision</a>
          <a href="">NLP</a>
        </div>
        <div className="content f-col">
          <span>Robotic Labs</span>
          <a href="">Autonomous Systems</a>
          <a href="">Manipulation Robotics</a>
          <a href="">Mobile Robotics</a>
        </div>
        <div className="content f-col">
          <span>Company</span>
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Event</a>
          <a href="">Careers</a>
        </div>
      </div>
      <div className="bottomFooter">
        <div>@ 2025 TechLab, Inc. All rights reserved.</div>
        <div>
          <div className="privacy">
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Contact</a>
          </div>
          <div className="icons">
            <a className="youtube" href=""></a>
            <a className="instagram" href=""></a>
            <a className="twitter" href=""></a>
            <a className="linkedin" href=""></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
