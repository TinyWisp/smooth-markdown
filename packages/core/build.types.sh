vue-tsc  --esModuleInterop --target es2015 --declaration --emitDeclarationOnly --module esnext --isolatedModules false --moduleResolution node --outDir ./lib/types ./src/entry.core.ts
vue-tsc  --esModuleInterop --target es2015 --declaration --emitDeclarationOnly --module esnext --isolatedModules false --moduleResolution node --outDir ./lib/types ./src/entry.plugins.ts
vue-tsc  --esModuleInterop --target es2015 --declaration --emitDeclarationOnly --module esnext --isolatedModules false --moduleResolution node --outDir ./lib/types ./src/entry.renderers.ts
