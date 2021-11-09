var P=Object.defineProperty;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&w(e,n,t[n]);if(I)for(var n of I(t))R.call(t,n)&&w(e,n,t[n]);return e};import{t as f,n as v,s as S,d as y,e as x,p as b,W as _,a as j,b as E,l as p,c as A,f as u,i as L}from"./vendor.ad1ab897.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};V();String.prototype.compress=function(e){e=e===!0;var t,n={},s=this,r,i,o="",a=[],l="",T=256;for(t=0;t<256;t+=1)n[String.fromCharCode(t)]=t;for(t=0;t<s.length;t+=1)r=s.charAt(t),i=o+r,n.hasOwnProperty(i)?o=i:(a.push(n[o]),l+=String.fromCharCode(n[o]),n[i]=T++,o=String(r));return o!==""&&(a.push(n[o]),l+=String.fromCharCode(n[o])),e?a:l};String.prototype.decompress=function(){var e,t=[],n=[],s=this,r,i,o,a="",l=256;for(e=0;e<256;e+=1)n[e]=String.fromCharCode(e);if(s&&typeof s=="string"){for(e=0;e<s.length;e+=1)t.push(s[e].charCodeAt(0));s=t,t=null}for(r=String.fromCharCode(s[0]),i=r,e=1;e<s.length;e+=1){if(o=s[e],n[o])a=n[o];else if(o===l)a=r+r.charAt(0);else return null;i+=a,n[l++]=r+a.charAt(0),r=a}return i};var D=Object.defineProperty,K=Object.getOwnPropertyDescriptor,m=(e,t,n,s)=>{for(var r=s>1?void 0:s?K(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(s?o(t,n,r):o(r))||r);return s&&r&&D(t,n,r),r};let c=class extends S{constructor(){super();this.xmlString="",this.cssString="",this.jsString="",this.urlParam="",this.initEditorValues()}createRenderRoot(){return this}initEditorValues(){try{const{hash:e}=window.location,[t,n,s]=e.split(e.includes("%7C")?"%7C":"|");t&&(this.xmlString=y(t).decompress()),n&&(this.cssString=y(n).decompress()),s&&(this.jsString=y(s).decompress())}catch{}}updated(e){!e.has("xmlString")&&!e.has("cssString")&&!e.has("jsString")||!this.xmlString&&!this.cssString&&!this.jsString||(this.urlParam=`${x(this.xmlString.compress())}|${x(this.cssString.compress())}|${x(this.jsString.compress())}`,window.location.hash=this.urlParam,this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>{var s;const t=document.querySelector("xone-preview");t&&((s=t.parentElement)==null||s.removeChild(t));const n=document.getElementById("editor-panel");n.innerHTML=`<xone-preview url="https://mrscolo.github.io/xone-framework/" urlParam=${this.urlParam}></xone-preview>`},document.querySelector("xone-preview")?1e3:0))}render(){return b`
			<div class="main-layout">
				<!-- aside menu -->
				<aside>
					<button>
						<img src="/playground-xone/assets/editor.png" width="32" />
					</button>
					<div class="expand"></div>
					<button>
						<img src="/playground-xone/assets/setting.png" width="32" />
					</button>
				</aside>
				<!-- split panels -->
				<sp-split-view resizable primary-min="200">
					<!-- editors panel -->
					<div class="panel">
						<!-- editors panel tabs -->
						<sp-tabs selected="1" size="m">
							<sp-tab label="Xne" value="1"></sp-tab>
							<sp-tab label="Css" value="2"></sp-tab>
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
					<div id="editor-panel" class="panel">
					</div>
				</sp-split-view>
			</div>
		`}};m([f()],c.prototype,"xmlString",2);m([f()],c.prototype,"cssString",2);m([f()],c.prototype,"jsString",2);m([f()],c.prototype,"urlParam",2);c=m([v("xone-app")],c);window.MonacoEnvironment={getWorker:function(e,t){switch(t){case"css":return new E;case"javascript":return new j;default:return new _}}};const N={automaticLayout:!0,fontSize:12,scrollBeyondLastLine:!0,padding:{top:16},theme:"default"};p.registerCompletionItemProvider("xml",{provideCompletionItems:(e,t)=>({suggestions:[{preselect:!0,label:"coll",kind:p.CompletionItemKind.Snippet,documentation:"coll",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<coll name="${1:name}" special="${2:true}" >\n	\n</coll>'},{preselect:!0,label:"prop",kind:p.CompletionItemKind.Snippet,documentation:"prop",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<prop name="${1:propName}" type="${2:T}" />'},{preselect:!0,label:"contents",kind:p.CompletionItemKind.Snippet,documentation:"contents",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<contents name="${1:contentsName}" src="${2:srcName}" />'},{preselect:!0,label:"group",kind:p.CompletionItemKind.Snippet,documentation:"group",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<group name="${1:name}" id="${2:1}" >\n	\n</group>'},{preselect:!1,label:"frame",kind:p.CompletionItemKind.Snippet,documentation:"frame",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<frame name="\${1:name}" >
	
</frame>`},{preselect:!1,label:"param",kind:p.CompletionItemKind.Snippet,documentation:"param",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:'<param name="${1:name}" />'},{preselect:!1,label:"method",kind:p.CompletionItemKind.Snippet,documentation:"method",insertTextRules:p.CompletionItemInsertTextRule.InsertAsSnippet,insertText:`<\${1:method}>
	<action name="runscript">
		<script language="javascript">
			\${2:// Script content...}
		<\/script>
	</action>
</\${1:method}>`}]})});const W=(e,t)=>A.create(e,$({value:"",language:t},N));var M=Object.defineProperty,U=Object.getOwnPropertyDescriptor,h=(e,t,n,s)=>{for(var r=s>1?void 0:s?U(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(s?o(t,n,r):o(r))||r);return s&&r&&M(t,n,r),r};let d=class extends S{constructor(){super(...arguments);this.type=""}createRenderRoot(){return this}render(){return b`
			<div class="editor-container">
				<div class="code-editor"></div>
			</div>
		`}firstUpdated(){const e=W(this.editorElement,this.type);e.setValue(this.editorValue),e.onDidChangeModelContent(()=>this.onUpdate(e.getValue()))}};h([u({type:String})],d.prototype,"type",2);h([u({type:String})],d.prototype,"editorValue",2);h([u({type:Function})],d.prototype,"onUpdate",2);h([L(".code-editor")],d.prototype,"editorElement",2);d=h([v("code-editor")],d);var z=Object.defineProperty,X=Object.getOwnPropertyDescriptor,C=(e,t,n,s)=>{for(var r=s>1?void 0:s?X(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(s?o(t,n,r):o(r))||r);return s&&r&&z(t,n,r),r};let g=class extends S{constructor(){super(...arguments);this.url="http://localhost:8080/"}createRenderRoot(){return this}render(){return b`<iframe src="${this.url}#/preview?v=${this.urlParam}"></iframe>`}};C([u({type:String})],g.prototype,"url",2);C([u({type:String})],g.prototype,"urlParam",2);g=C([v("xone-preview")],g);
