import "./Home.scss";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import gorBorImg from "../../resources/images/gorBorImg.png";
import akvilonImg from "../../resources/images/akvilonImg.jpg";
import miassImg from "../../resources/images/miassImg.jpg";
import React, { useState } from "react";
import {
  YMaps,
  GeoObject,
  Map,
  FullscreenControl,
} from "@pbe/react-yandex-maps";

const Home = ({ cityName, regionName }) => {
  const gorBorMapState = {
    center: [55.158574, 61.334279],
    zoom: 12,
  };
  const gorBorPath = {
    type: "LineString",
    coordinates: [
      [55.191584, 61.281416],
      [55.170153, 61.308813],
      [55.167159, 61.302537],
      [55.159956, 61.302656],
      [55.157132, 61.30684],
      [55.153624, 61.318945],
      [55.150286, 61.318796],
      [55.149173, 61.319842],
      [55.147239, 61.329585],
      [55.141813, 61.329227],
      [55.140015, 61.330721],
      [55.136077, 61.326537],
      [55.124346, 61.328629],
      [55.125716, 61.331618],
      [55.125648, 61.33374],
      [55.123935, 61.335832],
      [55.123678, 61.338372],
      [55.123407, 61.345442],
      [55.125886, 61.348987],
      [55.126259, 61.355101],
      [55.126836, 61.355322],
      [55.127097, 61.357079],
      [55.127899, 61.358022],
      [55.132207, 61.360572],
      [55.133847, 61.362263],
      [55.135871, 61.360951],
      [55.140603, 61.348943],
      [55.155245, 61.359878],
      [55.164571, 61.358304],
      [55.16791, 61.344593],
      [55.168338, 61.345116],
      [55.168629, 61.343741],
      [55.170612, 61.342044],
      [55.170612, 61.342044],
      [55.173108, 61.340535],
      [55.174368, 61.339377],
      [55.174666, 61.335604],
      [55.176974, 61.333015],
      [55.188989, 61.332394],
      [55.188586, 61.307383],
      [55.185864, 61.299002],
      [55.19202, 61.290961],
      [55.19215, 61.285638],
      [55.191761, 61.28258],
      [55.191598, 61.281381],
    ],
  };
  const gorBorText =
    "Начало маршрута - ТК Елки - Мелькомбинат - Городской бор - карьер Сопливчик - Голубой карьер - Изумрудный карьер - Шершневское вдх - ТК Елки";
  const akvilonMapState = {
    center: [55.116855, 61.210655],
    zoom: 11,
  };
  const akvilonPath = {
    type: "LineString",
    coordinates: [
      [55.187621, 61.300699],
      [55.187858, 61.300386],
      [55.187566, 61.2997],
      [55.188209, 61.298822],
      [55.187462, 61.297089],
      [55.190184, 61.293396],
      [55.186965, 61.28618],
      [55.183271, 61.291218],
      [55.182586, 61.291366],
      [55.178059, 61.282104],
      [55.176685, 61.280181],
      [55.175364, 61.279783],
      [55.175737, 61.270095],
      [55.179467, 61.255209],
      [55.179955, 61.253532],
      [55.182776, 61.246888],
      [55.18857, 61.23477],
      [55.194221, 61.213975],
      [55.194659, 61.206584],
      [55.194383, 61.201335],
      [55.191362, 61.179199],
      [55.191475, 61.174005],
      [55.19297, 61.160564],
      [55.193671, 61.151491],
      [55.194889, 61.144009],
      [55.197479, 61.137512],
      [55.197777, 61.136109],
      [55.197724, 61.134788],
      [55.197364, 61.133537],
      [55.19647, 61.132236],
      [55.195987, 61.131825],
      [55.186061, 61.126913],
      [55.184967, 61.126535],
      [55.183792, 61.126559],
      [55.180049, 61.127502],
      [55.179252, 61.127479],
      [55.17136, 61.124221],
      [55.163582, 61.120154],
      [55.144993, 61.095358],
      [55.137748, 61.082803],
      [55.134071, 61.077881],
      [55.133447, 61.076603],
      [55.132661, 61.073612],
      [55.132304, 61.060341],
      [55.130484, 61.053274],
      [55.126717, 61.048165],
      [55.122968, 61.046888],
      [55.121238, 61.047262],
      [55.106551, 61.052046],
      [55.100013, 61.055909],
      [55.081464, 61.08412],
      [55.077175, 61.088855],
      [55.056972, 61.102252],
      [55.049389, 61.116707],
      [55.044702, 61.124059],
      [55.028244, 61.142704],
      [55.016591, 61.149377],
      [55.007803, 61.157311],
      [55.005772, 61.161293],
      [55.005081, 61.167322],
      [55.008223, 61.213653],
      [55.011439, 61.211764],
      [55.014763, 61.212496],
    ],
  };
  const akvilonText =
    "Автомобильный маршрут из челябинска в этнический центр народов севера и ездового собаководства «Аквилон»";

  const miassMapState = {
    center: [55.140677, 61.358172],
    zoom: 12,
  };
  const miassPath = {
    type: "LineString",
    coordinates: [
      [55.124689, 61.327508],
      [55.124573, 61.329264],
      [55.125653, 61.330857],
      [55.125636, 61.333543],
      [55.124741, 61.336587],
      [55.134466, 61.344207],
      [55.135528, 61.342996],
      [55.136231, 61.343482],
      [55.138596, 61.347363],
      [55.146988, 61.353928],
      [55.147182, 61.353945],
      [55.147196, 61.354087],
      [55.155083, 61.360201],
      [55.156196, 61.359606],
      [55.157956, 61.35919],
      [55.15842, 61.358982],
      [55.158877, 61.359336],
      [55.16422, 61.358959],
      [55.163071, 61.363725],
      [55.163346, 61.37161],
      [55.162414, 61.37355],
    ],
  };
  const miassText =
    "Парк с аттракционами в сосновом бору, где проводятся фестивали, концерты и кинопоказы.";
  const pustoPath = {
    type: "LineString",
    coordinates: [[0, 0]],
  };
  const defaultMapState = {
    center: [55.159901, 61.402547],
    zoom: 12,
  };
  const [path, setPath] = useState(pustoPath);
  const [description, setDescription] = useState("");
  const [mapState, setMapState] = useState(defaultMapState);

  const changePath = (obj) => {
    // obj.currentTarget.style.border = "1px solid red";
    switch (obj.currentTarget.id) {
      case "gorBor":
        // document.getElementById("gorBor").style.border = "1px solid red";
        setDescription(gorBorText);
        setMapState(gorBorMapState);
        setPath(gorBorPath);
        break;
      case "akvilon":
        setDescription(akvilonText);
        setMapState(akvilonMapState);
        setPath(akvilonPath);
        break;
      case "miass":
        setDescription(miassText);
        setMapState(miassMapState);
        setPath(miassPath);
        break;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="main_container">
          <div className="main_text">
            <h1 className="main_text_city">{cityName}</h1>
            <h2 className="main_text_region">{regionName}</h2>
          </div>
          <div className="main_map">
            <div className="main_map_map">
              <YMaps>
                <Map
                  className="main_map_map_map"
                  state={mapState}
                  defaultState={defaultMapState}
                >
                  <FullscreenControl />
                  <GeoObject
                    geometry={path}
                    options={{
                      geodesic: true,
                      strokeWidth: 3,
                      strokeColor: "#F008",
                    }}
                  />
                </Map>
              </YMaps>

              <div className="main_map_map_text">
                Город Челябинск основан в сентябре 1736г. на реке Миасс, город
                находится в азиатской части Южного Урала по берегам реки Миасс.
                Климат в городе умеренно-континентальный, зима продолжается с
                ноября-март, а лето непродолжительное, но жаркое и дождливое.
                Площадь города приблизительно пятьдесят тысяч гектаров.
              </div>
            </div>
            <div className="main_map_routes">
              <div className="main_map_routes_frame">
                <button className="main_map_routes_frame_text">Маршруты</button>
              </div>
              <div className="main_map_routes_cards">
                <div id="gorBor" onClick={(obj) => changePath(obj)}>
                  <Card
                    cardName="Городской бор"
                    distance="25,8 км"
                    transportName="Велосипед"
                    imgSrc={gorBorImg}
                  />
                </div>
                <div id="akvilon" onClick={(obj) => changePath(obj)}>
                  <Card
                    cardName="Аквилон"
                    distance="48,3 км"
                    transportName="Машина"
                    imgSrc={akvilonImg}
                  />
                </div>
                <div id="miass" onClick={(obj) => changePath(obj)}>
                  <Card
                    cardName="Парк Гагарина"
                    distance="16,3 км"
                    transportName="Велосипед"
                    imgSrc={miassImg}
                  />
                </div>
              </div>
              <div className="main_map_routes_text">{description}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
