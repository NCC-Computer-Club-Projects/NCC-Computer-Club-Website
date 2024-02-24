export default function developerMessage() {
  const instructions = [
    {
      path: 'package.json',
      steps: ['Edit "name", "description", and "author"']
    },
    {
      path: 'webpack.common.js',
      steps: [
        'Edit module.plugins.HtmlWebpackPlugin.title',
        'Edit module.plugins.FaviconsWebpackPlugin.logo']
    },
    {
      path: 'src/pages/Home.js',
      steps: ['Delete Ln 3 and Ln 8']
    },
    {
      path: 'src/components/',
      steps: ['Delete HomeComponent/ and Sample/']
    },
    {
      path: 'src/assets/images/',
      steps: ['Delete sample/']
    },
    {
      path: 'src/pages/',
      steps: ['Add/remove pages necessary for your application']
    },
    {
      path: 'src/App.js',
      steps: [
        'Adjust imports on Ln 6 - 10 to reflect /src/pages/*',
        'Adjust routes on Ln 25 - 29 to reflect /src/pages/*',
        'Adjust view route on Ln 26 to match view name'
      ]
    },
    {
      path: 'src/index.tsx',
      steps: ['Delete Ln 5 and Ln 6']
    },
    {
      path: 'src/developer-message.js',
      steps: ['Delete this file']
    }
  ];

  let devInstructions = [];
  let ordinal = 1;

  instructions.forEach(instruction => {
    const { path, steps } = instruction;
    const header = `${ordinal++}. ${path}\n\t`;
    const body = steps.join('\n\t');
    const instructionStr = header + body;
    devInstructions.push(instructionStr);
  });
  
  if (process.env.NODE_ENV !== 'production') {
    console.group('Start developing me! Files paths are shown relative to /views/<view-dir>/ directory.');
    console.log(devInstructions.join('\n\n'));
    console.groupEnd();
  }
}