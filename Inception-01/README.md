# Namaste React 🚀⚛️


# What Parcel is Doing?
- Dev Build
- Local Server
- HMR =  Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Supports older browsers
- Digonastic
- Error Handling
- HTTPs
- Tree Shaking Algorithm - Removes unused code.
- Different dev and prod bundles.

# When using Parcel why it conflicts when using production build with the "main" : <index.js> in package.json?
- When we use parcel we gave the entry point in the cli and in dev build we gave it in the package.json for npm. 
so it conflicts with "main" in the package.json. for prod build remove the "main" fromt he package.json.

# Where the code goes when we do a production build? (npm parcle build <filename.js/html>) 
- The code goes to the dist folder. It Do all the processing and it also create the bundle in the dist folder.
also .parcel-cache use by the dist folder and when there is a change it will be updated in the dist folder. and reflect in our webstie.

# How parcel dev build takes less time each time we modifie the code and saves it?
- Because Parcel on first run takes more time and then it .parcel-cache is created which has the cache of the code.

# Why Production build takes more time than dev built?
- because it do all the processing on our code. running all sorts of algoristhms and optmizating code, images optimization, compession, tree shaking, HMT, localserver, http, removing exta spaces, minification, bundling, etc.

