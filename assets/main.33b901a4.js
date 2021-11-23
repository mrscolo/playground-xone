var B=Object.defineProperty,L=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var P=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))z.call(t,a)&&P(e,a,t[a]);if(k)for(var a of k(t))U.call(t,a)&&P(e,a,t[a]);return e},g=(e,t)=>L(e,G(t));import{p as V,e as M,t as y,n as q,s as h,d as A,a as S,b as v,W as $,c as H,f as W,l,g as X,h as d,i as K}from"./vendor.621e38c1.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};Q();String.prototype.compress=function(e){e=e===!0;var t,a={},s=this,n,i,o="",x=[],u="",b=256;for(t=0;t<256;t+=1)a[String.fromCharCode(t)]=t;for(t=0;t<s.length;t+=1)n=s.charAt(t),i=o+n,a.hasOwnProperty(i)?o=i:(x.push(a[o]),u+=String.fromCharCode(a[o]),a[i]=b++,o=String(n));return o!==""&&(x.push(a[o]),u+=String.fromCharCode(a[o])),e?x:u};String.prototype.decompress=function(){var e,t=[],a=[],s=this,n,i,o,x="",u=256;for(e=0;e<256;e+=1)a[e]=String.fromCharCode(e);if(s&&typeof s=="string"){for(e=0;e<s.length;e+=1)t.push(s[e].charCodeAt(0));s=t,t=null}for(n=String.fromCharCode(s[0]),i=n,e=1;e<s.length;e+=1){if(o=s[e],a[o])x=a[o];else if(o===u)x=n+n.charAt(0);else return null;i+=x,a[u++]=n+x.charAt(0),n=x}return i};const Y=()=>["createObject","currentItem","deleteItem","deleteObject","executeNode","findObject","get","getCollection","getContents","getCurrentItem","getItem","getText","hasSomething","loadAll","loadFromJson","loadFromJsonArray","moveFirst","moveLast","moveNext","movePrev","msgBox","msgBoxWithSound","pickFile","save","setText","sleep","startBrowse","startCamera","startGps","startGpsV1","startGpsV2"];let _;const J=["body","expression","declarations","init","callee","object","argument","arguments","right"],Z=()=>_=Y(),ee=new DOMParser;function te(e,t){try{if(!t)return e;ee.parseFromString(`<root>${e}</root>`,"text/xml").querySelectorAll("action > script").forEach(s=>e=e.replace(s.textContent,`
`+R(s.textContent)))}catch{}finally{return e}}function ne(e,t){try{return t?(Z(),R(e)):e}catch{return e}}function R(e){try{const t=e.split("'").join("~~").split('"').join("'").split("~~").join('"');let a=t;try{t.match(/'([^']+)'/).forEach(o=>{a=a.replace(o,o.split(`
`).join("~~"))})}catch{}const s=V(a,{ecmaVersion:2022}),n=(o,x,u=!1)=>{var D,N,F,w;((D=o.type)==null?void 0:D.includes("Function"))&&x.push(o),J.forEach(r=>{!o[r]||n(o[r],x,u)}),x=x.filter(r=>r!==o),o instanceof Array&&o.forEach(r=>{n(r,x,u)});const b=((N=o.callee)==null?void 0:N.name)||((w=(F=o.callee)==null?void 0:F.property)==null?void 0:w.name);if(!(!b||!_.includes(b)))if(u){if(x.length===0)return;const{name:r}=x[0].id;_.includes(r)||_.push(r)}else{const r=m({},o);o.type="AwaitExpression",o.argument=r,x.forEach(j=>j.async=!0)}};let i;do i=_.length,s.body.forEach(o=>n(o,[],!0));while(i!==_.length);return s.body.forEach(o=>n(o,[])),M.generate(s)}catch{return""}}var ae=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,p=(e,t,a,s)=>{for(var n=s>1?void 0:s?oe(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&ae(t,a,n),n};let c=class extends h{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:5},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,a,s,n,i,o,x,u]=e.split(e.includes("%7C")?"%7C":"|");if(t&&(this.xmlString=A(t).decompress()),a&&(this.cssString=A(a).decompress()),s&&(this.jsString=A(s).decompress()),n)try{this.settings.resolutionWidth=Number(n)}catch{}i&&(this.settings.resolutionHeight=Number(i)),o&&(this.settings.webLayout=A(o.decompress())),x&&(this.settings.scaleFontsize=x),u&&(this.settings.fontFactor=Number(u))}catch{}}reloadPreview(){var a;this.updateUrl(!0);const e=document.querySelector("xone-preview");e&&((a=e.parentElement)==null||a.removeChild(e));const t=document.getElementById("editor-panel");t.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(!1),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?2500:0))}updateUrl(e){const{resolutionWidth:t,resolutionHeight:a,webLayout:s,scaleFontsize:n,fontFactor:i}=this.settings,o=ne(this.jsString,e),x=te(this.xmlString,e);let u=`${S(x.compress())}|${S(this.cssString.compress())}|${S(o.compress())}`;u+=`|${t.toString()}|${a.toString()}|${S(s.toString().compress())}`,u+=`|${n}|${i}`,e?this.urlParam=u:window.location.hash=u}render(){return v`
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
				${this.isSettingsOpened?v`
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
		`}};p([y()],c.prototype,"xmlString",2);p([y()],c.prototype,"cssString",2);p([y()],c.prototype,"jsString",2);p([y()],c.prototype,"urlParam",2);p([y()],c.prototype,"settings",2);p([y()],c.prototype,"isSettingsOpened",2);c=p([q("xone-app")],c);var se=`<?xml version="1.0" encoding="utf-8" ?>
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
</xs:schema>`;window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new W;case"javascript":return new H;default:return new $}}};const ie=()=>{var t;return{automaticLayout:!0,fontSize:Number((t=localStorage.getItem("fontSize"))!=null?t:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}},xe=new DOMParser().parseFromString(se,"text/xml");l.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>{const a=e.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:t.lineNumber,endColumn:t.column});try{const{tagName:s,isAttributeSearch:n}=le(a);if(s&&n){const i=xe.querySelector(`element[name='${s}']`),o=[];return i==null||i.querySelectorAll("attribute").forEach(x=>{const u=x.getAttribute("name");o.some(b=>b.label===u)||o.push({preselect:!0,label:u,kind:l.CompletionItemKind.Snippet,documentation:u,insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:u+'="${1}"'})}),{suggestions:o}}}catch{}return{suggestions:[{preselect:!0,label:"coll-node",kind:l.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:collName}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"prop-node",kind:l.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" title="${3:propTitle}" visible="${4:1}" />'},{preselect:!0,label:"contents-node",kind:l.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"group-node",kind:l.CompletionItemKind.Snippet,documentation:"group",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:groupName}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"frame-node",kind:l.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:frameName}" >
	
</frame>`},{preselect:!1,label:"param-node",kind:l.CompletionItemKind.Snippet,documentation:"param",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:paramName}" />'},{preselect:!1,label:"method-node",kind:l.CompletionItemKind.Snippet,documentation:"method",insertTextRules:l.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:methodName}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:methodName}>`}]}}});const ue=(e,t)=>X.create(e,m({value:"",language:t},ie()));function le(e){let t=e.match(/<\/*(?=\S*)([a-zA-Z-]+)/g);if(!t)return;let a=[];for(let s=t.length-1;s>=0;s--)if(t[s].indexOf("</")===0)a.push(t[s].substring("</".length));else{let n=e.lastIndexOf(t[s]),i=t[s].substring("<".length);if(e.indexOf("/>",n)===-1){if(!a.length||a[a.length-1]!==i)return e=e.substring(n),{tagName:i,isAttributeSearch:e.indexOf("<")>e.indexOf(">")};a.splice(a.length-1,1)}e=e.substring(0,n)}}var re=Object.defineProperty,me=Object.getOwnPropertyDescriptor,T=(e,t,a,s)=>{for(var n=s>1?void 0:s?me(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&re(t,a,n),n};let f=class extends h{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return v`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(e=>setTimeout(()=>e(!0),100))),this.editor=ue(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};T([d({type:String})],f.prototype,"type",2);T([d({type:String})],f.prototype,"editorValue",2);T([d({type:Function})],f.prototype,"onUpdate",2);T([K(".code-editor")],f.prototype,"editorElement",2);f=T([q("code-editor")],f);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,E=(e,t,a,s)=>{for(var n=s>1?void 0:s?de(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&ce(t,a,n),n};let C=class extends h{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return v`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};E([d({type:String})],C.prototype,"url",2);E([d({type:String})],C.prototype,"urlParam",2);C=E([q("xone-preview")],C);var pe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,I=(e,t,a,s)=>{for(var n=s>1?void 0:s?be(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&pe(t,a,n),n};let O=class extends h{createRenderRoot(){return this}render(){var e;return v` <div class="settings">
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
		</div>`}updateSettings(e,t){switch(t){case"resolutionWidth":return this.onUpdate(g(m({},this.settings),{resolutionWidth:Number(e.value)}));case"resolutionHeight":return this.onUpdate(g(m({},this.settings),{resolutionHeight:Number(e.value)}));case"fontFactor":return this.onUpdate(g(m({},this.settings),{fontFactor:Number(e.value)}));case"webLayout":return this.onUpdate(g(m({},this.settings),{webLayout:e.value}));case"scaleFontsize":return this.onUpdate(g(m({},this.settings),{scaleFontsize:e.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(e=>e.createEditor())}};I([d({type:Object})],O.prototype,"settings",2);I([d({type:Function})],O.prototype,"onUpdate",2);O=I([q("xone-settings")],O);
