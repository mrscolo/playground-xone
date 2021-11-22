var A=Object.defineProperty,U=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&L(e,r,t[r]);if(z)for(var r of z(t))H.call(t,r)&&L(e,r,t[r]);return e},g=(e,t)=>U(e,M(t));import{p as D,e as K,t as f,n as $,s as w,d as I,a as C,b as S,W as X,c as q,f as B,l as p,g as J,h as m,i as G}from"./vendor.621e38c1.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};k();String.prototype.compress=function(e){e=e===!0;var t,r={},o=this,i,n,s="",a=[],l="",x=256;for(t=0;t<256;t+=1)r[String.fromCharCode(t)]=t;for(t=0;t<o.length;t+=1)i=o.charAt(t),n=s+i,r.hasOwnProperty(n)?s=n:(a.push(r[s]),l+=String.fromCharCode(r[s]),r[n]=x++,s=String(i));return s!==""&&(a.push(r[s]),l+=String.fromCharCode(r[s])),e?a:l};String.prototype.decompress=function(){var e,t=[],r=[],o=this,i,n,s,a="",l=256;for(e=0;e<256;e+=1)r[e]=String.fromCharCode(e);if(o&&typeof o=="string"){for(e=0;e<o.length;e+=1)t.push(o[e].charCodeAt(0));o=t,t=null}for(i=String.fromCharCode(o[0]),n=i,e=1;e<o.length;e+=1){if(s=o[e],r[s])a=r[s];else if(s===l)a=i+i.charAt(0);else return null;n+=a,r[l++]=i+a.charAt(0),i=a}return n};const Q=()=>["createObject","currentItem","deleteItem","deleteObject","executeNode","findObject","get","getCollection","getContents","getCurrentItem","getItem","getText","hasSomething","loadAll","loadFromJson","loadFromJsonArray","moveFirst","moveLast","moveNext","movePrev","msgBox","msgBoxWithSound","pickFile","save","setText","sleep","startBrowse","startCamera","startGps","startGpsV1","startGpsV2"];let v;const Y=["body","expression","declarations","init","callee","object","argument","arguments","right"],Z=()=>v=Q(),ee=new DOMParser;function te(e,t){try{if(!t)return e;ee.parseFromString(`<root>${e}</root>`,"text/xml").querySelectorAll("script[language='javascript']").forEach(o=>{e=e.replace(o.textContent,`
`+W(o.textContent))})}catch{}finally{return e}}function ie(e,t){try{return t?(Z(),W(e)):e}catch{return e}}function W(e){try{const t=e.split('.replace(/([.*+?^=!:${}()|[]/\\])/g, "\\$1")').join("").split("'").join("~~").split('"').join("'").split("~~").join('"');let r=t;try{t.match(/'([^']+)'/).forEach(s=>{r=r.replace(s,s.split(`
`).join("~~"))})}catch{}const o=D(r,{ecmaVersion:2022}),i=(s,a,l=!1)=>{var E,F,_,N;((E=s.type)==null?void 0:E.includes("Function"))&&a.push(s),Y.forEach(c=>{!s[c]||i(s[c],a,l)}),a=a.filter(c=>c!==s),s instanceof Array&&s.forEach(c=>{i(c,a,l)});const x=((F=s.callee)==null?void 0:F.name)||((N=(_=s.callee)==null?void 0:_.property)==null?void 0:N.name);if(!(!x||!v.includes(x)))if(l){if(a.length===0)return;const{name:c}=a[0].id;v.includes(c)||v.push(c)}else{const c=u({},s);s.type="AwaitExpression",s.argument=c,a.forEach(R=>{console.log(R),R.async=!0})}};let n;do n=v.length,o.body.forEach(s=>i(s,[],!0));while(n!==v.length);return o.body.forEach(s=>i(s,[])),K.generate(o)}catch{return""}}var re=Object.defineProperty,se=Object.getOwnPropertyDescriptor,h=(e,t,r,o)=>{for(var i=o>1?void 0:o?se(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&re(t,r,i),i};let d=class extends w{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:5},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,r,o,i,n,s,a,l]=e.split(e.includes("%7C")?"%7C":"|");if(t&&(this.xmlString=I(t).decompress()),r&&(this.cssString=I(r).decompress()),o&&(this.jsString=I(o).decompress()),i)try{this.settings.resolutionWidth=Number(i)}catch{}n&&(this.settings.resolutionHeight=Number(n)),s&&(this.settings.webLayout=I(s.decompress())),a&&(this.settings.scaleFontsize=a),l&&(this.settings.fontFactor=Number(l))}catch{}}reloadPreview(){var r;this.updateUrl(!0);const e=document.querySelector("xone-preview");e&&((r=e.parentElement)==null||r.removeChild(e));const t=document.getElementById("editor-panel");t.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(!1),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?2500:0))}updateUrl(e){const{resolutionWidth:t,resolutionHeight:r,webLayout:o,scaleFontsize:i,fontFactor:n}=this.settings,s=ie(this.jsString,e),a=te(this.xmlString,e);let l=`${C(a.compress())}|${C(this.cssString.compress())}|${C(s.compress())}`;l+=`|${t.toString()}|${r.toString()}|${C(o.toString().compress())}`,l+=`|${i}|${n}`,e?this.urlParam=l:window.location.hash=l}render(){return S`
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
				${this.isSettingsOpened?S`
								<xone-settings
									.onUpdate=${e=>{this.settings=u({},e),this.updateUrl(!1),this.reloadPreview()}}
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
		`}};h([f()],d.prototype,"xmlString",2);h([f()],d.prototype,"cssString",2);h([f()],d.prototype,"jsString",2);h([f()],d.prototype,"urlParam",2);h([f()],d.prototype,"settings",2);h([f()],d.prototype,"isSettingsOpened",2);d=h([$("xone-app")],d);window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new B;case"javascript":return new q;default:return new X}}};const oe=()=>{var t;return{automaticLayout:!0,fontSize:Number((t=localStorage.getItem("fontSize"))!=null?t:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};p.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>({suggestions:[{preselect:!0,label:"<coll",kind:p.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:collName}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"<prop",kind:p.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" title="${3:propTitle}" visible="${4:1}" />'},{preselect:!0,label:"<contents",kind:p.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"<group",kind:p.CompletionItemKind.Snippet,documentation:"group",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:groupName}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"<frame",kind:p.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:frameName}" >
	
</frame>`},{preselect:!1,label:"<param",kind:p.CompletionItemKind.Snippet,documentation:"param",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:paramName}" />'},{preselect:!1,label:"<method",kind:p.CompletionItemKind.Snippet,documentation:"method",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:methodName}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:methodName}>`}]})});const ne=(e,t)=>J.create(e,u({value:"",language:t},oe()));var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,y=(e,t,r,o)=>{for(var i=o>1?void 0:o?le(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&ae(t,r,i),i};let b=class extends w{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return S`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(e=>setTimeout(()=>e(!0),100))),this.editor=ne(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};y([m({type:String})],b.prototype,"type",2);y([m({type:String})],b.prototype,"editorValue",2);y([m({type:Function})],b.prototype,"onUpdate",2);y([G(".code-editor")],b.prototype,"editorElement",2);b=y([$("code-editor")],b);var pe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,P=(e,t,r,o)=>{for(var i=o>1?void 0:o?ce(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&pe(t,r,i),i};let O=class extends w{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return S`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};P([m({type:String})],O.prototype,"url",2);P([m({type:String})],O.prototype,"urlParam",2);O=P([$("xone-preview")],O);var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,j=(e,t,r,o)=>{for(var i=o>1?void 0:o?de(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&ue(t,r,i),i};let T=class extends w{createRenderRoot(){return this}render(){var e;return S` <div class="settings">
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
				@change=${t=>{const r=t.target;localStorage.setItem("theme",r.value),this.reloadEditors()}}
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
				@input=${t=>{const r=Number(t.target.value);r<10||r>20||(localStorage.setItem("fontSize",r.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${t=>{const r=t.target;localStorage.setItem("minimap",r.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(e,t){switch(t){case"resolutionWidth":return this.onUpdate(g(u({},this.settings),{resolutionWidth:Number(e.value)}));case"resolutionHeight":return this.onUpdate(g(u({},this.settings),{resolutionHeight:Number(e.value)}));case"fontFactor":return this.onUpdate(g(u({},this.settings),{fontFactor:Number(e.value)}));case"webLayout":return this.onUpdate(g(u({},this.settings),{webLayout:e.value}));case"scaleFontsize":return this.onUpdate(g(u({},this.settings),{scaleFontsize:e.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(e=>e.createEditor())}};j([m({type:Object})],T.prototype,"settings",2);j([m({type:Function})],T.prototype,"onUpdate",2);T=j([$("xone-settings")],T);
