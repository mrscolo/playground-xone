var _=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var T=(t,e,s)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))E.call(e,s)&&T(t,s,e[s]);if(O)for(var s of O(e))j.call(e,s)&&T(t,s,e[s]);return t},h=(t,e)=>R(t,z(e));import{t as g,n as b,s as y,d as $,e as w,p as v,W as L,a as W,b as N,l as a,c as U,f as d,i as A}from"./vendor.ad1ab897.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}};H();String.prototype.compress=function(t){t=t===!0;var e,s={},r=this,i,n,o="",l=[],p="",F=256;for(e=0;e<256;e+=1)s[String.fromCharCode(e)]=e;for(e=0;e<r.length;e+=1)i=r.charAt(e),n=o+i,s.hasOwnProperty(n)?o=n:(l.push(s[o]),p+=String.fromCharCode(s[o]),s[n]=F++,o=String(i));return o!==""&&(l.push(s[o]),p+=String.fromCharCode(s[o])),t?l:p};String.prototype.decompress=function(){var t,e=[],s=[],r=this,i,n,o,l="",p=256;for(t=0;t<256;t+=1)s[t]=String.fromCharCode(t);if(r&&typeof r=="string"){for(t=0;t<r.length;t+=1)e.push(r[t].charCodeAt(0));r=e,e=null}for(i=String.fromCharCode(r[0]),n=i,t=1;t<r.length;t+=1){if(o=r[t],s[o])l=s[o];else if(o===p)l=i+i.charAt(0);else return null;n+=l,s[p++]=i+l.charAt(0),i=l}return n};var D=Object.defineProperty,V=Object.getOwnPropertyDescriptor,m=(t,e,s,r)=>{for(var i=r>1?void 0:r?V(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&D(e,s,i),i};let c=class extends y{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:"",scaleFontsize:"false",fontFactor:0},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:t}=window.location,[e,s,r,i,n,o,l,p]=t.split(t.includes("%7C")?"%7C":"|");if(e&&(this.xmlString=$(e).decompress()),s&&(this.cssString=$(s).decompress()),r&&(this.jsString=$(r).decompress()),i)try{this.settings.resolutionWidth=Number(i)}catch{}n&&(this.settings.resolutionHeight=Number(n)),o&&(this.settings.webLayout=$(o.decompress())),l&&(this.settings.scaleFontsize=l),p&&(this.settings.fontFactor=Number(p))}catch{}}reloadPreview(){var s;const t=document.querySelector("xone-preview");t&&((s=t.parentElement)==null||s.removeChild(t));const e=document.getElementById("editor-panel");e.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(t){!t.has("xmlString")&&!t.has("cssString")&&!t.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?1e3:0))}updateUrl(){const{resolutionWidth:t,resolutionHeight:e,webLayout:s,scaleFontsize:r,fontFactor:i}=this.settings;this.urlParam=`${w(this.xmlString.compress())}|${w(this.cssString.compress())}|${w(this.jsString.compress())}`,this.urlParam+=`|${t.toString()}|${e.toString()}|${w(s.toString().compress())}`,this.urlParam+=`|${r}|${i}`,window.location.hash=this.urlParam}render(){return v`
			<div class="main-layout">
				<!-- aside menu -->
				<aside>
					<button @click=${()=>this.isSettingsOpened=!1}>
						<img src="/playground-xone/assets/editor.png" width="32" />
					</button>
					<div class="expand"></div>
					<button @click=${()=>this.isSettingsOpened=!this.isSettingsOpened}>
						<img src="/playground-xone/assets/setting.png" width="32" />
					</button>
				</aside>
				<!-- settings panel -->
				${this.isSettingsOpened?v`
								<xone-settings
									.onUpdate=${t=>{this.settings=u({},t),this.updateUrl(),this.reloadPreview()}}
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
								<code-editor type="xml" editorValue=${this.xmlString} .onUpdate=${t=>this.xmlString=t}></code-editor>
							</sp-tab-panel>
							<!-- Js editor -->
							<sp-tab-panel value="2">
								<code-editor type="css" editorValue=${this.cssString} .onUpdate=${t=>this.cssString=t}></code-editor>
							</sp-tab-panel>
							<!-- Css editor -->
							<sp-tab-panel value="3">
								<code-editor type="javascript" editorValue=${this.jsString} .onUpdate=${t=>this.jsString=t}>
							</sp-tab-panel>
						</sp-tabs>
					</div>
					<!-- preview  panel -->
					<div id="editor-panel" class="panel">
					</div>
				</sp-split-view>
			</div>
		`}};m([g()],c.prototype,"xmlString",2);m([g()],c.prototype,"cssString",2);m([g()],c.prototype,"jsString",2);m([g()],c.prototype,"urlParam",2);m([g()],c.prototype,"settings",2);m([g()],c.prototype,"isSettingsOpened",2);c=m([b("xone-app")],c);window.MonacoEnvironment={getWorker:function(t,e){switch(e){case"css":return new N;case"javascript":return new W;default:return new L}}};const K=()=>{var e;return{automaticLayout:!0,fontSize:Number((e=localStorage.getItem("fontSize"))!=null?e:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};a.registerCompletionItemProvider("xml",{provideCompletionItems:(t,e)=>({suggestions:[{preselect:!0,label:"<coll",kind:a.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:name}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"<prop",kind:a.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" />'},{preselect:!0,label:"<contents",kind:a.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"<group",kind:a.CompletionItemKind.Snippet,documentation:"group",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:name}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"<frame",kind:a.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:name}" >
	
</frame>`},{preselect:!1,label:"<param",kind:a.CompletionItemKind.Snippet,documentation:"param",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:name}" />'},{preselect:!1,label:"<method",kind:a.CompletionItemKind.Snippet,documentation:"method",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:method}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:method}>`}]})});const M=(t,e)=>U.create(t,u({value:"",language:e},K()));var X=Object.defineProperty,q=Object.getOwnPropertyDescriptor,S=(t,e,s,r)=>{for(var i=r>1?void 0:r?q(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&X(e,s,i),i};let f=class extends y{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return v`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(t=>setTimeout(()=>t(!0),100))),this.editor=M(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};S([d({type:String})],f.prototype,"type",2);S([d({type:String})],f.prototype,"editorValue",2);S([d({type:Function})],f.prototype,"onUpdate",2);S([A(".code-editor")],f.prototype,"editorElement",2);f=S([b("code-editor")],f);var B=Object.defineProperty,J=Object.getOwnPropertyDescriptor,C=(t,e,s,r)=>{for(var i=r>1?void 0:r?J(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&B(e,s,i),i};let x=class extends y{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return v`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};C([d({type:String})],x.prototype,"url",2);C([d({type:String})],x.prototype,"urlParam",2);x=C([b("xone-preview")],x);var k=Object.defineProperty,G=Object.getOwnPropertyDescriptor,P=(t,e,s,r)=>{for(var i=r>1?void 0:r?G(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&k(e,s,i),i};let I=class extends y{createRenderRoot(){return this}render(){var t;return v` <div class="settings">
			<label for="resolutionWidth">Resolution width:</label>
			<input
				type="number"
				id="resolutionWidth"
				min="-1"
				.value=${this.settings.resolutionWidth}
				@change=${e=>this.updateSettings(e.target,"resolutionWidth")}
				name="resolutionWidth"
			/>
			<label for="resolutionHeight">Resolution height:</label>
			<input
				type="number"
				id="resolutionHeight"
				min="-1"
				.value=${this.settings.resolutionHeight}
				@change=${e=>this.updateSettings(e.target,"resolutionHeight")}
				name="resolutionHeight"
			/>

			<label for="minimap">Scale fontsize: </label>
			<select
				name="scaleFontsize"
				@change=${e=>this.updateSettings(e.target,"scaleFontsize")}
				name="scaleFontsize"
				.value=${this.settings.scaleFontsize}
			>
				<option value="false" selected>false</option>
				<option value="true">true</option>
			</select>

			<label for="fontFactor">Font factor:</label>
			<input
				type="number"
				min="0"
				max="15"
				.disabled=${this.settings.scaleFontsize!=="true"}
				id="fontFactor"
				.value=${this.settings.fontFactor}
				@change=${e=>this.updateSettings(e.target,"fontFactor")}
				name="fontFactor"
			/>
			<label for="webLayout">Web layout:</label>
			<input
				type="string"
				id="webLayout"
				.value=${this.settings.webLayout}
				@change=${e=>this.updateSettings(e.target,"webLayout")}
				name="webLayout"
			/>
			<hr />
			<label for="theme">Theme: </label>
			<select
				name="theme"
				@change=${e=>{const s=e.target;localStorage.setItem("theme",s.value),this.reloadEditors()}}
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
				.value=${Number((t=localStorage.getItem("fontSize"))!=null?t:"14")}
				@input=${e=>{const s=Number(e.target.value);s<10||s>20||(localStorage.setItem("fontSize",s.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${e=>{const s=e.target;localStorage.setItem("minimap",s.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(t,e){switch(e){case"resolutionWidth":return this.onUpdate(h(u({},this.settings),{resolutionWidth:Number(t.value)}));case"resolutionHeight":return this.onUpdate(h(u({},this.settings),{resolutionHeight:Number(t.value)}));case"fontFactor":return this.onUpdate(h(u({},this.settings),{fontFactor:Number(t.value)}));case"webLayout":return this.onUpdate(h(u({},this.settings),{webLayout:t.value}));case"scaleFontsize":return this.onUpdate(h(u({},this.settings),{scaleFontsize:t.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(t=>t.createEditor())}};P([d({type:Object})],I.prototype,"settings",2);P([d({type:Function})],I.prototype,"onUpdate",2);I=P([b("xone-settings")],I);