import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { NextArrow, PrevArrow } from './Arrow/Arrow';

import ShowRoom1 from '../../img/ShowRoom/ShowRoom1.webp';
import ShowRoom2 from '../../img/ShowRoom/ShowRoom2.webp';
import ShowRoom3 from '../../img/ShowRoom/ShowRoom3.webp';
import ShowRoom4 from '../../img/ShowRoom/ShowRoom4.webp';
import ShowRoom5 from '../../img/ShowRoom/ShowRoom5.webp';
import ShowRoom6 from '../../img/ShowRoom/ShowRoom6.webp';
import ShowRoom7 from '../../img/ShowRoom/ShowRoom7.webp';
import ShowRoom8 from '../../img/ShowRoom/ShowRoom8.webp';
import ShowRoom9 from '../../img/ShowRoom/ShowRoom9.webp';
import ShowRoom10 from '../../img/ShowRoom/ShowRoom10.webp';
import ShowRoom11 from '../../img/ShowRoom/ShowRoom11.webp';
import ShowRoom12 from '../../img/ShowRoom/ShowRoom12.webp';
import ShowRoom13 from '../../img/ShowRoom/ShowRoom13.webp';
import ShowRoom14 from '../../img/ShowRoom/ShowRoom14.webp';
import ShowRoom15 from '../../img/ShowRoom/ShowRoom15.webp';
import ShowRoom16 from '../../img/ShowRoom/ShowRoom16.webp';
import ShowRoom17 from '../../img/ShowRoom/ShowRoom17.webp';
import ShowRoom18 from '../../img/ShowRoom/ShowRoom18.webp';
import ShowRoom19 from '../../img/ShowRoom/ShowRoom19.webp';

const PhotoGallerySlider = ({ darkMode }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    if (mediaQuery.matches) {
      document.body.classList.add('no-scroll');
    }

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      document.body.classList.remove('no-scroll');
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const photos = [
    { src: ShowRoom1, alt: t('gallery.image1Description') },
    { src: ShowRoom2, alt: t('gallery.image2Description') },
    { src: ShowRoom3, alt: t('gallery.image3Description') },
    { src: ShowRoom4, alt: t('gallery.image4Description') },
    { src: ShowRoom5, alt: t('gallery.image5Description') },
    { src: ShowRoom6, alt: t('gallery.image6Description') },
    { src: ShowRoom7, alt: t('gallery.image7Description') },
    { src: ShowRoom8, alt: t('gallery.image8Description') },
    { src: ShowRoom9, alt: t('gallery.image9Description') },
    { src: ShowRoom10, alt: t('gallery.image10Description') },
    { src: ShowRoom11, alt: t('gallery.image11Description') },
    { src: ShowRoom12, alt: t('gallery.image12Description') },
    { src: ShowRoom13, alt: t('gallery.image13Description') },
    { src: ShowRoom14, alt: t('gallery.image14Description') },
    { src: ShowRoom15, alt: t('gallery.image15Description') },
    { src: ShowRoom16, alt: t('gallery.image16Description') },
    { src: ShowRoom17, alt: t('gallery.image17Description') },
    { src: ShowRoom18, alt: t('gallery.image18Description') },
    { src: ShowRoom19, alt: t('gallery.image19Description') },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in`}>
      <div className="max-w-7xl text-center w-full md:px-2 mt-2 xl:mb-10">
        <h1 className="text-4xl xl:text-5xl font-bold xl:mb-8">{t('gallery.title')}</h1>
        <p className="text-lg md:text-xl mb-10 md:mb-5 px-3 md:max-w-7xl mt-5">
          {t('gallery.description')}
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto px-8 md:px-12 xl:px-4 xl:mb-20">
        <Slider {...settings} className={darkMode ? 'slick-dots-dark' : ''}>
          {photos.map((photo, index) => (
            <div key={index} className="md:p-4">
              <div className={`bg-transparent shadow-md rounded-lg p-4 mb-4 ${darkMode ? 'border border-gray-400 text-gray-200' : 'border border-teal-500 text-black'}`}>
                <div className="relative w-full h-64 xl:h-80">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallerySlider;
