import{r as C,i as A,n as k,a as R,b as z,x as f,t as H}from"./iframe-DtELfyQx.js";import{e as E,C as T,S as F,P as L,W as O,a as b,E as W,b as _,O as $,A as V,D as M,G as y,T as Y,c as D,d as U,f as P,g as I,M as v,h as B,i as G,B as Q,V as u,j as p,Q as S,k as j,l as N}from"./OutputPass-BELiwGZe.js";import"./preload-helper-PPVm8Dsz.js";let q;function Z(l){return(o,e)=>E(o,e,{get(){return(this.renderRoot??(q??=document.createDocumentFragment())).querySelectorAll(l)}})}const J=":host{display:block;width:100%;position:relative;font-family:Poppins,sans-serif}.wrapper{position:relative;width:100%}.model-wrapper{position:sticky;top:0;height:100vh;width:100%;z-index:10}.vh-microsite-interactive-model{width:600px;height:600px;max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);overflow:hidden}.vh-microsite-interactive-model canvas{display:block;width:100%!important;height:100%!important}.section{width:100%;min-height:100vh;scroll-snap-align:start;position:relative;z-index:1;pointer-events:none}.content-overlay{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:20}.controls-list{position:absolute;top:50%;left:40px;transform:translateY(-50%);display:flex;flex-direction:column;gap:24px;z-index:10;opacity:0;pointer-events:none;transition:opacity .6s ease}.controls-list.visible{opacity:1;pointer-events:auto}.control-item{background:transparent;border:none;padding:1px 30px 1px 1px;border-radius:50px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .3s ease;text-align:left;outline:none;width:fit-content}.control-item .icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;opacity:1;transition:filter .3s ease}.control-item .icon img{width:100%;height:100%;display:block}.control-item .label{font-size:16px;color:#002c4e;opacity:.7;font-weight:500;transition:color .3s ease,opacity .3s ease}.control-item:hover .label{opacity:1}.control-item.active{background-color:#76b729}.control-item.active .icon{filter:brightness(0) invert(1)}.control-item.active .label{color:#fff;opacity:1;font-weight:600}.controls{position:absolute;top:50%;left:20px;transform:translateY(-50%);display:flex;flex-direction:column;gap:12px;z-index:10;pointer-events:none}.controls button{pointer-events:auto;padding:12px 24px;background:#ffffffe6;border:1px solid rgba(0,0,0,.1);border-radius:8px;font-family:Poppins,sans-serif;font-size:14px;color:#333;cursor:pointer;transition:all .2s ease;box-shadow:0 4px 6px #0000000d;font-weight:500;text-align:center;width:160px}.controls button:hover{background:#fff;transform:translate(4px);box-shadow:0 6px 12px #0000001a}.controls button:active{transform:translate(2px);box-shadow:0 2px 4px #0000000d}.info-card{position:absolute;top:40%;right:40px;transform:translateY(-60%);width:261px;background-color:#f0fdf4;border-radius:12px;padding:24px;box-shadow:0 4px 20px #0000000d;z-index:10;font-family:Poppins,sans-serif;opacity:0;pointer-events:none;transition:opacity .6s ease}.info-card.visible{opacity:1;pointer-events:auto}.info-card .card-header{display:flex;align-items:center;gap:10px;margin-bottom:12px}.info-card .card-header img{width:20px;height:20px;display:block}.info-card .card-header h3{margin:0;font-size:16px;font-weight:700;color:#002c4e}.info-card p{margin:0;font-size:14px;font-weight:300;line-height:1.5;color:#334155}",x=[{label:"Intro",view:"front",textAngle:0,modelRotationY:0,description:"",hidden:!0,isIdle:!0},{label:"Full Disclosure Labelling",view:"back",textAngle:0,modelRotationY:180,description:"Explore your favorite products—from ingredient functions and sources to version numbers and scientific support. Every label has a story, and we're not keeping it to ourselves, even if that means sharing our formulas with the world."},{label:"No Proprietary Blends",view:"front",textAngle:275,modelRotationY:220,description:"At Vibrant Health, we never use proprietary blends because we believe you deserve to know exactly what’s in your supplements. Full transparency empowers you to make confident, informed choices about your health."},{label:"Non GMO Certified",view:"left",textAngle:200,modelRotationY:90,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante placerat finibus."},{label:"Clinically Formulated",view:"left",textAngle:127,modelRotationY:350,description:"Our products are clinically formulated using science-backed ingredients and research. Green Vibrance has been continuously improved more than 20 times since 1992. Every refinement is driven by evolving research to deliver real, measurable results you can trust."},{label:"Made in USA",view:"right",textAngle:62,modelRotationY:-90,highlightWidth:.5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante placerat finibus."},{label:"Top View",view:"top",textAngle:0,description:"",hidden:!0}],X=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,K=`
    uniform sampler2D map;
    uniform float uHighlightAngle; // Angle to highlight (radians), relative to texture center
    uniform vec3 uHighlightColor;
    uniform float uShowHighlight; // 0.0 = no highlight, 1.0 = highlight
    uniform vec3 uBaseColor; // Base color tint for the texture
    uniform float uHighlightWidth; // Width of highlight in radians
    varying vec2 vUv;

    // Constants
    const float PI = 3.14159265;
    const float TWO_PI = 6.28318530;

    void main() {
        vec4 texColor = texture2D(map, vUv);
        
        // Only affect non-transparent pixels
        if (texColor.a < 0.1) discard; 

        // Calculate angle of current pixel
        vec2 centered = vUv - 0.5;
        float angle = atan(centered.y, centered.x); // -PI to PI
        
        // Calculate distance to highlight angle
        float dist = abs(angle - uHighlightAngle);
        if (dist > PI) dist = TWO_PI - dist; // Wrap around

        vec3 finalColor = texColor.rgb * uBaseColor; // Apply base color tint
        
        // If within width, use highlight color
        if (uShowHighlight > 0.5 && dist < uHighlightWidth) {
            finalColor = uHighlightColor;
        }

        gl_FragColor = vec4(finalColor, texColor.a);
    }
`;class ee{constructor(o,e){this.rawModel=null,this.textRingMesh=null,this.clock=new T,this.targetTextRotation=39*Math.PI/180,this.textRotationOffset=39*Math.PI/180,this.isAutoRotating=!0,this.targetQuaternion=null,this.animationId=null,this.handleResize=()=>{if(!this.container||!this.camera||!this.renderer)return;const t=this.container.clientWidth,i=this.container.clientHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i),this.composer.setSize(t,i)},this.animate=()=>{this.animationId=requestAnimationFrame(this.animate);const t=this.clock.getDelta();if(this.modelContainer){if(this.isAutoRotating)this.modelContainer.rotation.y+=.3*t;else if(this.targetQuaternion){const i=1-Math.exp(-5*t);this.modelContainer.quaternion.slerp(this.targetQuaternion,i)}}if(this.textRingMesh)if(this.isAutoRotating)this.textRingMesh.rotation.z-=.12*t;else{let i=this.textRingMesh.rotation.z,s=this.targetTextRotation-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const n=1-Math.exp(-5*t);this.textRingMesh.rotation.z+=s*n}this.composer.render()},this.container=o,this.init(e)}init(o){const e=this.container.clientWidth*2,t=this.container.clientHeight*2;console.log(e,t),console.log(window.devicePixelRatio),this.scene=new F,this.camera=new L(70,e/t,.01,20),this.camera.position.set(0,0,6),this.camera.lookAt(0,0,0),this.renderer=new O({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputColorSpace=b,this.container.appendChild(this.renderer.domElement),this.composer=new W(this.renderer);const i=new _(this.scene,this.camera,0,0);i.sampleLevel=2,this.composer.addPass(i);const s=new $;this.composer.addPass(s),this.composer.setSize(e,t),this.composer.setPixelRatio(window.devicePixelRatio);const n=new V(16777215,1);this.scene.add(n);const a=new M(16777215,1.5);a.position.set(10,20,10),this.scene.add(a);const r=new M(16777215,1);r.position.set(-10,10,-10),this.scene.add(r),this.modelContainer=new y,this.scene.add(this.modelContainer),this.loadRings(),this.loadModel(o),this.animate(),window.addEventListener("resize",this.handleResize)}loadRings(){const o=new Y,e=new y;[{path:"/images/vh-microsite-model-outer-ring.svg",size:10.6,isText:!1},{path:"/images/vh-microsite-model-text.svg",size:10,isText:!0},{path:"/images/vh-microsite-model-inner-ring.svg",size:9.4,isText:!1}].forEach(i=>{o.load(i.path,s=>{s.colorSpace=b;const n=new D(i.size,i.size);let a;if(i.isText){a=new U({uniforms:{map:{value:s},uHighlightAngle:{value:0},uHighlightColor:{value:new I(11342)},uShowHighlight:{value:0},uBaseColor:{value:new I(11184810)},uHighlightWidth:{value:.8}},vertexShader:X,fragmentShader:K,transparent:!0,side:P,depthWrite:!1});const r=new v(n,a);this.textRingMesh=r,this.textRingMesh.rotation.z=this.targetTextRotation,this.updateHighlightUniform(-1),e.add(r)}else{a=new B({map:s,transparent:!0,side:P,depthWrite:!1,color:11184810});const r=new v(n,a);e.add(r)}})}),e.position.y=0,e.position.z=-2,this.scene.add(e)}loadModel(o){new G().load(o,t=>{this.rawModel=t.scene;const i=new Q().setFromObject(this.rawModel),s=i.getSize(new u),n=i.getCenter(new u);this.rawModel.position.sub(n),this.modelContainer.add(this.rawModel);const a=Math.max(s.x,s.y,s.z);if(a>0){const r=5/a;this.modelContainer.scale.set(r,r,r)}this.rawModel.traverse(r=>{if(r instanceof v){const c=r.material;if(c){const h=w=>{w&&(w.anisotropy=this.renderer.capabilities.getMaxAnisotropy())};h(c.map),h(c.emissiveMap),h(c.roughnessMap),h(c.metalnessMap),h(c.normalMap),c.normalMap&&(c.normalMap.flipY=!1),h(c.alphaMap),h(c.aoMap),h(c.clearcoatMap),h(c.clearcoatRoughnessMap),h(c.transmissionMap)}}})},void 0,t=>{console.error("An error happened loading the GLB",t)})}setSection(o){if(this.isAutoRotating=!1,!this.modelContainer)return;const e=x[o];if(e.isIdle){this.isAutoRotating=!0,this.updateHighlightUniform(-1);return}const t=e.view,s=new p().setFromQuaternion(this.modelContainer.quaternion,"YXZ").y,n=new S().setFromAxisAngle(new u(0,1,0),s),a=new S;if(e.modelRotationY!==void 0){const c=j.degToRad(e.modelRotationY);a.setFromEuler(new p(0,c,0))}else switch(t){case"front":a.setFromEuler(new p(0,0,0));break;case"back":a.setFromEuler(new p(0,Math.PI,0));break;case"left":a.setFromEuler(new p(0,-Math.PI/2,0));break;case"right":a.setFromEuler(new p(0,Math.PI/2,0));break;case"top":a.setFromAxisAngle(new u(1,0,0),Math.PI/2).multiply(n);break;case"bottom":a.setFromAxisAngle(new u(1,0,0),-Math.PI/2).multiply(n);break}this.targetQuaternion=a;const r=e.textAngle*Math.PI/180;this.targetTextRotation=-r+this.textRotationOffset,t==="top"||t==="bottom"?this.updateHighlightUniform(-1):this.updateHighlightUniform(o)}updateHighlightUniform(o){if(!this.textRingMesh)return;const e=this.textRingMesh.material;if(!e.uniforms)return;if(o<0){e.uniforms.uShowHighlight.value=0;return}e.uniforms.uShowHighlight.value=1;const t=x[o];e.uniforms.uHighlightWidth.value=t.highlightWidth??.8;const i=t.textAngle*Math.PI/180,s=this.textRotationOffset;let n=Math.PI/2+i-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;e.uniforms.uHighlightAngle.value=n}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.handleResize),this.renderer.dispose()}}var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,m=(l,o,e,t)=>{for(var i=t>1?void 0:t?ie(o,e):o,s=l.length-1,n;s>=0;s--)(n=l[s])&&(i=(t?n(o,e,i):n(i))||i);return t&&i&&te(o,e,i),i};let d=class extends z{constructor(){super(...arguments),this.modelPath="/3d-models/vibranthealth_bottle/VibrantHealth_Anim_JustBottle.gltf",this.currentSectionIndex=-1,this.controlsVisible=!1,this.sceneManager=null,this.sections=x,this.observer=null,this.isProgrammaticScroll=!1,this.scrollTimeout=null}firstUpdated(){this.container&&(this.sceneManager=new ee(this.container,this.modelPath));const l={root:null,rootMargin:"-50% 0px -50% 0px",threshold:0};this.observer=new IntersectionObserver(o=>{this.isProgrammaticScroll||o.forEach(e=>{if(e.isIntersecting){const t=Number(e.target.getAttribute("data-index"));if(!isNaN(t)){const i=this.sections[t]?.hidden,s=!this.controlsVisible;s&&!i?this.controlsVisible=!0:i&&(this.controlsVisible=!1),(s||this.currentSectionIndex!==t)&&(this.currentSectionIndex=t,this.sceneManager&&this.sceneManager.setSection(t))}}})},l),this.sectionElements.forEach(o=>{this.observer?.observe(o)})}disconnectedCallback(){super.disconnectedCallback(),this.sceneManager&&this.sceneManager.dispose(),this.observer&&this.observer.disconnect()}handleSectionClick(l){if(this.currentSectionIndex===l)return;this.isProgrammaticScroll=!0,this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.currentSectionIndex=l,this.sceneManager&&this.sceneManager.setSection(l);const o=this.sectionElements[l];o&&o.scrollIntoView({behavior:"smooth"}),this.scrollTimeout=window.setTimeout(()=>{this.isProgrammaticScroll=!1},1e3)}render(){const l=this.sections[this.currentSectionIndex]||this.sections[0];return f`
            <div class="wrapper">
                <div class="model-wrapper">
                    <div class="vh-microsite-interactive-model"></div>
                    
                    <div class="controls-list ${this.controlsVisible?"visible":""}">
                        ${this.sections.map((o,e)=>o.hidden?null:f`
                                <button 
                                    class="control-item ${this.currentSectionIndex===e?"active":""}"
                                    @click=${()=>this.handleSectionClick(e)}
                                >
                                    <div class="icon">
                                        <img src="/images/vh-microsite-model-checkmark.svg" alt="Checkmark" />
                                    </div>
                                    <span class="label">${o.label}</span>
                                </button>
                            `)}
                    </div>

                    <div class="info-card ${this.controlsVisible?"visible":""}">
                        <div class="card-header">
                            <img src="/images/vh-microsite-model-checkmark.svg" alt="Checkmark" />
                            <h3>${l.label}</h3>
                        </div>
                        <p>${l.description}</p>
                    </div>
                </div>

                ${this.sections.map((o,e)=>f`
                    <div class="section" data-index="${e}"></div>
                `)}
            </div>
        `}};d.styles=A`
    ${C(J)}
  `;m([k({type:String})],d.prototype,"modelPath",2);m([N(".vh-microsite-interactive-model")],d.prototype,"container",2);m([Z(".section")],d.prototype,"sectionElements",2);m([R()],d.prototype,"currentSectionIndex",2);m([R()],d.prototype,"controlsVisible",2);d=m([H("vh-microsite-interactive-model")],d);const ae={title:"Components/Interactive Model",component:"vh-microsite-interactive-model",tags:["autodocs"],argTypes:{modelPath:{control:"text"}}},g={render:()=>f`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model></vh-microsite-interactive-model>
    </div>`};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model></vh-microsite-interactive-model>
    </div>\`
}`,...g.parameters?.docs?.source}}};const re=["Default"];export{g as Default,re as __namedExportsOrder,ae as default};
