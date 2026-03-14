import{b as i}from"./iframe-DZTSBM7b.js";import"./preload-helper-PPVm8Dsz.js";const n=[{image:"/images/vh-microsite-mobile-interactive-label-1.png",pulseDot:{left:"50%",top:"30%",size:60}},{image:"/images/vh-microsite-mobile-interactive-label-2.png",pulseDot:{left:"57.5%",top:"63%",size:80}},{image:"/images/vh-microsite-mobile-interactive-label-3.png",pulseDot:{left:"40%",top:"42%",size:80}},{image:"/images/vh-microsite-mobile-interactive-label-2.png",pulseDot:{left:"57.5%",top:"63%",size:80}},{image:"/images/vh-microsite-mobile-interactive-label-2.png",pulseDot:{left:"57.5%",top:"63%",size:80}},{image:"/images/vh-microsite-mobile-interactive-label-2.png",pulseDot:{left:"57.5%",top:"63%",size:80}}],g={title:"Components/Interactive Model",component:"vh-microsite-interactive-model",argTypes:{modelPath:{control:"text"},ambientIntensity:{control:{type:"range",min:0,max:5,step:.1}},keyLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},keyLightX:{control:{type:"range",min:-50,max:50,step:1}},keyLightY:{control:{type:"range",min:-50,max:50,step:1}},keyLightZ:{control:{type:"range",min:-50,max:50,step:1}},fillLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},fillLightX:{control:{type:"range",min:-50,max:50,step:1}},fillLightY:{control:{type:"range",min:-50,max:50,step:1}},fillLightZ:{control:{type:"range",min:-50,max:50,step:1}},backLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},backLightX:{control:{type:"range",min:-50,max:50,step:1}},backLightY:{control:{type:"range",min:-50,max:50,step:1}},backLightZ:{control:{type:"range",min:-50,max:50,step:1}},powderOffsetX:{control:{type:"range",min:-.5,max:.5,step:.01}},powderOffsetY:{control:{type:"range",min:-.5,max:.5,step:.01}},powderRepeatX:{control:{type:"range",min:.1,max:2,step:.1}},powderRepeatY:{control:{type:"range",min:.1,max:2,step:.1}}}},t={args:{modelPath:"/3d-models/vibranthealth_bottle_v4/VibrantHealth_Anim_JustBottle_Fix2.gltf",imagePath:"/images/vh-microsite-model-text-v3.svg",mobileImageHeader:"/images/vh-microsite-mobile-idle.png",mobileImagePowder:"/images/vh-microsite-mobile-powder-frame.png",galleryImages:n,ambientIntensity:1.2,keyLightIntensity:2,keyLightX:-10,keyLightY:10,keyLightZ:10,fillLightIntensity:.6,fillLightX:10,fillLightY:5,fillLightZ:10,backLightIntensity:1,backLightX:0,backLightY:5,backLightZ:-10,powderOffsetX:.08,powderOffsetY:-.14,powderRepeatX:1,powderRepeatY:1},render:e=>i`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model
        .modelPath=${e.modelPath}
        .imagePath=${e.imagePath}
        .mobileImageHeader=${e.mobileImageHeader}
        .mobileImagePowder=${e.mobileImagePowder}
        .galleryImages=${e.galleryImages}
        .ambientIntensity=${e.ambientIntensity}
        .keyLightIntensity=${e.keyLightIntensity}
        .keyLightX=${e.keyLightX}
        .keyLightY=${e.keyLightY}
        .keyLightZ=${e.keyLightZ}
        .fillLightIntensity=${e.fillLightIntensity}
        .fillLightX=${e.fillLightX}
        .fillLightY=${e.fillLightY}
        .fillLightZ=${e.fillLightZ}
        .backLightIntensity=${e.backLightIntensity}
        .backLightX=${e.backLightX}
        .backLightY=${e.backLightY}
        .backLightZ=${e.backLightZ}
        .powderOffsetX=${e.powderOffsetX}
        .powderOffsetY=${e.powderOffsetY}
        .powderRepeatX=${e.powderRepeatX}
        .powderRepeatY=${e.powderRepeatY}
      ></vh-microsite-interactive-model>
    </div>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelPath: "/3d-models/vibranthealth_bottle_v4/VibrantHealth_Anim_JustBottle_Fix2.gltf",
    imagePath: "/images/vh-microsite-model-text-v3.svg",
    mobileImageHeader: "/images/vh-microsite-mobile-idle.png",
    mobileImagePowder: "/images/vh-microsite-mobile-powder-frame.png",
    galleryImages: defaultGalleryImages,
    ambientIntensity: 1.2,
    keyLightIntensity: 2.0,
    keyLightX: -10,
    keyLightY: 10,
    keyLightZ: 10,
    fillLightIntensity: 0.6,
    fillLightX: 10,
    fillLightY: 5,
    fillLightZ: 10,
    backLightIntensity: 1.0,
    backLightX: 0,
    backLightY: 5,
    backLightZ: -10,
    powderOffsetX: 0.08,
    powderOffsetY: -0.14,
    powderRepeatX: 1,
    powderRepeatY: 1
  },
  render: (args: any) => html\`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model
        .modelPath=\${args.modelPath}
        .imagePath=\${args.imagePath}
        .mobileImageHeader=\${args.mobileImageHeader}
        .mobileImagePowder=\${args.mobileImagePowder}
        .galleryImages=\${args.galleryImages}
        .ambientIntensity=\${args.ambientIntensity}
        .keyLightIntensity=\${args.keyLightIntensity}
        .keyLightX=\${args.keyLightX}
        .keyLightY=\${args.keyLightY}
        .keyLightZ=\${args.keyLightZ}
        .fillLightIntensity=\${args.fillLightIntensity}
        .fillLightX=\${args.fillLightX}
        .fillLightY=\${args.fillLightY}
        .fillLightZ=\${args.fillLightZ}
        .backLightIntensity=\${args.backLightIntensity}
        .backLightX=\${args.backLightX}
        .backLightY=\${args.backLightY}
        .backLightZ=\${args.backLightZ}
        .powderOffsetX=\${args.powderOffsetX}
        .powderOffsetY=\${args.powderOffsetY}
        .powderRepeatX=\${args.powderRepeatX}
        .powderRepeatY=\${args.powderRepeatY}
      ></vh-microsite-interactive-model>
    </div>\`
}`,...t.parameters?.docs?.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,g as default};
