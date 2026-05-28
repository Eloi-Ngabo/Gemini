


// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
    ThinkingLevel,

} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({

  
    
    apiKey: process.env.REACT_APP_GEMINI_API_KEY

  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.HIGH,
    },
    tools,
  };
  const model = 'gemini-3-flash-preview';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `prompt`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    if (chunk.text) {
      console.log(chunk.text);
    }
  }
}

export default main;


