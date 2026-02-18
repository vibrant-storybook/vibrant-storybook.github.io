import{b as s}from"./iframe-CXzSrcHB.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Quiz Question",component:"vh-microsite-quiz-question",render:e=>s`
    <vh-microsite-quiz-question
      .questionId=${e.questionId}
      .question=${e.question}
      .options=${e.options}
      .index=${e.index}
      .answerIndex=${e.answerIndex}
        .answerReason=${e.answerReason}
      .onAnswerChange=${(r,o)=>{console.log(`Question ${r}, selected option ${o}`)}}
    ></vh-microsite-quiz-question>
  `},n={args:{questionId:1,question:"What does Full Disclosure Labeling mean?",options:["Ingredients are grouped for simplicity","Only active ingredients are listed","Every ingredient, source, function, version and scientific support is openly shared","Labels meet minimum regulatory requirements"],index:0,answerIndex:2,answerReason:"Full Disclosure Labeling means that a product, service, or communication clearly and transparently reveals all material information a reasonable person would need to make an informed decision. Nothing important is hidden, obscured, or misleadingly minimized."}},i={args:{questionId:2,question:"Why does Vibrant Health avoid proprietary blends?",options:["Ingredients are grouped for simplicity","Only active ingredients are listed","Every ingredient, source, function, version and scientific support is openly shared","Labels meet minimum regulatory requirements"],index:1,answerIndex:3,answerReason:"Full Disclosure Labeling means that a product, service, or communication clearly and transparently reveals all material information a reasonable person would need to make an informed decision. Nothing important is hidden, obscured, or misleadingly minimized."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    questionId: 1,
    question: "What does Full Disclosure Labeling mean?",
    options: ["Ingredients are grouped for simplicity", "Only active ingredients are listed", "Every ingredient, source, function, version and scientific support is openly shared", "Labels meet minimum regulatory requirements"],
    index: 0,
    answerIndex: 2,
    answerReason: "Full Disclosure Labeling means that a product, service, or communication clearly and transparently reveals all material information a reasonable person would need to make an informed decision. Nothing important is hidden, obscured, or misleadingly minimized."
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    questionId: 2,
    question: "Why does Vibrant Health avoid proprietary blends?",
    options: ["Ingredients are grouped for simplicity", "Only active ingredients are listed", "Every ingredient, source, function, version and scientific support is openly shared", "Labels meet minimum regulatory requirements"],
    index: 1,
    answerIndex: 3,
    answerReason: "Full Disclosure Labeling means that a product, service, or communication clearly and transparently reveals all material information a reasonable person would need to make an informed decision. Nothing important is hidden, obscured, or misleadingly minimized."
  }
}`,...i.parameters?.docs?.source}}};const l=["Even","Odd"];export{n as Even,i as Odd,l as __namedExportsOrder,d as default};
