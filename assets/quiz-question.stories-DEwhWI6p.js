import{b as i}from"./iframe-om6RJKyP.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Quiz Question",component:"vh-microsite-quiz-question",render:e=>i`
    <vh-microsite-quiz-question
      .questionId=${e.questionId}
      .question=${e.question}
      .options=${e.options}
      .index=${e.index}
      .answerIndex=${e.answerIndex}
        .answerReason=${e.answerReason}
        .incorrectReason=${e.incorrectReason}
      .onAnswerChange=${(r,t)=>{console.log(`Question ${r}, selected option ${t}`)}}
    ></vh-microsite-quiz-question>
  `},n={args:{questionId:1,question:"What does Full Disclosure Labeling mean?",options:["Ingredients are grouped for simplicity","Only active ingredients are listed","Every ingredient, source, function, version and scientific support is openly shared","Labels meet minimum regulatory requirements"],index:0,answerIndex:2,answerReason:"Correct! We openly share every ingredient so you can see the full story behind your supplement.",incorrectReason:"We believe every ingredient and its purpose should be clearly listed, not partially revealed."}},o={args:{questionId:2,question:"Why does Vibrant Health avoid proprietary blends?",options:["They are more expensive to produce","They limit product availability","They prevent consumers from knowing exact ingredient amounts","They are not allowed in dietary supplements"],index:1,answerIndex:2,answerReason:"Correct! We never hide ingredient amounts because you deserve complete transparency about what you’re putting into your body.",incorrectReason:"If you can’t see exact amounts, you can’t make fully informed decisions."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    questionId: 1,
    question: "What does Full Disclosure Labeling mean?",
    options: ["Ingredients are grouped for simplicity", "Only active ingredients are listed", "Every ingredient, source, function, version and scientific support is openly shared", "Labels meet minimum regulatory requirements"],
    index: 0,
    answerIndex: 2,
    answerReason: "Correct! We openly share every ingredient so you can see the full story behind your supplement.",
    incorrectReason: "We believe every ingredient and its purpose should be clearly listed, not partially revealed."
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    questionId: 2,
    question: "Why does Vibrant Health avoid proprietary blends?",
    options: ["They are more expensive to produce", "They limit product availability", "They prevent consumers from knowing exact ingredient amounts", "They are not allowed in dietary supplements"],
    index: 1,
    answerIndex: 2,
    answerReason: "Correct! We never hide ingredient amounts because you deserve complete transparency about what you’re putting into your body.",
    incorrectReason: "If you can’t see exact amounts, you can’t make fully informed decisions."
  }
}`,...o.parameters?.docs?.source}}};const u=["Even","Odd"];export{n as Even,o as Odd,u as __namedExportsOrder,d as default};
