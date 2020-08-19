(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){e.exports={City:"City__City___1gCuR",CityName:"City__CityName___1PLAd",WeatherDescription:"City__WeatherDescription___1pSfv",CityContainer:"City__CityContainer___WD35e",Temperature:"City__Temperature___25bsH",Button:"City__Button___1mL1Q",TempContainer:"City__TempContainer___2dQP3",TempCategories:"City__TempCategories___26M-c",Active:"City__Active___1JnRR",AddButton:"City__AddButton___l6MRr",MoreDetails:"City__MoreDetails___3WwG8",Dark:"City__Dark___IHCwo",Sunny:"City__Sunny___2C9k9",Stormy:"City__Stormy___3R6ho"}},19:function(e,t,a){e.exports={MyCities:"MyCities__MyCities___2QZv2",TitleContainer:"MyCities__TitleContainer___1uZ8x",Title:"MyCities__Title___2-5jm",WeatherCardContainer:"MyCities__WeatherCardContainer___3asc6",RemoveButton:"MyCities__RemoveButton___1sJPc",WeatherCard:"MyCities__WeatherCard___1Vm7Z"}},20:function(e,t,a){e.exports={Navbar:"Main__Navbar___NA36g",Title:"Main__Title___2SsnF",NavItemContainer:"Main__NavItemContainer___3Mggo",NavItem:"Main__NavItem___2oxEk",Active:"Main__Active___2KDcC"}},28:function(e,t,a){e.exports={CitySelector:"Home__CitySelector___3yhto",SelectContainer:"Home__SelectContainer___jQ3EN"}},29:function(e,t,a){e.exports={Login:"Login__Login___kkMYi",Form:"Login__Form___2EaYi",LoginButton:"Login__LoginButton___3WR1b"}},3:function(e,t,a){e.exports={CityDetailContainer:"CityDetail__CityDetailContainer___1jGuu",CityDetail:"CityDetail__CityDetail___2y0QB",Date:"CityDetail__Date___1W2Dd",MoreDesc:"CityDetail__MoreDesc___z1PF1",DescDetails:"CityDetail__DescDetails___14d2b",Labels:"CityDetail__Labels___2VIKT",Values:"CityDetail__Values___1puQa"}},47:function(e,t,a){e.exports={App:"App__App___1o-Fp","App-logo":"App__App-logo___3JCPt","App-header":"App__App-header___3iH8L","App-link":"App__App-link___13fTZ"}},49:function(e,t,a){e.exports=a(77)},58:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(25),r=a.n(s),c=a(13),l=a(21),o=a(46),m=(a(58),a(47)),p=a.n(m),u=a(24),d=a(10),_=a(11),y=a(14),C=a(12),h=a(15),v=a(20),f=a.n(v),g=a(28),b=a.n(g),E=a(34),D=a(16),T=a(1),N=a.n(T),O=Object(D.f)(Object(c.b)()((function(e){var t=Object(n.useState)("\xb0C"),a=Object(E.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(["\xb0C","K","\xb0F"]),l=Object(E.a)(c,1)[0],o=[N.a.Button],m=l.map((function(e){return s===e?o.push(N.a.Active):o=[N.a.Button],i.a.createElement("button",{key:e,className:o.join(" "),onClick:function(){return r(e)}},e)})),p=null,u=null,d=null;"\xb0C"===s?(p=e.data.main.temp-273.15,u=e.data.main.temp_min-273.15,d=e.data.main.temp_max-273.15):"K"===s?(p=e.data.main.temp,u=e.data.main.temp_min,d=e.data.main.temp_max):"\xb0F"===s&&(p=1.8*(e.data.main.temp-273.15)+32,u=1.8*(e.data.main.temp_min-273.15)+32,d=1.8*(e.data.main.temp_max-273.15)+32);var _=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(new Date).getDay()]+", "+(new Date).getHours()+":"+((new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes()),y=[N.a.City];return(new Date).getHours()>19||(new Date).getHours()<7?y.push(N.a.Dark):y.push(N.a.Sunny),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:N.a.CityContainer},i.a.createElement("div",{className:y.join(" ")},i.a.createElement("div",{className:N.a.CityHeader},i.a.createElement("p",{className:N.a.CityName},e.data.name),i.a.createElement("span",null,_)),i.a.createElement("div",{className:N.a.TempContainer},i.a.createElement("p",{className:N.a.Temperature},parseInt(p)," ",s),i.a.createElement("div",{className:N.a.WeatherDescription},i.a.createElement("span",{className:N.a.Description},e.data.weather[0].main),i.a.createElement("span",null,parseInt(d)," ",s,"/",parseInt(u)," ",s))),i.a.createElement("div",{className:N.a.TempCategories},"Tempature Type:",m))),i.a.createElement("p",{className:N.a.MoreDetails,onClick:function(){return e.history.push({pathname:"/city/"+e.data.name,state:{selectedCity:e.selectedCity}})}},"View More Details"),i.a.createElement("button",{className:N.a.AddButton,onClick:function(){return e.addCity(e.selectedCity)}},"Add ",e.data.name," to My Cities"))}))),j=a(9),w=a.n(j),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(i)))).onCitySelectionHandler=function(e){var t=e.target.value;w.a.get("http://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&APPID=60dfad51347e098c9a6b000ced44c353").then((function(e){var n={selectedCity:t,selectedCityData:e.data};a.props.onCitySelection(n)})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.props.allCities.map((function(e){var t=e.city+","+e.country;return i.a.createElement("option",{value:t,key:e.id},t)}));return i.a.createElement("div",{className:b.a.Home},i.a.createElement("div",{className:b.a.SelectContainer},i.a.createElement("label",{htmlFor:"cities"},"Choose your city:"),i.a.createElement("select",{id:"cities",ref:this.cityOptions,onChange:this.onCitySelectionHandler,className:b.a.CitySelector,value:this.props.selectedCity||""},i.a.createElement("option",null,"Nothing is selected"),t)),null!==this.props.selectedCity?i.a.createElement(O,{data:this.props.selectedCityData,selectedCity:this.props.selectedCity,addCity:function(t){return e.props.addCity(t)}}):null)}}]),t}(n.Component),M=Object(c.b)((function(e){return{allCities:e.home.allCities,selectedCity:e.home.selectedCity,selectedCityData:e.home.selectedCityData}}),(function(e){return{onCitySelection:function(t){return e({type:"ON_SELECT_CITY",payload:t})}}}))(S),A=a(19),k=a.n(A),H=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(i)))).state={citiesData:{},tempTypes:["\xb0C","K","\xb0F"],selectedTempType:"K",updatedFromStore:!1},a.getTemp=function(e){var t=e,n=a.state.selectedTempType;return"\xb0C"===n?t=e-273.15:"K"===n?t=e:"\xb0F"===n&&(t=1.8*(e-273.15)+32),t.toFixed(1)},a.tempTypeChangeHandler=function(e){a.setState({selectedTempType:e.target.innerHTML})},a}return Object(h.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=[k.a.WeatherCard];(new Date).getHours()>19||(new Date).getHours()<7?t.push(N.a.Dark):t.push(N.a.Sunny);var a="You haven't selected any cities";Object.keys(this.props.citiesData).length>0&&(a=Object.keys(this.props.citiesData).map((function(a){var n=e.getTemp(e.props.citiesData[a]);return i.a.createElement("div",{className:k.a.WeatherCardContainer,key:a},i.a.createElement("div",{className:t.join(" ")},i.a.createElement("p",null,a),i.a.createElement("p",null,n," ",e.state.selectedTempType)),i.a.createElement("button",{id:a,className:k.a.RemoveButton,onClick:function(){return e.props.removeCity(a)}},"Remove"))})));var n=[N.a.Button],s=this.state.tempTypes.map((function(t){return t===e.state.selectedTempType?n.push(N.a.Active):n=[N.a.Button],i.a.createElement("button",{key:t,className:n.join(" "),onClick:e.tempTypeChangeHandler},t)}));return i.a.createElement("div",{className:k.a.MyCities},i.a.createElement("div",{className:k.a.TitleContainer},i.a.createElement("p",{className:k.a.Title},"My Cities"),i.a.createElement("span",null,"Selected Temperature Type: "),s),a)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log(e),e.isAuthenticated||e.history.push("/login"),t}}]),t}(n.Component),I=Object(D.f)(Object(c.b)((function(e){return{savedCities:e.myCities.savedCities,citiesData:e.myCities.citiesData,isAuthenticated:e.login.isAuthenticated}}))(H)),P=a(3),x=a.n(P),F=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(i)))).state={data:{},tempTypes:["\xb0C","K","\xb0F"],selectedTempType:"\xb0C"},a.componentDidMount=function(){w.a.get("http://api.openweathermap.org/data/2.5/weather?q="+a.props.history.location.state.selectedCity+"&APPID=60dfad51347e098c9a6b000ced44c353").then((function(e){a.setState({data:e.data})})).catch((function(e){console.log(e)}))},a.getDateAndTime=function(){var e={},t=new Date,a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()]+","+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+" "+t.getFullYear(),n=t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes());return e.date=a,e.time=n,e},a.getTemperatures=function(e){var t={},n=e.main.temp,i=e.main.temp_min,s=e.main.temp_max,r=a.state.selectedTempType;return"\xb0C"===r?(n=e.main.temp-273.15,i=e.main.temp_min-273.15,s=e.main.temp_max-273.15):"K"===r?(n=e.main.temp,i=e.main.temp_min,s=e.main.temp_max):"\xb0F"===r&&(n=1.8*(e.main.temp-273.15)+32,i=1.8*(e.main.temp_min-273.15)+32,s=1.8*(e.main.temp_max-273.15)+32),t.temp=n.toFixed(1),t.temp_min=i.toFixed(1),t.temp_max=s.toFixed(1),t},a.selectTempTypeHandler=function(e){a.setState({selectedTempType:e.target.innerHTML})},a}return Object(h.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=[x.a.CityDetail],a=null,n=null;(new Date).getHours()>19||(new Date).getHours()<7?t.push(N.a.Dark):t.push(N.a.Sunny);var s=this.getDateAndTime(),r=Object.keys(this.state.data).length>0&&this.getTemperatures(this.state.data),c=this.state.tempTypes.map((function(t){var a=[N.a.Button];return e.state.selectedTempType===t?a.push(N.a.Active):a=[N.a.Button],i.a.createElement("button",{key:t,className:a.join(" "),onClick:e.selectTempTypeHandler},t)}));if(Object.keys(this.state.data).length>0){var l=new Date(1e3*this.state.data.sys.sunrise);a=l.getHours()+":"+(l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes());var o=new Date(1e3*this.state.data.sys.sunset);n=o.getHours()+":"+(o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes())}return i.a.createElement("div",{className:x.a.CityDetailContainer},i.a.createElement("div",{className:t.join(" ")},i.a.createElement("div",{className:N.a.CityHeader},i.a.createElement("p",{className:N.a.CityName},this.props.match.params.city),i.a.createElement("span",{className:x.a.Date},s.date),i.a.createElement("span",{className:x.a.Time},s.time)),Object.keys(this.state.data).length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:N.a.TempContainer},i.a.createElement("p",{className:N.a.Temperature},parseInt(r.temp)," ",this.state.selectedTempType),i.a.createElement("div",{className:N.a.WeatherDescription},i.a.createElement("span",{className:N.a.Description},this.state.data.weather[0].main),i.a.createElement("span",null,parseInt(r.temp_max)," ",this.state.selectedTempType,"/",parseInt(r.temp_min)," ",this.state.selectedTempType))),i.a.createElement("div",{className:N.a.TempCategories},"Tempature Type:",c),i.a.createElement("hr",null),i.a.createElement("div",{className:x.a.MoreDesc},i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Visibility"),i.a.createElement("p",{className:x.a.Values},this.state.data.visibility/1e3," KM")),i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Wind Speed"),i.a.createElement("p",{className:x.a.Values},this.state.data.wind.speed," km/h")),i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Pressure"),i.a.createElement("p",{className:x.a.Values},this.state.data.main.pressure," hPa")),i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Humidity"),i.a.createElement("p",{className:x.a.Values},this.state.data.main.humidity," %")),i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Sunrise"),i.a.createElement("p",{className:x.a.Values},a)),i.a.createElement("div",{className:x.a.DescDetails},i.a.createElement("label",{className:x.a.Labels},"Sunset"),i.a.createElement("p",{className:x.a.Values},n))))))}}]),t}(n.Component),L=a(29),B=a.n(L),V=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).state={usernameValue:"",passwordValue:""},a.usernameChangeHandler=function(e){a.setState({usernameValue:e.target.value})},a.passwordChangeHandler=function(e){a.setState({passwordValue:e.target.value})},a.usernameRef=i.a.createRef(),a.passwordRef=i.a.createRef(),a}return Object(h.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:B.a.Login},i.a.createElement("p",{className:k.a.Title},"Log in to your account"),i.a.createElement("div",{className:B.a.Form},i.a.createElement("input",{type:"text",value:this.state.usernameValue,onChange:this.usernameChangeHandler}),i.a.createElement("input",{type:"password",value:this.state.passwordValue,onChange:this.passwordChangeHandler}),i.a.createElement("button",{className:B.a.LoginButton},"Login")))}}]),t}(n.Component),W=a(22),R=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).componentDidMount=function(){w.a.get("https://weather-app-487b0.firebaseio.com/.json").then((function(e){a.props.initCities({cities:e.data.cities}),a.props.initSavedCities({savedCities:e.data.savedCities})})).catch((function(e){console.log(e)}))},a.addCityHandler=function(e){var t=Object(u.a)(a.props.savedCities);t.push(e),w.a.put("https://weather-app-487b0.firebaseio.com/savedCities.json",t).then((function(e){a.props.initSavedCities({savedCities:t})})).catch((function(e){console.log(e)}))},a.removeCityHandler=function(e){var t=Object(u.a)(a.props.savedCities);t=t.filter((function(t){return t.split(",")[0]!==e})),w.a.put("https://weather-app-487b0.firebaseio.com/savedCities.json",t).then((function(e){a.props.initSavedCities({savedCities:t})})).catch((function(e){console.log(e)}))},a.cityOptions=i.a.createRef(),a.state={cities:[],selectedCity:null,selectedCityData:{}},a}return Object(h.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:f.a.Navbar},i.a.createElement("p",{className:f.a.Title},"My Weather Application"),i.a.createElement("div",{className:f.a.NavItemContainer},i.a.createElement(W.b,{exact:!0,to:"/",activeClassName:f.a.Active},i.a.createElement("div",{className:f.a.NavItem},"Home")),i.a.createElement(W.b,{to:"/mycities",activeClassName:f.a.Active},i.a.createElement("div",{className:f.a.NavItem},"My Cities")))),i.a.createElement(D.c,null,i.a.createElement(D.a,{path:"/login",component:V}),i.a.createElement(D.a,{path:"/mycities",component:function(){return i.a.createElement(I,{removeCity:e.removeCityHandler})}}),i.a.createElement(D.a,{path:"/city/:city",component:F}),i.a.createElement(D.a,{path:"/",component:function(){return i.a.createElement(M,{addCity:e.addCityHandler})}})))}}]),t}(n.Component),K=Object(c.b)((function(e){return{savedCities:e.myCities.savedCities}}),(function(e){return{initCities:function(t){return e({type:"INIT_CITIES",payload:t})},initSavedCities:function(t){return e((a=t,function(e){var t={},n=[],i=Object(u.a)(a.savedCities),s=!0,r=!1,c=void 0;try{for(var l,o=i[Symbol.iterator]();!(s=(l=o.next()).done);s=!0){var m="http://api.openweathermap.org/data/2.5/weather?q="+l.value+"&APPID=60dfad51347e098c9a6b000ced44c353";n.push(w.a.get(m))}}catch(p){r=!0,c=p}finally{try{s||null==o.return||o.return()}finally{if(r)throw c}}w.a.all(n).then((function(n){n.forEach((function(e){t[e.data.name]=e.data.main.temp})),e(function(e){return{type:"GET_SAVED_CITIES",payload:e}}({savedCities:a.savedCities,citiesData:t}))}))}));var a}}}))(R);var J=function(){return i.a.createElement("div",{className:p.a.App},i.a.createElement(W.a,null,i.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(27);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(Q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z={allCities:[],selectedCity:null,selectedCityData:{}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_CITIES":var a=G({},e);return a.allCities=t.payload.cities,a;case"ON_SELECT_CITY":var n=G({},e);return n.selectedCity=t.payload.selectedCity,n.selectedCityData=t.payload.selectedCityData,n;default:return e}};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(Q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={savedCities:[],citiesData:{}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SAVED_CITIES":var a=$({},e);return a.savedCities=t.payload.savedCities,a.citiesData=t.payload.citiesData,a;default:return e}},ee={isAuthenticated:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ae=l.d,ne=Object(l.c)({home:q,myCities:X,login:te}),ie=Object(l.e)(ne,ae(Object(l.a)(o.a))),se=i.a.createElement(c.a,{store:ie},i.a.createElement(J,null));r.a.render(se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.df8b4dcf.chunk.js.map