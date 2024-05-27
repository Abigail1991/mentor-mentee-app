// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLink, FaHeart, FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import menteeImage from '../Images/5.jpg';
import menImage from '../Images/men.jpeg'; // Ensure these paths are correct
import men1Image from '../Images/men1.jpeg';
import men2Image from '../Images/men2.jpeg';
import men3Image from '../Images/men3.jpeg';
import men4Video from '../Images/men4.mp4'; // Video file
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Homepage.css'; // Make sure to create this CSS file

const sharedValues = [
  { id: 1, icon: <FaHandshake className="inline mr-2" />, text: "Empowerment: We believe in empowering individuals to reach their full potential through mentorship." },
  { id: 2, icon: <FaHandshake className="inline mr-2" />, text: "Inclusivity: We are committed to creating an inclusive environment where everyone is welcome and valued." },
  { id: 3, icon: <FaHandshake className="inline mr-2" />, text: "Collaboration: We promote a culture of collaboration, where knowledge and experiences are shared openly." },
  { id: 4, icon: <FaHandshake className="inline mr-2" />, text: "Continuous Learning: We value lifelong learning and the continuous development of skills and knowledge." },
  { id: 5, icon: <FaHandshake className="inline mr-2" />, text: "Integrity: We conduct ourselves with integrity, maintaining the highest ethical standards in all our interactions." },
  { id: 6, icon: <FaHandshake className="inline mr-2" />, text: "Support: We foster a supportive community where mentors and mentees can thrive." },
  { id: 7, icon: <FaHandshake className="inline mr-2" />, text: "Innovation: We embrace innovation, continually improving our platform to meet the evolving needs of our users." },
  { id: 8, icon: <FaHandshake className="inline mr-2" />, text: "Respect: We treat everyone with respect, valuing diverse perspectives and experiences." },
];

const Homepage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % sharedValues.length);
    }, 2000); // Change value every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white">
      <LanguageSelector />
      <section className="mb-8 mt-4">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={menImage} alt="Men" />
            <p className="legend">Need to speak to a mentor? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
          <div>
            <img src={men1Image} alt="Men1" />
            <p className="legend">Need to speak to a mentor? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
          <div>
            <img src={men2Image} alt="Men2" />
            <p className="legend">Need to speak to a mentor? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
          <div>
            <img src={men3Image} alt="Men3" />
            <p className="legend">Need to speak to a mentor? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
          <div>
            <video src={men4Video} controls />
            <p className="legend">Need to speak to a mentor? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
        </Carousel>
      </section>
      <section className="mb-8 mt-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{t('Welcome')}</h1>
        <p>{t('Welcome to our mentoring platform where mentors and mentees can connect for a deeper learning experience. Our goal is to foster an environment of growth and development through meaningful connections.')}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
        <div className="border rounded-lg p-4 shadow-md text-center">
          <img src={menteeImage} alt="Abigail Acheampomaa Opoku" className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-green-500" />
          <h3 className="text-2xl font-bold mb-2">Abigail Acheampomaa Opoku</h3>
          <p><FaUser className="inline mr-2" />{t('Student, Alx SE (Frontend Development)')}</p>
          <p><FaLink className="inline mr-2" /><a href="https://github.com/Abigail1991" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{t('GitHub Acc.')}: https://github.com/Abigail1991</a></p>
          <p><FaHeart className="inline mr-2" />{t('Passion')}: {t('To see young ones get the support they need for their career and personal growth.')}</p>
        </div>
      </section>
      <section className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 inline-block">
          <p className="text-lg"><FaBullseye className="inline mr-2" />{t('Our mission is to empower individuals by fostering meaningful mentor-mentee relationships that drive personal and professional growth. We aim to provide an accessible, user-friendly platform where mentors and mentees can connect, share knowledge, and develop their skills in a supportive environment.')}</p>
        </div>
      </section>
      <section className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 inline-block">
          <p className="text-lg"><FaEye className="inline mr-2" />{t('Our vision is to become the leading platform for mentoring, where every individual has the opportunity to benefit from the guidance and support of a mentor. We strive to create a global community that values continuous learning, collaboration, and the development of future leaders.')}</p>
        </div>
      </section>
      <section className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Shared Values</h2>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 inline-block">
          <TransitionGroup component="ul" className="list-disc list-inside text-left mx-auto max-w-md">
            <CSSTransition key={sharedValues[index].id} timeout={100} classNames="fade">
              <li className="my-2">{sharedValues[index].icon}{t(sharedValues[index].text)}</li>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Navigate</h2>
        <ul className="list-disc list-inside">
          <li><Link to="/mentors" className="text-blue-600 hover:underline">{t('Mentors')}</Link></li>
          <li><Link to="/mentees" className="text-blue-600 hover:underline">{t('Mentees')}</Link></li>
          <li><Link to="/chat/1" className="text-blue-600 hover:underline">{t('Chat')}</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;