var M=Object.defineProperty,U=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))X.call(t,a)&&w(e,a,t[a]);if(L)for(var a of L(t))B.call(t,a)&&w(e,a,t[a]);return e},g=(e,t)=>U(e,G(t));import{p as z,e as $,t as y,n as A,s as h,d as N,a as T,b as f,W as H,c as W,f as K,l as x,g as J,h as d,i as Y}from"./vendor.621e38c1.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};Q();String.prototype.compress=function(e){e=e===!0;var t,a={},s=this,n,i,o="",r=[],l="",b=256;for(t=0;t<256;t+=1)a[String.fromCharCode(t)]=t;for(t=0;t<s.length;t+=1)n=s.charAt(t),i=o+n,a.hasOwnProperty(i)?o=i:(r.push(a[o]),l+=String.fromCharCode(a[o]),a[i]=b++,o=String(n));return o!==""&&(r.push(a[o]),l+=String.fromCharCode(a[o])),e?r:l};String.prototype.decompress=function(){var e,t=[],a=[],s=this,n,i,o,r="",l=256;for(e=0;e<256;e+=1)a[e]=String.fromCharCode(e);if(s&&typeof s=="string"){for(e=0;e<s.length;e+=1)t.push(s[e].charCodeAt(0));s=t,t=null}for(n=String.fromCharCode(s[0]),i=n,e=1;e<s.length;e+=1){if(o=s[e],a[o])r=a[o];else if(o===l)r=n+n.charAt(0);else return null;i+=r,a[l++]=n+r.charAt(0),n=r}return i};const Z=()=>["createObject","currentItem","deleteItem","deleteObject","executeNode","findObject","get","getCollection","getContents","getCurrentItem","getItem","getText","hasSomething","loadAll","loadFromJson","loadFromJsonArray","moveFirst","moveLast","moveNext","movePrev","msgBox","msgBoxWithSound","pickFile","save","setText","sleep","startBrowse","startCamera","startGps","startGpsV1","startGpsV2"];let v;const ee=["body","expression","declarations","init","callee","object","argument","arguments","right"],te=()=>v=Z(),ne=new DOMParser;function ae(e,t){try{if(!t)return e;ne.parseFromString(`<root>${e}</root>`,"text/xml").querySelectorAll("action > script").forEach(s=>e=e.replace(s.textContent,`
`+R(s.textContent)))}catch{}finally{return e}}function oe(e,t){try{return t?(te(),R(e)):e}catch{return e}}function R(e){try{const t=e;let a=t;try{t.match(/'([^']+)'/).forEach(o=>{a=a.replace(o,o.split(`
`).join("~~"))})}catch{}const s=z(a,{ecmaVersion:2022}),n=(o,r,l=!1)=>{var D,I,P,j;((D=o.type)==null?void 0:D.includes("Function"))&&r.push(o),ee.forEach(u=>{!o[u]||n(o[u],r,l)}),r=r.filter(u=>u!==o),o instanceof Array&&o.forEach(u=>{n(u,r,l)});const b=((I=o.callee)==null?void 0:I.name)||((j=(P=o.callee)==null?void 0:P.property)==null?void 0:j.name);if(!(!b||!v.includes(b)))if(l){if(r.length===0)return;const{name:u}=r[0].id;v.includes(u)||v.push(u)}else{const u=m({},o);o.type="AwaitExpression",o.argument=u,r.forEach(k=>k.async=!0)}};let i;do i=v.length,s.body.forEach(o=>n(o,[],!0));while(i!==v.length);return s.body.forEach(o=>n(o,[])),$.generate(s)}catch{return""}}var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,p=(e,t,a,s)=>{for(var n=s>1?void 0:s?ie(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&se(t,a,n),n};let c=class extends h{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:5},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,a,s,n,i,o,r,l]=e.split(e.includes("%7C")?"%7C":"|");if(t&&(this.xmlString=N(t).decompress()),a&&(this.cssString=N(a).decompress()),s&&(this.jsString=N(s).decompress()),n)try{this.settings.resolutionWidth=Number(n)}catch{}i&&(this.settings.resolutionHeight=Number(i)),o&&(this.settings.webLayout=N(o.decompress())),r&&(this.settings.scaleFontsize=r),l&&(this.settings.fontFactor=Number(l))}catch{}}reloadPreview(){var a;this.updateUrl(!0);const e=document.querySelector("xone-preview");e&&((a=e.parentElement)==null||a.removeChild(e));const t=document.getElementById("editor-panel");t.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(!1),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?2500:0))}updateUrl(e){const{resolutionWidth:t,resolutionHeight:a,webLayout:s,scaleFontsize:n,fontFactor:i}=this.settings,o=oe(this.jsString,e),r=ae(this.xmlString,e);let l=`${T(r.compress())}|${T(this.cssString.compress())}|${T(o.compress())}`;l+=`|${t.toString()}|${a.toString()}|${T(s.toString().compress())}`,l+=`|${n}|${i}`,e?this.urlParam=l:window.location.hash=l}render(){return f`
			<div class="main-layout">
				<!-- XOne image -->
				<div style="position:absolute;z-index:1;bottom:25px;left:100px;opacity:.2;">
					<img height="25" src="https://xone.es/wp-content/uploads/byxone-bl-1.png" />
				</div>
				<!-- aside menu -->
				<aside>
					<button @click=${()=>this.isSettingsOpened=!1}>
						<img src="/playground-xone/assets/editor.png" width="32" />
					</button>
					<div class="expand"></div>
					<a .href=${`https://mrscolo.github.io/xone-framework/#/preview?v=${this.urlParam}`} target="_blank">
						<img src="/playground-xone/assets/share.png" width="32" />
					</a>
					<button @click=${()=>this.isSettingsOpened=!this.isSettingsOpened}>
						<img src="/playground-xone/assets/setting.png" width="32" />
					</button>
				</aside>
				<!-- settings panel -->
				${this.isSettingsOpened?f`
								<xone-settings
									.onUpdate=${e=>{this.settings=m({},e),this.updateUrl(!1),this.reloadPreview()}}
									.settings=${this.settings}
									.isVisible=${this.isSettingsOpened}
								></xone-settings>
						  `:""}
				<!-- split panels -->
				<sp-split-view resizable primary-min="200">
					
					<!-- editors panel -->
					<div class="panel">
						<!-- editors panel tabs -->
						<sp-tabs selected="1" size="m">
							<sp-tab label="Xne" value="1"></sp-tab>
							<sp-tab label="Style" value="2"></sp-tab>
							<sp-tab label="JavaScript" value="3"></sp-tab>
							<!-- Xne editor -->
							<sp-tab-panel value="1">
								<code-editor type="xml" editorValue=${this.xmlString} .onUpdate=${e=>this.xmlString=e}></code-editor>
							</sp-tab-panel>
							<!-- Js editor -->
							<sp-tab-panel value="2">
								<code-editor type="css" editorValue=${this.cssString} .onUpdate=${e=>this.cssString=e}></code-editor>
							</sp-tab-panel>
							<!-- Css editor -->
							<sp-tab-panel value="3">
								<code-editor type="javascript" editorValue=${this.jsString} .onUpdate=${e=>this.jsString=e}>
							</sp-tab-panel>
						</sp-tabs>
					</div>
					<!-- preview  panel -->
					<div id="editor-panel" class="panel"></div>
				</sp-split-view>
			</div>
		`}};p([y()],c.prototype,"xmlString",2);p([y()],c.prototype,"cssString",2);p([y()],c.prototype,"jsString",2);p([y()],c.prototype,"urlParam",2);p([y()],c.prototype,"settings",2);p([y()],c.prototype,"isSettingsOpened",2);c=p([A("xone-app")],c);var re=`<?xml version="1.0" encoding="utf-8" ?>
