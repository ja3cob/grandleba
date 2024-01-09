import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';

const ForGroups = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        {isMobile && <Logo />}
         <div className="special-offer-section">
          <h3 className="header special-offer-header">WIELKANOC NAD MORZEM</h3>
          <p className="subtext">29.03-01.04.2024 (3 noce)</p>
          <ul className="special-offer-list">
            <li className="special-offer-list-bold">
              29.03 Wielki Piątek
            </li>
            <ul className="special-offer-list">
              <li>Przyjazd gości</li>
              <li>Obiadokolacja w formie bufetu 17:00 – 20:00</li>
            </ul>
            <li className="special-offer-list-bold">
              30.03 Wielka Sobota
            </li>
            <ul className="special-offer-list">
              <li>Śniadanie - 8:00 – 10:30</li>
              <li>
                Święcenie pokarmów (koszyczki ze święconką przygotowuje obsługa)
                - od 10:30
              </li>
              <li>Obiadokolacja w formie bufetu - 16:30 – 20:00</li>
            </ul>
            <li className="special-offer-list-bold">
              31.03 Niedziela Wielkanocna
            </li>
            <ul className="special-offer-list">
              <li>
                Uroczyste śniadanie wielkanocne z tradycyjnymi potrawami i
                ciastami wielkanocnymi w formie bufetu – 8:00 – 11:00
              </li>
              <li>
                Całodzienny bufet słodki przy kawie i herbacie – 8:00 – 20:00
              </li>
              <li>
                Świąteczna obiadokolacja wielkanocna w formie bufetu – 16:30 -
                20:00
              </li>
            </ul>
            <li className="special-offer-list-bold">
              01.04 Poniedziałek Wielkanocny
            </li>
            <ul className="special-offer-list">
              <li>Uroczyste śniadanie wielkanocne – 8:00 – 11:00</li>
              <li>
                Pożegnanie i wyjazd Gości – możliwość wymeldowania do godziny
                13:00
              </li>
            </ul>
          </ul>
          <p className="text">
            Napoje (woda, soki, kawa, herbata) do każdego z posiłków.
            <br /><br />
            Koszt pobytu osoby dorosłej w pokoju 2 os. z balkonem – 1290 zł (2580 zł pobyt
            dla dwóch osób).
            <br />
            Koszt pobytu osoby dorosłej w pokoju 2 os. bez balkonu – 1245 zł (2490 zł pobyt
            dla dwóch osób).
            <br />
            Koszt pobytu osoby dorosłej w pokoju 1 os. - 1590 zł
          </p>
        </div> 
        <h1 className="header special-offer-header">{t('specialOffer1')}</h1>
        <p className="text">
          {t('specialOffer2')}
          <br />
          <br />
          {t('specialOffer3')}
          <br />
          <br />
          {t('specialOffer4')}
          <br />
          <br />
          {t('specialOffer5')}
          <br />
          <br />
          <strong>email: biuro@grandleba.pl</strong>
          <br />
          <strong>
            <a href="tel:723-724-884">tel.: 723-724-884</a>
          </strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ForGroups;
