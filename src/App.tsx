import { useState } from 'react';
import styles from './App.module.css';
import phone from '../src/assets/img/inspect1phone.svg'
import icon1 from '../src/assets/icon/icon1.svg'
import icon2 from '../src/assets/icon/icon2.svg'
import icon3 from '../src/assets/icon/icon3.svg'
import icon4 from '../src/assets/icon/icon4.svg'
import icon5 from '../src/assets/icon/icon5.svg'

const buttonItems = [
  { id: 0, icon: icon1, text: 'Document Scanner', heading: "DOCUMENT SCANNER", subheading: "Scan with Ease", pr: "Scan any document instantly with your mobile device by just\na few steps. Save as PDF,JPG,ZIP,TXT and Word format." },
  { id: 1, icon: icon2, text: 'Sign & Stamp', heading: "SIGN & STAMP", subheading: "One-Tap Focus", pr: "Draw, scan or import your signature and stamp with a simple\ntouch. Sign and stamp any document with just a single tap!" },
  { id: 2, icon: icon3, text: 'Batch Scanning', heading: "BATCH SCANNING", subheading: "Multiple Page Scan", pr: "Scan multiple pages or documents in multiple-scanning\nmode. Batch all scans as a single document." },
  { id: 3, icon: icon4, text: 'Advanced Filters', heading: "ADVANCED FILTERS", subheading: "Unique Filters", pr: "Apply advanced filters and enhance quality with various\ncustom made filters. Manually edit brightness and contrast by\nyour own choice on the custom filters." },
  { id: 4, icon: icon5, text: 'Export & Share', heading: "EXPORT & SHARE", subheading: "All-Round Cenversion", pr: "Export your scans as PDF,JPG,ZIP,TXT and Word." },
];

export function App() {

  const [currentButton, setCurrentButton] = useState();


  function handleClick(id) {
    setCurrentButton(id);
  }

  return (
    <>
      <main className={styles.main}>
        <section className='subcontainer'>
          <div className='subcolumncontainer'>

            <div className="subsubcontainer1">
              <img src={phone} alt="phoneimg"></img>
            </div>

            <div className="subsubcontainer2">
              {currentButton ?
                <span className='heading1'>{buttonItems[currentButton].heading}</span>
                : <span className='heading1'>{buttonItems[0].heading}</span>
              }

              {currentButton ?
                <span className='heading2'>{buttonItems[currentButton].subheading}</span>
                : <span className='heading2'>{buttonItems[0].subheading}</span>
              }

              {currentButton ?
                <span className='heading3'>{buttonItems[currentButton].pr}</span>
                : <span className='heading3'>{buttonItems[0].pr}</span>
              }
              <button className='buttoncomponent'>Learn More</button>
            </div>
          </div>

          <div className="buttoncontainer">
            {buttonItems.map(item => (
              <div className="buttonitem" onClick={() => handleClick(item.id)}>
                <div className='iconborder'>
                  <img src={item.icon} />
                </div>
                <span className='heading4'>{item.text}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
