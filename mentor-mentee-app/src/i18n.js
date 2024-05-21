// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "About Us": "About Us",
      "Meet the Team": "Meet the Team",
      "Mission": "Mission",
      "Vision": "Vision",
      "Shared Values": "Shared Values",
      "Navigate": "Navigate",
      "Mentors": "Mentors",
      "Mentees": "Mentees",
      "Chat": "Chat",
      "Student, Alx SE (Frontend Development)": "Student, Alx SE (Frontend Development)",
      "Passion: To see young ones get the support they need for their career and personal growth.": "Passion: To see young ones get the support they need for their career and personal growth.",
      "Our mission is to empower individuals by fostering meaningful mentor-mentee relationships that drive personal and professional growth. We aim to provide an accessible, user-friendly platform where mentors and mentees can connect, share knowledge, and develop their skills in a supportive environment.": "Our mission is to empower individuals by fostering meaningful mentor-mentee relationships that drive personal and professional growth. We aim to provide an accessible, user-friendly platform where mentors and mentees can connect, share knowledge, and develop their skills in a supportive environment.",
      "Our vision is to become the leading platform for mentoring, where every individual has the opportunity to benefit from the guidance and support of a mentor. We strive to create a global community that values continuous learning, collaboration, and the development of future leaders.": "Our vision is to become the leading platform for mentoring, where every individual has the opportunity to benefit from the guidance and support of a mentor. We strive to create a global community that values continuous learning, collaboration, and the development of future leaders.",
      "Empowerment: We believe in empowering individuals to reach their full potential through mentorship.": "Empowerment: We believe in empowering individuals to reach their full potential through mentorship.",
      "Inclusivity: We are committed to creating an inclusive environment where everyone is welcome and valued.": "Inclusivity: We are committed to creating an inclusive environment where everyone is welcome and valued.",
      "Collaboration: We promote a culture of collaboration, where knowledge and experiences are shared openly.": "Collaboration: We promote a culture of collaboration, where knowledge and experiences are shared openly.",
      "Continuous Learning: We value lifelong learning and the continuous development of skills and knowledge.": "Continuous Learning: We value lifelong learning and the continuous development of skills and knowledge.",
      "Integrity: We conduct ourselves with integrity, maintaining the highest ethical standards in all our interactions.": "Integrity: We conduct ourselves with integrity, maintaining the highest ethical standards in all our interactions.",
      "Support: We foster a supportive community where mentors and mentees can thrive.": "Support: We foster a supportive community where mentors and mentees can thrive.",
      "Innovation: We embrace innovation, continually improving our platform to meet the evolving needs of our users.": "Innovation: We embrace innovation, continually improving our platform to meet the evolving needs of our users.",
      "Respect: We treat everyone with respect, valuing diverse perspectives and experiences.": "Respect: We treat everyone with respect, valuing diverse perspectives and experiences."
    }
  },
  fr: {
    translation: {
      "About Us": "À propos de nous",
      "Meet the Team": "Rencontrez l'équipe",
      "Mission": "Mission",
      "Vision": "Vision",
      "Shared Values": "Valeurs partagées",
      "Navigate": "Naviguer",
      "Mentors": "Mentors",
      "Mentees": "Mentorés",
      "Chat": "Chat",
      "Student, Alx SE (Frontend Development)": "Étudiant, Alx SE (Développement Frontend)",
      "Passion: To see young ones get the support they need for their career and personal growth.": "Passion: Voir les jeunes obtenir le soutien dont ils ont besoin pour leur carrière et leur croissance personnelle.",
      "Our mission is to empower individuals by fostering meaningful mentor-mentee relationships that drive personal and professional growth. We aim to provide an accessible, user-friendly platform where mentors and mentees can connect, share knowledge, and develop their skills in a supportive environment.": "Notre mission est d'autonomiser les individus en favorisant des relations significatives de mentorat qui stimulent la croissance personnelle et professionnelle. Nous visons à fournir une plateforme accessible et conviviale où les mentors et les mentorés peuvent se connecter, partager des connaissances et développer leurs compétences dans un environnement de soutien.",
      "Our vision is to become the leading platform for mentoring, where every individual has the opportunity to benefit from the guidance and support of a mentor. We strive to create a global community that values continuous learning, collaboration, and the development of future leaders.": "Notre vision est de devenir la principale plateforme de mentorat, où chaque individu a la possibilité de bénéficier des conseils et du soutien d'un mentor. Nous nous efforçons de créer une communauté mondiale qui valorise l'apprentissage continu, la collaboration et le développement des futurs leaders.",
      "Empowerment: We believe in empowering individuals to reach their full potential through mentorship.": "Autonomisation : Nous croyons en l'autonomisation des individus pour atteindre leur plein potentiel grâce au mentorat.",
      "Inclusivity: We are committed to creating an inclusive environment where everyone is welcome and valued.": "Inclusivité : Nous nous engageons à créer un environnement inclusif où tout le monde est le bienvenu et valorisé.",
      "Collaboration: We promote a culture of collaboration, where knowledge and experiences are shared openly.": "Collaboration : Nous promouvons une culture de collaboration, où les connaissances et les expériences sont partagées ouvertement.",
      "Continuous Learning: We value lifelong learning and the continuous development of skills and knowledge.": "Apprentissage continu : Nous valorisons l'apprentissage tout au long de la vie et le développement continu des compétences et des connaissances.",
      "Integrity: We conduct ourselves with integrity, maintaining the highest ethical standards in all our interactions.": "Intégrité : Nous nous comportons avec intégrité, en maintenant les normes éthiques les plus élevées dans toutes nos interactions.",
      "Support: We foster a supportive community where mentors and mentees can thrive.": "Soutien : Nous favorisons une communauté de soutien où les mentors et les mentorés peuvent s'épanouir.",
      "Innovation: We embrace innovation, continually improving our platform to meet the evolving needs of our users.": "Innovation : Nous adoptons l'innovation, en améliorant continuellement notre plateforme pour répondre aux besoins évolutifs de nos utilisateurs.",
      "Respect: We treat everyone with respect, valuing diverse perspectives and experiences.": "Respect : Nous traitons tout le monde avec respect, en valorisant les perspectives et les expériences diverses."
    }
  },
  // Add other languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;