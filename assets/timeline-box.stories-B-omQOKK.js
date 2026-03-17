import{b as p}from"./iframe-5bSZtzu_.js";import"./preload-helper-PPVm8Dsz.js";const o={year:"1992",description:"<strong>In 1992, in a small barn in Great Valley, NY, Green Vibrance was created with a simple but bold mission:</strong> to deliver the world’s first superfood formula. Packed with 38 powerful ingredients, it was designed to help the body heal, protect, and renew—setting a new standard for what a greens supplement could be."},i={year:"2002",description:"<strong>Years later, Green Vibrance became deeply personal.</strong> Ted Parker began using the formula during a challenging time for his health and found it stood apart from everything else he had tried. Years later, he introduced Green Vibrance to Paige. At the time, Paige was running her own natural foods store—and her belief in the formula was so strong that she became one of its top retailers."},l={year:"2007",description:"Driven by a personal mission to help others transform their health, <strong>Paige and Ted</strong> took stewardship of the company in <strong>2007</strong>."},c={year:"2016",description:"Vibrant Health relocates its headquarters to <strong>Shelton, CT</strong>, in an effort to accommodate its growing team and expanded warehousing needs."},m={year:"2026",description:"<strong>Thirty-four years later, we’re entering our next chapter—with a refreshed brand and the same trusted formulas.</strong> Today, Vibrant Health stands as the most award-winning supplement brand, trusted in thousands of stores across seven countries."},s={1992:[o],2002:[i],2007:[l],2016:[c],2026:[m],"Full timeline":[o,i,l,c,m]},g={title:"Components/Timeline Box",component:"vh-microsite-timeline-box",argTypes:{events:{control:{type:"object"},description:"Timeline events (year + description)"},preset:{control:{type:"select"},options:Object.keys(s),description:"Quick preset for events"},animateIn:{control:{type:"boolean"},description:"Animate content on scroll into view"}},render:e=>{const d=e.preset!=null&&e.preset in s?s[e.preset]:e.events??[o];return p`
      <vh-microsite-timeline-box
        .events=${d}
        ?animateIn=${e.animateIn}
      ></vh-microsite-timeline-box>
    `}},t={args:{preset:"1992",animateIn:!0}},r={args:{preset:"Full timeline",animateIn:!0}},n={args:{preset:"2026",animateIn:!1}},a={args:{preset:"2002",animateIn:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "1992",
    animateIn: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "Full timeline",
    animateIn: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "2026",
    animateIn: false
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "2002",
    animateIn: false
  }
}`,...a.parameters?.docs?.source}}};const f=["Default","FullTimeline","SingleYear2026","NoAnimation"];export{t as Default,r as FullTimeline,a as NoAnimation,n as SingleYear2026,f as __namedExportsOrder,g as default};
