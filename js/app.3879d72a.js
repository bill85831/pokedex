(function(t){function e(e){for(var c,a,i=e[0],s=e[1],l=e[2],b=0,O=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&O.push(o[a][0]),o[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);u&&u(e);while(O.length)O.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},o={app:0},r=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/pokedex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"044a":function(t,e,n){},"190e":function(t,e,n){},"42fb":function(t,e,n){"use strict";n("c17d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"nav"},r=Object(c["h"])("Home"),a=Object(c["h"])(" | "),i=Object(c["h"])("pokedex");function s(t,e){var n=Object(c["A"])("router-link"),s=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",o,[Object(c["i"])(n,{to:"/"},{default:Object(c["G"])((function(){return[r]})),_:1}),a,Object(c["i"])(n,{to:"/pokedex"},{default:Object(c["G"])((function(){return[i]})),_:1})]),Object(c["i"])(s)],64)}n("9dbf");var l=n("6b0d"),u=n.n(l);const b={},O=u()(b,[["render",s]]);var f=O,j=n("6c02"),p=function(t){return Object(c["w"])("data-v-06f24768"),t=t(),Object(c["u"])(),t},d={id:"Home"},g={class:"content"},h=p((function(){return Object(c["g"])("h2",{class:"first"},"You can cheak every pokemon's information like type, ability, ... and so on.",-1)})),m=p((function(){return Object(c["g"])("h2",{class:"second"},"Let me show you pokedex!",-1)})),v=Object(c["h"])("Go To Pokedex");function k(t,e,n,o,r,a){var i=Object(c["A"])("router-link"),s=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",d,[Object(c["g"])("div",g,[h,m,Object(c["i"])(i,{to:{path:"/pokedex"},class:"link"},{default:Object(c["G"])((function(){return[v]})),_:1})])]),Object(c["i"])(s)],64)}var y={};n("9a05");const U=u()(y,[["render",k],["__scopeId","data-v-06f24768"]]);var w=U,_=function(t){return Object(c["w"])("data-v-56e7bfe2"),t=t(),Object(c["u"])(),t},x={class:"container"},C=_((function(){return Object(c["g"])("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"},null,-1)}));function P(t,e,n,o,r,a){var i=Object(c["A"])("pokelist"),s=Object(c["A"])("pokedetail");return Object(c["t"])(),Object(c["f"])("div",x,[C,Object(c["i"])(i,{imageUrl:r.imageUrl,apiUrl:r.apiUrl,onSetPokemonUrl:a.setPokemonUrl},null,8,["imageUrl","apiUrl","onSetPokemonUrl"]),r.showDetail?(Object(c["t"])(),Object(c["d"])(s,{key:0,pokemonUrl:r.pokemonUrl,imageUrl:r.imageUrl,onCloseDetail:a.closeDetail},null,8,["pokemonUrl","imageUrl","onCloseDetail"])):Object(c["e"])("",!0)])}n("b0c0");var S=function(t){return Object(c["w"])("data-v-1d9ae763"),t=t(),Object(c["u"])(),t},D={class:"searchbar"},A=S((function(){return Object(c["g"])("i",{class:"fas fa-search"},null,-1)})),I={class:"pokelist"},H=["onClick"],T=["src"],L={id:"scroll-trigger",ref:"infinitescrolltrigger"},z=S((function(){return Object(c["g"])("i",{class:"fas fa-spinner fa-pulse"},null,-1)})),E=[z];function G(t,e,n,o,r,a){return Object(c["t"])(),Object(c["f"])("div",null,[Object(c["g"])("div",D,[A,Object(c["H"])(Object(c["g"])("input",{type:"text",placeholder:"Search pokemon by No. or Name","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.searchvalue=t})},null,512),[[c["E"],r.searchvalue]])]),Object(c["g"])("div",I,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.pokeFilteredList,(function(t,e){return Object(c["t"])(),Object(c["f"])("article",{key:"poke"+e,onClick:function(e){return a.setPokemonUrl(t.url)}},[Object(c["g"])("img",{src:n.imageUrl+t.id+".png",width:"170",height:"170",alt:""},null,8,T),Object(c["g"])("h3",null," No. "+Object(c["C"])(t.id)+" "+Object(c["C"])(t.name),1)],8,H)})),128)),Object(c["g"])("div",L,E,512)])])}n("4de4"),n("d3b7"),n("caad"),n("2532"),n("159b"),n("ac1f"),n("1276");var M={props:["imageUrl","apiUrl"],data:function(){return{pokemons:[],nextUrl:"",currentUrl:"",searchvalue:""}},computed:{pokeFilteredList:function(){var t=this;return this.pokemons.filter((function(e){return(e.id+" "+e.name).toLowerCase().includes(t.searchvalue.toLowerCase())}))}},methods:{fetchData:function(){var t=this;fetch(this.currentUrl).then((function(t){if(200===t.status)return t.json()})).then((function(e){t.nextUrl=e.next,e.results.forEach((function(e){e.id=e.url.split("/").filter((function(t){return t})).pop(),t.pokemons.push(e)}))})).catch((function(t){console.log(t)}))},scrollTrigger:function(){var t=this,e=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio&&t.nextUrl&&t.next()}))}));e.observe(this.$refs.infinitescrolltrigger)},next:function(){this.currentUrl=this.nextUrl,this.fetchData()},setPokemonUrl:function(t){this.$emit("setPokemonUrl",t)}},created:function(){this.currentUrl=this.apiUrl,this.fetchData()},mounted:function(){this.scrollTrigger()}};n("cd47");const N=u()(M,[["render",G],["__scopeId","data-v-1d9ae763"]]);var $=N,F=(n("25f0"),n("d81d"),function(t){return Object(c["w"])("data-v-6e11612b"),t=t(),Object(c["u"])(),t}),J={class:"detail"},W={key:0,class:"detail-card"},B={key:0,class:"image"},R=["src"],V={key:1,class:"data-content"},X={class:"card-title"},Y={class:"property"},q=F((function(){return Object(c["g"])("div",{class:"left bold"},"Base Experience",-1)})),K={class:"right"},Q={class:"property"},Z=F((function(){return Object(c["g"])("div",{class:"left bold"},"Height",-1)})),tt={class:"right"},et={class:"property"},nt=F((function(){return Object(c["g"])("div",{class:"left bold"},"Weight",-1)})),ct={class:"right"},ot=F((function(){return Object(c["g"])("h3",null,"Types",-1)})),rt={class:"types"},at=F((function(){return Object(c["g"])("h3",null,"Abilities",-1)})),it={class:"abilities"},st={class:"right inactive"},lt=F((function(){return Object(c["g"])("h3",null,"Wild Hold Item",-1)})),ut={class:"HeldItem"},bt=F((function(){return Object(c["g"])("h3",null,"Species strength",-1)})),Ot={class:"stats"},ft={class:"base-stat"},jt={class:"bar-content"},pt={class:"bar-content"},dt={class:"bar-content"},gt={class:"bar-content"},ht={class:"bar-content"},mt={class:"bar-content"},vt={key:2},kt={key:1,class:"fas fa-spinner fa-pulse"};function yt(t,e,n,o,r,a){return Object(c["t"])(),Object(c["f"])("div",J,[r.show?(Object(c["t"])(),Object(c["f"])("div",W,[r.pokemon?(Object(c["t"])(),Object(c["f"])("div",B,[Object(c["g"])("img",{src:n.imageUrl+r.pokemon.id+".png",alt:""},null,8,R)])):Object(c["e"])("",!0),r.pokemon?(Object(c["t"])(),Object(c["f"])("div",V,[Object(c["g"])("h2",X,Object(c["C"])(r.pokemon.name),1),Object(c["g"])("div",Y,[q,Object(c["g"])("div",K,Object(c["C"])(r.pokemon.base_experience)+" XP",1)]),Object(c["g"])("div",Q,[Z,Object(c["g"])("div",tt,Object(c["C"])(r.pokemon.height/10)+" m",1)]),Object(c["g"])("div",et,[nt,Object(c["g"])("div",ct,Object(c["C"])(r.pokemon.weight/10)+" kg",1)]),ot,Object(c["g"])("div",rt,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(r.pokemon.types,(function(t,e){return Object(c["t"])(),Object(c["f"])("div",{class:"type",key:"value"+e},[Object(c["g"])("span",{class:Object(c["o"])(t.type.name)},Object(c["C"])(t.type.name),3)])})),128))]),at,Object(c["g"])("div",it,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(r.pokemon.abilities,(function(t,e){return Object(c["t"])(),Object(c["f"])("div",{class:"ability",key:"value"+e},Object(c["C"])(t.ability.name),1)})),128)),Object(c["g"])("div",st,Object(c["C"])(r.pokemon.moves.map((function(t){return" "+t.move.name})).toString())+" .",1)]),lt,Object(c["g"])("div",ut,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(r.pokemon.held_items,(function(t,e){return Object(c["t"])(),Object(c["f"])("div",{class:"item",key:"value"+e},Object(c["C"])(t.item.name),1)})),128))]),bt,Object(c["g"])("div",Ot,[Object(c["g"])("table",ft,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"HP : "+Object(c["C"])(r.pokemon.stats[0].base_stat),1),Object(c["g"])("td",jt,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[0].base_stat))},null,4)])]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"Atk : "+Object(c["C"])(r.pokemon.stats[1].base_stat),1),Object(c["g"])("td",pt,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[1].base_stat))},null,4)])]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"Def : "+Object(c["C"])(r.pokemon.stats[2].base_stat),1),Object(c["g"])("td",dt,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[2].base_stat))},null,4)])]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"SpA : "+Object(c["C"])(r.pokemon.stats[3].base_stat),1),Object(c["g"])("td",gt,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[3].base_stat))},null,4)])]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"SpD : "+Object(c["C"])(r.pokemon.stats[4].base_stat),1),Object(c["g"])("td",ht,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[4].base_stat))},null,4)])]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"SP : "+Object(c["C"])(r.pokemon.stats[5].base_stat),1),Object(c["g"])("td",mt,[Object(c["g"])("div",{style:Object(c["p"])(a.barStyle(r.pokemon.stats[5].base_stat))},null,4)])])])])])):(Object(c["t"])(),Object(c["f"])("h2",vt,"The pokemon was not found")),Object(c["g"])("button",{class:"close",onClick:e[0]||(e[0]=function(){return a.closeDetail&&a.closeDetail.apply(a,arguments)})},"Close")])):(Object(c["t"])(),Object(c["f"])("i",kt))])}var Ut={props:["pokemonUrl","imageUrl"],data:function(){return{show:!1,pokemon:{}}},methods:{fetchData:function(){var t=this;fetch(this.pokemonUrl).then((function(t){if(200===t.status)return t.json()})).then((function(e){console.log(e),t.pokemon=e,t.show=!0})).catch((function(t){console.log(t)}))},barStyle:function(t){return{width:"calc(100% * "+t/255+")",height:"20px","background-color":"rgb(214, 126, 126)"}},closeDetail:function(){this.$emit("closeDetail")}},created:function(){this.fetchData()}};n("42fb");const wt=u()(Ut,[["render",yt],["__scopeId","data-v-6e11612b"]]);var _t=wt,xt={data:function(){return{imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",apiUrl:"https://pokeapi.co/api/v2/pokemon/",pokemonUrl:"",showDetail:!1}},components:{pokelist:$,Pokedetail:_t},methods:{setPokemonUrl:function(t){this.pokemonUrl=t,this.showDetail=!0},closeDetail:function(){this.pokemonUrl="",this.showDetail=!1}}};n("7759");const Ct=u()(xt,[["render",P],["__scopeId","data-v-56e7bfe2"]]);var Pt=Ct,St=[{path:"",name:"Home",component:w},{path:"/pokedex",name:"pokedex",component:Pt}],Dt=Object(j["a"])({history:Object(j["b"])(),routes:St}),At=Dt;Object(c["c"])(f).use(At).mount("#app")},"63f7":function(t,e,n){},7759:function(t,e,n){"use strict";n("190e")},"9a05":function(t,e,n){"use strict";n("63f7")},"9dbf":function(t,e,n){"use strict";n("044a")},b306:function(t,e,n){},c17d:function(t,e,n){},cd47:function(t,e,n){"use strict";n("b306")}});
//# sourceMappingURL=app.3879d72a.js.map