import{b as e}from"./iframe-my_nvcTM.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Interactive Model",component:"vh-microsite-interactive-model",tags:["autodocs"],argTypes:{modelPath:{control:"text"},ambientIntensity:{control:{type:"range",min:0,max:5,step:.1}},keyLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},keyLightX:{control:{type:"range",min:-50,max:50,step:1}},keyLightY:{control:{type:"range",min:-50,max:50,step:1}},keyLightZ:{control:{type:"range",min:-50,max:50,step:1}},fillLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},fillLightX:{control:{type:"range",min:-50,max:50,step:1}},fillLightY:{control:{type:"range",min:-50,max:50,step:1}},fillLightZ:{control:{type:"range",min:-50,max:50,step:1}},backLightIntensity:{control:{type:"range",min:0,max:10,step:.1}},backLightX:{control:{type:"range",min:-50,max:50,step:1}},backLightY:{control:{type:"range",min:-50,max:50,step:1}},backLightZ:{control:{type:"range",min:-50,max:50,step:1}}}},i={args:{modelPath:"/3d-models/vibranthealth_bottle_v3/VibrantHealth_Anim_JustBottle_Fix.glb",ambientIntensity:1.2,keyLightIntensity:2,keyLightX:-10,keyLightY:10,keyLightZ:10,fillLightIntensity:.6,fillLightX:10,fillLightY:5,fillLightZ:10,backLightIntensity:1,backLightX:0,backLightY:5,backLightZ:-10},render:t=>e`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model
        .modelPath=${t.modelPath}
        .ambientIntensity=${t.ambientIntensity}
        .keyLightIntensity=${t.keyLightIntensity}
        .keyLightX=${t.keyLightX}
        .keyLightY=${t.keyLightY}
        .keyLightZ=${t.keyLightZ}
        .fillLightIntensity=${t.fillLightIntensity}
        .fillLightX=${t.fillLightX}
        .fillLightY=${t.fillLightY}
        .fillLightZ=${t.fillLightZ}
        .backLightIntensity=${t.backLightIntensity}
        .backLightX=${t.backLightX}
        .backLightY=${t.backLightY}
        .backLightZ=${t.backLightZ}
      ></vh-microsite-interactive-model>
    </div>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelPath: "/3d-models/vibranthealth_bottle_v3/VibrantHealth_Anim_JustBottle_Fix.glb",
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
    backLightZ: -10
  },
  render: (args: any) => html\`<div style="width: 100%; height: 600px;">
      <vh-microsite-interactive-model
        .modelPath=\${args.modelPath}
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
      ></vh-microsite-interactive-model>
    </div>\`
}`,...i.parameters?.docs?.source}}};const a=["Default"];export{i as Default,a as __namedExportsOrder,g as default};
