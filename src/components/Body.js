import React from 'react';
// import './styles.css'; // Ensure the CSS file is imported

const testimonials = [
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/318f/f2fc/e7605573975dd86b6b5e442257958e1a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXrjBKIAqs6em6c-bRE5Y9OngecbG2bQW5YQZfcL-piAd7atkjpZ0aRd4lOxkF~Otw7k7i2wifXqI2KB9Tdozi3GS59U~ONG5HhKuwO4Ipra8BTT-HJY3Vw2bb9pxfgVvtTURP9GVfwaj-Hu~bf~g0adPXB4ysfHNgIkM2QqsVtjl5KetgpwA~SjYWWZg0bRJ93edbLoJqbocrpg8TxwWw3wgp12g8nVpKObC5KnwT~JL9nQ1n8rkGsCHWPIBSTtV72g6nOmzCJA4Oy5Hv23LMkPH5TWaTCmjXCfwFlg8nuQwa~cGGOtQUAL4E0vK~n6RRAbEN0yOSLdUlyipSHrzg__",
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/37f4/aee0/5867473f6528a8b38d26da5c6e706015?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JORmjQddEVzSKb1SoTG65LSWugp2a~0e~zDGN~rcc0frvAsKxUNAopn-4Iuz9hsiQ0Ew25Vga1i-Uf6QBHfYw7UqNKxu283IB2qqtJCCotZr98wACkaSbYCVwhFxbdGsXDcSNpwqFO6jQdyKTssAj3A8RkmjzIAeXwsR4XaLqWpBQp5zVMNjoZow10mqF6emUSpRA8u7TEPxRqsBFq4Bl39KpF5zjxYScbbsa0C64e2Wvcg-Vf1u-1UuRAwjIy97bHxkJOI8UVzsNBy3odEV1MG-0hG1-DH9LAUnR1mxDi0Yq-cGVFmIULqjEmja2gxB7ETUUqRqUdSTu-7um2DSDw__",
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
  },
  {
    imgSrc: "https://s3-alpha-sig.figma.com/img/a800/b968/9d4c855b25c5e54cd72531f9e57203bb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDr0GPRfL3UyBCXp~LxGKljiBdqIVDD1iTsA0r9LY2~sb65o4R81ztVGLuKRfFesu9A8WdI5AjWQ97Za9UGXkGRY9B4TJq9nIxY4jZ1wFIISxa7hM5-5uVFSHKlcpbEbpgGpLu6MDPf0BdRvLk3cckooWp6jXvTmaq82DwWHwaiHw0Zhozr3jCRiCafIQGi8Dff4fV9CCiTN9GYC20iWq9M5aD6fT413J-gbt7n36oCk4KhzhM79sHYZI~ydQepTqj0Thd~DQWhkiSsFUr-QeJBw497j2wPjMsGgCmQhSwVqnvy0NGyj8CTZCDpumN9cSIY3myVQM7SaeLSx-Q-qCA__",
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  }
];

const Body = () => {
  return (
    <>
      <div className="testimonial-main-container">
        <div className="testimonial-wrapper">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={testimonial.imgSrc}
                alt="Profile Picture"
                className="profile-pic"
              />
              <div className="name">{testimonial.name}</div>
              <div className="text">{testimonial.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
