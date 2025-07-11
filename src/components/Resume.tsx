import { useState } from 'react';
import type { JSX } from "react";
import '../style/Resume.css';
import resumeData from '../data/resume.json';
import certificationsData from '../data/certifications.json';
import { SiGooglecloud, SiCoursera, SiCisco } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Resume() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications'>('education');

  const issuerIcons: Record<string, JSX.Element> = {
    "Google Cloud": <SiGooglecloud size={24} className="issuer-icon" style={{ color: '#4285F4' }} />,
    "Coursera": <SiCoursera size={24} className="issuer-icon text-info" />,
    "Cisco": <SiCisco size={24} className="issuer-icon text-primary" />,
    "Dicoding Indonesia": (
      <img src="/assets/sertif/dicoding.jpg" alt="Dicoding" className="issuer-icon" />
    ),
    "IBM": (
      <img src="/assets/sertif/ibm.svg" alt="IBM" className="issuer-icon" />
    ),
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <motion.div
            className="resume-box shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {resumeData.education.map((item, index) => (
              <div key={index}>
                <h5 className="mb-1 fw-bold text-dark">{item.institution}</h5>
                <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{item.period}</p>
                <p className="mb-3 text-secondary" style={{ fontSize: '0.95rem' }}>{item.details}</p>
                {index !== resumeData.education.length - 1 && (
                  <hr className="resume-divider" />
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            className="resume-box shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {resumeData.experience.map((item, index) => (
              <div key={index}>
                <h5 className="mb-1 fw-bold text-dark">{item.company}</h5>
                <h6 className="mb-1 text-danger">{item.position}</h6>
                <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{item.period}</p>
                <p className="mb-3 text-secondary" style={{ fontSize: '0.95rem' }}>{item.details}</p>
                {index !== resumeData.experience.length - 1 && (
                  <hr className="resume-divider" />
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'certifications':
        const grouped = certificationsData.reduce((acc: Record<string, typeof certificationsData>, cert) => {
          if (!acc[cert.issuer]) acc[cert.issuer] = [];
          acc[cert.issuer].push(cert);
          return acc;
        }, {});
        const issuers = Object.keys(grouped).sort();

        return (
          <div className="row g-4">
            {issuers.map((issuer, i) => (
              <motion.div
                className="col-md-6"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="resume-box  shadow-sm h-100">
                  <h5 className="fw-bold text-danger mb-3 d-flex align-items-center">
                    {issuerIcons[issuer] || null}
                    {issuer}
                  </h5>
                  {grouped[issuer]
                    .sort((a, b) => b.period.localeCompare(a.period))
                    .map((cert, idx) => (
                      <div key={idx} className="mb-3">
                        <p className="mb-1 fw-semibold text-dark">{cert.name}</p>
                        <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{cert.period}</p>
                        {cert.credential && (
                          <a
                            href={cert.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credential-link"
                          >
                            View Credential <FiExternalLink size={14} />
                          </a>
                        )}
                        {idx !== grouped[issuer].length - 1 && (
                          <hr className="resume-dashed-line" />
                        )}
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="container my-5">
      <div className="text-center mb-5">
        <h2 className="resume-title mb-3">Resume.</h2>
        <p className="resume-subtitle">
          Education, experience, and certifications that reflect my journey in tech.
        </p>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <div className="btn-group resume-tab-group" role="group">
          {['education', 'experience', 'certifications'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`btn resume-tab-btn ${activeTab === tab ? 'btn-danger' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              style={{
                borderRadius:
                  tab === 'education'
                    ? '25px 0 0 25px'
                    : tab === 'certifications'
                      ? '0 25px 25px 0'
                      : '0',
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11">
          <div className="resume-content">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
