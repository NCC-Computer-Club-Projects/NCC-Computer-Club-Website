export default function developerMessage() {
  const steps = [
    '1. /package.json\n\tEdit "name", "description", and "author".\n',
    '2. /webpack.common.js\n\tEdit module.plugins.HtmlWebpackPlugin.title\n\tEdit module.plugins.FaviconsWebpackPlugin.logo\n',
    '2. /src/pages/Home.js\n\tDelete Ln 3 and Ln 8.\n',
    '3. /src/components/\n\tDelete HomeComponent/ and Sample/.\n',
    '4. /src/assets/images/\n\tDelete sample/.\n',
    '5. /src/App.js\n\tAdjust imports on Ln 6 - 10 to reflect /src/pages/.\n\tAdjust routes on Ln 25 - 29 to reflect /src/pages/.\n',
    '6. /src/index.tsx\n\tDelete Ln 5 and Ln 6.\n',
    '7. /src/developer-message.js\n\tDelete this file.\n'
  ];
  const devSteps = steps.join('\n');
  if (process.env.NODE_ENV !== 'production') {
    console.group('Start developing me!');
    console.log(devSteps);
    console.groupEnd();
  }
}