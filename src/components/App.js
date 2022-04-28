import logo from '../images/kawaiiPC-logo.png';
import logoSmall from '../images/kawaiiPC-logoSmall.png';
import '../styles/App.scss';
import { useState } from 'react';
import Header from '../components/Header';
import dataApi from '../services/Api';
import CardPreview from './CardPreview';
import Footer from '../components/Footer';

function App() {
  // //OBJETO DATA
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    photo:
      'https://st.depositphotos.com/1376300/2455/i/600/depositphotos_24559761-stock-photo-idyllic-white-beach-in-front.jpg',
    github: '',
    linkedin: '',
    phone: '',
  });

  //CONSTANTE APIDATA

  const [apiData, setApiData] = useState({});
  const handlelickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      console.log(info);
      setApiData(info);
    });
  };

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //FUNCIÓN VALOR INPUT
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };

  //PINTAR PALETAS

  const handlePalettes = (ev) => {
    const value = ev.target.value;
    setDataCard({
      ...dataCard,
      palette: value,
    });
  };

  //FUNCIÓN COLAPSABLES
  const [arrowRotate, setArrowRotate] = useState('');
  const [sectionDesign, setSectionDesign] = useState('');
  const handleCollapsed = (ev) => {
    ev.preventDefault();
    const id = ev.currentTarget.id;
    if (id === 'designLegend') {
      setArrowRotate('rotate');
      setSectionDesign('collapsed');
    }
  };

  //FUNCIÓN RESET DATA
  const handleReset = () => {
    const dataCard = {
      palette: 1,
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    };

    setDataCard({ ...dataCard });
  };

  return (
    <>
     <Header  logo={logo} />
      <main className="mainCreate">
        {/* TARJETA */}

        <CardPreview dataCard={dataCard} />

        {/* FORMULARIO DISEÑA */}
        <form action="" className="form js_form" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend
              className="legend js_designLegend uppercase"
              id="designLegend"
              title="Elige los colores"
              onClick={handleCollapsed}
            >
              <i className="far fa-object-ungroup legend__icon legend__icon--orange"></i>
              <span className="legend__text">Diseña</span>
              <i
                className={`fas fa-angle-up legend__icon legend__icon--arrow js_arrowDesign ${arrowRotate}`}
              ></i>
            </legend>
            <section className={`containerDesign js_design ${sectionDesign}`}>
              <h2 className="containerDesign__title">Colores</h2>
              <div className="containerDesign__options">
                <div className="options__palette">
                  {/* PALETAS */}

                  <input
                    className="radio js_radio-1 js_radio"
                    name="palette"
                    type="radio"
                    id="radio1"
                    value="1"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '1'}
                  />

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--1"
                  ></label>

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--2"
                  ></label>

                  <label
                    htmlFor="radio1"
                    className="palette__sample palette__sample--3"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-2"
                    name="palette"
                    type="radio"
                    id="radio2"
                    value="2"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '2'}
                  />

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--4"
                  ></label>

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--5"
                  ></label>

                  <label
                    htmlFor="radio2"
                    className="palette__sample palette__sample--6"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-3"
                    name="palette"
                    type="radio"
                    id="radio3"
                    value="3"
                    onChange={handlePalettes}
                    checked={dataCard.palette === '3'}
                  />

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--7"
                  ></label>

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--8"
                  ></label>

                  <label
                    htmlFor="radio3"
                    className="palette__sample palette__sample--9"
                  ></label>
                </div>
              </div>
            </section>
          </fieldset>

          {/* FORMULARIO RELLENA */}

          <fieldset className="fieldset">
            <legend
              className="legend js_fillLegend uppercase"
              id="fillLegend"
              title="Escribe tus datos"
              onClick={handleCollapsed}
            >
              <i className="far fa-keyboard legend__icon legend__icon--orange"></i>
              <span className="legend__text">Rellena</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowFill"></i>
            </legend>
            <div className="containerFill js_fill">
              <label className="label" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="field js_name"
                name="name"
                type="text"
                id="name"
                placeholder="P. ej. Usagi Tsukino"
                onChange={handleInput}
                value={dataCard.name}
              />

              <label className="label" htmlFor="job">
                Puesto
              </label>
              <input
                className="field js_job"
                name="job"
                type="text"
                id="job"
                placeholder="P. ej. Pretty Guardian"
                onChange={handleInput}
                value={dataCard.job}
              />

              <label className="label" htmlFor="">
                Imagen de perfil
              </label>
              <div className="component">
                <label
                  className="component__btnAddImage js__profile-trigger"
                  type="button"
                  htmlFor="photo"
                >
                  Añadir imagen
                </label>
                <input
                  className="action__hiddenField js__profile-upload-btn js_photo"
                  // type="file"
                  name="photo"
                  id="photo"
                  onChange={handleInput}
                  // value={dataCard.photo}
                />

                <div className="component__square js__profile-preview"></div>
              </div>

              <label className="label" htmlFor="email">
                E-mail
              </label>
              <input
                className="field js_email"
                name="email"
                type="email"
                id="email"
                placeholder="P. ej. rei-hino@sailor.mars"
                onChange={handleInput}
                value={dataCard.email}
              />

              <label className="label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="field js_phone"
                name="phone"
                type="tel"
                id="phone"
                placeholder="P. ej. 987 654 321"
                onChange={handleInput}
                value={dataCard.phone}
              />

              <label className="label" htmlFor="linkedin">
                LinkedIn
              </label>
              <input
                className="field js_linkedin"
                name="linkedin"
                type="text"
                id="linkedin"
                placeholder="P. ej. ami.mizuno"
                onChange={handleInput}
                value={dataCard.linkedin}
              />

              <label className="label" htmlFor="github">
                GitHub
              </label>
              <input
                className="field js_github"
                name="github"
                type="text"
                id="github"
                placeholder="P. ej. chibiusa"
                onChange={handleInput}
                value={dataCard.github}
              />
            </div>
          </fieldset>

          {/* FORMULARIO COMPARTE */}

          <fieldset className="fieldset">
            <legend
              className="legend js_shareLegend uppercase"
              id="shareLegend"
              title="¡Comparte tu tarjeta!"
              onClick={handleCollapsed}
            >
              <i className="fa-solid fa-share-nodes legend__icon legend__icon--orange"></i>
              <span className="legend__text">Comparte</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowShare rotate"></i>
            </legend>
            <div className="containerShare js_share">
              <button
                className="buttonCreateCard uppercase js_buttonCreateCard"
                onClick={handlelickCreateCard}
              >
                <i className="fa-regular fa-address-card buttonCreateCard__icon"></i>
                Crear tarjeta
              </button>

              <div className="containerDone js_containerDone ">
                <a href={`${apiData.cardURL}`}>{apiData.cardURL} </a>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <Footer logoSmall={logoSmall}/>
      <p id="bottom"></p>
    </>
  );
}

export default App;
