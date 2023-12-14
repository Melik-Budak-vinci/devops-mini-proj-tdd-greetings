const path = require('path');

module.exports = {
    entry: './src/app.js', // Point d'entrée de votre application
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie (output)
        filename: 'bundle.js', // Nom du fichier de sortie
    },
    // Règles pour traiter différents types de fichiers
    module: {
        rules: [
            {
                test: /\.js$/, // Appliquer la règle aux fichiers JavaScript
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Utilisation de Babel pour transpiler le code
                    options: {
                        presets: ['@babel/preset-env'], // Utilisation du preset env de Babel
                    },
                },
            },
        ],
    },
};
