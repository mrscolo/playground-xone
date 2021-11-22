var A=Object.defineProperty,U=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var z=(e,t,s)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))V.call(t,s)&&z(e,s,t[s]);if(R)for(var s of R(t))H.call(t,s)&&z(e,s,t[s]);return e},g=(e,t)=>U(e,M(t));import{p as D,e as K,t as f,n as $,s as w,d as I,a as C,b as S,W as X,c as q,f as B,l as p,g as G,h as m,i as J}from"./vendor.621e38c1.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}};k();String.prototype.compress=function(e){e=e===!0;var t,s={},n=this,i,o,r="",a=[],l="",x=256;for(t=0;t<256;t+=1)s[String.fromCharCode(t)]=t;for(t=0;t<n.length;t+=1)i=n.charAt(t),o=r+i,s.hasOwnProperty(o)?r=o:(a.push(s[r]),l+=String.fromCharCode(s[r]),s[o]=x++,r=String(i));return r!==""&&(a.push(s[r]),l+=String.fromCharCode(s[r])),e?a:l};String.prototype.decompress=function(){var e,t=[],s=[],n=this,i,o,r,a="",l=256;for(e=0;e<256;e+=1)s[e]=String.fromCharCode(e);if(n&&typeof n=="string"){for(e=0;e<n.length;e+=1)t.push(n[e].charCodeAt(0));n=t,t=null}for(i=String.fromCharCode(n[0]),o=i,e=1;e<n.length;e+=1){if(r=n[e],s[r])a=s[r];else if(r===l)a=i+i.charAt(0);else return null;o+=a,s[l++]=i+a.charAt(0),i=a}return o};const Q=()=>["createObject","currentItem","deleteItem","deleteObject","executeNode","findObject","get","getCollection","getContents","getCurrentItem","getItem","getText","hasSomething","loadAll","moveFirst","moveLast","moveNext","movePrev","msgBox","msgBoxWithSound","pickFile","save","setText","sleep","startBrowse","startCamera","startGps","startGpsV1","startGpsV2"];let v;const Y=["body","expression","declarations","init","callee","object","argument","arguments","right"],Z=()=>v=Q(),ee=new DOMParser;function te(e,t){try{if(!t)return e;ee.parseFromString(`<root>${e}</root>`,"text/xml").querySelectorAll("script[language='javascript']").forEach(n=>{e=e.replace(n.textContent,L(n.textContent))})}catch{}finally{return e}}function ie(e,t){try{return t?(Z(),L(e)):e}catch{return e}}function L(e){try{const t=e.split('.replace(/([.*+?^=!:${}()|[]/\\])/g, "\\$1")').join("").split("'").join("~~").split('"').join("'").split("~~").join('"');let s=t;try{t.match(/'([^']+)'/).forEach(r=>{s=s.replace(r,r.split(`
`).join("~~"))})}catch{}const n=D(s,{ecmaVersion:2022}),i=(r,a,l=!1)=>{var E,_,F,N;((E=r.type)==null?void 0:E.includes("Function"))&&a.push(r),Y.forEach(c=>{r[c]&&i(r[c],a,l)}),r instanceof Array&&r.forEach(c=>{i(c,a,l)});const x=((_=r.callee)==null?void 0:_.name)||((N=(F=r.callee)==null?void 0:F.property)==null?void 0:N.name);if(!(!x||!v.includes(x)))if(l){if(a.length===0)return;const{name:c}=a[0].id;v.includes(c)||v.push(c)}else{const c=u({},r);r.type="AwaitExpression",r.argument=c,a.forEach(W=>W.async=!0)}};let o;do o=v.length,n.body.forEach(r=>i(r,[],!0));while(o!==v.length);return n.body.forEach(r=>i(r,[])),K.generate(n)}catch{return""}}var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,h=(e,t,s,n)=>{for(var i=n>1?void 0:n?re(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(i=(n?r(t,s,i):r(i))||i);return n&&i&&se(t,s,i),i};let d=class extends w{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:5},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,s,n,i,o,r,a,l]=e.split(e.includes("%7C")?"%7C":"|");if(t&&(this.xmlString=I(t).decompress()),s&&(this.cssString=I(s).decompress()),n&&(this.jsString=I(n).decompress()),i)try{this.settings.resolutionWidth=Number(i)}catch{}o&&(this.settings.resolutionHeight=Number(o)),r&&(this.settings.webLayout=I(r.decompress())),a&&(this.settings.scaleFontsize=a),l&&(this.settings.fontFactor=Number(l))}catch{}}reloadPreview(){var s;this.updateUrl(!0);const e=document.querySelector("xone-preview");e&&((s=e.parentElement)==null||s.removeChild(e));const t=document.getElementById("editor-panel");t.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(!1),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?2500:0))}updateUrl(e){const{resolutionWidth:t,resolutionHeight:s,webLayout:n,scaleFontsize:i,fontFactor:o}=this.settings,r=ie(this.jsString,e),a=te(this.xmlString,e);let l=`${C(a.compress())}|${C(this.cssString.compress())}|${C(r.compress())}`;l+=`|${t.toString()}|${s.toString()}|${C(n.toString().compress())}`,l+=`|${i}|${o}`,e?this.urlParam=l:window.location.hash=l}render(){return S`
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
		`}};h([f()],d.prototype,"xmlString",2);h([f()],d.prototype,"cssString",2);h([f()],d.prototype,"jsString",2);h([f()],d.prototype,"urlParam",2);h([f()],d.prototype,"settings",2);h([f()],d.prototype,"isSettingsOpened",2);d=h([$("xone-app")],d);window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new B;case"javascript":return new q;default:return new X}}};const ne=()=>{var t;return{automaticLayout:!0,fontSize:Number((t=localStorage.getItem("fontSize"))!=null?t:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};p.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>({suggestions:[{preselect:!0,label:"<coll",kind:p.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:collName}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"<prop",kind:p.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" title="${3:propTitle}" visible="${4:1}" />'},{preselect:!0,label:"<contents",kind:p.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"<group",kind:p.CompletionItemKind.Snippet,documentation:"group",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:groupName}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"<frame",kind:p.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:frameName}" >
	
</frame>`},{preselect:!1,label:"<param",kind:p.CompletionItemKind.Snippet,documentation:"param",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:paramName}" />'},{preselect:!1,label:"<method",kind:p.CompletionItemKind.Snippet,documentation:"method",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:methodName}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:methodName}>`}]})});const oe=(e,t)=>G.create(e,u({value:"",language:t},ne()));var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,y=(e,t,s,n)=>{for(var i=n>1?void 0:n?le(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(i=(n?r(t,s,i):r(i))||i);return n&&i&&ae(t,s,i),i};let b=class extends w{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return S`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(e=>setTimeout(()=>e(!0),100))),this.editor=oe(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};y([m({type:String})],b.prototype,"type",2);y([m({type:String})],b.prototype,"editorValue",2);y([m({type:Function})],b.prototype,"onUpdate",2);y([J(".code-editor")],b.prototype,"editorElement",2);b=y([$("code-editor")],b);var pe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,P=(e,t,s,n)=>{for(var i=n>1?void 0:n?ce(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(i=(n?r(t,s,i):r(i))||i);return n&&i&&pe(t,s,i),i};let O=class extends w{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return S`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};P([m({type:String})],O.prototype,"url",2);P([m({type:String})],O.prototype,"urlParam",2);O=P([$("xone-preview")],O);var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,j=(e,t,s,n)=>{for(var i=n>1?void 0:n?de(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(i=(n?r(t,s,i):r(i))||i);return n&&i&&ue(t,s,i),i};let T=class extends w{createRenderRoot(){return this}render(){var e;return S` <div class="settings">
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
				@change=${t=>{const s=t.target;localStorage.setItem("theme",s.value),this.reloadEditors()}}
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
				@input=${t=>{const s=Number(t.target.value);s<10||s>20||(localStorage.setItem("fontSize",s.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${t=>{const s=t.target;localStorage.setItem("minimap",s.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(e,t){switch(t){case"resolutionWidth":return this.onUpdate(g(u({},this.settings),{resolutionWidth:Number(e.value)}));case"resolutionHeight":return this.onUpdate(g(u({},this.settings),{resolutionHeight:Number(e.value)}));case"fontFactor":return this.onUpdate(g(u({},this.settings),{fontFactor:Number(e.value)}));case"webLayout":return this.onUpdate(g(u({},this.settings),{webLayout:e.value}));case"scaleFontsize":return this.onUpdate(g(u({},this.settings),{scaleFontsize:e.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(e=>e.createEditor())}};j([m({type:Object})],T.prototype,"settings",2);j([m({type:Function})],T.prototype,"onUpdate",2);T=j([$("xone-settings")],T);
