module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    (filenames) => `next lint --fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
    "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'",
  ],
};
