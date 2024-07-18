import './FooterColumn.scss';
import React, {useState} from 'react';

function FormattedLink({ text, icon, destination}) {
  const iconContext = require.context('../../assets/images/icons', true, /\.svg$/, 'sync');
  const [image, setImage] = useState({src: '', svg: ''});

  const handleLoad = (e) => {
    setImage(prevImage => {

      const newImage = {
        ...prevImage, 
        src: e.currentTarget.src
      }

      // newImage

      return newImage;
    });
  } 
  
  return (
    <li className='footer-link'>
      {icon && <img className='footer-icon' src={iconContext(icon)} alt={text} onLoad={handleLoad} />} 
      <a href={destination}>{text}</a>
    </li>
  )
}

export default function FooterColumn({title, links}) {
  const formattedLinks = links.map(link =>
    <FormattedLink
      key={link.text}
      text={link.text} 
      icon={link.icon} 
      destination={link.destination}
    />
  );

  return (
    <div className='footer-column'>
      <h5 className='footer-title'>{title}</h5>
      <ul className='footer-content'>{formattedLinks}</ul>
    </div>
  );
}