import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Cisco</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Engineered robust distributed data pipelines using AWS EMR and Spark to process 1.2TB of daily telemetry data. Implemented agentic AI workflows for automated security alert correlation and architected scalable backend microservices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Humana (TCS)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Architected scalable backend microservices for healthcare data management. Optimized distributed data processing layers and SQL query performance, reducing retrieval latency to under 300ms for high-volume datasets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
