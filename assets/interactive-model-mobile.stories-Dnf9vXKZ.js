import{m as l,a,c as i,d as m,e as r,b as o}from"./iframe-C71kPz19.js";import"./preload-helper-PPVm8Dsz.js";const s=[{image:"/images/vh-microsite-mobile-interactive-label-1.png",pulseDot:{left:"50%",top:"30%",size:60},title:i[0]?.title??"",text:i[0]?.text??""},{image:"/images/vh-microsite-mobile-interactive-label-2.png",pulseDot:{left:"57.5%",top:"63%",size:80},title:i[1]?.title??"",text:i[1]?.text??""},{image:"/images/vh-microsite-mobile-interactive-label-3.png",pulseDot:{left:"40%",top:"42%",size:80},title:i[2]?.title??"",text:i[2]?.text??""}],g={title:"Components/Interactive Model Mobile",component:"vh-microsite-interactive-model-mobile",tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"}]},viewport:{defaultViewport:"mobile1"}},argTypes:{galleryImages:{control:"object",description:"Gallery slides: [{ image, pulseDot, title, text }, ...]"}},render:e=>o`
    <vh-microsite-interactive-model-mobile
      .imageHeader=${e.imageHeader}
      .imagePowder=${e.imagePowder}
      .idleHeader=${e.idleHeader}
      .galleryHeaderTitle=${e.galleryHeaderTitle}
      .galleryImages=${e.galleryImages}
      .dynamicHeader=${e.dynamicHeader}
      .timelineItems=${e.timelineItems}
    ></vh-microsite-interactive-model-mobile>
  `},t={args:{imageHeader:"/images/vh-microsite-mobile-idle.png",imagePowder:"/images/vh-microsite-mobile-powder-frame.png",idleHeader:r,galleryHeaderTitle:m,galleryImages:s,dynamicHeader:a,timelineItems:l}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    imageHeader: "/images/vh-microsite-mobile-idle.png",
    imagePowder: "/images/vh-microsite-mobile-powder-frame.png",
    idleHeader: mobileIdleHeader,
    galleryHeaderTitle: mobileGalleryHeaderTitle,
    galleryImages: defaultGalleryImages,
    dynamicHeader: mobileDynamicHeader,
    timelineItems: mobileTimelineItems
  }
}`,...t.parameters?.docs?.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,g as default};
