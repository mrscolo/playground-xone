var A=Object.defineProperty,U=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var z=(e,t,i)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))V.call(t,i)&&z(e,i,t[i]);if(R)for(var i of R(t))H.call(t,i)&&z(e,i,t[i]);return e},g=(e,t)=>U(e,M(t));import{p as D,e as K,t as f,n as w,s as $,d as I,a as C,b as S,W as X,c as q,f as B,l as p,g as J,h as m,i as k}from"./vendor.621e38c1.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}};G();String.prototype.compress=function(e){e=e===!0;var t,i={},o=this,r,n,s="",a=[],l="",x=256;for(t=0;t<256;t+=1)i[String.fromCharCode(t)]=t;for(t=0;t<o.length;t+=1)r=o.charAt(t),n=s+r,i.hasOwnProperty(n)?s=n:(a.push(i[s]),l+=String.fromCharCode(i[s]),i[n]=x++,s=String(r));return s!==""&&(a.push(i[s]),l+=String.fromCharCode(i[s])),e?a:l};String.prototype.decompress=function(){var e,t=[],i=[],o=this,r,n,s,a="",l=256;for(e=0;e<256;e+=1)i[e]=String.fromCharCode(e);if(o&&typeof o=="string"){for(e=0;e<o.length;e+=1)t.push(o[e].charCodeAt(0));o=t,t=null}for(r=String.fromCharCode(o[0]),n=r,e=1;e<o.length;e+=1){if(s=o[e],i[s])a=i[s];else if(s===l)a=r+r.charAt(0);else return null;n+=a,i[l++]=r+a.charAt(0),r=a}return n};const Q=()=>["createObject","currentItem","deleteItem","deleteObject","executeNode","findObject","get","getCollection","getContents","getCurrentItem","getItem","getText","hasSomething","loadAll","loadFromJson","loadFromJsonArray","moveFirst","moveLast","moveNext","movePrev","msgBox","msgBoxWithSound","pickFile","save","setText","sleep","startBrowse","startCamera","startGps","startGpsV1","startGpsV2"];let v;const Y=["body","expression","declarations","init","callee","object","argument","arguments","right"],Z=()=>v=Q(),ee=new DOMParser;function te(e,t){try{if(!t)return e;ee.parseFromString(`<root>${e}</root>`,"text/xml").querySelectorAll("action > script").forEach(o=>e=e.replace(o.textContent,`
`+L(o.textContent)))}catch{}finally{return e}}function re(e,t){try{return t?(Z(),L(e)):e}catch{return e}}function L(e){try{const t=e.split("'").join("~~").split('"').join("'").split("~~").join('"');let i=t;try{t.match(/'([^']+)'/).forEach(s=>{i=i.replace(s,s.split(`
`).join("~~"))})}catch{}const o=D(i,{ecmaVersion:2022}),r=(s,a,l=!1)=>{var j,E,_,N;((j=s.type)==null?void 0:j.includes("Function"))&&a.push(s),Y.forEach(c=>{!s[c]||r(s[c],a,l)}),a=a.filter(c=>c!==s),s instanceof Array&&s.forEach(c=>{r(c,a,l)});const x=((E=s.callee)==null?void 0:E.name)||((N=(_=s.callee)==null?void 0:_.property)==null?void 0:N.name);if(!(!x||!v.includes(x)))if(l){if(a.length===0)return;const{name:c}=a[0].id;v.includes(c)||v.push(c)}else{const c=u({},s);s.type="AwaitExpression",s.argument=c,a.forEach(W=>W.async=!0)}};let n;do n=v.length,o.body.forEach(s=>r(s,[],!0));while(n!==v.length);return o.body.forEach(s=>r(s,[])),K.generate(o)}catch{return""}}var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,h=(e,t,i,o)=>{for(var r=o>1?void 0:o?se(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&ie(t,i,r),r};let d=class extends ${constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:5},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,i,o,r,n,s,a,l]=e.split(e.includes("%7C")?"%7C":"|");if(t&&(this.xmlString=I(t).decompress()),i&&(this.cssString=I(i).decompress()),o&&(this.jsString=I(o).decompress()),r)try{this.settings.resolutionWidth=Number(r)}catch{}n&&(this.settings.resolutionHeight=Number(n)),s&&(this.settings.webLayout=I(s.decompress())),a&&(this.settings.scaleFontsize=a),l&&(this.settings.fontFactor=Number(l))}catch{}}reloadPreview(){var i;this.updateUrl(!0);const e=document.querySelector("xone-preview");e&&((i=e.parentElement)==null||i.removeChild(e));const t=document.getElementById("editor-panel");t.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(!1),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?2500:0))}updateUrl(e){const{resolutionWidth:t,resolutionHeight:i,webLayout:o,scaleFontsize:r,fontFactor:n}=this.settings,s=re(this.jsString,e),a=te(this.xmlString,e);let l=`${C(a.compress())}|${C(this.cssString.compress())}|${C(s.compress())}`;l+=`|${t.toString()}|${i.toString()}|${C(o.toString().compress())}`,l+=`|${r}|${n}`,e?this.urlParam=l:window.location.hash=l}render(){return S`
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
		`}};h([f()],d.prototype,"xmlString",2);h([f()],d.prototype,"cssString",2);h([f()],d.prototype,"jsString",2);h([f()],d.prototype,"urlParam",2);h([f()],d.prototype,"settings",2);h([f()],d.prototype,"isSettingsOpened",2);d=h([w("xone-app")],d);window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new B;case"javascript":return new q;default:return new X}}};const oe=()=>{var t;return{automaticLayout:!0,fontSize:Number((t=localStorage.getItem("fontSize"))!=null?t:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};p.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>({suggestions:[{preselect:!0,label:"<coll",kind:p.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:collName}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"<prop",kind:p.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" title="${3:propTitle}" visible="${4:1}" />'},{preselect:!0,label:"<contents",kind:p.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"<group",kind:p.CompletionItemKind.Snippet,documentation:"group",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:groupName}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"<frame",kind:p.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:frameName}" >
	
</frame>`},{preselect:!1,label:"<param",kind:p.CompletionItemKind.Snippet,documentation:"param",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:paramName}" />'},{preselect:!1,label:"<method",kind:p.CompletionItemKind.Snippet,documentation:"method",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:methodName}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:methodName}>`}]})});const ne=(e,t)=>J.create(e,u({value:"",language:t},oe()));var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,y=(e,t,i,o)=>{for(var r=o>1?void 0:o?le(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&ae(t,i,r),r};let b=class extends ${constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return S`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(e=>setTimeout(()=>e(!0),100))),this.editor=ne(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};y([m({type:String})],b.prototype,"type",2);y([m({type:String})],b.prototype,"editorValue",2);y([m({type:Function})],b.prototype,"onUpdate",2);y([k(".code-editor")],b.prototype,"editorElement",2);b=y([w("code-editor")],b);var pe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,T=(e,t,i,o)=>{for(var r=o>1?void 0:o?ce(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&pe(t,i,r),r};let O=class extends ${constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return S`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};T([m({type:String})],O.prototype,"url",2);T([m({type:String})],O.prototype,"urlParam",2);O=T([w("xone-preview")],O);var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,F=(e,t,i,o)=>{for(var r=o>1?void 0:o?de(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&ue(t,i,r),r};let P=class extends ${createRenderRoot(){return this}render(){var e;return S` <div class="settings">
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
				@change=${t=>{const i=t.target;localStorage.setItem("theme",i.value),this.reloadEditors()}}
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
				@input=${t=>{const i=Number(t.target.value);i<10||i>20||(localStorage.setItem("fontSize",i.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${t=>{const i=t.target;localStorage.setItem("minimap",i.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(e,t){switch(t){case"resolutionWidth":return this.onUpdate(g(u({},this.settings),{resolutionWidth:Number(e.value)}));case"resolutionHeight":return this.onUpdate(g(u({},this.settings),{resolutionHeight:Number(e.value)}));case"fontFactor":return this.onUpdate(g(u({},this.settings),{fontFactor:Number(e.value)}));case"webLayout":return this.onUpdate(g(u({},this.settings),{webLayout:e.value}));case"scaleFontsize":return this.onUpdate(g(u({},this.settings),{scaleFontsize:e.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(e=>e.createEditor())}};F([m({type:Object})],P.prototype,"settings",2);F([m({type:Function})],P.prototype,"onUpdate",2);P=F([w("xone-settings")],P);
