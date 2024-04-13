module.exports = {
    presets: [
        ['@babel/preset-env', { targets: {node: 'current'}}],
        ['@babel/preset-react', { runtime: "automatic" }],
        
    ],
};


// why we added ['@babel/preset-react', { runtime: "automatic" }] ?
// Because this preset is helping our testing library to convert our jsx code into html/js code.  