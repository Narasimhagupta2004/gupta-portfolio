import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const SinglePortfolio = ({ data, getData, index }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/project/${index}`);
  };

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={handleClick}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt={title} />
            </div>
            <div className="st-portfolio-item-hover">
              <div className="st-portfolio-content">
                <Icon icon="mdi:plus-circle" />
                <h5 className="st-portfolio-title">{title}</h5>
                <p className="st-portfolio-subtitle">{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
  getData: PropTypes.func,
  index: PropTypes.number
};

export default SinglePortfolio;
