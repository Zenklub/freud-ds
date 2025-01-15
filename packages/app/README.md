## Freud DS App Components

Escala e consistência em todos os produtos Zen!

### Sobre o Freud

Neurologista e psiquiatra criador da psicanálise. Seus estudos serviram como base pra a evolução da psicologia.

Do mesmo modo, nosso Design System tem como base garantir a evolução dos produtos Zenklub.

Através do Freud DS queremos propagar pelo mundo a importância de criar produtos acessíveis e consistentes.

### Sobre o Projeto App

O projeto Freud DS para App consiste em um Design System implementado para o aplicativo do Zenklub, feito a partir de componentes originalmente pertencentes à biblioteca [NativeBase](https://nativebase.io/). Os componentes são adaptados para que seu funcionamento e design atendam às especificações propostas e sigam o design do Zen.

O funcionamento do projeto consiste no refinamento dos componentes originais do NativeBase para que se tornem componentes Zen e possam ser consumidos e utilizados por todo o app Zenklub. Assim, funcionando como uma biblioteca, deve exportar e tornar disponível os componentes refinados.

A definição dos tokens, ícones, estilos e tudo relacionado ao design e funcionamento dos componentes devem seguir as especificações definidas pela equipe de Design.

### Dependências

- Node 16.15.1
- Ruby 2.7.4
- React 17.0.2
- React Native 0.68.1
- NativeBase 3.4.25

##### Instalação de dependências

- Caso tenha problemas com as dependências, utilize a flag `--legacy-peer-deps` ao fazer a instalação das mesmas. Precisamos utilizar versões específicas de algumas dependências para garantir a compatibilidade com o app Zenklub, algumas delas não estào nas versões mais recentes, então a flag nos auxiliará com isso. Um exemplo é a biblioteca NativeBase. Existem algumas issues abertas junto ao repositório do [NativeBase](https://github.com/GeekyAnts/NativeBase) que relatam problemas por conta da versão do Node e do React. Enquanto uma solução oficial não é aplicada, a recomendação é o uso da flag ou tentar outras versões do Node.

Seguem as principais observadas:

- [Can't install Native Base due to mismatching versions of React #5552](https://github.com/GeekyAnts/NativeBase/issues/5552)
- [Can't install native-base #5543](https://github.com/GeekyAnts/NativeBase/issues/5543)
- [Cannot install NativeBase due to dependencies #5391](https://github.com/GeekyAnts/NativeBase/issues/5391)
- [Cannot install into existing React Native 0.69.x + React v18 project start from React Native seed #5308](https://github.com/GeekyAnts/NativeBase/issues/5308)
- [Dependency issue: Setup new React Native App #5259](https://github.com/GeekyAnts/NativeBase/issues/5259)

##### Fontes

- Caso tenha problemas com as fontes, não se esqueça de fazer a instalação das mesmas em seu projeto. As fontes podem ser encontradas fora do repositório root do app, mas ainda em nosso monorepo. Você irá encontrá-las dentro de _packages/tokens/fonts_ e poderá seguir com a instalação das mesmas normalmente.
- Rode o comando `npx react-native link`
- Vá para a pasta _app/ios_ e rode o comando `pod install`

### Rodando o projeto

Primeiro, instale as dependências do projeto raiz seguindo as orientações presentes no README de lá. Após a conclusão, retorne para este projeto App. Neste momento do projeto DS, caso queira visualizar os componentes, altere o conteúdo de _src/App.tsx_ para algo semelhante à:

```
import React from 'react';
import { ZComponent } from './Components/ZComponent';

const App = () => {
  return (
    <ZComponent/>
  );
};

export default App;
```

onde _ZComponent_ se refere ao componente que deseja visualizar e testar.

Após fazer isso:

- Caso queira rodar a build para android: `npx react-native run-android`.
  Isso fará com que a build do projeto seja feita em seu emulador Android, de acordo com seu ambiente de desenvolvimento. Também abrirá um metro bundler, mas _você deve encerrá-lo_ e dar um comando para iniciar um novo metro bundler: `npx react-native start`. Suspeitamos que o primeiro metro aberto falhe pois tente iniciar o bundle referenciando o local errado, sem passar pelas alterações que realizamos na seção _Android_

- Caso queira rodar a build para IOS: `npx react-native run-ios`;
  Então, rode `npx react-native start`. Isso irá iniciar o _metro-bundler_.

### Utilização

Já pudemos identificar que além da instalação desta biblioteca como dependência do projeto, também será necessário adicionar ao root do projeto do App Zen o provider do NativeBase, [NativeBaseProvider](https://docs.nativebase.io/setup-provider). Isso pois é ele quem lida com as questões de temas e outras propriedades que seus componentes necessitam. Como refinamos componentes originais da biblioteca NativeBase, o uso do provider se faz necessário. Desta forma, foram pensadas duas opções para o caso:

- Poderíamos exportar os componentes cada um sendo envelopado em um provider e exigir uma prop theme como obrigatória - prop essa que controlaria este provider;
  Algo próximo do exemplo a seguir:

```
import { Text, TextProps, NativeBaseProvider } from 'native-base';
import React from 'react';

interface ZComponentProps extends TextProps {
  theme
}

export const ZComponent: React.FC<ZComponentProps> = ({ theme, children, ...props }): JSX.Element => (
  <NativeBaseProvider theme={theme}>
    <Text {...props}>{children}</Heading>
  </NativeBaseProvider >
)

```

Porém replicar tal necessidade para cada componente e aplicação do theme para cada instância não pareceu tão atraente.

- **[SOLUÇÃO ADOTADA]** No app do Zen, aplicar o NativeBaseProvider apenas uma vez no root da aplicação. As definições deste objeto _theme_ estarão aqui no projeto - _src/Theme_ -e também serão exportadas, assim só deverão ser repassadas pelo app Zen para o provider. Desta forma, não existe uma complicação tão grande ou necessidade de replicar o NativeBaseProvider em todas as instâncias.

#### Troubleshooting

#### IOS

Para o IOS, alteramos o _Podfile_ para que, em suas duas primeiras linhas, ele busque a _node_modules_ correta.
Ex:

```
- require_relative '../node_modules/react-native/scripts/react_native_pods'
- require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'
+ require_relative '../../../node_modules/react-native/scripts/react_native_pods'
+ require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules'
...
```

Abra o projeto no XCode e dentro de Project settings > Build Phases open “Bundle React Native code and images” ceritifque-se que está apontando para a _node_modules_ do projeto raiz.

```
set -e
export NODE_BINARY=node
+ ../../../node_modules/react-native/scripts/react-native-xcode.sh

```

ou

```
set -e
WITH_ENVIRONMENT="../../../node_modules/react-native/scripts/xcode/with-environment.sh"
REACT_NATIVE_XCODE="../../../node_modules/react-native/scripts/react-native-xcode.sh"

/bin/sh -c "$WITH_ENVIRONMENT $REACT_NATIVE_XCODE"
```

#### Android

Para o Android, começamos alterando o

- _packages/app/android/build.gradle_

```
allprojects {
    repositories {
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
-            url("$rootDir/../node_modules/react-native/android")
+            url("$rootDir../../../../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
-            url("$rootDir/../node_modules/jsc-android/dist")
+            url("$rootDir../../../../node_modules/jsc-android/dist")
        }
				...
    }
}
```

- _packages/mobile/android/settings.gradle_

```
rootProject.name = 'example-app'
- apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
- includeBuild('../node_modules/react-native-gradle-plugin')
+ apply from: file("../../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
+ includeBuild('../../../node_modules/react-native-gradle-plugin')
include ':app'
if (settings.hasProperty("newArchEnabled") && settings.newArchEnabled == "true") {
    include(":ReactAndroid")
-   project(":ReactAndroid").projectDir = file('../node_modules/react-native/ReactAndroid')
+   project(":ReactAndroid").projectDir = file('../../../node_modules/react-native/ReactAndroid')
}
```

- _packages/mobile/android/app/build.gradle_

```
project.ext.react = [
+    cliPath: "../../../../node_modules/react-native/cli.js",
+    entryFile: "packages/app/index.js",
]
```

```
- apply from: "../../node_modules/react-native/react.gradle"
+ apply from: "../../../../node_modules/react-native/react.gradle"
```

```
- apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
+ apply from: file("../../../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
```

```
if (isNewArchitectureEnabled()) {
            // We configure the NDK build only if you decide to opt-in for the New Architecture.
            externalNativeBuild {
                ndkBuild {
                    arguments "APP_PLATFORM=android-21",
                        "APP_STL=c++_shared",
                        "NDK_TOOLCHAIN_VERSION=clang",
                        "GENERATED_SRC_DIR=$buildDir/generated/source",
                        "PROJECT_BUILD_DIR=$buildDir",
-                       "REACT_ANDROID_DIR=$rootDir/../node_modules/react-native/ReactAndroid",
-                       "REACT_ANDROID_BUILD_DIR=$rootDir/../node_modules/react-native/ReactAndroid/build",
+                       "REACT_ANDROID_DIR=../../../../node_modules/react-native/ReactAndroid",
+                       "REACT_ANDROID_BUILD_DIR=../../../../node_modules/react-native/ReactAndroid/build",
                    cFlags "-Wall", "-Werror", "-fexceptions", "-frtti", "-DWITH_INSPECTOR=1"
                    cppFlags "-std=c++17"
                    // Make sure this target name is the same you specify inside the
                    // src/main/jni/Android.mk file for the `LOCAL_MODULE` variable.
                    targets "okwasniewskionboarding_appmodules"
                }
            }
```

### Metro

Também alteramos o arquivo _metro.config_ para apontar para os locais corretos;

```
const path = require('path');

const extraNodeModules = {
  modules: path.resolve(path.join(__dirname, '../../node_modules')),
};

const watchFolders = [path.resolve(path.join(__dirname, '../../node_modules'))];

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
```

### Evolução

Os próximos passos do projeto consistem no refinamento de mais componentes para que possam ser utilizados com variedade e proporcionar robustez, escalabilidade, consistência e confiabilidade para o app Zen. A implementação de testes dos componentes, também a configuração para utilização como uma biblioteca a ser instalada como dependência no projeto, exportar para outro projeto ou recurso a visulização e funcionamento dos componentes aqui criados (talvez um storybook) e etc... existe muito espaço para crescimento, é um projeto que nos anima e as bases estão lançadas.
