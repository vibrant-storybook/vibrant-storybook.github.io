import{b as n}from"./iframe-BXt76yHU.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Newsletter",component:"vh-microsite-newsletter",render:e=>n`
    <vh-microsite-newsletter
      .heading=${e.heading}
      .description=${e.description}
      .namePlaceholder=${e.namePlaceholder}
      .emailPlaceholder=${e.emailPlaceholder}
      .buttonText=${e.buttonText}
      .imageUrl=${e.imageUrl}
      .onSubmit=${r=>{console.log("Newsletter submitted:",r),alert(`Newsletter signup: ${r.name} (${r.email})`)}}
    ></vh-microsite-newsletter>
  `},t={args:{heading:"Join The <strong>#VibrantTruth</strong> Movement.",description:"Sign up for our newsletter to get transparency tips, wellness insights, and exclusive offers—straight from the source.",namePlaceholder:"Enter your name",emailPlaceholder:"Enter your email",buttonText:"<span>Join <strong>Now</strong></span>",imageUrl:"/images/vh-microsite-newsletter.jpg"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Join The <strong>#VibrantTruth</strong> Movement.",
    description: "Sign up for our newsletter to get transparency tips, wellness insights, and exclusive offers—straight from the source.",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    buttonText: "<span>Join <strong>Now</strong></span>",
    imageUrl: "/images/vh-microsite-newsletter.jpg"
  }
}`,...t.parameters?.docs?.source}}};const a=["Default"];export{t as Default,a as __namedExportsOrder,i as default};