<!--Created with Liquid XML Studio Developer Bundle Edition (Trial) (http://www.liquid-technologies.com)-->
<xs:schema xmlns="http://www.cgsoft.es/schema/"
           attributeFormDefault="unqualified"
           elementFormDefault="qualified"
           targetNamespace="http://www.cgsoft.es/schema/"
           xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <!-- TIPOS DE DATOS -->
  <xs:simpleType name="ROUND">
    <xs:restriction base="xs:unsignedByte">
      <xs:enumeration value="1">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Redondea directamente al mayor
            <xs:Attribute value="bgcolor"
                          permits="false" />
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="2">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Redondea directamente al menor
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="3">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Redondea a donde le da la gana
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="VISIBLEDATA">
    <xs:restriction base="xs:unsignedByte">
      <xs:enumeration value="0">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            No visible en ning\xFAn modo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="1">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="2">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Content
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="3">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n y Content
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="4">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Lista
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="5">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n y Lista
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="6">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Content y Lista
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="7">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n, Content y Lista
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="8">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="9">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="10">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Content y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="11">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n, Content y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="12">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Lista y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="13">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n, Lista y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="14">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Content, Lista y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="15">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visible en modo Edici\xF3n, Content, Lista y Combo
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="VALUERULE">
    <xs:restriction base="xs:string">
      <xs:enumeration value="eof">
      </xs:enumeration>
      <xs:enumeration value="neof">
      </xs:enumeration>
      <xs:enumeration value="false">
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="VALUESCREENORIENTATION">
    <xs:restriction base="xs:string">
      <xs:enumeration value="landscape">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Modo apaisado
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="portrait">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Modo vertical
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="TYPEDATA">
    <xs:restriction base="xs:string">
      <xs:enumeration value="T">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo texto___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="D">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo fecha___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo numerico entero, sin decimales___ Si se pone con un numero despues de la N, se mostrar\xE1n los decimales que se digan___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="NM">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad monetaria___ Hay que configurar otros apartados para que esto funcione___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N1">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con 1 decimal___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N2">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con dos decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N3">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con tres decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N4">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con CUATRO decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N5">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con CINCO decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N6">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con seis decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N7">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con SIETE decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="N8">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valor numerico expresando una cantidad con ocho decimales___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="X">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo texto, que trata su valor como una clave, por lo que se muestran asteriscos___ El valor del mismo se guarda encriptado en la base de datos___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="Z">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Posicion de un listado de detalles o sublistado___ Mostrara una coleccion objetos relacionados con la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="IMG">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Posicion de un listado de detalles o sublistado___ Mostrara una coleccion objetos relacionados con la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="PH">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Posicion de un listado de detalles o sublistado___ Mostrara una coleccion objetos relacionados con la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TD">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Fecha en formato texto___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TT">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Hora en formato texto___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TN">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            NIF/CIF en modo texto___ Mostrara mensajes de error si el valor no es correcto___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TC">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo de cuenta corriente___ Contiene un valor de 20 digitos de una cuenta bancaria___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TB">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo de cuenta contable___ Pondra tantos ceros como hagan falta___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TW">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Dia de la semana___ Se pone un numero entre 1 y 7, y se guarda ese valor en base de datos, pero se muestra como dia de la semana___ (1 lunes)___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="NC">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Check___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="TL">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Etiqueta___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="B">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            BOTON
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="DT">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Date Time.
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="AT">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo Attach.
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="WEB">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tipo WEB.
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="PROGIDATA">
    <xs:restriction base="xs:string">
      <!--
      <xs:pattern value="[aA][sS][dD][aA][tT][aA][.][cC][aA][sS][bB][aA][sS][iI][cC][dD][aA][tT][aA][oO][bB][jJ]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][uU][sS][eE][rR]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][eE][mM][pP][rR][eE][sS][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][mM][oO][nN][eE][dD][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][fF][aA][cC][tT][uU][rR][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][aA][lL][mM][aA][cC][eE][nN]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][cC][aA][tT][eE][gG]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][aA][rR][tT][iI][cC][uU][lL][oO]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][tT][iI][pP][oO][dD][oO][cC]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][sS][uU][mM][iI][nN][iI][sS][tT]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][tT][iI][pP][oO][iI][vV][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][tT][iI][cC][kK][eE][tT]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][tT][aA][rR][iI][fF][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][dD][eE][tT][tT][aA][rR][iI][fF][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][sS][tT][oO][cC][kK]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][sS][eE][rR][iI][eE]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][rR][eE][mM][eE][sS][aA]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][rR][eE][cC][iI][bB][oO]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][dD][eE][tT][aA][lL][lL][eE]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][fF][oO][rR][mM][aA][pP][aA][gG][oO]|[pP][aA][gG][oO]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][eE][sS][tT][aA][dD][oO]|[cC][gG][sS][bB][aA][sS][iI][cC][mM][fF][gG][.][cC][gG][sS][mM][fF][gG][oO][rR][dD][eE][rR]|[aA][sS][gG][eE][sS][tT][iI][oO][nN][.][cC][aA][sS][cC][oO][nN][cC][eE][pP][tT][oO]">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            ASData.CASBasicDataObj: Es el servidor de objetos basico___ Permite crear, destruir y atender eventos basicos en una colecci\xF3n___
          </xs:documentation>
        </xs:annotation>
      </xs:pattern>
      -->
      <!--<xs:enumeration value="ASGestion.CASEmpresa">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
			Servidor de objetos para consumir empresas, sus propiedades, eventos y acciones___
		  </xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASUser">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto para usuarios___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASFactura">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos de Documentos Factura___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASDetalle">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos de Detalles de Documentos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASArticulo">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Articulos de venta___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASEstado">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Estado de documentos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASFormaPago">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Formas de Pago___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASMoneda">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Moneda___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASSerie">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Serie de Documentos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASCateg">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Categoria de Articulos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASTipoIVA">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Tipo de IVA___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASRecibo">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Recibos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASRemesa">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Remesas___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASTipoDoc">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos de Documento___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASDetTarifa">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Detalles de Tarifas___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASTarifa">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Tarifas___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASCaja">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Cajas y Bancos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASCartera">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos de Carteras___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>
            <xs:enumeration value="ASGestion.CASStock">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
		  Servidor de objeto Tipos Stock de Articulos___
		</xs:documentation>
                </xs:annotation>
            </xs:enumeration>-->
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="APPLOADNAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Visual Basic Script">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Indica que la propiedad se va a una nueva linea___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="APPLOADPROGID">
    <xs:restriction base="xs:string">
      <xs:enumeration value="VBScript">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Indica que la propiedad se va a una nueva linea___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="ACTIONCREATENAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="setval">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Asigna un valor directamente al campo definido
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="mapval">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Realiza un mapeo de una propiedad llamando a una propiedad de otra coleccion
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="setfldval">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Valido para colecciones tipo content___ Asigna un valor directamente al campo definido trayendo de la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="generate">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Genera el valor haciendo una llamada a la base datos con un SQL
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="runscript">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="runscriptBB">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script en Black Berry
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="ACTIONINSERTNAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="runscript">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="link">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Realiza un linkado entre la cabecera y las lineas
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="ACTIONEXECUTENAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="runscript">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="Inform">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Realiza un linkado entre la cabecera y las lineas
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="ACTIONMETHODNAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="ExecuteNode">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="ACTIONMAINTENANCETYPE">
    <xs:restriction base="xs:string">
      <xs:enumeration value="runscript">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="runscriptBB">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Permite lanzar un script en Black Berry
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="MAINTENANCEPERIOD">
    <xs:restriction base="xs:string">
      <xs:enumeration value="s">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Segundos
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="X">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Minutos
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="H">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Horas
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="D">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Dias
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="LANGUAGESCRIPT">
    <xs:restriction base="xs:string">
      <xs:pattern value="[vV][bB][sS][cC][rR][iI][pP][tT]|[bB][bB][sS][cC][rR][iI][pP][tT]|[jJ][aA][vV][aA][sS][cC][rR][iI][pP][tT]">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:pattern>
      <!--<xs:enumeration value="BBScript">
                <xs:annotation>
                    <xs:documentation xml:lang="es">
						Xone Script para BlackBerry
					</xs:documentation>
                </xs:annotation>
            </xs:enumeration>-->
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="PROGIDDISPATCH">
    <xs:restriction base="xs:string">
      <xs:enumeration value="CGSGestionCE___CGSGestionCEHelper">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="HELPERNAME">
    <xs:restriction base="xs:string">
      <xs:enumeration value="CalculateTotal">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="ApplyRates">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="ApplyOffer">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="CalculateTotalDoc">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="SearchComis">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="CalculateTotalIVA">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="CalcularTotal">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="COMID">
    <xs:restriction base="xs:string">
      <xs:enumeration value="500">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="501">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="502">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="503">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="504">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="505">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="506">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Visual Basic Script
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="MACROVALUES">
    <xs:restriction base="xs:string">
      <xs:enumeration value="##ID##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por ID del objeto que se encuentra abierto
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##FLD##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Se utiliza en el atributo oper, y toma el valor del campo que hay en el atributo name, que es el campo por lo que vamos a hacer la comsulta
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##FTVAL##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Se utiliza en el oper, y es para la busqueda de fechas, es para los menores igual al valor introducido
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##FFVAL##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Se utiliza en el oper, y es para la busqueda de fechas, para los mayores igual al valor introducido.
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##LASTMONTHDAY##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Toma como valor el ultimo dia del mes
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##FIRSTMONTHDAY##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Toma como valor el primer dia del mes
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##BIT##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Coge el bit necesario. Solamente puede ser utilizada en el framework de PC
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##TODAY##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por la fecha del dia
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##NOW##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por la fecha y hora del dia
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##ENTID##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por IDEMPRESA del usuario que est\xE1 logueado
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##CURRID##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por IDMONEDA del usuario que est\xE1 logueado
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##USERID##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por IDUSUARIO del usuario que est\xE1 logueado
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##PREF##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por el prefijo definido en el nodo app prefix
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
      <xs:enumeration value="##VAL##">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            sustituye la macro por el valor que se mete en campo al hacer el asfiter
          </xs:documentation>
        </xs:annotation>
      </xs:enumeration>
    </xs:restriction>
  </xs:simpleType>
  <!-- FIN TIPOS DE DATOS -->
  <!--  EJEMPLO PARA USAR NODOS ANY ...
<xs:any namespace='##local'
             minOccurs='0' maxOccurs='unbounded'
             processContents='skip'/>        
  
  -->
  <!--NODO FRAME-->
  <xs:element name="frame">
    <xs:complexType>
      <xs:sequence>
        <xs:choice maxOccurs="unbounded">
          <xs:element ref="prop"
                 maxOccurs="unbounded" />
          <xs:element ref="contents"
                 minOccurs="0"
                 maxOccurs="unbounded" />
          <xs:element ref="frame"
                 minOccurs="0"
                 maxOccurs="unbounded" />
        </xs:choice>
      </xs:sequence>
      <xs:attribute name="name"
          type="xs:string"
          use="required">
        <xs:annotation>
          <xs:documentation xml:lang="es">Nombre del frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="width"
          type="xs:string"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Ancho que ocupa el frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="height"
        type="xs:string"
        use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Alto que ocupa el frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="imgbk"
        type="xs:string"
        use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Imagen de fondo del frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="disablevisible"
          type="xs:string"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Si se cumple la condici\xF3n no se muestra el frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="framebox"
          type="xs:boolean"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Define si se muestra o no el borde del frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="align"
        type="xs:string"
        use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Alineaci\xF3n de los elementos dentro del frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="scroll"
          type="xs:boolean"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica si se puede hacer scroll o no si el contenido del frame es mas grande.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="class"
          type="xs:string"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Clase del CSS a la que pertenece el frame</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="newline"
          type="xs:boolean"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica si el frame se coloca en la misma l\xEDnea o en la siguiente</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="floating"
          type="xs:boolean"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica si el frame es flotante</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="top"
          type="xs:string"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Coordenada vertical donde se coloca el frame flotante</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="left"
          type="xs:string"
          use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Coordenada horizontal donde se coloca el frame flotante</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="tmargin"
                    type="xs:string"
                    use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica el margen superior.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="rmargin"
               type="xs:string"
               use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica el margen derecho.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="bmargin"
               type="xs:string"
               use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica el margen inferior.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="lmargin"
         type="xs:string"
         use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">Indica el margen izquierdo.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="animation-in"
                           type="xs:string"
                           use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Animaci\xF3n de la pesta\xF1a al volverse visible.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="animation-out"
       type="xs:string"
       use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Animaci\xF3n de la pesta\xF1a al desaparecer.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="animation-in-delay"
       type="xs:unsignedShort"
       use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tiempo para la animaci\xF3n.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:anyAttribute processContents="skip" />
    </xs:complexType>
  </xs:element>
  <!--NODO CONTENT-->
  <xs:element name="contents">
    <xs:annotation>
      <xs:documentation xml:lang="es">
        Es una colecion de objetos relacionados con el objeto cabecera___
      </xs:documentation>
    </xs:annotation>
    <xs:complexType mixed="true">
      <xs:sequence>
        <xs:choice maxOccurs="unbounded">
          <xs:element name="asfilter"
           minOccurs="0"
           maxOccurs="1">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="field"
              maxOccurs="unbounded">
                  <xs:complexType>
                    <xs:simpleContent>
                      <xs:extension base="xs:string">
                        <xs:attribute name="name"
                    type="xs:string"
                    use="required">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Nombre del filtro que se va a aplicar
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="fldname"
                    type="xs:string"
                    use="required">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Nombre del campo sobre el que se va a aplicar
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="oper"
                    type="xs:string"
                    use="required">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Operacion que se va a hacer con el campo ej:##FLD##=VALOR
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="width"
                    type="xs:unsignedByte"
                    use="required">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Ancho del campo donde se puede meter el valor
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="tooltip"
                    type="xs:string"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Ayuda que se mostrar\xE1 cuando se pase el raton sobre el campo que se va a buscar
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="newline"
                    type="xs:boolean"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Indica si el campo va a ir en la misma linea que el anterior o va a haber un salto de linea___ Por defecto es true
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="value"
                    type="MACROVALUES"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Valor que se le va a asignar por defecto al campo a buscar
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="type"
                    type="xs:string"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Tipo del campo que se va a filtar
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="visible"
                    type="xs:boolean"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Se define si esta visible o no
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="labelwidth"
                    type="xs:unsignedByte"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Tama\xF1o de la etiqueta del campo
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="dropcoll"
                    type="xs:string"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Combo que se rellenar\xE1 con los valores de la coleccion que se ponga
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="applyto"
                    type="xs:string"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Aplica ese filtro a la macro que se defina en la propiedad
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="sort"
                    type="xs:boolean"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Ordenacion
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="lmargin"
                    type="xs:string"
                    use="optional">
                          <xs:annotation>
                            <xs:documentation xml:lang="es">
                              Separacion visual entre el campo y el anterior
                            </xs:documentation>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:anyAttribute processContents="skip" />
                      </xs:extension>
                    </xs:simpleContent>
                  </xs:complexType>
                </xs:element>
              </xs:sequence>
              <xs:attribute name="fontsize"
               type="xs:unsignedByte"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Tama\xF1o de la letra
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="left"
               type="xs:unsignedByte"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Separacion visual entre el campo y el anterior
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="avanzado"
               type="xs:boolean"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define si el filtro se usara el avanzado o no
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="autofilter"
               type="xs:boolean"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define si el filtro se usara el autofiltro o no
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="autofiltro"
               type="xs:boolean"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define si el filtro se usara el autofiltro o no
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="lines"
               type="xs:unsignedByte"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Numero de lineas
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="sort"
               type="xs:boolean"
               use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define si el filtro se ordenar\xE1
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:anyAttribute processContents="skip" />
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:sequence>
      <xs:attribute name="name"
                 type="xs:string"
                 use="required">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Nombre del mismo___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="src"
                 type="xs:string"
                 use="required">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Nombre de la coleccion externar que va a formar el contents___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="filter"
                 type="xs:string"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Filtro que se le pone a la coleccion externa en el momento de llamarla desde la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="lines"
                 type="xs:unsignedByte"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Numero de lineas que va a contener el contents___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="disableedit"
                 type="xs:string"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Desabilita la edicion del mismo si se cumple la condicion___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="fontsize"
                 type="xs:unsignedByte"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Tama\xF1o de la fuente, de los datos que muestra el content___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="copy-on-clone"
                 type="xs:boolean"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Copia todo los objetos que contiene el content cuando se utiliza el metodo clonar de appdata___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="locking"
                 type="xs:boolean"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Bloquea todos los objetos, por lo que se quedan en modo de solo lectura___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="locked"
                 type="xs:boolean"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Bloquea todos los objetos, por lo que se quedan en modo de solo lectura___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="sort"
                 type="xs:string"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Pone el orden en la coleccion externa en el momento de llamarla desde la cabecera___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="onchange"
                 type="xs:string"
                 use="optional">
        <xs:annotation>
          <xs:documentation xml:lang="es">
            Refresca todos los objetos que contiene___
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:anyAttribute processContents="skip" />
    </xs:complexType>
  </xs:element>
  <!-- NODO PROP -->
  <xs:element name="prop">
    <xs:annotation>
      <xs:documentation xml:lang="es">
        Cada una de las propiedades de la coleccion___ Seran los nombres de los campos de la base de datos, etiquetas o formulas___
      </xs:documentation>
    </xs:annotation>
    <xs:complexType>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute name="name"
                   type="xs:string"
                   use="required">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Nombre de la propiedad que se va a mostrar___ Normalmente el nombre del campo que viene del SQL___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="visible"
                   type="VISIBLEDATA"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Decide la visibilidad de la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="type"
                   type="TYPEDATA"
                   use="required">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Tipo de datos de la propiedad a modo visual___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="mapcol"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica que esta propiedad esta enlazada con otra colecci\xF3n, o sea, que este es un campo clave en una relaci\xF3n muchos__a__uno___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="mapfld"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica que campo de la coleccion externa es el que se usa para enlazarla con esta propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="bit"
                   type="xs:unsignedByte"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica de que bit coge su valor___ Se tiene que indicar de que campo coge el bit___ Se utiliza junto al atributo linkedto___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="linkedto"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indican que la propiedad se ha obtenido mediante un enlace con una coleccion externa___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="linkedfield"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Campo que se recupera de la coleccion externa___ Se utiliza junto con el atributo linkedto___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="bgcolor"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Modifica el color del fondo de la etiqueta___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="forecolor"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Modifica el color de la fuente de la etiqueta___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="onchange"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Refresca el valor de la propiedad___ Seguido de un numero, refrescara mas propiedades___ 255 refresca todos los campos___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fieldsize"
                   type="xs:unsignedByte"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica el tama\xF1o de la propiedad en pantalla___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="autosearch"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                El valor que se inserta lo busca en la base de datos___ Si existe lo carga, sino pregunta que si se quiere crear un nuevo elemento___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="size"
                   type="xs:unsignedShort"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica el tama\xF1o real de la propiedad en la base de datos___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="newline"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Para indicar si al mostrarlo la propiedad se va a una nueva linea o no___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="lmargin"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Para indicar que distancia guarda con el atributo anterior___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="contents"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indicara que esta propiedad es un contents___ Coleccion de objetos relacionados con la cabecera___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="lines"
                   type="xs:unsignedByte"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica el numero de linea que tiene la propiedad visualmente___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelwidth"
                   type="xs:unsignedByte"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Tama\xF1o de la etiqueta de la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="locked"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica que el campo no puede modificarse___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="locking"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Indica que el campo no puede modificarse___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="width"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Ancho de las propiedades de tipo foto o imagen o firma___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="height"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Alto de las propiedades de tipo foto o imagen o firma___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="formula"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Se mostrara una formula, que dara valor a la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="updates"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                La propiedad donde se pone, actualiza la propiedad con el nombre puesto dentro del atributo updates___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="indexed"
                   type="xs:boolean"
                   use="optional" />
          <xs:attribute name="method"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Se pone el nombre del metodo que dara valor a la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="methodtype"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Ejecuta el metodo que se indica en el atributo methodname___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="autosave"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Salvado automatico cuando se modifica el valor de la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="edittitle"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Hace que el valor de la propiedad salga en la parte de arriba de la pesta\xF1a de edicion___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="filter"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Se le pone este filtro a la coleccion externa donde se cogen los datos___ Si le da a buscar se elimina___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="linkfilter"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Se le pone este filtro a la coleccion externa donde se cogen los datos___ No se elimina aunque le de a buscar___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="showinline"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Muestra la propiedad de tipo combo___ Se utiliza en propiedades que cogen su valor de colecciones externas___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="disableedit"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Desabilita el modo edicion de la propiedad si se cumple la condicion que se le pone___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="default-mapcol"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Coge como coleccion por defecto la que se pone___ Sirve para cuando una coleccion de objetos puede tener varias cabeceras___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="keep"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Impide el uso automatico de valores del objeto cliente___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="vtrue"
                   type="xs:string"
                   use="optional" />
          <xs:attribute name="vfalse"
                   type="xs:string"
                   use="optional" />
          <xs:attribute name="tooltip"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Muestra un mensaje de explicacion al poner el raton encima del atributo___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="mapreedit"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Selecciona el valor que coincide con los resultados de la busqueda que se realizo en la coleccion externa___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="allow-null"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Para que no se seleccion un valor null en una propiedad que tiene el atributo showinline___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="onsize"
                   type="xs:unsignedByte"
                   use="optional" />
          <xs:attribute name="idmoneda"
                   type="xs:string"
                   use="optional" />
          <xs:attribute name="fontsize"
                   type="xs:unsignedByte"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Tama\xF1o de la fuente___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="disablevisible"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Pone invisible la propiedad si se cumple la condicion que se le pone como valor___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="update"
                   type="xs:string"
                   use="optional" />
          <xs:attribute name="title"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Valor que sale en la etiqueta de la propiedad___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fixed-text"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Va con el atributo size___ Saca un mensaje de error, si se superan los caracteres que tiene el atributo size___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="validate"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Valida el valor que se pone___ Relacionado con el nodo validate___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="xlat"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Horintalizacion de valores___ Su valor se guarda como en un contents, pero se ve como si fuera en modo edicion sencillo___
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="edit-inline"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Define si las lineas de content se abriran en debajo del content
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="editmodal"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Define si las lineas de content se abriran en modal
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelbox"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si la etiqueta que forma el control se le a\xF1ade un borde por toda la periferia.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelshadow"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si la etiqueta que forma el control se le a\xF1ade un efecto de sombra.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-border"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si se muestra borde.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="tmargin"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el margen superior.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="rmargin"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el margen derecho.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="bmargin"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el margen inferior.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="caption"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el texto a mostrar en un bot\xF3n.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fixed-lines"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica que el numero de lineas indicado est\xE1 fijo.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="align"
                   type="xs:string"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica la alineaci\xF3n dentro del elemento.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="undo-button"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra u oculta el bot\xF3n deshacer.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-border-top"
                   type="xs:boolean"
                   use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra u oculta el borde superior.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-border-left"
             type="xs:boolean"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra u oculta el borde izquierdo.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-border-right"
             type="xs:boolean"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra u oculta el borde derecho.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-border-bottom"
             type="xs:boolean"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra u oculta el borde inferior.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-forecolor"
             type="xs:string"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Modifica el color de la fuente</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fontbold"
         type="xs:boolean"
         use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si el texto se muestra en negrita.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-fontsize"
             type="xs:string"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el tama\xF1o de la fuente.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="class"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Clase del CSS a la que pertenece el elemento</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="autoformat"
             type="xs:boolean"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es"></xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen que se muestra en un bot\xF3n</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="imgsel"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen que se muestra en el bot\xF3n al pulsar.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="forceonchange"
              type="xs:boolean"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es"></xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="mask"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Define las acciones que se pueden realizar</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-align"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Alineaci\xF3n de la imagen dentro del bot\xF3n</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelfont-bold"
              type="xs:boolean"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra el texto de la etiqueta en negrita</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-bgcolor-disabled"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Modifica el color de fondo del texto cuando est\xE1 desactivado</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="cell-bgcolor"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo de la celda</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="border-width"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ancho del borde</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="readonly"
            type="xs:boolean"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si es s\xF3lo lectura</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fixedbottom"
              type="xs:boolean"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es"></xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="mapcol-values"
          type="xs:string"
          use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es"></xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelfontsize"
          type="xs:string"
          use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Tama\xF1o de la fuente de la etiqueta</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="textfonsize"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Tama\xF1o de la fuente del texto</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-align"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Alineaci\xF3n del texto</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="viewmode"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Forma en la que se visualiza</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="autoslide-delay"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Segundos que tarda el Slide en cambiar de imagen</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="slide-circular"
              type="xs:boolean"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si el slide vuelve a comenzar cuando llega a la \xFAltima imagen</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="file-maxwidth"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ancho m\xE1ximo del archivo</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="file-maxheight"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Alto m\xE1ximo del archivo</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="colorview"
            type="xs:boolean"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica que cambie de color seg\xFAn se cumpla una condici\xF3n u otra.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="chart-serie-title"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">La prop donde se encuentre este atributo corresponder\xE1 a los t\xEDtulos de las distintas porciones del gr\xE1fico.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="chart-serie"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">La prop donde se encuentre este atributo corresponder\xE1 a los t\xEDtulos de las distintas porciones del gr\xE1fico.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="chart-value"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Contiene los valores a representar.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="chart-serie-color"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Colores a representar.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="icon-mark"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Icono de la marca a poner.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="circle-radius"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el radio del c\xEDrculo de la marca.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="xcoord"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Coordenada X.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="ycoord"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Coordenada Y.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="mapview-address"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra la direcci\xF3n en el mapa</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="mapview-description"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Muestra la descripci\xF3n que aparece en el mapa</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="postonchange"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Acci\xF3n a ejecutar tras el refresco.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="text-forecolor-disabled"
              type="xs:string"
              use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color del texto cuando el control est\xE1 desactivado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>

          <xs:attribute name="text-bgcolor"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo del texto.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="textfont-bold"
            type="xs:boolean"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si el texto est\xE1 en negrita.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="textfont-size"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el tama\xF1o de la fuente.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="fontname"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica el tipo de fuente de la letra del control.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-spinner"
             type="xs:string"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Cambia el icono de los controles tipo Combo.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-spinner-sel"
             type="xs:string"
             use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Cambia el icono de los controles tipo Combo cuando se pulsa.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="apply-css"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Activa o desactiva que se pueda aplicar los estilos CSS y propiedades de dise\xF1o a un type="NC".</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-checked"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Cambia el icono de los controles type NC.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="labelfont-underline"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Si esta subrayado la etiqueta.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-date"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen del boton fecha para los type D, DT y TT.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-date-sel"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen del boton fecha seleccionado para los type D, DT y TT.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="cell-height"
           type="xs:unsignedByte"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Height de la celda del content.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-disabled"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ruta de la imagen para un type B cuando est\xE9 bloqueado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-unchecked"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ruta de la imagen para un type NC cuando est\xE1 sin marcar y desbloqueado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="label-wrap"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Cuando el texto sobrepase el width de un type T, hace nueva linea.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-checked-disabled"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ruta de la imagen para un type NC cuando est\xE1 marcado y bloqueado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-unchecked-disabled"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Ruta de la imagen para un type NC cuando est\xE1 sin marcar y bloqueado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-time"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen del boton hora para los type D, DT y TT.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="img-time-sel"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Imagen del boton hora seleccionado para los type D, DT y TT.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="showintab"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Indica si el mantenimiento debe aparecer en la pesta\xF1a de mantenimientos o no.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="path"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Tipos img, le pone la ruta de la imagen a ca\xF1on.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="forecolor-disabled"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de texto, deshabilitado, en los campos de edici\xF3n.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="bgcolor-disabled"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo, deshabilitado, en los campos de edici\xF3n.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="border-corner-radius"
           type="xs:unsignedShort"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Redondear las esquinas de la caja, va de 0 a 1.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="rmargin-inside"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Padding interno del control.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="grid-bgcolor"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo en celdas.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="grid-text-bgcolor"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de texto en celdas.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="grid-text-border"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de borde en celdas.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="lmargin-inside"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Padding interno del control.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="tmargin-inside"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Padding interno del control.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="bmargin-inside"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Padding interno del control.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="grid-framebox"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-bgcolor-focus"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo del texto al coger el foco.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="text-fontbold"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Caja de texto en negrita.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="textfontbold"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Caja de texto en negrita.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="locked-noedit"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="hide-softinput"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Para los type B, ocultar el teclado virtual si estuviera visible al pulsar el boton.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="showinline-keyboard"
           type="xs:boolean"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="cell-selected-bgcolor"
           type="xs:string"
           use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de fondo de la celda al seleccionarlo.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="cell-selected-border-color"
                     type="xs:string"
                     use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">Color de la celda seleccionada en modo listado.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="week-end-hour"
                      type="xs:unsignedByte"
                      use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="week-start-hour"
            type="xs:unsignedByte"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="weekdays-align"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="weekdays-forecolor"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="weekdays-longname"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="weekdays-fontsize"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="weekdays-bgcolor"
            type="xs:string"
            use="optional">
            <xs:annotation>
              <xs:documentation xml:lang="es">.</xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:anyAttribute processContents="skip" />
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  </xs:element>
  <!-- NODO ACTION-SCRIPT -->
  <xs:element name="script">
    <xs:complexType>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute name="language"
                   type="LANGUAGESCRIPT"
                   use="required" />
          <xs:anyAttribute processContents="skip" />
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  </xs:element>
  <!-- definicion de los nodos que contiene el nodo coll-->
  <xs:element name="xml">
    <xs:complexType mixed="true">
      <xs:sequence>
        <xs:choice maxOccurs="unbounded">
          <xs:element name="app"
                 maxOccurs="unbounded">
            <xs:annotation>
              <xs:documentation xml:lang="es">
                Es el nodo de la definicion de la aplicacion
              </xs:documentation>
            </xs:annotation>
            <xs:complexType mixed="true">
              <xs:sequence>
                <xs:choice maxOccurs="unbounded">
                  <xs:element name="battery"
                     minOccurs="0"
                     maxOccurs="unbounded">
                    <xs:annotation>
                      <xs:documentation xml:lang="es">
                        Muestra los limites de bateria___ Mostrara avisos cuando la bateria vaya llegando a esos % limites___
                      </xs:documentation>
                    </xs:annotation>
                    <xs:complexType>
                      <xs:attribute name="limit1"
                         type="xs:unsignedByte"
                         use="optional" />
                      <xs:attribute name="limit2"
                         type="xs:unsignedByte"
                         use="optional" />
                      <xs:attribute name="limit3"
                         type="xs:unsignedByte"
                         use="optional" />
                      <xs:anyAttribute processContents="skip" />
                    </xs:complexType>
                  </xs:element>
                  <xs:element name="connection"
                     minOccurs="0"
                     maxOccurs="unbounded">
                    <xs:annotation>
                      <xs:documentation xml:lang="es">
                        Nodo de conexi\xF3n
                      </xs:documentation>
                    </xs:annotation>
                    <xs:complexType>
                      <xs:attribute name="name"
                         type="xs:string"
                         use="required" />
                      <xs:attribute name="connstring"
                         type="xs:string"
                         use="required" />
                      <xs:attribute name="prefix"
                         type="xs:string"
                         use="optional" />
                      <xs:anyAttribute processContents="skip" />
                    </xs:complexType>
                  </xs:element>
                  <xs:element name="style"
                     minOccurs="0"
                     maxOccurs="unbounded">
                    <xs:annotation>
                      <xs:documentation xml:lang="es">
                        style
                      </xs:documentation>
                    </xs:annotation>
                    <xs:complexType>
                      <xs:attribute name="url"
                         type="xs:string"
                         use="optional" />
                      <xs:attribute name="conditions"
                         type="xs:string"
                         use="optional" />
                      <xs:anyAttribute processContents="skip" />
                    </xs:complexType>
                  </xs:element>
                  <xs:element name="logon"
                     minOccurs="0"
                     maxOccurs="unbounded">
                    <xs:annotation>
                      <xs:documentation xml:lang="es">
                        Son las distintas pesta\xF1as que puede tener el modo edicion___
                      </xs:documentation>
                    </xs:annotation>
                    <xs:complexType>
                      <xs:sequence>
                        <xs:choice maxOccurs="unbounded">
                          <xs:element name="load"
                         minOccurs="0"
                         maxOccurs="unbounded">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Son las distintas pesta\xF1as que puede tener el modo edicion___
                              </xs:documentation>
                            </xs:annotation>
                            <xs:complexType>
                              <xs:attribute name="name"
                             type="APPLOADNAME"
                             use="optional">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Nombre del modulo que se quiere cargar
                                  </xs:documentation>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="progid"
                             type="APPLOADPROGID"
                             use="optional">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Es el servidor de objetos basico de los modulos a cargar
                                  </xs:documentation>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="skiperror"
                             type="xs:boolean"
                             use="optional">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Define si los errores se saltan o se dejan
                                  </xs:documentation>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="showerror"
                             type="xs:boolean"
                             use="optional">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Define si los errores se mostraran en pantalla
                                  </xs:documentation>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:anyAttribute processContents="skip" />
                            </xs:complexType>
                          </xs:element>
                        </xs:choice>
                      </xs:sequence>
                      <xs:attribute name="finduser"
                         type="xs:boolean"
                         use="optional" />
                      <xs:attribute name="replica"
                         type="xs:boolean"
                         use="optional" />
                      <xs:attribute name="showalways"
                         type="xs:boolean"
                         use="optional" />
                      <xs:anyAttribute processContents="skip" />
                    </xs:complexType>
                  </xs:element>
                </xs:choice>
              </xs:sequence>
              <xs:attribute name="prefix"
                     type="xs:string"
                     use="required">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Nodo para la definici\xF3n de la macro ##PREF##, que es utilizada en los SQL de las colecciones del mappings.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="version"
                     type="xs:string"
                     use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define la version
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="resolution-height"
                 type="xs:string"
                 use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Alto de la resoluci\xF3n sobre la que se trabaja.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="resolution-width"
                 type="xs:string"
                 use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Ancho de la resoluci\xF3n sobre la que se trabaja.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="screen-orientation"
                        type="VALUESCREENORIENTATION"
                        use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Define la orientaci\xF3n de la pantalla.Landscape(apaisado) o portrait(vertical).
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="entry-point"
                type="xs:string"
                use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Indica la colecci\xF3n con el men\xFA personalizado.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="debug"
                type="xs:boolean"
                use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Se le indica al framework que el mismo se esta ejecutando en modo debug, con lo que nos mostrar\xE1 mas informaci\xF3n.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="autologon"
                type="xs:boolean"
                use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Este atributo controla que se haga login autom\xE1tico para aplicaciones que no lo necesiten. Para que funcione es necesario tener un usuario admin con contrase\xF1a vac\xEDa en la base de datos.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="compatibility-mode"
                type="xs:boolean"
                use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Modo en compatibilidad con versiones anteriores. Es bueno utilizarlo si tenemos una aplicaci\xF3n realizada con versiones anteriores de otros Frameworks, para que la visi\xF3n no tenga un cambio radica.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:attribute name="companycolor"
                type="xs:string"
                use="optional">
                <xs:annotation>
                  <xs:documentation xml:lang="es">
                    Para la definici\xF3n de un color general para toda la aplicaci\xF3n. Son colores aplicados a los men\xFAs, colores de pesta\xF1as o selecciones, siempre y cuando en dichos lugares no pongamos colores para esas zonas. Se le pasan colores.
                  </xs:documentation>
                </xs:annotation>
              </xs:attribute>
              <xs:anyAttribute processContents="skip" />
            </xs:complexType>
          </xs:element>
          <xs:element name="collprops">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="coll"
                    maxOccurs="unbounded">
                  <xs:annotation>
                    <xs:documentation xml:lang="es">
                      Es la entidad basica de Xone___ Una coleccion define todas las propiedades, eventos y acciones para cada entidad de negocio___
                    </xs:documentation>
                  </xs:annotation>
                  <xs:complexType mixed="true">
                    <xs:choice maxOccurs="unbounded">
                      <xs:element name="group"
                       maxOccurs="unbounded">
                        <xs:annotation>
                          <xs:documentation xml:lang="es">
                            Son las distintas pesta\xF1as que puede tener el modo edicion___
                          </xs:documentation>
                        </xs:annotation>
                        <xs:complexType>
                          <xs:sequence>
                            <xs:choice maxOccurs="unbounded">
                              <xs:element ref="prop"
                           maxOccurs="unbounded" />
                              <xs:element ref="contents"
                           minOccurs="0"
                           maxOccurs="unbounded" />
                              <xs:element ref="frame"
                           minOccurs="0"
                           maxOccurs="unbounded" />
                              <xs:element name="macro"
                               minOccurs="0"
                               maxOccurs="1">
                                <xs:complexType>
                                  <xs:attribute name="name"
                                   type="xs:string"
                                   use="required" />
                                  <xs:attribute name="value"
                                   type="xs:string"
                                   use="required" />
                                  <xs:attribute name="default"
                                   type="xs:boolean"
                                   use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="connection"
                               minOccurs="0"
                               maxOccurs="unbounded">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Nodo de conexi\xF3n
                                  </xs:documentation>
                                </xs:annotation>
                                <xs:complexType>
                                  <xs:attribute name="name"
                                     type="xs:string"
                                     use="required" />
                                  <xs:attribute name="connstring"
                                     type="xs:string"
                                     use="required" />
                                  <xs:attribute name="prefix"
                                     type="xs:string"
                                     use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                            </xs:choice>
                          </xs:sequence>
                          <xs:attribute name="name"
                           type="xs:string"
                           use="required">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                El nombre que sale en pantalla de la pesta\xF1a___
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="id"
                           type="xs:unsignedByte"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                El valor por el que se le llama con el atributo group que hay a nivel de propiedad___
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="bgcolor"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Modifica el color del fondo del grupo o pesta\xF1a.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="tab-bgcolor"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Color de fondo de las pesta\xF1as.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="tab-forecolor"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Color del texto de las pesta\xF1as.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="tab-bgcolor-disable"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Color de fondo de las pesta\xF1as deshabilitadas.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="tab-forecolor-disable"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Color del texto de las pesta\xF1as deshabilitadas.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="animation-in"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Animaci\xF3n de la pesta\xF1a al volverse visible.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="animation-out"
                           type="xs:string"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Animaci\xF3n de la pesta\xF1a al desaparecer.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="animation-in-delay"
                           type="xs:unsignedShort"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Tiempo para la animaci\xF3n.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="connection"
                     minOccurs="0"
                     maxOccurs="unbounded">
                        <xs:annotation>
                          <xs:documentation xml:lang="es">
                            Nodo de conexi\xF3n
                          </xs:documentation>
                        </xs:annotation>
                        <xs:complexType>
                          <xs:attribute name="name"
                             type="xs:string"
                             use="required" />
                          <xs:attribute name="connstring"
                             type="xs:string"
                             use="required" />
                          <xs:attribute name="prefix"
                             type="xs:string"
                             use="optional" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="create"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:element name="action"
                          minOccurs="0"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence minOccurs="0">
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="ACTIONCREATENAME"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el tipo de acci\xF3n que se desea ejecutar___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="field"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define la propiedad a la que se asigna evalor en la acci\xF3n___ Usado con acciones de tipo 'setval' y 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="value"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor a otorgar a la propiedad___ Usado con acciones de tipo 'setval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="targetfld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define (mapval) el nombre del campo del que tomara el valor para asignarlo o (setfldval) el campo al que se asigna valor___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="sourcefld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el nombre del campo, del objeto padre, que tomaremos para la asignacion de valor___ Usado con acciones de tipo 'setfldval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="coll"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define la colecci\xF3n en la que buscaremos el objeto para la asignacion del valor ___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="mapfld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el campo que se empleara para buscar dentro de la colecci\xF3n cuyo nombre se indica en 'coll'___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="mapvalue"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor que se empleara para buscar dentro de la colecci\xF3n cuyo nombre se indica en 'coll'___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="default"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor que tomara el campo en caso de que el campo indicado en 'sourcefld' sea nulo o est\xE9 vac\xEDo___ Usado con acciones de tipo 'setfldval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                          <xs:attribute name="show-wait-dialog"
                             type="xs:boolean"
                             use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Indica si mostrar el nodo de cargando mientras se ejecuta el nodo.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="refresh"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Indica si refrescar al finalizar la ejecuci\xF3n del nodo.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="before-edit"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:element name="action"
                          minOccurs="0"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence minOccurs="0">
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="ACTIONCREATENAME"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el tipo de acci\xF3n que se desea ejecutar___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="field"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define la propiedad a la que se asigna evalor en la acci\xF3n___ Usado con acciones de tipo 'setval' y 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="value"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor a otorgar a la propiedad___ Usado con acciones de tipo 'setval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="targetfld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define (mapval) el nombre del campo del que tomara el valor para asignarlo o (setfldval) el campo al que se asigna valor___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="sourcefld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el nombre del campo, del objeto padre, que tomaremos para la asignacion de valor___ Usado con acciones de tipo 'setfldval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="coll"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define la colecci\xF3n en la que buscaremos el objeto para la asignacion del valor ___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="mapfld"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el campo que se empleara para buscar dentro de la colecci\xF3n cuyo nombre se indica en 'coll'___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="mapvalue"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor que se empleara para buscar dentro de la colecci\xF3n cuyo nombre se indica en 'coll'___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="default"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el valor que tomara el campo en caso de que el campo indicado en 'sourcefld' sea nulo o est\xE9 vac\xEDo___ Usado con acciones de tipo 'setfldval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        <xs:attribute name="show-wait-dialog"
                             type="xs:boolean"
                             use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Indica si mostrar el nodo de cargando mientras se ejecuta el nodo.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="refresh"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Indica si refrescar al finalizar la ejecuci\xF3n del nodo.
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="delete"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation xml:lang="es">
                            Nodo que se lanza en el momento de borrar el objeto que esta en memoria___
                          </xs:documentation>
                        </xs:annotation>
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:choice maxOccurs="unbounded">
                              <xs:element name="rule" minOccurs="0">
                                <xs:complexType>
                                  <xs:attribute name="type"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="name"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="orientation"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="places"
                             type="xs:unsignedByte"
                             use="optional" />
                                  <xs:attribute name="src"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="padchar"
                             type="xs:unsignedByte"
                             use="optional" />
                                  <xs:attribute name="msg"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="errormsg"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="raise"
                               type="xs:boolean"
                               use="optional" />
                                  <xs:attribute name="srcfield"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="sql"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="value"
                               type="VALUERULE"
                               use="optional" />
                                  <xs:attribute name="scope"
                               type="xs:string"
                               use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="action"
                            minOccurs="0"
                            maxOccurs="unbounded">
                                <xs:annotation>
                                  <xs:documentation xml:lang="es">
                                    Acciones que se ejecutan al llamarse al nodo delete___
                                  </xs:documentation>
                                </xs:annotation>
                                <xs:complexType>
                                  <xs:sequence minOccurs="0">
                                    <xs:element name="script"
                               minOccurs="0">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Nodo Script que se lanza___
                                        </xs:documentation>
                                      </xs:annotation>
                                      <xs:complexType>
                                        <xs:simpleContent>
                                          <xs:extension base="xs:string">
                                            <xs:attribute name="language"
                                     type="LANGUAGESCRIPT"
                                     use="required">
                                              <xs:annotation>
                                                <xs:documentation xml:lang="es">
                                                  Se define el lenguaje del script___
                                                </xs:documentation>
                                              </xs:annotation>
                                            </xs:attribute>
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:extension>
                                        </xs:simpleContent>
                                      </xs:complexType>
                                    </xs:element>
                                    <xs:element name="rule" minOccurs="0">
                                      <xs:complexType>
                                        <xs:attribute name="type"
                                   type="xs:string"
                                   use="optional" />
                                        <xs:attribute name="name"
                                   type="xs:string"
                                   use="optional" />
                                        <xs:attribute name="orientation"
                                   type="xs:string"
                                   use="optional" />
                                        <xs:attribute name="places"
                                   type="xs:unsignedByte"
                                   use="optional" />
                                        <xs:attribute name="src"
                                   type="xs:string"
                                   use="optional" />
                                        <xs:attribute name="padchar"
                                   type="xs:unsignedByte"
                                   use="optional" />
                                        <xs:attribute name="msg"
                                     type="xs:string"
                                     use="optional" />
                                        <xs:attribute name="errormsg"
                                     type="xs:string"
                                     use="optional" />
                                        <xs:attribute name="raise"
                                     type="xs:boolean"
                                     use="optional" />
                                        <xs:attribute name="srcfield"
                                     type="xs:string"
                                     use="optional" />
                                        <xs:attribute name="sql"
                                     type="xs:string"
                                     use="optional" />
                                        <xs:attribute name="value"
                                     type="VALUERULE"
                                     use="optional" />
                                        <xs:attribute name="scope"
                                     type="xs:string"
                                     use="optional" />
                                        <xs:anyAttribute processContents="skip" />
                                      </xs:complexType>
                                    </xs:element>
                                    <xs:element name="parameter"
                               minOccurs="0">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Guarda en una variable los valores que se le dicen___
                                        </xs:documentation>
                                      </xs:annotation>
                                      <xs:complexType>
                                        <xs:attribute name="name"
                                   type="xs:string"
                                   use="required">
                                          <xs:annotation>
                                            <xs:documentation xml:lang="es">
                                              Nombre de la variable que guarda los valores___
                                            </xs:documentation>
                                          </xs:annotation>
                                        </xs:attribute>
                                        <xs:attribute name="value"
                                   type="xs:string"
                                   use="required">
                                          <xs:annotation>
                                            <xs:documentation xml:lang="es">
                                              SQL que se lanza para buscar los valores___
                                            </xs:documentation>
                                          </xs:annotation>
                                        </xs:attribute>
                                        <xs:anyAttribute processContents="skip" />
                                      </xs:complexType>
                                    </xs:element>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                                type="xs:string"
                                use="required">
                                    <xs:annotation>
                                      <xs:documentation xml:lang="es">
                                        Nombre de la regla___
                                      </xs:documentation>
                                    </xs:annotation>
                                  </xs:attribute>
                                  <xs:attribute name="sql"
                                type="xs:string"
                                use="optional">
                                    <xs:annotation>
                                      <xs:documentation xml:lang="es">
                                        SQL que se lanza para realizan un borrado___
                                      </xs:documentation>
                                    </xs:annotation>
                                  </xs:attribute>
                                  <xs:attribute name="fill"
                                type="xs:string"
                                use="optional">
                                    <xs:annotation>
                                      <xs:documentation xml:lang="es">
                                        SQL para confirmar la regla___
                                      </xs:documentation>
                                    </xs:annotation>
                                  </xs:attribute>
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="afteraction"
                            minOccurs="0"
                            maxOccurs="unbounded">
                                <xs:complexType>
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                            </xs:choice>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="asfilter"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="field"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:simpleContent>
                                  <xs:extension base="xs:string">
                                    <xs:attribute name="name"
                                type="xs:string"
                                use="required">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Nombre del filtro que se va a aplicar
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="fldname"
                                type="xs:string"
                                use="required">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Nombre del campo sobre el que se va a aplicar
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="oper"
                                type="xs:string"
                                use="required">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Operacion que se va a hacer con el campo ej:##FLD##=VALOR
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="width"
                                type="xs:unsignedByte"
                                use="required">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Ancho del campo donde se puede meter el valor
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="tooltip"
                                type="xs:string"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Ayuda que se mostrar\xE1 cuando se pase el raton sobre el campo que se va a buscar
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="newline"
                                type="xs:boolean"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Indica si el campo va a ir en la misma linea que el anterior o va a haber un salto de linea___ Por defecto es true
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="value"
                                type="MACROVALUES"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Valor que se le va a asignar por defecto al campo a buscar
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="type"
                                type="xs:string"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Tipo del campo que se va a filtar
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="visible"
                                type="xs:boolean"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Se define si esta visible o no
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="labelwidth"
                                type="xs:unsignedByte"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Tama\xF1o de la etiqueta del campo
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="dropcoll"
                                type="xs:string"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Combo que se rellenar\xE1 con los valores de la coleccion que se ponga
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="applyto"
                                type="xs:string"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Aplica ese filtro a la macro que se defina en la propiedad
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="sort"
                                type="xs:boolean"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Ordenacion
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:attribute name="lmargin"
                                type="xs:string"
                                use="optional">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Separacion visual entre el campo y el anterior
                                        </xs:documentation>
                                      </xs:annotation>
                                    </xs:attribute>
                                    <xs:anyAttribute processContents="skip" />
                                  </xs:extension>
                                </xs:simpleContent>
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                          <xs:attribute name="fontsize"
                           type="xs:unsignedByte"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Tama\xF1o de la letra
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="left"
                           type="xs:unsignedByte"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Separacion visual entre el campo y el anterior
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="avanzado"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Define si el filtro se usara el avanzado o no
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="autofilter"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Define si el filtro se usara el autofiltro o no
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="autofiltro"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Define si el filtro se usara el autofiltro o no
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="lines"
                           type="xs:unsignedByte"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Numero de lineas
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="sort"
                           type="xs:boolean"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Define si el filtro se ordenar\xE1
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="include"
                       minOccurs="0"
                       maxOccurs="unbounded">
                        <xs:annotation>
                          <xs:documentation xml:lang="es">
                            Indica si se incluira un fichero vbs, para ejecutar las funciones que contenga
                          </xs:documentation>
                        </xs:annotation>
                        <xs:complexType>
                          <xs:attribute name="file"
                           type="xs:string"
                           use="required">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Nombre del fichero vbs que se quiere incluir
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:attribute name="language"
                           type="LANGUAGESCRIPT"
                           use="optional">
                            <xs:annotation>
                              <xs:documentation xml:lang="es">
                                Tipo de lenguaje del include
                              </xs:documentation>
                            </xs:annotation>
                          </xs:attribute>
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="maintenance"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:element name="action"
                          minOccurs="1"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence minOccurs="0">
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el nombre de la actuacion que se va a realizar
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="type"
                              type="ACTIONMAINTENANCETYPE"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Tipo de Mantenimiento
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="period"
                              type="MAINTENANCEPERIOD"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Cada cuanto tiempo se va a realizar el mantenimiento
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="frecuency"
                              type="xs:unsignedByte"
                              use="required">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Cantidad de tiempo segun el periodo que se asigno
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="executealways"
                              type="xs:boolean"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Define el campo que se empleara para buscar dentro de la colecci\xF3n cuyo nombre se indica en 'coll'___ Usado con acciones de tipo 'mapval'___
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="synchronize"
                              type="xs:boolean"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      .
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="show"
                              type="xs:boolean"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      .
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="auto"
                              type="xs:boolean"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      .
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="path"
                              type="xs:string"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      .
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:attribute name="showintab"
                              type="xs:boolean"
                              use="optional">
                                  <xs:annotation>
                                    <xs:documentation xml:lang="es">
                                      Indica si el mantenimiento debe aparecer en la pesta\xF1a de mantenimientos o no.
                                    </xs:documentation>
                                  </xs:annotation>
                                </xs:attribute>
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="insert"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:choice maxOccurs="unbounded">
                              <xs:element name="rule" minOccurs="0">
                                <xs:complexType>
                                  <xs:attribute name="type"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="name"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="orientation"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="places"
                             type="xs:unsignedByte"
                             use="optional" />
                                  <xs:attribute name="src"
                             type="xs:string"
                             use="optional" />
                                  <xs:attribute name="padchar"
                             type="xs:unsignedByte"
                             use="optional" />
                                  <xs:attribute name="msg"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="errormsg"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="raise"
                               type="xs:boolean"
                               use="optional" />
                                  <xs:attribute name="srcfield"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="sql"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="value"
                               type="VALUERULE"
                               use="optional" />
                                  <xs:attribute name="scope"
                               type="xs:string"
                               use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="beforeaction"
                           minOccurs="0"
                           maxOccurs="1">
                                <xs:complexType>
                                  <xs:sequence>
                                    <xs:element name="script">
                                      <xs:complexType>
                                        <xs:simpleContent>
                                          <xs:extension base="xs:string">
                                            <xs:attribute name="language"
                                    type="LANGUAGESCRIPT"
                                    use="required" />
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:extension>
                                        </xs:simpleContent>
                                      </xs:complexType>
                                    </xs:element>
                                    <xs:element name="include"
                                     minOccurs="0"
                                     maxOccurs="unbounded">
                                      <xs:annotation>
                                        <xs:documentation xml:lang="es">
                                          Indica si se incluira un fichero vbs, para ejecutar las funciones que contenga
                                        </xs:documentation>
                                      </xs:annotation>
                                      <xs:complexType>
                                        <xs:attribute name="file"
                                         type="xs:string"
                                         use="required">
                                          <xs:annotation>
                                            <xs:documentation xml:lang="es">
                                              Nombre del fichero vbs que se quiere incluir
                                            </xs:documentation>
                                          </xs:annotation>
                                        </xs:attribute>
                                        <xs:attribute name="language"
                                         type="LANGUAGESCRIPT"
                                         use="optional">
                                          <xs:annotation>
                                            <xs:documentation xml:lang="es">
                                              Tipo de lenguaje del include
                                            </xs:documentation>
                                          </xs:annotation>
                                        </xs:attribute>
                                        <xs:anyAttribute processContents="skip" />
                                      </xs:complexType>
                                    </xs:element>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                               type="xs:string"
                               use="required" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="action"
                           maxOccurs="unbounded">
                                <xs:complexType>
                                  <xs:sequence minOccurs="0">
                                    <xs:choice maxOccurs="unbounded">
                                      <xs:element name="rule" minOccurs="0" >
                                        <xs:complexType>
                                          <xs:attribute name="type"
                                     type="xs:string"
                                     use="optional" />
                                          <xs:attribute name="name"
                                     type="xs:string"
                                     use="optional" />
                                          <xs:attribute name="orientation"
                                     type="xs:string"
                                     use="optional" />
                                          <xs:attribute name="places"
                                     type="xs:unsignedByte"
                                     use="optional" />
                                          <xs:attribute name="src"
                                     type="xs:string"
                                     use="optional" />
                                          <xs:attribute name="padchar"
                                     type="xs:unsignedByte"
                                     use="optional" />
                                          <xs:attribute name="msg"
                                       type="xs:string"
                                       use="optional" />
                                          <xs:attribute name="errormsg"
                                       type="xs:string"
                                       use="optional" />
                                          <xs:attribute name="raise"
                                       type="xs:boolean"
                                       use="optional" />
                                          <xs:attribute name="srcfield"
                                       type="xs:string"
                                       use="optional" />
                                          <xs:attribute name="sql"
                                       type="xs:string"
                                       use="optional" />
                                          <xs:attribute name="value"
                                       type="VALUERULE"
                                       use="optional" />
                                          <xs:attribute name="scope"
                                       type="xs:string"
                                       use="optional" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:complexType>
                                      </xs:element>
                                      <xs:element name="script">
                                        <xs:complexType>
                                          <xs:simpleContent>
                                            <xs:extension base="xs:string">
                                              <xs:attribute name="language"
                                      type="LANGUAGESCRIPT"
                                      use="required" />
                                              <xs:anyAttribute processContents="skip" />
                                            </xs:extension>
                                          </xs:simpleContent>
                                        </xs:complexType>
                                      </xs:element>
                                    </xs:choice>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                               type="xs:string"
                               use="required" />
                                  <xs:attribute name="coll"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="field"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="value"
                               type="xs:string"
                               use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                            </xs:choice>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="method"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="param"
                          minOccurs="0"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="type"
                              type="xs:string"
                              use="optional" />
                                <xs:attribute name="value"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                          <xs:attribute name="name"
                           type="ACTIONMETHODNAME"
                           use="required" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="ext_formula">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="param"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="sql"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="field"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="type"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="cache"
                              type="xs:boolean"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="coll_actions"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                  <xs:element name="param"
                            minOccurs="0"
                            maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:attribute name="name"
                                    type="xs:string"
                                    use="required" />
                                      <xs:attribute name="type"
                                    type="xs:string"
                                    use="optional" />
                                      <xs:attribute name="value"
                                    type="xs:string"
                                    use="required" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="toolbar"
                              type="xs:boolean"
                              use="required" />
                                <xs:attribute name="toolbar__icon"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="toolbar__tooltip"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="type"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="caption"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="toolbar__caption"
                              type="xs:string"
                              use="optional" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="execution_node"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="touch"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action">
                              <xs:complexType>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="field"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="value"
                              type="xs:unsignedByte"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="search"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="helper">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="barseg"
                             maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:attribute name="type"
                                 type="xs:string"
                                 use="required" />
                                      <xs:attribute name="start"
                                 type="xs:unsignedByte"
                                 use="required" />
                                      <xs:attribute name="len"
                                 type="xs:unsignedByte"
                                 use="required" />
                                      <xs:attribute name="value"
                                 type="xs:unsignedByte"
                                 use="optional" />
                                      <xs:attribute name="pad"
                                 type="xs:boolean"
                                 use="optional" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="progid"
                              type="PROGIDATA"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="macro"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:attribute name="name"
                           type="xs:string"
                           use="required" />
                          <xs:attribute name="value"
                           type="xs:string"
                           use="required" />
                          <xs:attribute name="default"
                           type="xs:boolean"
                           use="optional" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="generate"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="field"
                          minOccurs="1"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="rule" maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:attribute name="type"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="name"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="orientation"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="places"
                                 type="xs:unsignedByte"
                                 use="optional" />
                                      <xs:attribute name="src"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="padchar"
                                 type="xs:unsignedByte"
                                 use="optional" />
                                      <xs:attribute name="msg"
                                   type="xs:string"
                                   use="optional" />
                                      <xs:attribute name="errormsg"
                                   type="xs:string"
                                   use="optional" />
                                      <xs:attribute name="raise"
                                   type="xs:boolean"
                                   use="optional" />
                                      <xs:attribute name="srcfield"
                                   type="xs:string"
                                   use="optional" />
                                      <xs:attribute name="sql"
                                   type="xs:string"
                                   use="optional" />
                                      <xs:attribute name="value"
                                   type="VALUERULE"
                                   use="optional" />
                                      <xs:attribute name="scope"
                                   type="xs:string"
                                   use="optional" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="mask"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="ext-execute"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="ACTIONEXECUTENAME"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                          <xs:attribute name="buttonok"
                           type="xs:boolean"
                           use="optional" />
                          <xs:attribute name="beforesave"
                           type="xs:boolean"
                           use="optional" />
                          <xs:attribute name="print"
                           type="xs:boolean"
                           use="optional" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="print"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="before"
                          minOccurs="0"
                          maxOccurs="1">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="action"
                             maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:sequence>
                                        <xs:element name="script">
                                          <xs:complexType>
                                            <xs:simpleContent>
                                              <xs:extension base="xs:string">
                                                <xs:attribute name="language"
                                      type="LANGUAGESCRIPT"
                                      use="required" />
                                                <xs:anyAttribute processContents="skip" />
                                              </xs:extension>
                                            </xs:simpleContent>
                                          </xs:complexType>
                                        </xs:element>
                                      </xs:sequence>
                                      <xs:attribute name="name"
                                 type="ACTIONEXECUTENAME"
                                 use="required" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="exit"
                              type="xs:boolean"
                              use="optional" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                            <xs:element name="after"
                            minOccurs="0"
                            maxOccurs="1">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="action"
                             maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:sequence>
                                        <xs:element name="script">
                                          <xs:complexType>
                                            <xs:simpleContent>
                                              <xs:extension base="xs:string">
                                                <xs:attribute name="language"
                                      type="LANGUAGESCRIPT"
                                      use="required" />
                                                <xs:anyAttribute processContents="skip" />
                                              </xs:extension>
                                            </xs:simpleContent>
                                          </xs:complexType>
                                        </xs:element>
                                      </xs:sequence>
                                      <xs:attribute name="name"
                                 type="ACTIONEXECUTENAME"
                                 use="required" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="exit"
                              type="xs:boolean"
                              use="optional" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="dispatch"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="helper"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="method"
                             maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="name"
                                   type="HELPERNAME"
                                   use="required" />
                                          <xs:attribute name="com__id"
                                   type="COMID"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="progid"
                              type="PROGIDDISPATCH"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="onchange"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:element name="field"
                          maxOccurs="unbounded">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="action"
                             maxOccurs="unbounded">
                                    <xs:complexType>
                                      <xs:sequence minOccurs="0">
                                        <xs:element name="script"
                                minOccurs="0">
                                          <xs:complexType>
                                            <xs:simpleContent>
                                              <xs:extension base="xs:string">
                                                <xs:attribute name="language"
                                      type="LANGUAGESCRIPT"
                                      use="required" />
                                                <xs:anyAttribute processContents="skip" />
                                              </xs:extension>
                                            </xs:simpleContent>
                                          </xs:complexType>
                                        </xs:element>
                                        <xs:element name="rule" minOccurs="0">
                                          <xs:complexType>
                                            <xs:attribute name="type"
                                       type="xs:string"
                                       use="optional" />
                                            <xs:attribute name="name"
                                       type="xs:string"
                                       use="optional" />
                                            <xs:attribute name="orientation"
                                       type="xs:string"
                                       use="optional" />
                                            <xs:attribute name="places"
                                       type="xs:unsignedByte"
                                       use="optional" />
                                            <xs:attribute name="src"
                                       type="xs:string"
                                       use="optional" />
                                            <xs:attribute name="padchar"
                                       type="xs:unsignedByte"
                                       use="optional" />
                                            <xs:attribute name="msg"
                                         type="xs:string"
                                         use="optional" />
                                            <xs:attribute name="errormsg"
                                         type="xs:string"
                                         use="optional" />
                                            <xs:attribute name="raise"
                                         type="xs:boolean"
                                         use="optional" />
                                            <xs:attribute name="srcfield"
                                         type="xs:string"
                                         use="optional" />
                                            <xs:attribute name="sql"
                                         type="xs:string"
                                         use="optional" />
                                            <xs:attribute name="value"
                                         type="VALUERULE"
                                         use="optional" />
                                            <xs:attribute name="scope"
                                         type="xs:string"
                                         use="optional" />
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:complexType>
                                        </xs:element>
                                      </xs:sequence>
                                      <xs:attribute name="name"
                                 type="xs:string"
                                 use="required" />
                                      <xs:attribute name="field"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="value"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="mask"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="coll"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="mapfld"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:attribute name="mapvalue"
                                 type="xs:unsignedByte"
                                 use="optional" />
                                      <xs:attribute name="targetfld"
                                 type="xs:string"
                                 use="optional" />
                                      <xs:anyAttribute processContents="skip" />
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="mapping"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:attribute name="fieldkey"
                           type="xs:string"
                           use="required" />
                          <xs:attribute name="map"
                           type="xs:string"
                           use="required" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="execute"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType mixed="true">
                          <xs:sequence minOccurs="0">
                            <xs:choice maxOccurs="unbounded">
                              <xs:element name="rule" minOccurs="0"
                           maxOccurs="unbounded">
                                <xs:complexType>
                                  <xs:sequence minOccurs="0">
                                    <xs:element name="script">
                                      <xs:complexType>
                                        <xs:simpleContent>
                                          <xs:extension base="xs:string">
                                            <xs:attribute name="language"
                                    type="LANGUAGESCRIPT"
                                    use="required" />
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:extension>
                                        </xs:simpleContent>
                                      </xs:complexType>
                                    </xs:element>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="msg"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="raise"
                               type="xs:boolean"
                               use="optional" />
                                  <xs:attribute name="srcfield"
                               type="xs:string"
                               use="optional" />
                                  <xs:attribute name="value"
                               type="xs:boolean"
                               use="optional" />
                                  <xs:attribute name="scope"
                               type="xs:string"
                               use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="doc__action">
                                <xs:complexType>
                                  <xs:sequence>
                                    <xs:element name="script">
                                      <xs:complexType>
                                        <xs:simpleContent>
                                          <xs:extension base="xs:string">
                                            <xs:attribute name="language"
                                    type="LANGUAGESCRIPT"
                                    use="required" />
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:extension>
                                        </xs:simpleContent>
                                      </xs:complexType>
                                    </xs:element>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                               type="xs:string"
                               use="required" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="action">
                                <xs:complexType>
                                  <xs:sequence minOccurs="0">
                                    <xs:element name="script">
                                      <xs:complexType>
                                        <xs:simpleContent>
                                          <xs:extension base="xs:string">
                                            <xs:attribute name="language"
                                    type="LANGUAGESCRIPT"
                                    use="required" />
                                            <xs:anyAttribute processContents="skip" />
                                          </xs:extension>
                                        </xs:simpleContent>
                                      </xs:complexType>
                                    </xs:element>
                                  </xs:sequence>
                                  <xs:attribute name="name"
                               type="xs:string"
                               use="required" />
                                  <xs:attribute name="saleout"
                               type="xs:string"
                               use="optional" />
                                  <xs:anyAttribute processContents="skip" />
                                </xs:complexType>
                              </xs:element>
                            </xs:choice>
                          </xs:sequence>
                          <xs:attribute name="method"
                           type="xs:string"
                           use="optional" />
                          <xs:attribute name="cancel"
                           type="xs:string"
                           use="optional" />
                          <xs:anyAttribute processContents="skip" />
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="onlogon"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="optional" />
                                <xs:attribute name="type"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                      <xs:element name="onprepare"
                       minOccurs="0"
                       maxOccurs="1">
                        <xs:complexType>
                          <xs:sequence>
                            <xs:element name="action">
                              <xs:complexType>
                                <xs:sequence>
                                  <xs:element name="script">
                                    <xs:complexType>
                                      <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                          <xs:attribute name="language"
                                   type="LANGUAGESCRIPT"
                                   use="required" />
                                          <xs:anyAttribute processContents="skip" />
                                        </xs:extension>
                                      </xs:simpleContent>
                                    </xs:complexType>
                                  </xs:element>
                                </xs:sequence>
                                <xs:attribute name="name"
                              type="xs:string"
                              use="required" />
                                <xs:attribute name="type"
                              type="xs:string"
                              use="required" />
                                <xs:anyAttribute processContents="skip" />
                              </xs:complexType>
                            </xs:element>
                          </xs:sequence>
                        </xs:complexType>
                      </xs:element>
                    </xs:choice>
                    <xs:attribute name="name"
                        type="xs:string"
                        use="required">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre de la coleccion___ Debe ser unico en toda la estructura___ Obligatorio
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="title"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre de la coleccion para mostrarlo en mensajes y en barras de titulos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="sql"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la sentencia SQL para la obtencion de los datos de la coleccion___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="objname"
                        type="xs:string"
                        use="required">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre del objeto de datos principal en la sentencia SQL___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="updateobj"
                        type="xs:string"
                        use="required">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre de la tabla que se utiliza para escribir en la base de datos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="progid"
                        type="PROGIDATA"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define de qu\xE9 tipo son los objetos de la coleccion___ Obligatorio___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="fontsize"
                        type="xs:unsignedByte"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el tama\xF1o de la letra en la edicion de un objeto___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="editwidth"
                        type="xs:unsignedByte"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el ancho de la ventana de edicion___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="editheight"
                        type="xs:unsignedByte"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el alto de la ventana de edicion___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="forprint"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si esta coleccion esta disponible para impresion___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="sort"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la ordenacion de los datos de la coleccion (ORDER BY)___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="loadall"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si la colecci\xF3n debe cargarse completamente en la memoria al mostrarse por primera vez___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="filter"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la condicion que deben cumplir los datos para la coleccion (WHERE)___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="readonly"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si los objetos que pertenezcan a esta coleccion pueden ser modificados___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="locking"
                        type="xs:unsignedByte"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si los objetos que pertenezcan a esta coleccion pueden ser modificados___ Usar readonly___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="withopen"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si la colecci\xF3n ser\xE1 cargada en forma sincr\xF3nica o asincr\xF3nica por parte de los controles de procesamiento de listas___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="volatile"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si los valores de las propiedades de cada objeto son cargados de la base de datos siempre que estos son recuperados por la aplicaci\xF3n___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="dropdown"
                        type="xs:boolean"
                        use="optional" />
                    <xs:attribute name="nomenmask"
                        type="xs:unsignedByte"
                        use="optional" />
                    <xs:attribute name="alternate-counter"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si queremos que la maquinaria compruebe la cantidad de registros a devolver usando StartBrowse___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="special"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define que la colecci\xF3n no se corresponde con una tabla de la base de datos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="showproperties"
                        type="xs:boolean"
                        use="optional" />
                    <xs:attribute name="roundstyle"
                        type="ROUND"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el tipo de redondeo que se aplicar\xE1 a los calculos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="fontbold"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si el texto de la colecci\xF3n se muestra en negrita o no___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="check-owner"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si la colecci\xF3n debe revisar si el propietario est\xE1 grabado antes de ejecutar un LoadAll___ Para colecciones de contenido___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="dependent"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si objetos de esta colecci\xF3n deber\xE1n chequear si el propietario est\xE1 grabado o no para grabarse ellos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="keepdata"
                        type="xs:boolean"
                        use="optional" />
                    <xs:attribute name="paymode"
                        type="xs:unsignedByte"
                        use="optional" />
                    <xs:attribute name="autosave"
                        type="xs:boolean"
                        use="optional" />
                    <xs:attribute name="obj-loadall"
                        type="xs:boolean"
                        use="optional" />
                    <xs:attribute name="inherits"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la coleccion de la que se heredan propiedades___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="sql-debug"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la exposicion en consola de la sentencia SQL generada___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="update-on-amount"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la actualizacion de valores cuando se modifica la cantidad de un detalle___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="series-count"
                        type="xs:unsignedByte"
                        use="optional" />
                    <xs:attribute name="series-count-create"
                        type="xs:unsignedByte"
                        use="optional" />
                    <xs:attribute name="userawsql"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el empleo de subqueries en la coleccion___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="rate-type"
                        type="xs:unsignedByte"
                        use="optional" />
                    <xs:attribute name="autocreatefill"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define al mostrar una coleccion se cargan los objetos de dicha coleccion de forma automatica___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="autorefresh"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si al finalizar la edicion de un objeto queremos que la coleccion vuelva a cargar los datos de forma automatica___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="nostopreplica"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si al abrir la coleccion se detiene o no la replica___ Por defecto esta a false, por lo que no se parara la replica___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="sqlserver"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Se usa en BB para definir una conexion remota___ Se debe poner de la siguiente forma: DSNDELSERVER[ESPACIO] sql que se quiere tirar___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="online"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si la coleccion hace llamadas remotas al servidor para traer informacion___ Debe ir acompa\xF1ado de la propiedad sqlserver
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si la coleccion va a ser tratada por el sistema de avisos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify-coll"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre de la coleccion que va a ser empleada para editar un tipo de aviso___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify-filter"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define un filtro para a\xF1adir (AND) a la coleccion indicada en notify_coll___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify-counter"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si se desea mostrar el conteo de los elementos incluidos en un determinado aviso___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify-always"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define si se desea mostrar siempre un determinado aviso aunque no contenga objetos___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notify-title"
                        type="xs:boolean"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define el nombre que se va a mostrar haciendo referencia a un determinado aviso___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="screen-orientation"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Define la orientaci\xF3n de la pantalla.Landscape(apaisado) o portrait(vertical).
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-forecolor"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Color del texto de la celda.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-border-width"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Define el ancho del borde de la celda.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-border-color"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Define el color del borde de la celda</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-align"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Alineaci\xF3n de los elementos dentro de la celda.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-bgcolor"
                        type="xs:string"
                        use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Color de fondo de la celda</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="bgcolor"
                   type="xs:string"
                   use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">
                          Modifica el color del fondo de la etiqueta___
                        </xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="grid-bgcolor"
                     type="xs:string"
                     use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="grid-text-bgcolor"
                     type="xs:string"
                     use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="grid-text-border"
                     type="xs:string"
                     use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="notab"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Define si se muestran las pesta\xF1as.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="show-toolbar"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Define si se muestra la barra de herramientas.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="login-coll"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Indica si es una colecci\xF3n de login.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="disabled-buttonok"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es"></xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-selected-border-color"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Color de la celda seleccionada en modo listado</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="group-swipe"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Activa o desactiva el cambio de grupo deslizando la pantalla</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="mask"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Indica las operaciones que se pueden realizar</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="editmask"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">LAs opciones del men\xFA al pulsar atr\xE1s.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="show-selected-item"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-height"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Height de la celda del content.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="tab-height"
                       type="xs:unsignedByte"
                       use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Tama\xF1o de las pesta\xF1as si las hay.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="selected-item-start-index"
                      type="xs:integer"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Posicionar el content en la l\xEDnea indicada.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="cell-selected-bgcolor"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Color de fondo de la celda al seleccionarlo.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="border"
                      type="xs:boolean"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">Quitar o poner bordes al frame.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="page-swipe"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="week-end-hour"
                      type="xs:unsignedByte"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="week-start-hour"
                      type="xs:unsignedByte"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="weekdays-align"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="weekdays-forecolor"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="weekdays-longname"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="weekdays-fontsize"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:attribute name="weekdays-bgcolor"
                      type="xs:string"
                      use="optional">
                      <xs:annotation>
                        <xs:documentation xml:lang="es">.</xs:documentation>
                      </xs:annotation>
                    </xs:attribute>
                    <xs:anyAttribute processContents="skip" />
                  </xs:complexType>
                </xs:element>
                <!-- 
            <xs:any namespace='##other'
                minOccurs='0' maxOccurs='unbounded'
                processContents='skip'/>
                -->
              </xs:sequence>
              <xs:attribute name="type"
                     type="xs:string"
                     use="required" />
              <xs:anyAttribute processContents="skip" />
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`;const le=`
declare class XoneDataCollection implements IFieldProperties {
    get isDataCollection(): boolean;
    static PROP_TYPE_INTEGER: number;
    static PROP_TYPE_STRING: number;
    static PROP_TYPE_DOUBLE: number;
    static PROP_TYPE_DATE: number;
    static PROP_TYPE_RESULTSET: number;
    private m_ownerApp;
    private m_xmlNode;
    private m_version;
    private m_bLocked;
    private m_bIsSpecial;
    private m_bFull;
    private m_pOwnerObject;
    private m_strName;
    private m_messages;
    private m_options;
    private m_parent;
    private m_lstFormulaProps;
    private m_lstBitProps;
    private m_macrosEvaluator;
    private m_strLinkFilter;
    private m_strFilter;
    private m_lstVariables;
    private m_strPk;
    private m_nPkType;
    private m_nBrowseLength;
    private m_lstKeyFields;
    private m_browserData;
    private UNIQUE_ID;
    private m_bIsClearing;
    private m_strSort;
    private m_cachePlatformNodes;
    private m_strContentsName;
    private m_bUseObjectsInRestore;
    private m_bFollowRules;
    constructor(appData: XoneApplication, source: XmlNode, version: number);
    getXmlNode(): XmlNode;
    getVersion(): number;
    get BrowseData(): XoneBrowseData;
    /**
     * Devuelve el valor del atributo cuyo nombre se indica en la propiedad deseada.
     * @param FieldName			Nombre de la propiedad o campo de la colecci\xF3n cuyo atributo se quiere extraer.
     * @param AttrName			Nombre del atributo cuyo valor se quiere leer en el campo AttrName.
     * @return					Devuelve el valor del atributo de la propiedad solicitada. NULL o cadena vac\xEDa si no existe dicho atributo.
     * @throws Exception
     */
    FieldPropertyValue(FieldName: string, AttrName: string): string;
    getName(): string;
    getReplicate(): boolean;
    CheckIfEvaluated(FieldName: string, AttrName: string, sVal: string): string;
    getLayout(visibility?: number, parent?: XmlNode): any;
    getLayoutAsync(visibility?: number, parent?: XmlNode): any;
    getHierarchyXml(): XmlNode;
    QualifyField(FieldName: string, Sentence?: SqlParser): string;
    getPropAttributes(Value: string | XmlNode, type?: string): any;
    /**
     * A14040101: Funci\xF3n sobrecargada de NodePropertyValue jer\xE1rquica.
     * Sobrecarga de NodePropertyValue para poder sacar valores de jerarqu\xEDas de nodos.
     *
     * @param BaseNode		Nodo usado como base para buscar el se pide.
     * @param NodeName		Nombre del nodo xml cuyo atributo se quiere obtener.
     * @param ItemName		Nombre del atributo name del nodo que se quiere buscar.
     * @param AttrName		Nombre del atributo cuyo valor se quiere obtener.
     * @return
     * @throws Exception
     */
    NodePropertyValueBase(BaseNode: XmlNode, NodeName: string, ItemName: string, AttrName: string): string;
    NodePropertyValue(NodeName: string, ItemName: string, AttrName: string): string;
    SetNodePropertyValue(NodeName: string, ItemName: string, AttrName: string, sValue: string): void;
    GroupPropertyValue(GroupId: string, AttrName: string): string;
    CollPropertyValue(AttrName: string): any;
    getFirstParentCollection(): XoneDataCollection;
    getParentCollection(): XoneDataCollection;
    ExtractConnections(): boolean;
    GetNodeList(NodeName: string, AttrName?: string, AttrValue?: string, Exist?: boolean): XmlNodeList;
    getNodeList(NodeName: string, AttrName?: string, AttrValue?: string, Exist?: boolean): XmlNodeList;
    /**
     * @param NodeName		Nombre del nodo que se quiere buscar.
     * @param AttrName		Nombre del atributo que se quiere comparar.
     * @param AttrValue		Valor que tiene que tener el atributo para reconocer un nodo como v\xE1lido.
     * @return				Devuelve un nodo XML dentro del nodo de esta colecci\xF3n con un atributo cuyo valor se solicita.
     */
    GetNode(NodeName: string, AttrName?: string, AttrValue?: string): XmlNode;
    getNode(NodeName: string, AttrName?: string, AttrValue?: string): XmlNode;
    getNodeAttr(NodeName: string, AttrName: string): string;
    Load(): boolean;
    get BitProps(): string[];
    get FormulaProps(): string[];
    getIsDebugging(): boolean;
    getLocalObject(FieldName: string | number | Object, FieldValue?: Object): XoneDataObject;
    get(FieldName: string | number | Object, FieldValue?: Object): XoneDataObject;
    getObject(FieldName: string | number | Object, FieldValue?: Object, UseFilters?: boolean, SearchDb?: boolean): XoneDataObject;
    findObject(SearchCriteria: string): XoneDataObject;
    /**
     * Genera un ROWID a partir de los datos de r\xE9plica y tablas de esta colecci\xF3n
     * @return			Devuelve un nuevo ROWID para la tabla a que pertenece esta colecci\xF3n.
     */
    GenerateRowId(): string;
    /**
     * TRUE si el valor que se pasa como par\xE1metro es un ROWID \xFAnico (no existe en la tabla afectada ning\xFAn registro con este ROWID)
     * @param RowId				Valor de ROWID que se quiere comprobar en la tabla de esta colecci\xF3n.
     * @return					Devuelve TRUE si el ROWID no existe en la tabla (se puede usar para un nuevo registro.)
     * @throws Exception
     */
    IsUniqueRowId(RowId: string): boolean;
    /**
     * @return			Devuelve el nombre del campo ROWID usado por esta colecci\xF3n.
     */
    getRowIdFieldName(): string;
    /**
     * @return			Devuelve el nombre del objeto en la fuente de datos ya con el prefijo sustituido y dem\xE1s.
     */
    getFixedObjectName(): string;
    getFixedUpdateObjectName(): string;
    MapField(FieldName: string, DatabaseField?: boolean): string;
    GetResultSet(FieldName: string, FieldValue: any): IResultSet;
    DevelopObjectValue(Value: any, ForceNulls?: boolean): string;
    getObjectName(): string;
    /**
     * Adiciona un objeto a la colecci\xF3n
     * @param Item			Objeto de datos que se va a adicionar a la colecci\xF3n.
     * @param Index			Indice en el cual se quiere insertar el objeto. Si es mayor que la cantidad de elementos lo inserta al final.
     * @return				Devuelve TRUE si se ha insertado el objeto correctamente.
     * @throws Exception
     */
    addItem(Item: XoneDataObject, Index?: number): boolean;
    /**
     * TRUE si el campo cuyo nombre se indica es un campo enlazado (tiene mapcol)
     * @param FieldName			Nombre del campo que se quiere comprobar.
     * @return					Devuelve TRUE si el campo es enlazado de verdad.
     */
    IsLinkedField(FieldName: string): boolean;
    getIdFieldName(): string;
    /**
     * K11010501:	Modificaciones para la versi\xF3n 1.5 de Android.
     * @return
     */
    getIdFieldType(): number;
    getAccessString(): string;
    get accessString(): string;
    getCollPropertyValue(propiedad: string): any;
    /**
     * @return			Devuelve TRUE si el campo clave principal de la colecci\xF3n es de tipo texto.
     */
    getStringKey(): boolean;
    getLookupMacroName(): string;
    EvaluateAllMacros(Sentence: string, EvalLookupMacro?: boolean): string;
    /**
     * @param sVariableName Nombre de la variable cuyo valor se quiere leer.
     * @return Devuelve la variable cuyo nombre se pasa como par\xE1metro. Si la variable no existe devuelve NULL.
     */
    private SafeGetVariableList;
    getVariables(sVariableName: string): Object;
    getVariable(sVariableName: string): Object;
    /**
     * Asigna valor a la variable cuyo nombre se pasa como par\xE1metro.
     * K11011201:	Modificaciones en el tratamiento de las variables.
     * Poner esto p\xFAblico
     *
     * @param sVariableName Nombre de la variable que se quiere asignar.
     * @param value         Valor que se quiere asignar a la variable.
     */
    setVariables(sVariableName: string, value: Object): void;
    /**
     * Asigna valor a la variable cuyo nombre se pasa como par\xE1metro.
     * K11011201:	Modificaciones en el tratamiento de las variables.
     * Poner esto p\xFAblico
     *
     * @param sVariableName Nombre de la variable que se quiere asignar.
     * @param value         Valor que se quiere asignar a la variable.
     */
    setVariable(sVariableName: string, value: Object): void;
    /**
     *
     * @param AccessString
     */
    ParseMacros(AccessString: string): void;
    /**
     * @return				Devuelve el valor de la macro cuyo nombre se pasa como par\xE1metro.
     * @param MacroName		Nombre de la macro cuyo valor se quiere conocer
     */
    getMacro(MacroName: string): string;
    /**
     * @return				Devuelve el valor de la macro cuyo nombre se pasa como par\xE1metro.
     * @param MacroName		Nombre de la macro cuyo valor se quiere conocer
     */
    getMacros(): object;
    /**
     * Asigna valor a la macro cuyo nombre se pasa como par\xE1metro.
     * @param MacroName		Nombre de la macro que se quiere asignar.
     * @param MacroValue	Valor que se quiere asignar a la macro. Si se pasa NULL se sustituir\xE1 por cadena vac\xEDa.
     */
    setMacro(MacroName: string, MacroValue: string): void;
    get strPk(): string;
    set strPk(value: string);
    GetMessage(sKey: string, sDefault: string): string;
    get Options(): DataCollectionOptions;
    createObject(initialize?: object, addToColl?: boolean): XoneDataObject;
    /**
     * Crea un objeto de datos usando el ClassName o ProgId de la colecci\xF3n.
     * @param CreateNew		TRUE si se quiere crear un objeto nuevo. FALSE para crear un objeto que se cargar\xE1 de base de datos.
     * @return				Devuelve el objeto reci\xE9n creado. NULL si no se puede crear el objeto o no se conoce la clase.
     * @throws XoneGenericException
     */
    CreateObject(CreateNew?: boolean): XoneDataObject;
    getOwnerApp(): XoneApplication;
    getMultipleKey(): boolean;
    /**
     * @return			Devuelve una lista de claves cuando la colecci\xF3n tiene claves m\xFAltiples
     */
    getKeyFields(): Vector<string>;
    /**
     * Devuelve el tipo de la propiedad o campo cuyo nombre se pasa como par\xE1metro.
     * @param FieldName			Nombre del campo o propiedad cuyo tipo se quiere conocer.
     * @return					Devuelve el tipo declarado en la propiedad o "absent" si no est\xE1 definida.
     * @throws Exception
     */
    PropType(FieldName: string): string;
    /**
     * Devuelve la visibilidad de una propiedad teniendo en cuenta plataformas y dem\xE1s.
     * @param FieldName			Nombre del campo o propiedad cuya visibilidad se quiere conocer.
     * @return					Devuelve el valor de "visible" para este campo, o "1" si no est\xE1 definido.
     * @throws Exception
     */
    PropVisibility(FieldName: string): string;
    isIndexed(): boolean;
    getProperties(): XmlNode;
    /**
     * Esta funci\xF3n devuelve la bandera que indica si hay que usar objetos en la restauraci\xF3n de mapeos
     * cuando se trata de colecciones complejas en las que hay varios niveles de objetos en la restauraci\xF3n.
     * @return		Devuelve el valor de la bandera (TRUE por defecto, se cambia durante la ejecuci\xF3n si es necesario)
     */
    getUseObjectsInRestore(): boolean;
    /**
     * Asigna valor a la bandera que indica que en vez de lanzar una SQL y devolver una fila de base de datos hay
     * que cargar el objeto y utilizarlo tal cual porque en las restauraciones se usan campos que est\xE1n a varios niveles
     * de anidamiento.
     * @param value		TRUE para usar objetos, FALSE para utilizar una fila en base de datos (m\xE1s r\xE1pido y eficiente)
     */
    setUseObjectsInRestore(value: boolean): void;
    PropertyTitle(FieldName: string): string;
    IsFormulaProperty(FieldName: string): boolean;
    IsBitProperty(FieldName: string): boolean;
    getDeferredLoad(): boolean;
    GetCurrentItemValue(FieldName: string): any;
    FieldExists(FieldName: string): boolean;
    getSpecial(): boolean;
    get isSpecial(): boolean;
    getObjectIndex(Item: XoneDataObject): number;
    /**
     * K11010501:	Modificaciones para la version 1.5 de Android.
     *
     * TODO 24/01/2019 Juan Carlos
     * Esta funci\xF3n no est\xE1 teniendo en cuenta los types que inventamos posteriormente que no
     * siguen la regla de la primera letra indicado el tipo de dato en base de datos. Corrijo el
     * switch y pongo constantes p\xFAblicas, que el resto del c\xF3digo deber\xEDa empezar a usar. Dejo la
     * funci\xF3n antigua comentada abajo por si acaso.
     *
     * PROP_TYPE_INTEGER = Integer (Type N)
     * PROP_TYPE_STRING = String (Type T, IMG, PH, DR)
     * PROP_TYPE_DOUBLE = Double (Type N2, N3, N4, etc...)
     * PROP_TYPE_DATE = Fecha (Type D, DT, TT)
     * PROP_TYPE_RESULTSET = ResultSet (Type Z) Su valor es 0 como integer, no s\xE9 porqu\xE9 esto est\xE1
     * as\xED pero seguramente sea malo.
     *
     * @param sTypeName
     * @return
     */
    getTypeFromXml(sTypeName: string): number;
    /**
     *  Bloquea la colecci\xF3n para que no se pueda limpiar ni recargar
     */
    lock(): void;
    /**
     *  Desbloquea la colecci\xF3n para que se puede vaciar y/o llenar
     */
    unlock(): void;
    isLock(): boolean;
    /**
     * Limpia la colecci\xF3n de los objetos que hay en memoria. Si la colecci\xF3n est\xE1 bloqueada no hace nada.
     * @return			TRUE si la operaci\xF3n es correcta.
     */
    clear(): boolean;
    /**
     * Efect\xFAa la limpieza real de la colecci\xF3n aunque esta est\xE1 bloqueada
     * @return		Devuelve TRUE si la colecci\xF3n se limpia correctamente.
     */
    private ClearCollection;
    /**
     * @return			Devuelve la cadena para el ordenamiento de los datos.
     */
    getSort(): string;
    /**
     * Asigna valor a la cadena de ordenamiento de los datos de la colecci\xF3n.
     * @param value		Nuevo valor de la cadena de ordenamiento de los datos de la colecci\xF3n.
     */
    setSort(value: string): void;
    setLinkFilter(str: string): void;
    /**
     * @return			Devuelve el filtro interno, le\xEDdo del atributo filter del mappings y usado para enlazar contents
     */
    getLinkFilter(): string;
    /**
     * @return			Devuelve el filtro externo usado por los frameworks para limitar las b\xFAsquedas
     */
    getFilter(): string;
    /**
     * Asigna valor al filtro de usuario de la colecci\xF3n.
     * @param value		Nuevo valor para el filtro de la colecci\xF3n.
     */
    setFilter(value: string): void;
    /**
     * @return			Devuelve el Objeto propietario de la colecci\xF3n cuando se usa como contents
     */
    getOwnerObject(): XoneDataObject;
    /**
     * Permite asignar el objeto propietario de la colecci\xF3n en tiempo de ejecuci\xF3n.
     * @param value		Nuevo objeto propietario de la colecci\xF3n (i.e. de la cual es contents)
     */
    setOwnerObject(value: XoneDataObject): void;
    /**
     * Crea un clon de esta colecci\xF3n (no copia el contenido)
     * @return				Devuelve la colecci\xF3n creada con los datos de esta colecci\xF3n tambi\xE9n clonados
     * @throws Exception
     */
    createClone(): XoneDataCollection;
    CreateClone(): XoneDataCollection;
    /**
     * Copia todas las variables de esta colecci\xF3n hacia la que se pasa como par\xE1metro
     * @param DestColl		Colecci\xF3n hacia la que se quieren copiar las variables de esta colecci\xF3n.
     */
    private CopyVariables;
    /**
     * Copia todas las macros de esta colecci\xF3n hacia la que se pase como par\xE1metro.
     * @param DestColl			Colecci\xF3n hacia la que se quieren copiar las macros de esta.
     */
    CopyMacros(DestColl: XoneDataCollection): void;
    loadAll(CountRecords?: boolean, options?: any): XoneDataCollection;
    loadAllAsync(CountRecords?: boolean, options?: any): XoneDataCollection;
    startBrowse(CountRecords?: boolean, options?: any): XoneDataCollection;
    moveNext(): boolean;
    endBrowse(): boolean;
    get currentItem(): XoneDataObject;
    getCurrentItem(): XoneDataObject;
    getConnection(): XoneConnectionData;
    isFull(): boolean;
    /**
     * @return		Devuelve TRUE si la colecci\xF3n se ha cargado completamente con LoadAll.
     */
    getFull(): boolean;
    /**
     * A11092602: Permitir el uso de resultsets jer\xE1rquicos en forma de \xE1rbol para cargas m\xFAltiples.
     * Hacer que la colecci\xF3n est\xE1 llena a la fuerza.
     * @param isFull
     */
    setFull(isFull: boolean): void;
    getCount(): number;
    count(): number;
    get length(): number;
    PrepareSqlString(Sentence: string, ChkGroup?: boolean, Prefiltered?: boolean): string;
    browseLength(): number;
    /**
     * K13080701: La ejecuci\xF3n de scripts con argumentos a nivel de colecci\xF3n falta en algunos casos.
     * Esta acci\xF3n podr\xEDa llevar argumentos...
     */
    ExecuteCollAction(ActionNode: string, ActionName: string, ...Arguments: any[]): any;
    executeCollAction(ActionNode: string, ActionName: string, ...Arguments: any[]): any;
    prepareContext(scope: XoneDataCollection | XoneDataObject, ActionNode: XmlNode | string, ...Arguments: any[]): ScriptParams;
    /**
     * Ejecuta un nodo runscript pasando el script y el contexto a la aplicaci\xF3n base.
     * @param ActionNode		Nodo script a ejecutar.
     * @return					Devuelve TRUE si se ejecutan correctamente todos los scripts.
     * @throws Exception
     */
    doRunScript(ActionNode: XmlNode | string, ...Arguments: any[]): any;
    protected DoRunScriptAsync(ActionNode: XmlNode | string, ...Arguments: any[]): any;
    getItem(...FunctionParams: any[]): XoneDataObject;
    private WrapGetItem;
    deleteItem(key: number | string | XoneDataObject): boolean;
    /**
     * Elimina un objeto de la colecci\xF3n dado su \xEDndice num\xE9rico
     * @param Index				Indice del objeto en la colecci\xF3n (comenzando por cero)
     * @return					Devuelve TRUE si la operaci\xF3n es correcta.
     * @throws Exception
     */
    removeItem(Index: number | string | XoneDataObject): boolean;
    loadFromJson(...FunctionParams: any[]): XoneDataCollection;
    private loadFromJsonArray;
}`,xe=`
declare class XoneApplication implements IXoneApp {
    get isApplication(): boolean;
    private _objectID;
    private m_PushExit;
    private m_lstConnections;
    private m_objectDeveloper;
    private m_lstSysCollNames;
    private m_strAppName;
    private m_lstQualifyCaches;
    private m_strConsole;
    private m_lstParamStack;
    private m_lstGlobalMacros;
    private m_nDebugPort;
    private m_dbgLocker;
    private m_lstCssList;
    private m_lstCollPropUndefinedValues;
    private m_lstConditionCssList;
    private m_strFixedVisualCondition;
    private m_strVisualConditions;
    private bIsCharWidthCompatibility;
    private bIsImageValuePriorized;
    private m_lstOpenColls;
    private m_bLoadLayouts;
    private m_bSelectiveReplication;
    private m_lstVisualCondDescriptors;
    private m_lstCachedScripts;
    private m_globalItems;
    private m_user;
    private m_lstCollections;
    private m_lstCollPropValueCaches;
    /**
     * K12050901: Permitir activar o desactivar las caches de valores de atributos.
     */
    private m_bCacheAttrValues;
    /**
     * O13080801: Mecanismo de optimizaci\xF3n para la gesti\xF3n de controles visuales y atributos.
     * Lista con los atributos que var\xEDan porque tienen macros.
     */
    protected m_lstEvaluatedAttributes: Hashtable<string, Array<string>>;
    private m_jsonConfigFile;
    private m_strAppPath;
    private m_fileManager;
    private m_messages;
    protected m_company: IXoneObject;
    private m_strEntIdOwner;
    private m_strUserIdColl;
    private m_strEntIdLevel;
    private m_strEntIdColl;
    private m_currency;
    private m_strFilesPath;
    private m_nVersionMapping;
    private m_xmlConfigFile;
    private m_context;
    private m_nMasterMid;
    private m_strDatemask;
    private m_bIsReplicating;
    private m_strPlatform;
    private m_nOperIdLength;
    private m_nRowIdLength;
    private mapLoginCollections;
    private mapEntryPointCollections;
    private sOverridenEntryPointCollection;
    private m_strEntTable;
    private m_strEntPk;
    private m_nEntPkType;
    private m_ui;
    private m_bHasStylesheets;
    private m_xmlAppNode;
    private m_strDefaultLanguage;
    private m_nScriptOptimizationLevel;
    private m_bLogMemoryUsage;
    private m_bSqlProfilerMode;
    private m_bDebug;
    private mIsEncryptFiles;
    private m_loader;
    private m_lstCollExceptions;
    private m_lstPropExceptions;
    private m_error;
    private __SCRIPT_WRAPPERASYNC;
    private m_bExternalEntIdColl;
    private m_bExternalEntIdLevel;
    private m_bExternalEntIdOwner;
    /**
     *
     */
    constructor();
    private static getCollExceptions;
    private static getPropExceptions;
    getSysDatemask(): string;
    isDebugMode(): boolean;
    addEvaluatedAttributesList(sCollectionName: any, sKey: string): void;
    GetWeekDayName(n: number): any;
    currentContext(): any;
    private m_isBrowser;
    get isBrowser(): boolean;
    AddOpenColl(Collection: XoneDataCollection): void;
    RemoveOpenColl(Collection: XoneDataCollection): void;
    exports: any;
    RunScriptAsyncNOFunc(strFunctionName: any, strLang: string, strScript: string, ctx: ScriptContext, ...Arguments: any[]): any;
    RunScriptAsync(strFunctionName: any, strLang: string, strScript: string, ctx: ScriptContext, Arguments: any, argsName: any, argsValue: any): any;
    private __extendStatics;
    private __extends;
    getDefaultLanguage(): string;
    m_bIsReady: boolean;
    m_strObjectPrefix: string;
    getPlatform(): string;
    GetClassName(strProgId: any): string;
    CheckClassName(strClassName: string): string;
    getIdColl(): string;
    getCurrentCompany(): XoneDataObject;
    getUserIdColl(): string;
    getUser(): IXoneObject;
    getCurrency(): IXoneObject;
    getEntIdLevel(): string;
    getEntIdColl(): string;
    getEntIdOwner(): string;
    getUserInterface(): any;
    /**
     * Asigna valor al objeto que se usar\xE1 para gestionar el UI de la aplicaci\xF3n.
     * @param value		Nuevo objeto de UI de la aplicaci\xF3n.
     * @throws XoneGenericException
     */
    setUserInterface(value: any): void;
    /**
     * Adiciona una conexi\xF3n de datos a la lista interna de conexiones
     * @param Connection			Conexi\xF3n que se quiere adicionar a la lista.
     * @return						TRUE si la conexi\xF3n se ha a\xF1adido correctamente.
     */
    private AddConnection;
    /**
     * Crea una conexi\xF3n de datos. Las conexiones pueden ser de base de datos, remotas, etc.
     * @param NodeData				Nodo XML para construir la conexi\xF3n, la cual saca de aqu\xED sus datos. Si se pasa NULL se crea una conexi\xF3n principal.
     * @return						Devuelve la nueva conexi\xF3n reci\xE9n creada o NULL si algo falla.
     */
    private CreateConnection;
    LoadConnection(Data: XmlNode): boolean;
    getConnection(ConnectionName?: string): XoneConnectionData;
    login(...FunctionParams: any): XoneDataObject;
    private getXOneScriptObjects;
    logonUser(UserName: string, Password: string, errorMessage: string, silentMode?: boolean): XoneDataObject;
    protected GetSysCollName(SysName: string): string;
    getSysCollection(CollName: string): XoneDataCollection;
    addLoginCollection(loginCollection: XmlNode, loginCollectionDefault: string): void;
    getLoginCollectionName(condition: string): string;
    addEntryPointCollection(entryPointCollection: XmlNode, entryPointDefault: string): void;
    getEntryPointCollection(sCondition: string): string;
    setOverridenEntryPoint(sEntryPointCollection: string): void;
    logout(...FunctionParams: any[]): void;
    IniciarApp(codePath: string, scriptWrapper: any, fileManager: IFileManager, connString?: string): void;
    /**
     * Inicializa la aplicacion. Se le pasa una cadena de conexion para pasarle a la conexion principal de la aplicacion. Si la conexion principal no existe, la crea.
     * @param ConnString			Cadena de conexion para pasarle a la conexion principal. Si ya tenoa una voa nodo APP, se sustituye por esta.
     * @return						Devuelve TRUE si la inicializacion es correcta. FALSE si falla algo que no dispare excepciones.
     * @throws Exception
     */
    Initialize(ConnString?: string): boolean;
    LoadConfigFile(executionPath: string, appSource: any, Source: any, useTranslation: boolean, version: number): IXmlDocument;
    /**
     * Carga el fichero app.xml que es el nuevo formato de integrar las cosas de la app
     * @param Source				Stream del cual se leer\xE1n los datos del fichero mappings. El framework tendr\xE1 que buscarse la vida para abrirlo.
     * @return						Devuelve TRUE si la carga del mappings ha sido correcta.
     * @throws Exception
     */
    LoadAppFile(executionPath: string, Source: any, useTranslation: boolean): boolean;
    /**
     *  Busca el nodo app dentro del fichero mappings y carga su contenido
     * @throws Exception
     */
    private LoadAppNode;
    private LoadAndSaveNewCssFile;
    private LoadNewCssFile;
    getCollection(name: string): XoneDataCollection;
    LoadCollection(CollName: string): XoneDataCollection;
    private LoadExternalCollection;
    hashCode(): string;
    getCompany(): IXoneObject;
    GetCollPropValueCache(CollName: string, NodeType?: string, NodeName?: string): Hashtable<string, any>;
    GetCollPropUndefinedValues(CollName: string): string[];
    getMessageHolder(): IMessageHolder;
    getConfigFile(): XmlNode;
    /**
     * O13030601: Optimizaciones en la b\xFAsqueda de CSS para atributos.
     * Pica la cadenilla de condiciones visuales y le hace un trabajillo de acondicionamiento para
     * que no haya que parsear las cadenas en cada llamada.
     */
    private ParseVisualConditions;
    private CreateVisualCombinations;
    setVisualConditions(Value: string, IsFixed: boolean): void;
    /**
     * ADD TAG Luis
     * Leer el visual conditions
     *
     * @return
     */
    getCurrentVisualConditions(): string;
    getVisualConditionsDescriptors(): Hashtable<String, Array<String>>;
    getCurrentVisualConditionsDescriptors(): Array<string>;
    getAppPath(): string;
    getSourcePath(FileName: string): string;
    setAppPath(value: string): void;
    setApplicationName(value: string): void;
    private updateVisualConditionsFromMacro;
    setGlobalMacro(MacroName: string, MacroValue: any): void;
    getGlobalMacro(MacroName: string): any;
    GetAllGlobalMacros(): Hashtable<string, any>;
    /**
     *  Carga los datos de la empresa actual
     *  @param Company				Empresa que se quiere setear como activa.
     *  @return						Devuelve TRUE si los datos de la empresa se cargan correctamente.
     */
    protected LoadCompanyData(Company: IXoneObject): void;
    GenerateEntIdOwner(): string;
    GenerateEntIdLevel(arg0: string): string;
    GenerateEntIdColl(arg0: string): string;
    /**
     * Elimina la empresa actual.
     */
    private clearCompanyData;
    EvaluateMacro(MacroName: string): string;
    PrepareSqlString(Sentence: string): string;
    PrepareUserMacrosSqlString(Sentence: string): string;
    /**
     *
     * @param FileName
     * @param ClassName
     * @return
     */
    FindStylesheetByFileAndClassName(FileName: string, ClassName: string): XoneCssRule;
    /**
     * A11070701: Introducci\xF3n de los CSS en la maquinaria para poder parametrizar el mappings.
     * Obtiene una hoja de estilo basado en el nombre de clase que se pasa. Las hojas de estilo \xFAltimas
     * redefinen a las primeras, por lo que la b\xFAsqueda empieza de atr\xE1s hacia adelante.
     * Opera recursivamente para aquellos estilos que tengan herencia.
     *
     * @param ClassName		Selector de clase para buscar el estilo
     * @param AttrName		Nombre del atributo cuyo valor se quiere obtener.
     * @return				Devuelve un estilo que contenga este atributo o NULL.
     */
    FindStylesheetByClassName(ClassName: string, AttrName: string): XoneCssRule;
    protected FindStylesheetByClassAttrList(ClassName: string, AttrName: string, listCss: Array<XoneCssParser>): XoneCssRule;
    protected FindStylesheetByClassNameList(ClassName: string, CssList: Array<XoneCssParser>): XoneCssRule;
    /**
     * A11070701: Introducci\xF3n de los CSS en la maquinaria para poder parametrizar el mappings.
     *
     * @return		TRUE si en la aplicaci\xF3n hay al menos un CSS cargado.
     */
    hasStylesheets(): boolean;
    /**
     * Devuelve la lista de cualificaci\xF3n de campos de la colecci\xF3n cuyo nombre se pasa como par\xE1metro.
     * @param CollName		Nombre de la colecci\xF3n cuya lista de cualificaci\xF3n se quiere obtener.
     * @return				Devuelve una tabla de cache para la colecci\xF3n cuyo nombre se pasa como par\xE1metro.
     */
    GetQualifyCache(CollName: string): Hashtable<string, string>;
    /**
     * F09052004:	Modificaci\xF3n de las interfaces para implementar manejo de errores.
     * Implementaci\xF3n de la funci\xF3n para registrar el error de ejecuci\xF3n a nivel de script.
     * Se utiliza la variable de error XOne para almacenar estos datos.
     */
    RegisterError(Code: number, Description: string): void;
    /**
     * @return			Expone el objeto de error de esta aplicaci\xF3n
     */
    getError(): XoneError;
    ContainsError(): boolean;
    getAppNode(): XmlNode;
    bind(): void;
    createCollection(Name: string, SourceNode: XmlNode, version: number): XoneDataCollection;
    /**
     * @return			Devuelve TRUE si la aplicaci\xF3n tiene activa la r\xE9plica selectiva (solo modifican la cola las colecciones marcadas)
     */
    getSelectiveReplication(): boolean;
    /**
     * Asigna valor a la bandera que indica si la aplicaci\xF3n tiene activa la r\xE9plica selectiva.
     * @param value		TRUE para habilitar la r\xE9plica selectiva, FALSE para usar r\xE9plica normal (todo replica)
     */
    setSelectiveReplication(value: boolean): void;
    createObject(sClassId: string): {};
    decryptString(value: string): void;
    encryptString(value: string): void;
    error(): void;
    executeSql(sql: string): void;
    failWithMessage(Code: number, Message: string): void;
    getAllowedEnterprises(): void;
    getAllowedUsers(): void;
    getCollectionCount(): number;
    getConnString(): void;
    getCurrentEnterprise(): IXoneObject;
    getFilesPath(): string;
    getReplicationId(): void;
    getReservedObject(): void;
    isReplicating(): void;
    popValue(): void;
    pushValue(objData: object): void;
    pushValueAndExit(objData: object): void;
    registerPush(): void;
    safeRound(value: number): void;
    setConnString(param0: any): void;
    setIsReplicating(booleano: any): void;
    variantToString(param0: any): void;
    writeConsoleString(param0: any): void;
}
`,ue=`
declare class XoneDataObject implements IXoneObject {
    get isDataObject(): boolean;
    private UNIQUE_ID;
    private static PARSE_NODE_NAME;
    private static PARSE_EXPECTING_OPEN_PAR;
    private static PARSE_PARAM_VALUE;
    private static PARSE_EXPECTING_COMMA;
    private mapEvents;
    /**
     * Lista con los valores de los campos normales
     * K13061901: Modificaciones para mejorar el soporte de concurrencia en la maquinaria.
     * Hacer esta lista concurrente...
     */
    protected m_lstNormalProperties: Hashtable<string, any>;
    /**
     * Lista con las propiedades que se han modificado
     */
    protected m_lstDirtyProperties: Vector<string>;
    /**
     * Colecci\xF3n a la cual pertenece este objeto (al menos la que se us\xF3 como plantilla para crearlo)
     */
    protected m_owner: XoneDataCollection;
    /**
     * Cadena clave del objeto. Generada cuando se carga o cuando se pide por primera vez.
     */
    protected m_strObjectId: string;
    /**
     * ID num\xE9rico del objeto. -1 si la clave no es num\xE9rica. 0 si el objeto es de lectura solamente.
     */
    protected m_lObjectId: number;
    /**
     * TRUE si el objeto no se puede almacenar en base de datos ni fuente de datos ninguna.
     */
    protected m_bReadOnly: boolean;
    /**
     * TRUE si el objeto est\xE1 "sucio", es decir, alguna de sus propiedades ha cambiado de valor
     */
    protected m_bDirty: boolean;
    /**
     * TRUE si el objeto es el elemento actual de un recorrido SB/EB
     */
    protected m_bIsCurrentItem: boolean;
    /**
     * Lista con las colecciones de contents de este objeto
     */
    protected m_lstContents: Hashtable<string, XoneDataCollection>;
    /**
     * TRUE si ya se han cargado los contents
     */
    protected m_bContentsLoaded: boolean;
    protected m_bIsLoading: boolean;
    protected m_lstOldValues: Hashtable<string, any>;
    protected m_bChangesMade: boolean;
    protected m_lstXlatProperties: Vector<string>;
    protected m_lstDevelopedXlatProperties: Vector<string>;
    protected m_bIsCloning: boolean;
    protected m_bIsChecking: boolean;
    protected m_bForceCurrChanges: boolean;
    protected m_bUseTimestamp: boolean;
    protected m_dtTimeStamp: Calendar;
    protected m_bPropagateDirty: boolean;
    protected m_bXlatExist: boolean;
    protected m_bIsRestoring: boolean;
    protected m_bIsCreating: boolean;
    protected m_strChangeField: string;
    protected m_bDependent: boolean;
    protected m_bFollowRules: boolean;
    protected m_lstLinkItems: Vector<any>;
    protected m_lstDevelopingFields: Vector<string>;
    protected m_bNewClone: boolean;
    protected m_lstVariables: Hashtable<string, Object>;
    /**
     * M11051201: Mecanismo para soporte multilenguaje en los componentes y dem\xE1s cosas.
     * Aqu\xED almacenamos una referencia al gestor de mensajes de la aplicaci\xF3n.
     */
    protected m_messages: IMessageHolder;
    /**
     * F11070701: Modificaciones para solucionar los enlaces y grabaci\xF3n con claves no num\xE9ricas.
     * Esta banderilla se resetea cuando se carga el objeto de disco, cuando se graba o cuando
     * se hace algo que implique que no es un nuevo objeto.
     */
    protected m_bNewObject: boolean;
    protected m_lstCachedAttributes: Hashtable<string, string>;
    /**
     * TODO Juan Carlos
     * Lista de atributos que se han modificado por script. Los mantenemos en una lista separada
     * para que no se borren al cambiar las condiciones visuales.
     */
    protected m_lstOverridenFieldPropertyValueAttributes: Hashtable<string, string>;
    /**
     * A12122701: Sistema para gestionar la estructura l\xF3gica de vistas en la maquinaria.
     * Indica en qu\xE9 nivel de profundidad de actualizaci\xF3n de valores estamos. Cero indica nivel ra\xEDz
     * y por tanto se pueden reevaluar las f\xF3rmulas de visiblidad y tal.
     */
    protected m_nSetValDepth: number;
    /**
     * K13081201: Cambios en el tratamiento de f\xF3rmulas para mejorar la concurrencia.
     * Parece que las f\xF3rmulas son un problema co\xF1o...
     */
    protected m_formulaLocker: Object;
    /**
     * A12122701: Sistema para gestionar la estructura l\xF3gica de vistas en la maquinaria.
     * Juegos de valores de visibilidad y habilitaci\xF3n de campos. Contiene las referencias a las f\xF3rmulas
     * parseadas y a sus valores para este objeto, se refrescan cada vez que un campo de disparo cambia
     * de valor.
     * A13022106: Mecanismo para abstraer m\xE1s el modelo de objetos usando interfaces.
     * Esto lo traemos a la clase base.
     */
    protected m_formulas: Hashtable<string, any>;
    private mMapSysOrder;
    private m_model;
    get model(): any;
    set model(v: any);
    /**
     * Construye un objeto de datos
     * @param OwnerCollection		Colecci\xF3n propietaria de este objeto.
     */
    constructor(OwnerCollection: XoneDataCollection);
    private addSingleProperty;
    private addObjectProperties;
    private getNormalValue;
    private setNormalValue;
    PrepareSpecialCollection(arg0: XoneDataCollection): boolean;
    EvaluateRule(rule: IXmlNode): boolean;
    OnCreate(CreateNew: boolean): boolean;
    /**
     * A12042505: Permitir que se pueda hacer ExecuteNode de un nodo en vez de un nombre.
     * Ejecuta todas las acciones de un nodo siempre que se cumplan las reglas que contenga.
     *
     * A12081701: Mecanismo para pasar par\xE1metros a un nodo de acci\xF3n.
     * Pasar los argumentos de llamada.
     *
     * @param node				Nodo cuyas acciones se quieren ejecutar.
     * @return					Devuelve TRUE si las acciones del nodo se ejecutan correctamente.
     * @throws Exception
     */
    executeNode(node: XmlNode | string, ...Arguments: any[]): boolean;
    ExecuteNode(node: XmlNode | string, ...Arguments: any[]): boolean;
    /**
     * Ejecuta todas las acciones de un nodo.
     * A12081701: Mecanismo para pasar par\xE1metros a un nodo de acci\xF3n.
     * Un par\xE1metro con la lista de argumentos que tiene que traer el nodo en caso de necesitarlos.
     *
     * @param Node			Nodo XML cuyas acciones se quieren ejecutar.
     * @param Prefix		Prefijo de las acciones a ejecutar. NULL para usar 'action'.
     * @param Scopes		Lista de \xE1mbitos para resolver los objetos sobre los que operan las acciones del nodo.
     * @return				Devuelve TRUE si todas las acciones se ejecutan correctamente.
     * @throws Exception
     */
    protected ExecuteNodeActions(Node: XmlNode, Prefix: string, Scopes: Array<any>, ...Arguments: any[]): boolean;
    protected ExecuteNodeAction(FieldName: string, Action: XmlNode, ActionType?: number, ...Parameters: any[]): boolean;
    EvaluateNodeRules(node: XmlNode, scopesList?: Array<any>): boolean;
    /**
     * Ejecuta un nodo runscript pasando el script y el contexto a la aplicaci\xF3n base.
     * @param ActionNode		Nodo script a ejecutar.
     * @return					Devuelve TRUE si se ejecutan correctamente todos los scripts.
     * @throws Exception
     */
    doRunScript(ActionNode: XmlNode | string, ...Arguments: any[]): any;
    protected DoRunScriptAsync(ActionNode: XmlNode | string, ...Arguments: any[]): any;
    /**
     * Asigna valor a un campo de este objeto a partir del valor sacado del nodo XML.
     * @param ActionNode		Nodo XML con los datos del campo y valor que se le va a asignar.
     * @return					Devuelve TRUE si la asignaci\xF3n es correcta.
     * @throws Exception
     */
    private DoSetVal;
    FieldExists(FieldName: string): boolean;
    /**
     * F11092606: Cuando se carga un objeto con Load, limpiar los contents.
     * Esta funci\xF3n limpia los contents del objeto.
     */
    ClearContents(): void;
    protected resolveFieldName(name: string): string;
    protected reverseResolveFieldName(name: string): string;
    Load(Source: IResultSet): boolean;
    /**
     * A11092602: Permitir el uso de resultsets jer\xE1rquicos en forma de \xE1rbol para cargas m\xFAltiples.
     * Rellena un contents del objeto basado en un resultset que contiene los objetos.
     *
     * @param ContentsName
     * @param Source
     * @return
     * @throws Exception
     */
    private LoadObjectContents;
    /**
     * Esta funci\xF3n se llama cuando se termina de cargar el objeto. La pueden redefinir los objetos derivados para modificar el comportamiento del objeto al cargarse.
     * @return			Devuelve TRUE si las acciones de carga se ejecutan todas sin problemas.
     * @throws XoneGenericException
     */
    protected OnLoad(): boolean;
    /**
     * Este m\xE9todo se ejecuta cuando cambia el valor de un campo. Tiene en cuenta posibles reentradas recursivas.
     * @param FieldName		Nombre del campo que ha cambiado.
     * @throws Exception
     */
    protected OnChange(FieldName: string): void;
    ObjectItem(FieldName: string, SearchCollName?: string): XoneDataObject;
    /**
     * Devuelve una colecci\xF3n contenida dentro de este objeto.
     * @param ContentsName		Indice de la colecci\xF3n dentro del objeto.
     * @return			Devuelve el contents cuyo n\xFAmero de orden se solicita o NULL si el n\xFAmero es mayor que la cantidad de contents.
     * @throws XoneGenericException
     */
    getContents(ContentsName: string | number): XoneDataCollection;
    /**
     * Crea las colecciones contents del objeto y las introduce en la lista de contents del objeto.
     * @return		Devuelve TRUE si el contents se carga correctamente.
     * @throws XoneGenericException
     */
    private LoadContents;
    /**
     * Adiciona una colecci\xF3n contents a este objeto
     * @param ContentsName			Nombre del contents dentro de este objeto.
     * @param Collection			Colecci\xF3n que se usar\xE1 como contents.
     */
    private AddContentsColl;
    getId(): any;
    getIdFieldName(): any;
    getObjectName(): any;
    PrepareSqlString(Sentence: string, bRemoveQuotes?: boolean): string;
    GetRawPropertyValue(arg0: string): Object;
    ReplaceFieldValueMacros(Sentence: string, Prefix: string, SuppressQuotes?: boolean): string;
    /**
     * Devuelve el valor de un atributo de un campo de datos de la colecci\xF3n a la cual pertenece este objeto.
     *
     * M11060901: Permitir que FieldPropertyValue eval\xFAe o no para los frameworks.
     * Un par\xE1metro m\xE1s para indicar si se eval\xFAa o no.
     *
     * @param FieldName			Nombre de la propiedad (campo) en el cual se quiere buscar un valor de atributo.
     * @param AttrName			Nombre del atributo cuyo valor se quiere obtener para el campo dado.
     * @return					Devuelve el valor del atributo o NULL si el atributo no est\xE1 definido.
     * @throws Exception
     */
    FieldPropertyValue(FieldName: string, AttrName: string, bEvaluate?: boolean): string;
    GetObjectIdString(Develop?: boolean): string;
    GetRawStringField(fieldName: string): string;
    /**
     * Desarrolla el valor de un objeto y lo devuelve como cadena lista para insertar en un SQL o un filtro.
     *
     * K12102201: Modificaci\xF3n de DevelopObjectValue para pasar ForceNulls como par\xE1metro.
     * Un par\xE1metro para indicar el valor de ForceNulls, por si alguien lo necesita.
     *
     * @param Value			Valor que se quiere desarrollar.
     * @return				Devuelve el valor en forma de cadena con sus comillas, formatos de fecha y etc. etc.
     */
    DevelopObjectValue(Value: Object, ForceNulls?: boolean): string;
    /**
     * Esta funci\xF3n se llama cuando se termina de cargar el objeto como consecuencia de una b\xFAsqueda.
     */
    OnNormalSearh(): void;
    getOwnerApp(): XoneApplication;
    /**
     * @return		Devuelve TRUE si se trata del elemento actual de un recorrido SB/EB para usar los datos sacados directamente del recordset.
     */
    getIsCurrentItem(): boolean;
    /**
     * Asigna valor a la bandera que indica que este objeto es el CurrentItem de una colecci\xF3n con carga diferida.
     * @param value		TRUE para indicar que es el objeto actual del recorrido. FALSE para un comportamiento normal.
     */
    setIsCurrentItem(value: boolean): void;
    /**
     * Limpia todas las variables de este objeto (limpia la lista)
     */
    ClearAllVariables(): void;
    /**
     * @param Develop	TRUE si se quiere que las parejas campo=valor est\xE1n separadas por AND en vez de por comas, para facilitar su uso en base de datos.
     * @return			Devuelve una cadena con las parejas campo=valor de la clave m\xFAltiple del objeto usado para identificarlo de manera \xFAnica.
     * @throws Exception
     */
    private GetMultipleKeyString;
    /**
     * @return		Devuelve la lista de IDs que forman la macro ENTIDCOLL.
     */
    GetClientIdColl(): string;
    /**
     * Asigna un valor num\xE9rico a un campo del objeto
     * @param FieldName		Nombre del campo cuyo valor se quiere asignar.
     * @param value			Valor num\xE9rico que se quiere asignar al campo.
     * @throws Exception
     */
    put(FieldName: string, value: any): void;
    /**
     * Asigna valor a una propiedad del objeto.
     * @param FieldName		Nombre del campo al que se quiere asignar valor.
     * @param Value			Valor que se quiere asignar al campo.
     * @throws XoneGenericException
     **/
    protected PutItem(FieldName: string, Value: any): void;
    /**
     * Esta funci\xF3n se llama desde get(x) para devolver el valor de una propiedad (campo) del objeto.
     * @param FieldName			Nombre del campo cuyo valor se quiere obtener.
     * @return					Devuelve el valor de la propiedad. Si es NULL se ajustar\xE1 al nulo de su tipo de datos.
     * @throws Exception
     */
    protected GetItem(FieldName: string): any;
    GetFormulaProperty(FieldName: string): any;
    GetBitmappedProperty(FieldName: string): any;
    PropertyTitle(FieldName: string): any;
    /**
     * Devuelve el valor de una propiedad de datos "normal"
     * @param FieldName		Nombre del campo cuyo valor se quiere leer.
     * @return				Devuelve el valor de una propiedad de datos "normal"
     * @throws Exception
     */
    protected GetNormalProperty(FieldName: string): any;
    /**
     * Procesa un valor antes de devolverlo a quien lo est\xE1 leyendo (aqu\xED se decodifican los valores, se ajustan tipos, etc.)
     * @param FieldName			Nombre del campo al que pertenece el valor devuelto.
     * @param Value				Valor como tal.
     * @return					Devuelve el valor ya procesado en funci\xF3n de su tipo de datos.
     * @throws Exception
     */
    private ProcessValue;
    get ownerCollection(): XoneDataCollection;
    getOwnerCollection(): XoneDataCollection;
    getValue(FieldName: any): any;
    DevelopXlatProperties(FieldName: any, arg1: boolean): boolean;
    protected AdjustNullValue(FieldName: string): any;
    private m_reactLayout;
    getLayout(visibility?: number): any;
    getLayoutAsync(visibility?: number): any;
    setLayout(value: any): void;
    getPropAttributes(Value: string | XmlNode, type?: string): any;
    NodePropertyValue(NodeName: string, ItemName: string, AttrName: string): string;
    QualifyField(FieldName: any, Sentence?: SqlParser): string;
    getNodeList(NodeName: string, AttrName?: string, AttrValue?: string, Exist?: boolean): XmlNodeList;
    /**
     * @param NodeName		Nombre del nodo que se quiere buscar.
     * @param AttrName		Nombre del atributo que se quiere comparar.
     * @param AttrValue		Valor que tiene que tener el atributo para reconocer un nodo como v\xE1lido.
     * @return				Devuelve un nodo XML dentro del nodo de esta colecci\xF3n con un atributo cuyo valor se solicita.
     */
    getNode(NodeName: string, AttrName?: string, AttrValue?: string): XmlNode;
    UnprotectString(str: any, strProtect: string): any;
    AdjustDate(str: string): string;
    AdjustMonthYear(str: string): string;
    FormatAcc(str: string): string;
    FormatCCC(str: string): string;
    AdjustAccNumber(str: string): string;
    ProtectString(str: string, arg1: number): string;
    PreprocessValue(FieldName: string, strKey: string, Value: any): void;
    SetPropertyValue(FieldName: string, FieldValue: any): void;
    GetPropertyValue(FieldName: string): any;
    /**
     * Mapea el nombre de un campo al valor real en la colecci\xF3n o base de datos
     * @param FieldName			Nombre del campo que se quiere mapear.
     * @return					Devuelve el campo mapeado por la colecci\xF3n propietaria.
     */
    private MapField;
    /**
     * Efect\xFAa el mapeo de valores enlazados una vez que se ha actualizado un campo ID mapeado a otra colecci\xF3n.
     * @param Collection		Colecci\xF3n a la cual est\xE1 enlazado el campo que ha provocado el mapeo.
     * @param FieldName			Nombre del campo ID que ha provocado el mapeo.
     * @param Source			Objeto del cual se sacar\xE1n los valores que se van a copiar hacia este.
     * @return					Devuelve TRUE si todas las actualizaciones de campos son correctas.
     * @throws Exception
     */
    private DoRestoreMapValues;
    private RestoreMapColValues;
    private RestoreMappedFields;
    /**
     * Restaura los valores de los campos traducidos (xlat)
     * @param Source			Objeto del cual se traen los valores traducidos.
     * @param Collection		Colecci\xF3n de la cual se han tra\xEDdo los valores.
     * @param TargetField		Nombre del campo que se trae del objeto enlazado.
     * @return					Devuelve TRUE si la actualizaci\xF3n de todos los campos es correcta.
     * @throws Exception
     */
    private RestoreTranslatedValues;
    /**
     * Devuelve un valor a partir de una cadena y un identificador de tipo.
     * @param StringValue		Valor representado en forma de cadena.
     * @param Type				Identificador de tipo XONE usado para convertir el valor.
     * @param UseDatemask		M\xE1scara de fecha a usar para formatear la cadena. NULL para usar el valor por defecto.
     * @return					Devuelve el valor ya convertido seg\xFAn el tipo de datos.
     * @throws XoneGenericException
     */
    GetValueFromString(StringValue: string, Type: string, UseDatemask?: string): string;
    private postNewValue;
    private postNewFieldProperty;
    PutBitmappedProperty(FieldName: string, Value: any): void;
    getParent(): XoneDataCollection;
    clone(): void;
    getContentsCount(): number;
    getFieldPropertyValue(propiedad: any, atributo: any): string;
    getOldItem(propiedad: any): void;
    setFieldPropertyValue(FieldName: string, AttrName: string, Value: string, addToEvaluated?: boolean): void;
    setNodePropertyValue(node: string, name: string, AttrName: string, AttrValue: string): void;
    getName(): string;
    setOldItem(propiedad: any, valor: any): void;
    setOwnerColl(): void;
    setValue(value: any): void;
    get(FieldName: string): any;
    getDirty(): boolean;
    setDirty(arg0: boolean): void;
    getObjectIndex(): number;
    /**
     * @param sVariableName Nombre de la variable cuyo valor se quiere leer.
     * @return Devuelve la variable cuyo nombre se pasa como par\xE1metro. Si la variable no existe devuelve NULL.
     */
    private SafeGetVariableList;
    getVariables(sVariableName: any): any;
    /**
     * Devuelve la variable cuyo nombre se pasa como par\xE1metro.
     *
     * @param sVariableName Nombre de la variable cuyo valor se quiere conocer.
     * @return Devuelve el valor de la variable o NULL si esta no est\xE1 definida.
     */
    getVariable(sVariableName: string): any;
    /**
     * Asigna valor a la variable cuyo nombre se pasa como par\xE1metro.
     * @param VarName		Nombre de la variable a la que se quiere asignar valor.
     * @param value			Valor que se quiere asignar a la variable.
     */
    putVariables(sVariableName: string, value: any): void;
    /**
     * Asigna valor a la variable cuyo nombre se pasa como par\xE1metro.
     * K11011201:	Modificaciones en el tratamiento de las variables.
     * Poner esto p\xFAblico
     *
     * @param sVariableName Nombre de la variable que se quiere asignar.
     * @param value         Valor que se quiere asignar a la variable.
     */
    setVariables(sVariableName: string, value: Object): void;
    /**
     * Asigna valor a la variable cuyo nombre se pasa como par\xE1metro.
     * K11011201:	Modificaciones en el tratamiento de las variables.
     * Poner esto p\xFAblico
     *
     * @param sVariableName Nombre de la variable que se quiere asignar.
     * @param value         Valor que se quiere asignar a la variable.
     */
    setVariable(sVariableName: string, value: Object): void;
    /**
     * F11070701: Modificaciones para solucionar los enlaces y grabaci\xF3n con claves no num\xE9ricas.
     *
     * @return	Devuelve TRUE si el objeto es nuevo (reci\xE9n creado y no se ha cargado ni grabado)
     */
    IsNew(): boolean;
    isNew(): boolean;
    loadFromJson(jsonObject: any): XoneDataObject;
    private loadFromJsonObject;
    private loadFromJsonArray;
    bind(Prop: any, Evento: any, Funcion: any): void;
    getObjectItem(indice: any): void;
    getPropertyGroup(propiedad: any): void;
    getPropertyTitle(propiedad: any): void;
    /**
     * @return		Devuelve el nombre del objeto de datos en el cual se ejecutan las acciones de escritura en la fuente de datos.
     */
    getFixedUpdateObjectName(): string;
    /**
     * @return		Devuelve una cadena con el nombre del objeto de datos ya preparado para usarse en una sentencia SQL.
     */
    getFixedObjectName(): string;
    /**
     * Graba el objeto en la fuente de datos de la colecci\xF3n siemrpe que esta permita escritura
     * @return		Devuelve TRUE si el objeto se graba correctamente, as\xED como todos sus contents.
     * @throws Exception
     */
    save(): boolean;
    ClearCaches(): void;
    /**
     * Elimina este objeto de la base de datos
     * @return		Devuelve TRUE si el objeto se puede eliminar correctamente.
     * @throws XoneGenericException
     */
    deleteObject(): boolean;
    /**
     * @return		Devuelve TRUE si se cumplen todas las reglas de borrado.
     * @throws Exception
     */
    protected CanDelete(): boolean;
    /**
     * Ejecuta las acciones de eliminaci\xF3n del objeto. EN funci\xF3n del par\xE1metro ejecuta las anteriores o las posteriores.
     * @param AfterActions		TRUE para ejecutar las acciones posteriores a la eliminaci\xF3n del objeto.
     * @return					Devuelve TRUE si todas las acciones se han ejecutado correctamente.
     * @throws Exception
     */
    ExecuteDeleteActions(AfterActions?: boolean): boolean;
    /**
     * Devuelve o asigna valor al ROWID del objeto. Respeta los nombres de campos y dem\xE1s cosas.
     * @return		Devuelve el valor del ROWID de este objeto.
     * @throws Exception
     */
    getRowId(): string;
    /**
     * Asigna valor al ROWID del objeto, coloc\xE1ndolo en su campo correspondiente.
     * @param value		Nuevo valor del ROWID (sin comillas)
     * @throws Exception
     */
    setRowId(value: string): void;
    /**
     * Asigna valor a la bandera que indica si el objeto debe cumplir las reglas de borrado o no cuando se llama
     * a DeleteObject para eliminarlo de la base de datos.
     * @param value		TRUE para indicar que se sigan las reglas (valor por defecto) FALSE para que no se cumplan.
     */
    setFollowRules(value: boolean): void;
}
`,me=`
declare class XoneView {
    /**
     * constructor
     * @param {XoneDataObject} xoneDataObject
     */
    constructor(xoneDataObject: XoneDataObject);
    /**
     * bindedEvents
     * @type {Array<object>}
     */
    _bindedEvents: Array<object>;
    /**
     * @type {XoneDataObject}
     */
    _xoneDataObject: XoneDataObject;
    get bindedEvents(): any[];
    /**
     * addControl
     * @param {XoneControl} control
     */
    addControl(control: XoneControl): void;
    getXoneDataObject(): XoneDataObject;
    /**
     * Bind event
     * @param  {...string} Args
     */
    bind(...Args: string[]): void;
    /**
     * exit current view
     */
    exit(): void;
    /**
     * Refresh
     * @param  {...any} Props
     */
    refresh(...Props: any[]): void;
    /**
     * Refresh All
     */
    refreshAll(): void;
    /**
     * refreshValue
     * @param {*} Props
     */
    refreshValue: (Props: any) => void;
}
declare class XoneControl {
    /**
     * constructor
     * @param {string} name
     * @param {HTMLElement} [element]
     */
    constructor(name: string, element?: HTMLElement);
    /**
     * @type {string}
     */
    name: string;
    /**
     * @type {HTMLElement}
     */
    element: HTMLElement;
    refresh: () => void;
    refreshValue: () => void;
}
`,ce=`
/**
 * Types Definitions
 */
type SnackBarParams = {
    color?: string;
    duration?: 'short' | 'long' | 'indeterminate' | 'indefinite';
    width?: string;
    height?: string;
    text?: string;
    textColor?: string;
    actionText?: string;
    actionTextColor?: string;
    actionMethod?: Function;
};
declare class XoneUI {
    /**
     * @type {XoneUI}
     */
    static _instance: XoneUI;
    addCalendarItem(title: any, description: any, location: any, dtStart: any, dtEnd: any): void;
    askUserForGPSPermission(): void;
    canMakePhoneCall(): void;
    captureImage(PropName: any, CaptureObjectName: any): void;
    checkGPSStatus(): void;
    /**
     * clearDrawing
     * @param {string} PropName
     */
    clearDrawing(PropName: string): void;
    createShortcut(): void;
    deleteShortcut(): void;
    /**
     * dismissNotification
     * @param {string} id
     */
    dismissNotification(id: string): void;
    drawMapRoute(PropName: any, DestinationLatitude: any, DestinationLongitude: any, SourceLatitude: any, SourceLongitude: any, Mode: any, StrokeColor: any): void;
    endPrint(): void;
    ensureVisible(Prop: any, type: any): void;
    /**
     * executeMethodAfterDelay
     * @param {string} NodeName
     * @param {number} [delay]
     */
    executeActionAfterDelay(NodeName: string, delay?: number): void;
    /**
     * executeMethodAfterDelay
     * @param {string} NodeName
     * @param {number} [delay]
     */
    executeMethodAfterDelay(NodeName: string, delay?: number): void;
    /**
     * Go to previus object in stack
     */
    exit(): void;
    /**
     * Exit  App
     */
    exitApp(): void;
    /**
     * getLastKnownLocation
     */
    getLastKnownLocation(): {
        latitude: any;
        longitude: any;
    };
    /**
     * getLastKnownLocationAccuracy
     */
    getLastKnownLocationAccuracy(): any;
    /**
     * getLastKnownLocationAltitude
     */
    getLastKnownLocationAltitude(): any;
    /**
     * getLastKnownLocationBearing
     */
    getLastKnownLocationBearing(): any;
    /**
     * getLastKnownLocationDateTime
     */
    getLastKnownLocationDateTime(): string;
    /**
     * getLastKnownLocationLatitude
     */
    getLastKnownLocationLatitude(): any;
    /**
     * getLastKnownLocationLongitude
     */
    getLastKnownLocationLongitude(): any;
    /**
     * getLastKnownLocationProvider
     */
    getLastKnownLocationProvider(): "geolocation" | "";
    /**
     * getLastKnownLocationSpeed
     */
    getLastKnownLocationSpeed(): any;
    getMaxSoundVolumen(): void;
    getSoundVolumen(): void;
    /**
     * getView
     * @param {XoneDataObject} DataObject
     */
    getView(DataObject: XoneDataObject): XoneView;
    /**
     * 
     * Hide Group
     * @param {string|number} groupId
     */
    hideGroup(groupId: string | number): void;
    /**
     * Hide loader spinner
     */
    hideLoader(): Promise<void>;
    hideNavigationDrawer(): void;
    hideSoftwareKeyboard(): void;
    hideWaitDialog(): void;
    injectJavascript(WebViewPropName: any, ScriptText: any): void;
    isApplicationInstalled(packageName: any): void;
    isOnCall(): void;
    isSuperuserAvailable(): void;
    isTaskKillerInstalled(): void;
    isWifiConnected(): void;
    isWifiEnabled(): void;
    launchApp(PackageName: any, ExtrasParam: any): void;
    launchApplication(PackageName: any, ExtrasParam: any): void;
    /**
     * Launch entry point
     * @param {boolean} [isOnlyWebLayout]
     */
    launchEntryPoint(isOnlyWebLayout?: boolean): Promise<void>;
    lineFeed(Lines: any): void;
    lockGroup(groupId: any): void;
    /**
     * login
     * Login para appData.failWithMessage(-11888,"##LOGIN_START##")
     * habr\xE1 que deprecarlo alg\xFAn d\xEDa pero se usa mucho
     * @returns {Promise}
     */
    login(): Promise<any>;
    makePhoneCall(PhoneNumber: any): void;
    /**
     * Show MsgBox
     * @param {string|XoneDataObject} message
     * @param {string} [title]
     * @param {number} [flags]
     * @returns {Promise<number>}
     */
    msgBox(message: string | XoneDataObject, title?: string, flags?: number): Promise<number>;
    msgBoxWithSound(Message: any, Title: any, type: any, Sound: any, Vibrate: any, NumberRepeat: any): Promise<number>;
    /**
     * Open new Edit View and push it in Breadcrumbs stack
     * @param {XoneDataObject|string} param
     */
    openEditView(param: XoneDataObject | string): Promise<void>;
    /**
     * Open new Edit View and push it in Breadcrumbs stack then 1
     * @param {XoneDataObject|string} param
     */
    openEditViewAndExit(param: XoneDataObject | string): Promise<void>;
    /**
     * openFile
     * @param {string} filePath
     */
    openFile(filePath: string): void;
    openMenu(Name: any, Mask: any, Mode: any): void;
    /**
     * Open Url
     * @param {string} Url
     * @returns {void}
     */
    openUrl(Url: string): void;
    /**
     * pickFile
     * @param {string|object} PropName
     * @param {string} Extensions
     * @returns {Promise<string>}
     */
    pickFile(PropName: string | object, Extensions: string): Promise<string>;
    /**
     * playSound
     * @param {string} sound
     * @returns {Promise<void>}
     */
    playSound(sound: string): Promise<void>;
    /**
     * playSoundAndVibrate
     * @param {string} Sounds
     * @param {*} vibrate
     * @param {*} NumberRepeat
     * @param {*} ContinuePlaying
     * @returns {Promise<void>}
     */
    playSoundAndVibrate(Sounds: string, vibrate: any, NumberRepeat: any, ContinuePlaying: any): Promise<void>;
    playSoundVolumen(Number: any): void;
    print(Data: any): void;
    printBIDI(Size: any, Level: any, Data: any): void;
    printBarcode(Type: any, Data: any, Width: any, Height: any): void;
    printCommand(Data: any): void;
    printImage(Path: any, Width: any, Height: any, Align: any, Dither: any): void;
    printLine(Data: any): void;
    printPDF(Path: any, PageNumber: any): void;
    /**
     * quitApp
     */
    quitApp(): void;
    /**
     * recognizeSpeech
     * @param {XoneDataObject|Object} DataObject
     * @param {string} [PropName]
     */
    recognizeSpeech(DataObject: XoneDataObject | any, PropName?: string): void;
    /**
     * Refresh controls
     * @param {Array} Props
     */
    refresh(...Props: any[]): void;
    /**
     * refreshAll
     */
    refreshAll(): void;
    /**
     * refreshContentRow
     * @param {string} ContentName
     * @param {number} Row
     */
    refreshContentRow(ContentName: string, Row: number): void;
    /**
     * refreshContentSelectedRow
     * @param {string} ContentName
     */
    refreshContentSelectedRow(ContentName: string): void;
    /**
     * refreshValue
     * @param {string} Props
     */
    refreshValue(Props: string): void;
    relayout(): void;
    restartApp(): void;
    returnToForeground(): void;
    returnToMainMenu(): void;
    saveDrawing(PropName: any, FileName: any): void;
    sendMail(To: any, Cc: any, Subject: any, Message: any, Attachments: any): void;
    sendSMS(Phone: any, Text: any): void;
    setFeedMode(FeedMode: any): void;
    setLanguage(Language: any): void;
    setMaxWaitDialog(Max: any): void;
    setNotificationLed(LedColor: any, LedOn: any, LedOff: any): void;
    setSelection(Prop: any, Position: any): void;
    shareData(Subject: any, Text: any, image: any): void;
    showConsoleReplica(): void;
    showDatePicker(JSONObject: any): void;
    /**
     * Show Group
     * @param {string|number} groupId
     * @param {*} [animationIn]
     * @param {*} [animationInDuration]
     * @param {*} [animationOut]
     * @param {*} [animationOutDuration]
     */
    showGroup(groupId: string | number, animationIn?: any, animationInDuration?: any, animationOut?: any, animationOutDuration?: any): void;
    /**
     * Show Spinner loader
     */
    showLoader(): Promise<void>;
    showNavigationDrawer(Orientation: any): void;
    /**
     * showNotification
     * @param {string} id
     * @param {string} Title
     * @param {string} Text
     * @param {*} [TextStatusBar]
     * @param {XoneDataObject | Function} [obj]
     * @param {*} [NodeName]
     */
    showNotification(id: string, Title: string, Text: string, TextStatusBar?: any, obj?: XoneDataObject | Function, NodeName?: any): void;
    /**
     * Show Toast
     * @param {SnackBarParams} params
     */
    showSnackbar(params: SnackBarParams): void;
    showSoftwareKeyboard(): void;
    /**
     * Show Toast
     * @param {string} message
     */
    showToast(message: string): void;
    showWaitDialog(Text: any): void;
    signDataObject(Data: any, Mask: any): void;
    /**
     * sleep
     * @param {number} Seconds
     */
    sleep(Seconds: number): Promise<void>;
    /**
     * speak
     * @param {string} Language
     * @param {string} Text
     */
    speak(Language: string, Text: string): void;
    /**
     * speakText
     * @param {string} Text
     */
    speakText(Text: string): void;
    startAudioRecord(NodeName: any, Prop: any, TimeOut: any): void;
    /**
     * startCamera
     * @param {string} PropName
     * @param {string} type
     */
    startCamera(PropName: string, type?: string): Promise<void>;
    /**
     * startGps
     * @param {*} JSONObject
     * @param {*} Interval
     * @param {*} Flags
     */
    startGps(JSONObject: any, Interval: any, Flags: any): Promise<void>;
    _startGpsTimeout: NodeJS.Timeout;
    /**
     * startGpsV1
     */
    startGpsV1(): Promise<void>;
    /**
     * startGpsV2
     * @param {*} JSONObject
     * @param {*} Interval
     * @param {*} Flags
     */
    startGpsV2(JSONObject: any, Interval: any, Flags: any): Promise<void>;
    startKioskMode(): void;
    startPrint(PrinterType: any): void;
    startReplica(): void;
    startScanner(NativeObject: any, Codes: any, Target: any): void;
    startSignature(Prop: any, Width: any, Height: any, BackgroundImage: any, ScreenOrientation: any): void;
    startWifi(): void;
    stopAudioRecord(): void;
    stopGps(): void;
    stopGpsV1(): void;
    stopGpsV2(): void;
    stopKioskMode(): void;
    stopPlaySoundAndVibrate(): void;
    stopReplica(): void;
    stopWifi(): void;
    /**
     * Take photo
     * @param {*} FileName
     * @param {*} Width
     * @param {*} Height
     */
    takePhoto(FileName: any, Width: any, Height: any): void;
    /**
     * Toogle Group
     * @param {string|number} groupId
     */
    toggleGroup(groupId: string | number): void;
    uninstallApplication(packageName: any): void;
    unlockGroup(groupId: any): void;
    updateWaitDialog(message: any, value: any): void;
    /**
     * @param {Blob} file
     * @returns {Promise<string>}
     */
    uploadFile(file: Blob): Promise<string>;
    useLastPrinter(True: any): void;
    vibrate(): void;
    writeString(): void;
}

`;window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new K;case"javascript":return new W;default:return new H}}};const V=new DOMParser().parseFromString(re,"text/xml"),E={version:1.1,properties:[]};V.querySelectorAll("attribute").forEach(e=>{const t=e.getAttribute("name");E.properties.some(a=>a.name===t)||E.properties.push({name:t})});x.css.cssDefaults.setOptions({data:{useDefaultDataProvider:!1,dataProviders:[E]}});x.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});x.typescript.javascriptDefaults.addExtraLib(`
	${le}
	${ue}
	${xe}
	${me}
	${ce}
	
	const self: XoneDataObject;
	const appData: XoneApplication;
	const user: XoneDataObject;
	const selfDataColl: XoneDataCollection;
	const ui: XoneUI;
	`,"global.d.ts");x.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>{const a=e.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:t.lineNumber,endColumn:t.column}),{tagName:s,isAttributeSearch:n}=pe(a);if(s&&n){const i=V.querySelector(`element[name='${s}']`),o=[];return i==null||i.querySelectorAll("attribute").forEach(r=>{const l=r.getAttribute("name");o.some(b=>b.label===l)||o.push({preselect:!0,label:l,kind:x.CompletionItemKind.Snippet,documentation:l,insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:l+'="${1}"'})}),{suggestions:o}}return s==="script"&&!n?{suggestions:[]}:{suggestions:[{preselect:!0,label:"coll-node",kind:x.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:collName}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"prop-node",kind:x.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" title="${3:propTitle}" visible="${4:1}" />'},{preselect:!0,label:"contents-node",kind:x.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"group-node",kind:x.CompletionItemKind.Snippet,documentation:"group",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:groupName}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"frame-node",kind:x.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:frameName}" >
	
</frame>`},{preselect:!1,label:"param-node",kind:x.CompletionItemKind.Snippet,documentation:"param",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:paramName}" />'},{preselect:!1,label:"method-node",kind:x.CompletionItemKind.Snippet,documentation:"method",insertTextRules:x.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:methodName}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:methodName}>`}]}}});const de=(e,t)=>{const a=()=>{var n;return{automaticLayout:!0,fontSize:Number((n=localStorage.getItem("fontSize"))!=null?n:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};return J.create(e,m({value:"",language:t},a()))};function pe(e){let t=e.match(/<\/*(?=\S*)([a-zA-Z-]+)/g);if(!t)return{tagName:null,isAttributeSearch:null};let a=[];for(let s=t.length-1;s>=0;s--)if(t[s].indexOf("</")===0)a.push(t[s].substring("</".length));else{let n=e.lastIndexOf(t[s]),i=t[s].substring("<".length);if(e.indexOf("/>",n)===-1){if(!a.length||a[a.length-1]!==i)return e=e.substring(n),{tagName:i,isAttributeSearch:e.indexOf("<")>e.indexOf(">")};a.splice(a.length-1,1)}e=e.substring(0,n)}return{tagName:null,isAttributeSearch:null}}var be=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,C=(e,t,a,s)=>{for(var n=s>1?void 0:s?ge(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&be(t,a,n),n};let _=class extends h{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return f`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(e=>setTimeout(()=>e(!0),100))),this.editor=de(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};C([d({type:String})],_.prototype,"type",2);C([d({type:String})],_.prototype,"editorValue",2);C([d({type:Function})],_.prototype,"onUpdate",2);C([Y(".code-editor")],_.prototype,"editorElement",2);_=C([A("code-editor")],_);var ye=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,O=(e,t,a,s)=>{for(var n=s>1?void 0:s?ve(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&ye(t,a,n),n};let q=class extends h{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return f`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};O([d({type:String})],q.prototype,"url",2);O([d({type:String})],q.prototype,"urlParam",2);q=O([A("xone-preview")],q);var _e=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,F=(e,t,a,s)=>{for(var n=s>1?void 0:s?fe(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&_e(t,a,n),n};let S=class extends h{createRenderRoot(){return this}render(){var e;return f` <div class="settings">
			<label for="resolutionWidth">Resolution width:</label>
			<input
				type="number"
				id="resolutionWidth"
				min="-1"
				.value=${this.settings.resolutionWidth}
				@change=${t=>this.updateSettings(t.target,"resolutionWidth")}
				name="resolutionWidth"
			/>
			<label for="resolutionHeight">Resolution height:</label>
			<input
				type="number"
				id="resolutionHeight"
				min="-1"
				.value=${this.settings.resolutionHeight}
				@change=${t=>this.updateSettings(t.target,"resolutionHeight")}
				name="resolutionHeight"
			/>

			<label for="minimap">Scale font size:</label>
			<select
				name="scaleFontsize"
				@change=${t=>this.updateSettings(t.target,"scaleFontsize")}
				name="scaleFontsize"
				.value=${this.settings.scaleFontsize}
			>
				<option value="false" selected>false</option>
				<option value="true">true</option>
			</select>

			<label for="fontFactor">Web font factor:</label>
			<input
				type="number"
				min="0"
				max="15"
				.disabled=${this.settings.scaleFontsize!=="true"}
				id="fontFactor"
				.value=${this.settings.fontFactor}
				@change=${t=>this.updateSettings(t.target,"fontFactor")}
				name="fontFactor"
			/>
			<label for="webLayout">Web layout:</label>
			<input
				type="string"
				id="webLayout"
				.value=${this.settings.webLayout}
				@change=${t=>this.updateSettings(t.target,"webLayout")}
				name="webLayout"
			/>
			<hr />
			<label for="theme">Theme: </label>
			<select
				name="theme"
				@change=${t=>{const a=t.target;localStorage.setItem("theme",a.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("theme")||"vs-dark"}"
			>
				<option value="vs-dark" selected>vs-dark</option>
				<option value="default">vs-light</option>
				<option value="hc-black">hc-black</option>
			</select>
			<label for="fontSize">Font size:</label>
			<input
				type="number"
				id="fontSize"
				min="10"
				max="20"
				name="fontSize"
				.value=${Number((e=localStorage.getItem("fontSize"))!=null?e:"14")}
				@input=${t=>{const a=Number(t.target.value);a<10||a>20||(localStorage.setItem("fontSize",a.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${t=>{const a=t.target;localStorage.setItem("minimap",a.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(e,t){switch(t){case"resolutionWidth":return this.onUpdate(g(m({},this.settings),{resolutionWidth:Number(e.value)}));case"resolutionHeight":return this.onUpdate(g(m({},this.settings),{resolutionHeight:Number(e.value)}));case"fontFactor":return this.onUpdate(g(m({},this.settings),{fontFactor:Number(e.value)}));case"webLayout":return this.onUpdate(g(m({},this.settings),{webLayout:e.value}));case"scaleFontsize":return this.onUpdate(g(m({},this.settings),{scaleFontsize:e.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(e=>e.createEditor())}};F([d({type:Object})],S.prototype,"settings",2);F([d({type:Function})],S.prototype,"onUpdate",2);S=F([A("xone-settings")],S);
