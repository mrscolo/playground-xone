var R=Object.defineProperty,E=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(t,e,r)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&T(t,r,e[r]);if(P)for(var r of P(e))W.call(e,r)&&T(t,r,e[r]);return t},S=(t,e)=>E(t,j(e));import{t as h,n as b,s as y,d as w,e as $,p as f,W as N,a as U,b as A,l as a,c as z,f as u,i as H}from"./vendor.ad1ab897.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};D();String.prototype.compress=function(t){t=t===!0;var e,r={},n=this,i,s,o="",l=[],c="",_=256;for(e=0;e<256;e+=1)r[String.fromCharCode(e)]=e;for(e=0;e<n.length;e+=1)i=n.charAt(e),s=o+i,r.hasOwnProperty(s)?o=s:(l.push(r[o]),c+=String.fromCharCode(r[o]),r[s]=_++,o=String(i));return o!==""&&(l.push(r[o]),c+=String.fromCharCode(r[o])),t?l:c};String.prototype.decompress=function(){var t,e=[],r=[],n=this,i,s,o,l="",c=256;for(t=0;t<256;t+=1)r[t]=String.fromCharCode(t);if(n&&typeof n=="string"){for(t=0;t<n.length;t+=1)e.push(n[t].charCodeAt(0));n=e,e=null}for(i=String.fromCharCode(n[0]),s=i,t=1;t<n.length;t+=1){if(o=n[t],r[o])l=r[o];else if(o===c)l=i+i.charAt(0);else return null;s+=l,r[c++]=i+l.charAt(0),i=l}return s};var V=Object.defineProperty,K=Object.getOwnPropertyDescriptor,d=(t,e,r,n)=>{for(var i=n>1?void 0:n?K(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&V(e,r,i),i};let p=class extends y{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.settings={resolutionWidth:-1,resolutionHeight:-1,webLayout:""},this.isSettingsOpened=!1,this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:t}=window.location,[e,r,n,i,s,o]=t.split(t.includes("%7C")?"%7C":"|");if(e&&(this.xmlString=w(e).decompress()),r&&(this.cssString=w(r).decompress()),n&&(this.jsString=w(n).decompress()),i)try{this.settings.resolutionWidth=Number(i)}catch{}s&&(this.settings.resolutionHeight=Number(s)),o&&(this.settings.webLayout=w(o.decompress()))}catch{}}reloadPreview(){var r;const t=document.querySelector("xone-preview");t&&((r=t.parentElement)==null||r.removeChild(t));const e=document.getElementById("editor-panel");e.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`}updated(t){!t.has("xmlString")&&!t.has("cssString")&&!t.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.updateUrl(),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>this.reloadPreview(),document.querySelector("xone-preview")?1e3:0))}updateUrl(){const{resolutionWidth:t,resolutionHeight:e,webLayout:r}=this.settings;this.urlParam=`${$(this.xmlString.compress())}|${$(this.cssString.compress())}|${$(this.jsString.compress())}`,this.urlParam+=`|${t.toString()}|${e.toString()}|${$(r.toString().compress())}`,window.location.hash=this.urlParam}render(){return f`
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
				${this.isSettingsOpened?f`
								<xone-settings
									.onUpdate=${t=>{this.settings=m({},t),this.updateUrl(),this.reloadPreview()}}
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
		`}};d([h()],p.prototype,"xmlString",2);d([h()],p.prototype,"cssString",2);d([h()],p.prototype,"jsString",2);d([h()],p.prototype,"urlParam",2);d([h()],p.prototype,"settings",2);d([h()],p.prototype,"isSettingsOpened",2);p=d([b("xone-app")],p);window.MonacoEnvironment={getWorker:function(t,e){switch(e){case"css":return new A;case"javascript":return new U;default:return new N}}};const M=()=>{var e;return{automaticLayout:!0,fontSize:Number((e=localStorage.getItem("fontSize"))!=null?e:"14"),scrollBeyondLastLine:!0,padding:{top:16},minimap:{enabled:localStorage.getItem("minimap")!=="off"},theme:localStorage.getItem("theme")||"vs-dark"}};a.registerCompletionItemProvider("xml",{provideCompletionItems:(t,e)=>({suggestions:[{preselect:!0,label:"<coll",kind:a.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:name}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"<prop",kind:a.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" />'},{preselect:!0,label:"<contents",kind:a.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"<group",kind:a.CompletionItemKind.Snippet,documentation:"group",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:name}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"<frame",kind:a.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:name}" >
	
</frame>`},{preselect:!1,label:"<param",kind:a.CompletionItemKind.Snippet,documentation:"param",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:name}" />'},{preselect:!1,label:"<method",kind:a.CompletionItemKind.Snippet,documentation:"method",insertTextRules:a.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:method}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:method}>`}]})});const X=(t,e)=>z.create(t,m({value:"",language:e},M()));var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,v=(t,e,r,n)=>{for(var i=n>1?void 0:n?F(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&q(e,r,i),i};let g=class extends y{constructor(){super();this.type="",this.editor=null}createRenderRoot(){return this}render(){return f`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){this.createEditor()}async createEditor(){this.editor&&(this.editor.dispose(),await new Promise(t=>setTimeout(()=>t(!0),100))),this.editor=X(this.editorElement,this.type),this.editor.setValue(this.editorValue),this.editor.onDidChangeModelContent(()=>this.onUpdate(this.editor.getValue()))}};v([u({type:String})],g.prototype,"type",2);v([u({type:String})],g.prototype,"editorValue",2);v([u({type:Function})],g.prototype,"onUpdate",2);v([H(".code-editor")],g.prototype,"editorElement",2);g=v([b("code-editor")],g);var B=Object.defineProperty,J=Object.getOwnPropertyDescriptor,C=(t,e,r,n)=>{for(var i=n>1?void 0:n?J(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&B(e,r,i),i};let x=class extends y{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return f`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};C([u({type:String})],x.prototype,"url",2);C([u({type:String})],x.prototype,"urlParam",2);x=C([b("xone-preview")],x);var k=Object.defineProperty,G=Object.getOwnPropertyDescriptor,O=(t,e,r,n)=>{for(var i=n>1?void 0:n?G(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&k(e,r,i),i};let I=class extends y{createRenderRoot(){return this}render(){var t;return f` <div class="settings">
			<label for="resolutionWidth">Resolution width:</label>
			<input
				type="number"
				id="resolutionWidth"
				.value=${this.settings.resolutionWidth}
				@change=${e=>this.updateSettings(e.target,"resolutionWidth")}
				name="resolutionWidth"
			/>
			<label for="resolutionHeight">Resolution height:</label>
			<input
				type="number"
				id="resolutionHeight"
				.value=${this.settings.resolutionHeight}
				@change=${e=>this.updateSettings(e.target,"resolutionHeight")}
				name="resolutionHeight"
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
				@change=${e=>{const r=e.target;localStorage.setItem("theme",r.value),this.reloadEditors()}}
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
				@input=${e=>{const r=Number(e.target.value);r<10||r>20||(localStorage.setItem("fontSize",r.toString()),this.reloadEditors())}}
			/>
			<label for="minimap">Minimap: </label>
			<select
				name="minimap"
				@change=${e=>{const r=e.target;localStorage.setItem("minimap",r.value),this.reloadEditors()}}
				.value="${window.localStorage.getItem("minimap")||"on"}"
			>
				<option value="on" selected>on</option>
				<option value="off">off</option>
			</select>
		</div>`}updateSettings(t,e){switch(e){case"resolutionWidth":return this.onUpdate(S(m({},this.settings),{resolutionWidth:Number(t.value)}));case"resolutionHeight":return this.onUpdate(S(m({},this.settings),{resolutionHeight:Number(t.value)}));case"webLayout":return this.onUpdate(S(m({},this.settings),{webLayout:t.value}))}}reloadEditors(){document.querySelectorAll("code-editor").forEach(t=>t.createEditor())}};O([u({type:Object})],I.prototype,"settings",2);O([u({type:Function})],I.prototype,"onUpdate",2);I=O([b("xone-settings")],I);
