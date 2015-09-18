NG_DOCS={
  "sections": {
    "api": "API Reference",
    "guide": "Guide"
  },
  "pages": [
    {
      "section": "api",
      "id": "index",
      "shortName": "API Reference",
      "type": "overview",
      "moduleName": "API Reference",
      "shortDescription": "#angular-translate - API Reference",
      "keywords": "angular-translate api checkout guide overview reference works"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate",
      "shortName": "pascalprecht.translate",
      "type": "overview",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "The main module which holds everything together.",
      "keywords": "api holds main module overview pascalprecht translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translate",
      "shortName": "pascalprecht.translate.$translate",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "The $translate service is the actual core of angular-translate. It expects a translation id",
      "keywords": "$interpolate $log $q $rootscope $scope $translate $translaterefreshend $translaterefreshstart actual angular-translate api app array async asynchronous asynchronously background broadcast care case change choosed class cloakclassname compiling configured contents core current currently data defined delimiter directive drop dynamic en_us enabled error events existent expects fallback fallbacklanguage false falsy file finished fn force forceasyncreload function handling hash hasn headline_text hello ids instant instantly internal interpolate interpolateparams interpolation interpolationid invoke invoked isforceasyncreloadenabled isn ispostcompilingenabled isready iteration key langkey language languages library load loaded loadercache loaders loading method methods_isready methods_onready module namespaces nested nestedobjectdelimeter object onready optional optionally param parameters params pascalprecht pointed post preferred preferredlanguage process promise proposedlanguage ready refresh refreshed refreshes refreshing registered reject reload remember represents resolved returned returns rules runtime service set sets setting skipped stack start storage storagekey store storing string table tables takes target tells text throw token translate translate-cloak translatedtext translation translationid undefined usefallbacklanguage values version versioninfo"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateCookieStorage",
      "shortName": "pascalprecht.translate.$translateCookieStorage",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Abstraction layer for cookieStore. This service is used when telling angular-translate",
      "keywords": "$cookiestore $translatecookiestorage abstraction angular-translate api cookiestorage cookiestore function item layer object pascalprecht returns service set sets storage telling translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateDefaultInterpolation",
      "shortName": "pascalprecht.translate.$translateDefaultInterpolation",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses angular&#39;s $interpolate services to interpolate strings against some values.",
      "keywords": "$identifier $interpolate $translatedefaultinterpolation $translatesanitization agains angular angulars api aware configure current currently function getinterpolationidentifier identifier interpolate interpolated interpolates interpolation interpolator key language locale object params pascalprecht proper returns sanitization service services setlocale sets strategy string strings translate values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateLocalStorage",
      "shortName": "pascalprecht.translate.$translateLocalStorage",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Abstraction layer for localStorage. This service is used when telling angular-translate",
      "keywords": "$translatecookiestorage $translatelocalstorage $window abstraction angular-translate api function item layer localstorage object pascalprecht returns service set sets storage telling translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "shortName": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses MessageFormat.js to interpolate strings against some values.",
      "keywords": "$identifier $translatemessageformatinterpolation $translatesanitization api aware configure current currently function getinterpolationidentifier https identifier interpolate interpolated interpolates interpolation interpolator js key language locale messageformat object params pascalprecht proper returns sanitization service setlocale sets strategy string strings translate translate_mf_interpolation_cache values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateMissingTranslationHandlerLog",
      "shortName": "pascalprecht.translate.$translateMissingTranslationHandlerLog",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses angular&#39;s $log service to give a warning when trying to translate a",
      "keywords": "$log $translatemissingtranslationhandlerlog angular api doesn exist function handler object pascalprecht service translate translation warning"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translatePartialLoader",
      "shortName": "pascalprecht.translate.$translatePartialLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "",
      "keywords": "$http $injector $q $rootscope $translate $translatepartialloader $translatepartialloaderstructurechanged active add additional addpart angular-translate api array asks availability browser called case chainable checks completely data delete deleted deletepart deletes deletion deprecated empty event fired function future getregisteredparts indicator ispartavailable ispartloaded key lang language load loaded loader loaders loading logically marks method names non-empty note object options order param params parts pascalprecht pass perform physically prevent prevents priority process recompiled recycling registered registers remaining remove removedata requests returned returns reused server set sets table target throw time translate translation translations type wrong xhr"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translatePartialLoaderProvider",
      "shortName": "pascalprecht.translate.$translatePartialLoaderProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "By using a $translatePartialLoaderProvider you can configure a list of a needed",
      "keywords": "$translatepartialloaderprovider add addpart angular-translate api application asks avoids chainable check checks configuration configure data delete deletepart directly function future ispartavailable lang language lifetime list load loaded loader loading method needed non-empty note object param params parts pascalprecht pass phase priority provider registers removes returns runtime server set setpart sets specific startup table target throw translate translation type wrong"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateProvider",
      "shortName": "pascalprecht.translate.$translateProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "$translateProvider allows developers to register translation-tables, asynchronous loaders",
      "keywords": "$cachefactory $compile $http $injector $translatecookiestorage $translatelocalstorage $translateprovider $translatestaticfilesloader $translateurlloader $translationcache $translationtable actual add adding addinterpolation adds alias aliases allows angular-translate angularjs api app application-wide argument arguments array async asynchronous automatically based bcp bcp47 behavior best boolean browser browsers build built-in cache cache-object called calling change choosed class cloakclassname combination compiling config configuration configure considering convention converted correct current currently custom customhandler de_de default define defined defines delimiter dep1 dep2 depending determine determinepreferredlanguage determining developers directive directivepriority directly disabled doesn don en-us en_us enabled entries error example exist expects explicit extended extension factory fallbacklanguage false filter filters find fitting fn force forceasyncreload format function functionality gender getlocale greeting hallo handler hello high http hyphens ietf implement indicator indicators initial inside instantiated interface internal internally interpolation invoking isn java javascript job js key langkey language languagekeys languages layer left level ll loaded loader loaderfactory loaders locale log manage map meaning messageformat method methods methods_determinepreferredlanguage methods_uniformlanguagetag missing missingtranslationhandler module multiple namespace namespaced nestedobjectdelimeter not_found object optional options org parameter pascalprecht pass passing plain pluralization post preferred preferredlanguage prefix priority processed provided register registeravailablelanguagekeys registered registering registers reload represent represents resolver result return returns risk sanitation scope second selection separator service services set sets setting shortcut simply specific standard startup stateful statefulfilter stateless storage storagekey storageprefix strategy string style supports table tables tag tells throw translate translate-cloak translate-directive translated translation translation-tables translationid translationnotfoundindicator translationnotfoundindicatorleft translationnotfoundindicatorright translations translationtable treat true type undefined underscores uniformlanguagetag uppercase url usage usecookiestorage useinterpolation useloader useloadercache uselocalstorage usemessageformatinterpolation usemissingtranslationhandler usemissingtranslationhandlerlog usepostcompiling user usesanitizestrategy usestaticfilesloader usestorage useurlloader valid values w3 welt whitespace wikipedia work world"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateSanitization",
      "shortName": "pascalprecht.translate.$translateSanitization",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Sanitizes interpolation parameters and translated texts.",
      "keywords": "$injector $log $translatesanitization api array consisting current currently custom executed existing function functions interpolation mode multiple names object optional order parameters params pascalprecht provided sanitization sanitize sanitized sanitizes selected selects strategies strategy text texts translate translated usestrategy"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateSanitizationProvider",
      "shortName": "pascalprecht.translate.$translateSanitizationProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Configurations for $translateSanitization",
      "keywords": "$sanitize $translatesanitization $translatesanitizationprovider adds addstrategy api array backwards built-in compatibility configurations consisting custom escaped executed existing function functions html interpolation key legacy list multiple names object order parameters pascalprecht property provided removed removes removestrategy sanitization selects strategies strategy strategyfunction strategyname text translate translation unique usestrategy values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateStaticFilesLoader",
      "shortName": "pascalprecht.translate.$translateStaticFilesLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Creates a loading function for a typical static file url pattern:",
      "keywords": "$http $q $translatestaticfilesloader api builder creates file function json key key-value lang-de_de lang-en_us loading object options pairs pascalprecht pattern prefix response static suffix translate typical url urls"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateUrlLoader",
      "shortName": "pascalprecht.translate.$translateUrlLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Creates a loading function for a typical dynamic url pattern:",
      "keywords": "$http $q $translateurlloader api applied creates current default dynamic function key key-value lang language loading locale object optional options pairs pascalprecht pattern php prefixing queryparameter requested response service translate typical url urls"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translationCache",
      "shortName": "pascalprecht.translate.$translationCache",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You",
      "keywords": "$cachefactory $translationcache api cache consuming directly load loaded object pascalprecht quick retrieval service table tables time translate translation"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translate",
      "shortName": "translate",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Translates given translation id either through attribute or DOM content.",
      "keywords": "$compile $digest $filter $interpolate $rootscope $scope $translateprovider activation angular api attr attribute config content controller defines directive dom dynamic element en expect filter function hello html inject internally interpolated js literal locally methods_usepostcompiling module ng-controller ngview object optional pascalprecht pass passed preferredlanguage scenario script string successful text title tobe translate translate-attr-attr translate-attr-title translate-compile translate-default translate-values translatectrl translates translation translation_id translationid translations true values with_values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translateCloak",
      "shortName": "translateCloak",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "keywords": "$description $rootscope $translate $translateprovider adds api applied asynchronously basically class cloak cloakclassname data defined directive element finished flickering hiding initial initially loader loading pascalprecht prevent provided relies removes resolve showing translate translate-cloak translation translationid"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translateNamespace",
      "shortName": "translateNamespace",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Translates given translation id either through attribute or DOM content.",
      "keywords": "$translateprovider angular api attribute config content directive dom en filter headers hello html internally interpolated js literal module namespace ngview object optional pascalprecht pass preferredlanguage script string title translate translate-namespace translate-values translates translation translation_id translations"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.filter:translate",
      "shortName": "translate",
      "type": "filter",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses $translate service to translate contents. Accepts interpolate parameters",
      "keywords": "$parse $scope $translate $translateprovider accepts angular api config contents controller dynamic dynamized en filter function hash hello html interpolate interpolateparams js literal module ng-controller ngview object optional parameters pascalprecht pass preferredlanguage script service string text translate translatectrl translated translation translation_id translationid translations values with_values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.TRANSLATE_MF_INTERPOLATION_CACHE",
      "shortName": "pascalprecht.translate.TRANSLATE_MF_INTERPOLATION_CACHE",
      "type": "property",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses MessageFormat.js to interpolate strings against some values.",
      "keywords": "api interpolate js messageformat pascalprecht property strings translate translate_mf_interpolation_cache values"
    },
    {
      "section": "guide",
      "id": "index",
      "shortName": "Guía",
      "type": "overview",
      "moduleName": "Guía",
      "shortDescription": "La manera más fácil de agregar internacionalización (i18n) en sus aplicaciones Angular",
      "keywords": "$translateprovider _i _proveer absatz actualmente agradecidos agradecimiento agregar ahora alem algunas angular angular-translate angularjs aplicaci aplicaciones aplicar app aprender article aseg asincr bot bower carga cargas cari ciertos cliquee colaboradores comentarios comment-773 como componentes comunic comunidad con config consiste contenido conunicorn correo customizaciones datos de demos dependencia dichas dies documento ein ejemplo el embebido en enorme ens es est estas este esto estos expandible extensiones favor flexibilidad foo funcionalidades function gente german github google gu guide gusta habr hacerle hagamos hallo hay hello hemos herramientas hora html i18n ideas instalar instale install interesantes interesar interfaces internacionalizaci interpretar introducci inyecte ist it_ js l10n la las le lo manera module muy myapp nada neoskop ng-newsletter ngmodules nota nuestra nuevas numerosas ofrece org otras overview palabras para paragraph parciales pascalprecht path pero plnkr pluralizaci pocas por posible preferredlanguage preguntas proyectos pueden puesto quien quiero reciben recursos relacionadas repositorio requerimientos resuelto saber sane sepan si sido siempre simplemente sin son soporte src su sugerencias sus tenido title todo tome trabaja traducciones traducir traduzca translate translations trav una usa usar usted utiliza utilizando valiosos valores var venga viene web wordpress yerbas"
    },
    {
      "section": "guide",
      "id": "00_installation",
      "shortName": "Instalación",
      "type": "overview",
      "moduleName": "Instalación",
      "shortDescription": "Instalación",
      "keywords": "acci al algo algunas ambos amor angular-translate aqu archivo archivos arr arrancar asegurarse bastante bower build ciertos clon clonado clonar clone comando comandos como completo componentes con conf configuraci configuradas configurado conjunto considere construyendo contiene correctamente cosas creados cual de del dependencias desarrollo desde desmenuzado directorio dist documento donde durante efectuar ejecutar ejecutarse ejecute ejecutor el en entra es espera est estar estas esto estos exitosamente favor framework fuente fueron funcione generar git github gracias grunt gruntfile guide hace hacerlo haga hay haya hayan herramientas html igual importan incl incluyendo instalaci instalar instalarlas instale install intermedios js karma la las listo listos lo los mande manera mediante midway min muy navegue npm obtener obtiene otra overview paquete paquetes para pasado pasar por producci provisto provistos proyecto puede pueden pull quiera qye realmente repositorio request sale se ser si siguientes simplemente start su tambi tanto tareas tendr tenga test testeo testrunner tests testsuites todas todo todos tras una unicornio unit unitarios usa usadas usando usar usted ver verdadera verde verse versi vez viene"
    },
    {
      "section": "guide",
      "id": "01_conceptual-overview",
      "shortName": "Conceptos generales",
      "type": "overview",
      "moduleName": "Conceptos generales",
      "shortDescription": "Conceptos generales",
      "keywords": "$translate abstracta acelerar adelante adem adicionales ahora al algo algunos almacenamiento amor angular angular-translate aparece aplica aplicaci aplicaciones aprender aqu asincr asunto bastante cada cap capa capaz carga cargador cargadores cargar central class clave clave-valor como componente componentes con conceptos configurado contenido contenidos contra controlador cookiestorage cu cuadro cual cuales cualquier cuando datos de debe deber declarativa defecto del dentro derecha desacoplados desea detalles determinar dichos diferente diferentes directiva dos durante ejecuci ejecutan ejemplo el elegido ellos empezar en encima encontrar entiende entraremos es escenario eso espec est esta establece esto estructurado existe extensi falta faltantes familiarizado filtro forma funcionalidades general generales guide ha haga hay idioma imagen img implementar incluido influencian instalando instalar interconectan interesante internamente interpolaci interpoladores interpolar la lenguaje llamados lo loaders localstorage logging los manera manipulador manipuladores mas meollo modo modos muesta muestra multi-idioma muy nada necesario negocios nuevo obligatorio observar ofrecen otro overview padding-left pantallazo paquetes para pares performance pero png pone por porque posibles preocupe primero programar propio provee pueda puede pueden pull-right qu querer querr quien quiere realidad recordar recurrir representa se ser servicio servicios si significa siguiente sino sintaxis sobre solamente son soporta soporte src staticfilesloader style su subcomponentes suporte supuesto sus tambi tanto tarde tenga tiene tipo tipos todo todos traducci traducciones traducen traduciendo traducir trata una unicornio uno urlloader usa usan usar usarse uso usted usuario utiliza utilizan utilizar valores variables ver veremos viene view ya"
    },
    {
      "section": "guide",
      "id": "02_getting-started",
      "shortName": "Comienzo",
      "type": "overview",
      "moduleName": "Comienzo",
      "shortDescription": "Comienzo",
      "keywords": "$location $locationprovider $route $routeprovider $translate $translateprovider _configuraci _proveedor_ _uso_ acceder acceso acerca add adelante agregando agregar agregarla agreguemos ahora al algo alguna ambos amor ancho angular angular-translate anidados anidamiento another_namespace anterior apicaci aplicaci aplicai app aprender aqu aquella arquitectura arroba atajo atajos awesome bar bastante bien botones cada cap capacidad carga caso change charset cierto clave comenzar comienzo como componentes con concrete config configura configuraci configurado configurar configure confirmaci contener contenidos contiene continuaci controller correctamente corresponde correspondiente cosas crear cu cual da datos de debe deber decirle declarada declarar declare del dentro dependencia dependencias desde desee determinado diferentes diga directiva directivas disponible disponibles documento donde dos durante ejemplo el ellos embargo embeba embebido en encargad ense entonces es ese eso especificar espera est esta estar este esto extender externamente fabuloso falta features filtro filtros flexible foo funci funcionalidad funcionalidades funcionamiento funcionar function genial grandes guide ha habilitar habr hace hacer hacerle haci haga hash hay headline hecho html html5 html5mode identificador incluido incluy informaci instanciado inteligente interesante interfaz interpolar interviene introdujimos inusual inyecci inyectar inyecte javascript js json la language largas largo las le lenguaje lenguajes links lista ll llamado lo localizada los luego lugar mediante mejor mientras mismo modo module muestra muy myapp namespace namespaced namespaces necesaria necesita necesitan ng-app ni niveles nuestra objetos ocurriendo ocurrir ok_text organizar otra overview para paragraph parecido particularmente pascalprecht path permite pero piensa podemos podr por pordr porque posible pr preferido preferredlanguage prefijarla presentando primero provee proveedor proveer proveerle provisto provistos puede puntos qu querr quiere realidad realmente reconocer redundancia referente refiri remotamente representa representar resulta saber se sea seguidos seguridad ser servicio servicios si sido siempre significa sigue siguiente siilares simple simplemente sin siquiera sitios some_namespace somefancyctrl specific src srsly su sub-namespaces sub_namespace suficientemente supongamos sus tabla tablas table tal tambi tantos tarde templateurl tenemos tener text texto tiene toda todo todos trabajar traducci traducciones traduci traduzca translate translation translation_id translation_id1 translations trataremos una unicornio url usado usando usar uso usted utf-8 utilizan va valor var varios ver verse vez viene vincular vincularse vistazo web ya"
    },
    {
      "section": "guide",
      "id": "03_using-translate-service",
      "shortName": "Uso del servicio $translate",
      "type": "overview",
      "moduleName": "Uso del servicio $translate",
      "shortDescription": "Uso del servicio $translate",
      "keywords": "$emit $on $rootscope $scope $translate $translatechangesuccess $translateprovider accede acepta acerca actualizar add afuera ahora al alguna amor anda angular angular-translate anotherone anteriormente aplicaci aplicaciones app arreglar asincr atar awesome biblioteca bidireccional bien binding brinda cada callback cambi cambiado cambie canbio capa carga casos clave claves codigo comenzado como comporta con config construir contenido contenidos conteniendo controlador controladores controller cosas ctrl cu cual cualquier cuando cubriremos cuenta da dada de deber decir defecto del dentro dependencias dependency deseadas destino detalle devolver devuelva devuelve digamos directamente directiva dispara documentos donde efect ejecuci ejecutar ejemplo el embargo en encontrarla encuentra entonces envolviendo es eso est esta estar este esto estrategia estrechamente evento exitosamente expose extender fallado favor features forma fueran funci function general guide haber habiendo hacer haya hayan headline hechas hemos html idioma independientemente individuales informaci injection instalada interviene inv invocando inyectarlo json la las le lenguaje lidiar llamado lo lograr los lugar manera maneras manipular mantendr mediante menos mientras module mostrar mundo muy myapp nada namespace namespaced_paragraph necesite ng-app ng-controller ning nivel normalmente nuestro nunca objeto otro overview para paragraph pasa pasar pascalprecht pedida performance pero piense por porque preferredlanguage primero probablemente produce promise pronto propiedades provee proveemos provisto puede qu quedar quiere raz razones realidad rechazada registrada requests requieran responsabilidad resuelve resultado returns se sepa ser service servicio servicios si sido siempre significa simplemente sin sobre srsly su suponga sus table tag tan tendr tener tenga tiempo tiene tipo todo traducci traducciones traducido traducir translate translation translations trav una unicornio usar uso usted utilizar utiltaria va var varias vea veces ver versi versioninfo vez volver"
    },
    {
      "section": "guide",
      "id": "04_using-translate-filter",
      "shortName": "Uso del filtro translate",
      "type": "overview",
      "moduleName": "Uso del filtro translate",
      "shortDescription": "Uso del filtro translate",
      "keywords": "$scope $translate $translateprovider actualizar add agregamos ahora amor andando angular angular-translate angularjs aplicaci app aprendi aqu atar awesome bastante cap capa capaz claves componente con config contaminar contenidos controlador controladores controller corre corresponde ctrl cual de del demasiado demostrar desacoplado desde deseable desvincula directamente directiva donde efectivamente ejemplo el ellas en es ese est esta esto estrecha eventualmente falta filters filtro flexible funciona funcionar function general generalusage guide hace hacer hacerlo haci hacia headline hora interesante la las le leer lo los lugar manera mayormente mismo modular module mucho muestra myapp nada necesidad negocios ng-controller nuestra nuestro org otra overview para paragraph pascalprecht pero podemos por porque preferible preferredlanguage provee puede quitamos realidad reemplazable reemplazar registradas se sepa servicio servicios siguiente simple simplemente sin sobre srsly su supuesto sus table tema templates tocar todo traducci traducir transfiriendo translate translation translation_id translations una unicornio usar using_filters uso usted utilizando var ver vista vuelve"
    },
    {
      "section": "guide",
      "id": "05_using-translate-directive",
      "shortName": "Uso de la directiva translate",
      "type": "overview",
      "moduleName": "Uso de la directiva translate",
      "shortDescription": "Uso de la directiva translate",
      "keywords": "$compile $scope $translateprovider actual actualizada actualizamos add adem agregamos agregu ahora amor angular angular-translate aplicaci app atributo attribute awesome beginners bien bueno campos capa caso clave claves como compilaci comportamiento con conenidos config contenido contexto controller convenga cool ctrl cual cualquier cubre dataset de deber del demasiadas demasiados dicho din directiva directiva-por-directiva directivas disponible distintas ejemplo el en entonces es escucha eso est esta estableciendo estamos estar este esto eventos false falta filtro filtros flexibles forma funcionalidad funcionando funcionar function general global guide ha habilitado habilitar haga hay headline hey identificador incluso inhabilitar instrucciones interpolar interpolated iterando la las le lo luce luego manera maneras manipular mediante mejor mejoremos misma module muchas muy myapp ng-controller nuesta nuestra nuestro nuevas ocurre ofrece otra overview par para paragraph partir pasar pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text pero podr por porque posibe posibilidad post post-procesada preferredlanguage primer primero propiamente provee pudiera puede pues realidad representen scope se seg ser si significa son srsly supongamos sus tabla table tal tambi terminan text textos tiene tienen traducci traducciones traducir translate translate-compile translation translation_id translations trav una unicornio uno usar usepostcompiling uso utilizada utilizando utilizarse valor var verse versi vista watch ya"
    },
    {
      "section": "guide",
      "id": "06_variable-replacement",
      "shortName": "Sustitución de variables",
      "type": "overview",
      "moduleName": "Sustitución de variables",
      "shortDescription": "Sustitución de variables",
      "keywords": "$scope $translate $translateprovider _n_ _se acerca actualicemos add adosar agregar ahora al amor angular angular-translate antes aplicaci app aprendimos aprovechar argumento arriba asunto atributo atributos attribute awesome bastante beginners bien bueno capaz caso clave clave-valor combinar comido como componentes con config constante contra controlador controller cool correspondientes ctrl cual cualquier cuando de debe deber decir declararlos declarativos defacto defecto definir del dentro depende descrita despu dichas dif diga digamos din directiva disposici donde dos ejemplo el en encarga entonces es escuch ese especial espera est esta este esto evaluado expl expone expresi extendamos extienda filtro filtros final forma formato funciona funcionalidad funcionamiento function greeting gu guide ha hacer hacerlo haga han har hash hasta hay headline hey html identificador impresionante incapaces internamente interpola interpolaci interpolado interpolados interpolated interpretado introductorias javascript la las lastlogin le literal lo logged lograr los luego manejo manera maneras marcador mediante mensaje mensajes_ mismo modo module momento mostrar muy myapp necesita necesitamos necesitan ng-controller ninguna nombrados nombre nuestra nuestras nuestro nuevo objeto opcional otra overview par para paragraph pares partir pasa pasado pasar pasarle pasarles pasarlos pascal pascalprecht pascalprect pase pasemos passed passed_as_attribute passed_as_interpolation passed_as_text pero personalizado personalizados poco podemos ponerlo por porque posible preferredlanguage prefijo primera propios provee puede pueden pues queremos querido quisi reci recibido recomendamos reemplazar reemplazo requiera requiere sale scope se sea seguidamente segundo sencillo ser servicio servicios si significa siguiente simplemente sintaxis sobre somescopeobject son srsly string su supongamos supuesto sus sustituci sustituir tabla table tal tambi tendr tenemos tener text todo traducci traducciones traducirla translate translate-value- translate-value-name translate-values translation translation_id translationdata translations trav una unicornio uno usa usando usar usaremos username uso usted utilizando valor valores var variable variable_replacement variables ve veces versi vez viejo viene vincular"
    },
    {
      "section": "guide",
      "id": "07_multi-language",
      "shortName": "Multilenguaje",
      "type": "overview",
      "moduleName": "Multilenguaje",
      "shortDescription": "Multilenguaje",
      "keywords": "$scope $translate $translateprovider $translations acorde actual actualizamos add adelante agreegamos agregamos agregar agregaremos agregarle ahora ajusta alem algo algunos almacenamiento als amor anf angular angular-translate aplicaci app applicaci aprendi aprendiendo apunta aqu argumento asincr attribut attribute autom awesome bcp-47 bcp47 beginners bien bin bot botones browserlanguage buen bueno busca button_lang_de button_lang_en cada cambiar cambie cambien cambios capaz cargada cargadores caso casos changelanguage clave claves combinaci como componentes con config configura configuraci configuramos controlador controle controles controller cool corresponde correspondiente cosas ctrl cu cual cuando cubierto cuenta custom cuya dadas dado de deber decidir decimos decirle defecto del desde detalle determinada determinar determine determinepreferredlanguage deutsch devolver devuelve dice dicha dichos diferente diferentes digamos din directiva disponible disponibles distintos donde dos ein ejecuci ejemplo el ellos embargo empecemos en enable englisch english ense entonces entra entraremos ernsthaft es especificar espera est esta estamos estas este esto evitar extienda fallbacklanguage finalmente find funci funcionalidad funcionar function german going greeting gro guide ha hace hacer haga hallo har hasta hay haya hayan headline hello hemos hey html ich idea idiomas implementar indicarle indique ingl inglesa interesantes internamente interpolaci interpolated interpoliert introducido invoca invocar ir juego key la language languages las le lenguaje lenguajes listos llamadas llame lo logic los luego lugar mala manera mismo missing missing_translation modul module multilenguaje muy myapp navegador navigator necesario necesidades necesitamos ng-click ng-controller ning nivel nuestra nuestro nuevas nuevo objeto ocurrir oder oops orden otra otro overview para paragraph parece partir pasa pasar pasarle pasarles pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text pero personalizada podemos ponen por pr preferido preferred preferredlangkey preferredlanguage prefiere primer primero propiedades provee proveen puede pueden qu raz realidad realmente reconocer registers registr registrados registro responsable resueltas return sabe saber scope se sea segunda segundo ser servicio servicios si sido siempre siguiente simple simplemente simplemete sin sobre soporte srsly su supuesto sus systemlanguage tabla tablas table tables tags tambi tantos tells tendr tenemos tenga teniendo text tiempo tiene tienen toda todo traducci traducciones transformar translate translate-values translated translation translations translationsde translationsen trata una unicornio uniformlanguagetag usado usando usar usarla userlanguage uso usted utilizar va valor valores var variable_replacement variables varias varios versi vez voil welt window world wurde"
    },
    {
      "section": "guide",
      "id": "08_fallback-languages",
      "shortName": "Lenguajes de respaldo",
      "type": "overview",
      "moduleName": "Lenguajes de respaldo",
      "shortDescription": "Lenguajes de respaldo (Fallback languages)",
      "keywords": "$scope $translate $translateprovider actual ahora al alem alemana algunas amor angular-translate antes aplicaci array asegurarse buscar cambia cambiando cambiar cambios caso changelanguage clave claves comenzar como completa con configur configuramos configurar conjunto contenga contenidos cual cuando de decimos del desde desee determinada devolver digamos disponibles efectivamente ejcuci ejecuci ejemplo el ella en encontrar ense entera entonces era es esa ese eso especificadas est estaremos este esto existe existen fallbacklanguage fr franc function guiar guide ha hace hacer hay hayan hemos idioma ignoradas ignorado igual imag importante incluso ingl inglesa invocar itera iteraci iterada iterar itere la langkey languages las le lenguaje lenguajes limitando limitar listo llamando lo los lugar manejar manera misma mismo momento necesitamos ning normalmente nuestra orden otra overview para partir pasamos pasar pase pero pila podemos por preferido preguntar primer primero principio prioridad problema proceso puede pueden querr quiere quiero registra registrado registrar registremos respaldo respuesta resto saber salteadas se seguir seleccionamos ser servicio si sido siendo siguiente simplemente sobre su suena tabla tambi tan tantos tenemos tener tiempo todas todo traducci traducciones traducidos translations trav una unicornio usar usefallbacklanguage usted veces ver vez ya"
    },
    {
      "section": "guide",
      "id": "09_language-negotiation",
      "shortName": "Negociación de lenguajes",
      "type": "overview",
      "moduleName": "Negociación de lenguajes",
      "shortDescription": "Negociación de lenguajes",
      "keywords": "$translateprovider accediendo acepta ahora al amor angular-translate anteriormente aplicaci aprendimos array autom bien capaz caso clave claves como con configuradas configurar cual cuando de de_ch de_de deber declarar defrauda del desear determinar determinepreferredlanguage devolviera devuelto devuelve dice discut distinta efectivamente ejemplo el en en_uk en_us entre error es est este esto estrictamente fuese funcionalidad guide hablando la las le lenguaaje lenguaje lenguajes llamada lo lugar mapear mediante mencionar multilenguaje_determinar-el-lenguaje-preferido-autom navegador negociaci negotiation normalmente overview par para pasa por porque preferido propiedades provocar puede pues quedar reconocer registeravailablelanguagekeys relaci relaciones se sentido ser si significa similares sin sistema solo soporta soporte su supongamos tablas tambi tiene todo traducci translations tratar tratat una unicornio usada usando usar uso usted utiliza utilizar vez"
    },
    {
      "section": "guide",
      "id": "10_storages",
      "shortName": "Almacenamientos",
      "type": "overview",
      "moduleName": "Almacenamientos",
      "shortDescription": "Almacenamientos (storages)",
      "keywords": "$scope $translate $translateprovider abrimos actualicemos actualizando add agregar ahora al alem algo almacenamiento almacenamientos almacenar als amor anf angular angular-translare angular-translate angular-translate-storage-cookie angular-translate-storage-local aplicaci app appservice aprendido aprendimos archivo aseg attribut attribute awesome beginners bin bot bower button_lang_de button_lang_en cada cambiando cap cargo changelanguage ciertas clave cliquear como con config controller cookie cookiestorage cool corresponda correspondiente ctrl cualquiera cuando cubrimmos de debe deber del dependencia desprop deutsch dicha distintas documento dos ein ejecutemos el elecci elegido elijan embeberla embebida empezamos en encarga englisch english ense ernsthaft es ese espec est este estos extensi function german grabar gro guide ha hab hace hacer haga hay headline hemos hey html http ich identificador incluir incorporado ind inf inisial instalar instale install interpolated interpoliert ir isntale js la language largo lenguaje listo lo localstorage los luego manera min mismo mismos modul module mucho myapp navegador necesita ng-click ng-controller ngcookies ngular-cookies nuestra nuestras nuevo obtener oder otra overview paquete para paragraph parece pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text pedirlo pero podamos podemos por pr preferredlanguage problema procedimiento proveer puede qu quiere razones reciente recordar recuerde refresque remember requests respaldo resto resultados retrotrae sabemos se sea seg sesiones si simplemente sobre soporta soportado soporte srsly storage su supuesto tables tambi tenemos text tipos traducciones translate translate-values translation translations translationsde translationsen una unicornio usa usado usando usar usario usecookiestorage uselocalstorage uso usted usuario usuarios var variable_replacement vaya vez viene web wurde yo"
    },
    {
      "section": "guide",
      "id": "11_custom-storages",
      "shortName": "Almacenamientos personalizados",
      "type": "overview",
      "moduleName": "Almacenamientos personalizados",
      "shortDescription": "Almacenamientos personalizados",
      "keywords": "$injector $scope $translate $translateprovider acceder acerca add adecuados adem ahora aislado al alg algo almacena almacenamiento almacenamientos almacenar als amor anf angular angular-translate aplicaci app argumentos asegurarnos atajos attribut attribute awesome bastante beginners bin brinda button_lang_de button_lang_en capaz caso changelanguage ciertos clave clave-valor como con config construido construir constuirlo contexto controller contruir cookiesstorage cookiestorage cool ctrl cual customstorage dado de deutsch devolver devuelve dicho digamos ein ejecuci ejemplo el elegido en englisch english ernsthaft es espera est este extenderla factory flexibilidad function german gran gro guide ha hay haya headline hey http ich idioma implementando indicarla informarle interfaz internamente interpolated interpoliert isntancia la language largo lenguaje ley llamados lo localstorage los luego manera method modul module myapp nada navegador necesidades ng-click ng-controller ngcookies ni nombre nuestra nuestro nuevo objeto obtener oder otra otro overview par para paragraph parte pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text personalizado personalizados podemos por preferredlanguage propio proveer pueda puede quiere realidad recordar recuerde refrescarlo remember request requests requiere return sabe se sencilla separado ser servicio si sistema son srsly store su supuesto sus tables tal tambi tenemos testeas text tiempo tiene translate translate-values translation translations translationsde translationsen una unicornio usan usar usarlo usarse usecookiestorage uselocalstorage usestorage usted utiliza valor var variable_replacement varios ver vez wurde"
    },
    {
      "section": "guide",
      "id": "12_asynchronous-loading",
      "shortName": "Carga asincrónica",
      "type": "overview",
      "moduleName": "Carga asincrónica",
      "shortDescription": "Carga asincrónica",
      "keywords": "$http $log $on $q $rootscope $scope $translate $translatepartialloader $translatepartialloaderprovider $translatepartialloaderstructurechanged $translateprovider _json_ accede acerca acorde activities actuales actualicemos acuerdo addpart adelante adem adicional adicionales agreg agrega agregamos agregar agrupados ahora al alguna algunas als alternativamente ambas amor andamiaje anf angular angular-translate angular-translate-loader-partial angular-translate-loader-static-files angular-translate-loader-url angularjs anteriormente antes aplicaci app aprendi aqu archivo archivos argumento armon arranca array aseg asienta asincr asynchronously atajo atributo attribut attribute autoarranque autom automatizar avanzada awesome bastante beginners bien bin binding borra bower browser bueno bug build buscada button_lang_de button_lang_en cach cache cada cadena cambia cambiado cambiamos cambiar cambiarse cambio cancelar cantidad capacidad capaz carga cargada cargadas cargado cargador cargadores cargados cargan cargar cargarse cargas cargue casi caso casos changelanguage changing chapter clara clave combinaci comentario comienzo comillas como compleja completo comportamiento con concatenar config configura configuraci configuramos configurar configures consideradas contact contactctrl contenido conteniendo content controladores controlar controller cool copiar corta corto cosa cosas crear crgadores ctrl cu cual cualquier cuando cuantas cuenta cuesti custom customloader cuyos da dada dados data dato datos de debe deben debido decir decirle declarada dedicadas default defecto del demand dentro dependa depende dependiere describa describe desde desesperar destello desventaja detalle determinado deutsch devtools devualva devuelve dicha dichas dicho dif diferente diferentes diferida digamos disable dispara dispare disponible disponibles distintos documento donde durante ein ejcuci ejecuci ejecutar ejecuten ejemplo el ellos embebido en endpoint englisch english entonces entre entregada ernsthaft error errores es escuchando ese eso esos espec especifica especificado especificar espera est esta estado estamos estar estas este estemos esto estos estructurados evento evitar excelente excepto existen exitosamente experimentar expresi extensi extesiones extesni extraer factory false favor fija files fin firma flash foo foobar forceasyncreload forma forzar fouc fue fuentes funci funciona funcionalidad funcionan funcionar function fusionadas garantiza generar german gran grande gro grunt guide ha hab habilidad habilitar habr hacer hacerla hacerlo han handler hasta hay hayamos headline hech hello hello_text hey html ich idioma igual imag incluida incorporado indic indicar indicarle informaci ingl inicial instal instalables instalado instalar install instancia instanciado instancias interesante interesantes internamente interpolated interpoliert interviene invoca invocado invocar inyectar inyectarlo js json la lang langkey language lapso las le learn lenguaje lenguajes lidiar ligeramente linda listos ll llamado lo load loaded loaders loadfailurehandler loading loads locale- locale-de locale-en localizaci lograr los luego lugar lugares main mainapp mande manejar manera manipuando manipulador manipular mejor menos method misma modul module momento muy myapp myerrorhandler nada necesario necesarios necesita necesitamos necesitar network ng-click ng-controller ngcookies ngroute ni ning ninguna nombrada nombres normalmente nuestra nuestro nuestros nueva nuevas nuevo nuevos nunca oder oficial opciones open org original otro overview paquete par para paragraph parcial parciales parte partes partialloader pasa pasando pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text patr patrones pero poco podemos podr pone poner ponerlas por porque posible post preferredlanguage prefiera prefijo prefix presente presentes prevalece prever primer primero probablemente problema proceso producir prolijito promesa promise pronto propiamente propiedad provee proveen proveer provider provisto publicado pudiera pudo pueda puede qu queremos querr quiere raz realmente recarga rechaza rechazarla reci refrescando refrescar refresco refresh registrado request rescate resolverla responden responder retornando return revisa router sabe sabemos saber sale se sea secci sencillo separados ser servicio servicios servidor settinga si sido siendo siglas significa siguiente simple simplemente simplente sino situaci sobre sobrescrito soluci son soporta soportan soporte srsly startup staticfilesloader su subdivide subm suffix sufijo suministrar suponga supongamos supuesto sus tabla tablas table tambi tan tanto tendr tenemos tener tenga text texto tiempo tiene tipos toda todas todav todo todos trabaja traducci traducciones traducido trae transforma translate translate-values translation translations ui una unas unicornio untranslated url urlloader urltemplate usa usamos usando usar usario usarlo useloader useloadercache usemos usestaticfilesloader useurlloader uso usted usuario utilizada utilizados utilizar vamos var variable_replacement varios vea ver verdadero verse vez viene vinculaci vincular vistazo vuelto vuelve world wurde ya yourspecialcacheservice"
    },
    {
      "section": "guide",
      "id": "13_custom-loaders",
      "shortName": "Cargadores personalizados",
      "type": "overview",
      "moduleName": "Cargadores personalizados",
      "shortDescription": "Cargadores personalizados",
      "keywords": "$http $injector $q $scope $timeout $translate $translateprovider accede acceder adicionales agregada agregado ahora ajusta al alem alemana algunos almacene als ambos amor anf angular angular-translate antes aplicaci app aprendi apretando aqu arquitectura asegurarse asincr asyncloader attribut attribute awesome bar beginners bien bin bot button_lang_de button_lang_en cambia cap carga cargador cargadores cargar cargarlos casos changelanguage ciertos clave como comportarse con config construcci construimos construir control controller cool cosas ctrl cual cuando customloader dado data datos de deber defer deferred del demostrar dependiendo desde desee deutsch devolver devuelva dice dicha diferente donde ein ejemplo el en encarga englisch english entonces ernsthaft es espera esperar est esta este esto exista extender factory files foo fooooo funci funcionamiento funcionan function genial german gro guide ha hace hacer hacerlo haga hagamos hasta hay headline hey ich inglesa internamente interpolated interpoliert intervienen invocada invocado invocar key la language las le lenguaje libre lo load loaderfn localization los luego lugar mecanismo menos mismo modos modul module muestra muy myapp necesidades necesita ng-click ng-controller ngcookies ni ninguno nuestra nuestro nuevos objeto oder opciones options overview para paragraph pasarlo pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text patrones permitiera personalizada personalizado personalizados podemos podr ponga por porvistos posible preferredlanguage preocupe primero promesa promise propiedad propiedades propios provee proveer provistos puede rechazada registrar registre reject remoto resolve resto resuelta resuelve return sabe se seg segundos ser serlo servicio servidor si simplemente siquiera sobre srsly su suficiente sus tabla tal tan text tiene todo todos total totalmente traducci traduci translate translate-values translation translations una unicornio usan usando usar useloader usestaticfilesloader useurlloader uso usted utiliza utulice valor var variable_replacement ver verse vez wurde ya"
    },
    {
      "section": "guide",
      "id": "14_pluralization",
      "shortName": "Pluralización",
      "type": "overview",
      "moduleName": "Pluralización",
      "shortDescription": "Pluralización",
      "keywords": "$scope $translate $translatemessageformatinterpolation $translateprovider _icu _podemos_ acceso acerca actualizarlo addinterpolation adecuada adem adicional afortunadamente agreguemos ahora al alem alg algo alguna algunas algunos almacenamiento alto ambos amor angular angular-translate angular-translate-interpolation-messageformat antes aplicaci aplicaciones app aprendido aqu archivo archivos argumento aseg asincr asunto atributo bastante benutze bien bilblioteca bin bower brindarle bueno button_lang_de button_lang_en capaz cargadores cargar casos changelanguage clave claves como compoentes componentes comporta con config configurada configurar configuremos contengan contiene contra controla controller correctamente corresponda correspondiente cre ctrl cu cual cuando culturas dado datos de decir decirle default default_interpolation defecto del dentro dependiendo desaf desde desgraciadamente desprop desventaja determinada determinadas deutsch dif diferencia diferente diferentes directiva directive disponible distintas distintos documento dynamic eine ejemplo ejemplos el embeber embeberlo embebido en encarga encontrar encuentra englisch english entonces es ese eso espec especifica especificaciones espera esquema est estamos este esto evaluaci evitamos exactamente excepto existe explic expresiones extensi ez factory falta fand fanden favor female filter filtro filtros finalmente flitro forma formato fortuna funcionalidad funcionalidades funcionalidaes funcionamiento function gender german globalmente gran guide guide_ gut hablado hace hacemos hacer hacerle hay headline hecho hemos hizo html http ich icu-project identificador implementa implementarlo incluir incluyendo incoquemos indicar indicarte indispensables instal instale install intepretaciones interesantes internationalizaci interpolaci interpolar interpolation introducir javascript js la largo las lejos lenguaje lenguajes like_text llama llamado llamados llegado lo localizaci logramos los luego lugar male manera mano mejor messageformat messsagformar mf_interpolation misma mismo module motor muy myapp nada named-keys necesitamos ng-click ng-controller nivel nombradas note nuestra nuestras nuestro nuestros nueva nuevo obtener olvide opcional opini org otra overview par para pasar pasarles pascalprecht path perdiento pero plural pluralformat pluralizaci pluralizador pluralizar podemos poder podr por posibles preferredlanguage primer primero problema problemas provecho provee proveen provisto puede qu quiee quiere quita quitamos readme realidad recuerde reemplazamos reemplazo reglas reimplementar resuelve resultado sabemos saber sacarle se select selectformat ser serio service servicio servidor sexton si siempre significa siguiente simple-variable-replacement simplemente simples sino sintaxis situaciones sobre son soporta src su supuesto sus sustituci tabla tablas tambi tanbi tanto tema temporaria tenemos tener tengamos tercer text textos tiempo tiene tienen tipo tipos toda todas todav todo todos totalmente trabajo traducci traducciones traducir trajinar translate translate-interpolation translate-values translation translations trata trav tuene una unicornio usa usado usan usar usemessageformatinterpolation usemos user uso usted utilizando utilizar val valores var variable varias varios ver verificar verse vez viene vistazo ya"
    },
    {
      "section": "guide",
      "id": "15_custom-interpolators",
      "shortName": "Interpoladores personalizados",
      "type": "overview",
      "moduleName": "Interpoladores personalizados",
      "shortDescription": "Interpoladores personalizados",
      "keywords": "$interpolate $locale $scope $translate $translateprovider actual actualmente acuerda addinterpolation adem agrega agregar agreguemos ahora alg algo almacena almacenamientos amigo amor angular angular-translate anteriores aplicaci app aprendi aqu benutze biblioteca bien bin button_lang_de button_lang_en cadena cadenas cap cargadores changelanguage cierta clave como con config configura conocidas construir contra controller cosa crear cree ctrl cualquier cuando custom custominterpolation dada de deben default defecto del deutsch devuelva devuelve eine ejecuci el ella embargo empieza en englisch english entonces es espec espera est esta este esto estructura exactamente expl factory fand fanden female fiel funcionalidades funcionar function german getinterpolationidentifier guide gut ha hacer hay headline hicimos ich identificador identificar implement implementar implemente implementemos incorporarlo incorporemos integrar inteligente intepolaci interfaz interpola interpolaci interpolaciones interpoladores interpolate interpolateparams interpolation la las le lenguaje lo locale localizaci los male manera mapeado messageformat module muchas muy myapp necesita ng-click ng-controller nuestro objeto opcional otro overview par para pascalprecht peque perder pero personalizada personalizadas personalizado personalizados plural pluralizaci por porveer preferredlanguage prefijo primero propio pueda puede qu realidad resultar return sabe se select ser serivcio serrvicio servicio servicios setlocale si siguientes simplemente sin sirve su suficientemente sufijo sus sustituye tambi temporaria text tiempo tiene tipo todo translate translate-values translations trata una unicornio usado usar useinterpolation useloader usestorage uso ustes utiliza val valor var veamos ver vez ya"
    },
    {
      "section": "guide",
      "id": "16_error-handling",
      "shortName": "Manejo de errores",
      "type": "overview",
      "moduleName": "Manejo de errores",
      "shortDescription": "Manejo de errores",
      "keywords": "$scope $translate $translateprovider ahora algo also_not_existing amor angular angular-translate angular-translate-handler-log angular-traslate aplicaci app aqu avisos benutze bin bit bower button_lang_de button_lang_en changelanguage clave como compleja con config consola controller ctrl cu cuando cuya de default del deutsch donde eine ejemplo en encarga englisch english errores es espec estar este existe extensi extensiones falta faltantes fand fanden female funcionamiento function german guide gut ha hacer handlers hay headline ich instalar install intenta interpolation interviene la las llamar lo loguea logueado male manejo manipulaci manipulador module myapp ng-click ng-controller not_existing overview para pascalprecht plural por preferredlanguage puede qye resto sabe se seguro select sido su tampoco text todas todo traducci traducciones traducir translate translations una unicornio usar usemissingtranslationhandlerlog uso val var veces verifique vistazo"
    },
    {
      "section": "guide",
      "id": "17_custom-error-handler",
      "shortName": "Manejo de errores personalizado",
      "type": "overview",
      "moduleName": "Manejo de errores personalizado",
      "shortDescription": "Manejo de errores personalizado",
      "keywords": "$translateprovider adem agregar al amor angular angular-translate app capaz cargo caso clave como con cu cual custom customtranslationhandler de default defecto define del dentro dep1 dep2 desde devu devuelto devuelve displayed el en error errores es espera esto factory falta finales framework function guide haber hace handler hay idea incluso key la language las ligeramente llamado los luego mala manejador manejo manipulador modificada module myapp mycustomhandlerfactory nombre origin otro overview para pascalprecht persona personalizado por posible propio proveer puedan puede querr reemplazo result return se sea sepa ser simplemente su supuesto text texto trabajar traducci traducciones traductores tranlation translate translation una unicornio usar usemissingtranslationhandler usemissingtranslationhandlerlog uso usted usuarios valor var veces ver versi"
    },
    {
      "section": "guide",
      "id": "18_events",
      "shortName": "Eventos",
      "type": "overview",
      "moduleName": "Eventos",
      "shortDescription": "Eventos",
      "keywords": "$rootscope $scope $translate $translatechangeend $translatechangeerror $translatechangestart $translatechangesuccess $translateloadingend $translateloadingerror $translateloadingstart $translateloadingsuccess $translatepartialloader $translatepartialloaderstructurechanged actualizada actuar algunos angular-translate aplicaci aqu arranque aseg asincr asynchronous brinda cada cambia cambiar cambio cargador cargar caso ciertos como concluye configurado crear cu cual cuales cualquier cuando cubren dado datos de del describe despu devuelta devuelve dichos diferentes dispara disparado disparados disparan disparen documento durante ejecuci el emiten empieza en ensequida es escuchar est este esto estos estructura event-bus evento eventos exitoso falla favor fue generales guide haya hayan independientemente indica inmediatamente intentar interpolaci invoca la lenguaje lo loading los luego mediante mejor nivel nombre normal normalmente notificados ocurre overview para performance por primera primero promesa puede pueden realidad rechaza rechazada registrado resuelta se sea ser servicios si sido siempre sobre son su tabla tambi tenido tiempo tiene tipo toda todos traducci una usa usando vez ya"
    },
    {
      "section": "guide",
      "id": "19_security",
      "shortName": "Seguridad",
      "type": "overview",
      "moduleName": "Seguridad",
      "shortDescription": "Códigos de escape (escape sequences) al usar contenido variable",
      "keywords": "$sanitize $scope $translateprovider adem agularjs al alias angular angular-translate aplicaci app asegura ataques aviso caracteres color como compatibilidad compatibility con config consola contenido contra controller correctamente corresponde ctrl cual cuando cumplimos de defecto define demonstraciones el elegida embargo en enable encarecidamente es escapado escape escaped escapeparameters escaping espec est esto estrategia estrategias estrictamente function futuro general global graves guide habilitaremos hasta hay haya headline hello html inhabilitado inseguro interpolados javascript la las lo los love modos module momento mostraremos myapp_escape_params myapp_escaped myapp_not_escaped myapp_sanitize nada ng-controller ngsanitize normales null org output overview owasp par para paragraph pascalprecht php por preferredlanguage procesada qu quitado recomendamos reemplaza referente resultado retroactiva salida sanea sanitize sanitized sanitizeparameters se segura seguridad sequences ser sido significa siguientes sin son standard style su tanto todos traducci translate translate-values translations una unicorn usa usando usar usesanitizevaluestrategy uso utilizada utilizando valor valores var variable variante versi vulnerable xss"
    },
    {
      "section": "guide",
      "id": "20_tools",
      "shortName": "Herramientas",
      "type": "overview",
      "moduleName": "Herramientas",
      "shortDescription": "Herramientas",
      "keywords": "abarca agregue al algunas alrededor andar angular-translate antes app archivos ayudar ayudarlo boolean brevemente busca cadenas caso cleanprevstrings compatible con configuraci configurar convertir cosas creada crear create cuales de defecto del destino detallada dev devonefile dir dist ejemplo el en entorno es especificado est esta este false file files formateadas formato generados generar generate gettext github grunt grunt-angular-translate grunt-po2json-angular-translate gruntfile guide ha habil hacerla hay herramientas importantes imprimir informaci initconfig inst install interesar js json las le lindo lo loadnpmtasks los mantenemos marcadores mismo msgid names necesarios necesidades necesite npm nuevos opciones opiones options optionsenablealtplaceholders optionsuppercaseid orbitan otras overview para pasos pero personalizados placeholders pluralizadas pluralization po po2json_angular_translate podr por posici pretty previamente producci programando projecto pueden quitar real resultado salida seg si sido siguientes simple sin single siquiere son strings su sus tarea test tipo tmp todo todos true una universo uno uppercaseid usando valor variar varias varios vistazo your_target"
    },
    {
      "section": "guide",
      "id": "21_migration-guide",
      "shortName": "Guía de Migración",
      "type": "overview",
      "moduleName": "Guía de Migración",
      "shortDescription": "1.1.1 -&gt; 2.0.0",
      "keywords": "$on $rootscope $scope $translate $translateprovider actualizar actulice advierta agregue ahora al angular-translate aplicaci argumento arreglarlo aseg asincr bajo basado cambios carga clave como con consistencia contenga cual cuidado de decidido del desde directamente el emiten en entero entonces es escuchar ese espera est este estilo esto estructurales eventos favor function github greetings gu guide ha hace han hasta haya hecho hello hemos hizo instant interpolateparams interpolationid js la las lenguaje licencia llamar lo los lugar manera mejorar migraci mit nivel nuevo ocurrencias organizaci overview para performance pero por primer promesa propalar proyecto puede quiere realizado renombrar repositorios se servicio si sido significa simplemente sincr son soportadas soportan stringfromservice su tablas tambi tanto tenga tiene todas todav todos traducci translate translation translationid translations trasladados una unable usa usar usarlo usarse usted var versi wtfpl ya"
    },
    {
      "section": "guide",
      "id": "22_unit-testing-with-angular-translate",
      "shortName": "Tests unitarios",
      "type": "overview",
      "moduleName": "Tests unitarios",
      "shortDescription": "Tests unitarios con angular-translate",
      "keywords": "$controller $httpbackend $new $provide $provider $q $rootscope $scope $translate $translateprovider absoluto acceso ahora al alg angular angular-translate angularjs aplicaci aplicaciones aplicar app aqu archivos asegurarse asi asincr bas bastante beforeeach bien bloque buena bueno cach cada cambiar capacidad caray cargador cargadores cargados cargar cargarmos causado causar code comienzo como complicado comprueba comunes con config configuraci configuramos considerando construir controlador controller correctos cosa cre creado crear cree cual cuando cuenta customloader da dado datos de deber decimos decimps defer deferred definimos del desafortunadamente desarrollando describe desde determinado di dise disponible echarle efectuar ejecuci ejecutada ejecutado ejecutamos ejecutemos ejemplo el embargo empezamos en encanta endpoint entender entonces error errores es escenario escriba escribiendo ese eso espera esperar est esta estamos este estemos esto estos evitar evitarlo expectget experiencia expl factory flujo funci funciona function gu guide ha hace hacer hacerse haga hay haya hayamos hemos i18n idea imag impacto impl importante indicar inline instancia instanciada instanciado intentemos intervenido invocado inyectado inyectando jasmine json la languagecontroller languagectrl le lenguaje listos llama lo loader locale- locale-en localizaci localmente logic los lugar maneja manera mediante mentalmente mente mismo momento muestra muy myapp nada ninguna nosotros nuesta nuestra nuestro obtendremos ocurre ocurriendo ocurrir opci otra otras overview palabras para pare parte pasa paso pasos personalizados podemos por porque pr practicado practican preferido preferredlanguage prefix primera problema problemas proceso promise proveedor proveedores proveer puede pueden qu registra registrado registramos remoto repasemos request resolve respuestas return scope se sea seguidamente sencillo ser servicio si sido siempre significa significativo siguiente siguientes simuladas simulado sin sobreescribiendo sobreescribimos sobreescribir solo soluci son soporte spec specs su suffix suite suno supongamos surgir sus switchlanguage tabla tambi tampoco tanto tenemos test testeado testear testeo tests tiempo tiene todo todos traducci translations trata una unexpected unitarios uno usa usados usamos usando usar useloader usen usestaticfilesloader usted utilizada utilizado utilizando var ve vez vistazo volverse xhr xhrs ya"
    }
  ],
  "apis": {
    "api": true,
    "guide": false
  },
  "html5Mode": false,
  "editExample": true,
  "startPage": "/guide",
  "scripts": [
    "messageformat.js",
    "angular.js",
    "angular-animate.js",
    "angular-cookies.js",
    "angular-sanitize.js",
    "angular-translate.js",
    "angular-translate-interpolation-messageformat.js",
    "angular-translate-storage-cookie.js",
    "angular-translate-storage-local.js",
    "angular-translate-loader-url.js",
    "angular-translate-loader-static-files.js",
    "angular-translate-handler-log.js"
  ]
};