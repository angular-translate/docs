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
      "shortName": "概觀",
      "type": "overview",
      "moduleName": "概觀",
      "shortDescription": "國際化你的 Angular 應用程式是如此的輕鬆",
      "keywords": "$translateprovider _i absatz angular angular-translate angularjs app bower config de dies ein en foo function git github google guide hallo hello html install ist it_ js love module myapp ng-newsletter ngmodules org overview paragraph pascalprecht path plnkr preferredlanguage repository src title translate translations unicorn var wordpress"
    },
    {
      "section": "guide",
      "id": "00_installation",
      "shortName": "安裝",
      "type": "overview",
      "moduleName": "安裝",
      "shortDescription": "安裝",
      "keywords": "angular-translate angular-translate-interpolation-default angular-translates bower build clone conf dist estrunner git github grunt gruntfile guide html https install js karma love midway min npm overview start testrunner unicorn unit"
    },
    {
      "section": "guide",
      "id": "01_conceptual-overview",
      "shortName": "概念概述",
      "type": "overview",
      "moduleName": "概念概述",
      "shortDescription": "概念概述",
      "keywords": "$translate angular-translate class guide img love overview padding-left png pull-right src staticfilesl style unicorn urlloader"
    },
    {
      "section": "guide",
      "id": "02_getting-started",
      "shortName": "入門",
      "type": "overview",
      "moduleName": "入門",
      "shortDescription": "入門",
      "keywords": "$location $locationprovider $route $routeprovider $translate $translateprovider add angular angular-translate another_namespace app awesome bar change charset concrete config controller en features foo function guide hash headline html5mode js json language ll love module myapp namespace namespaced ng-app ok_text overview paragraph pascalprecht path preferredlanguage some_namespace somefancyctrl specific src srsly sub_namespace table templateurl text translate translates translation translation_id translation_id1 translations unicorn url utf-8 var"
    },
    {
      "section": "guide",
      "id": "03_using-translate-service",
      "shortName": "使用 $translate 服務",
      "type": "overview",
      "moduleName": "使用 $translate 服務",
      "shortDescription": "使用 $translate 服務",
      "keywords": "$emit $on $rooscope $rootscope $scope $translate $translatechangesuccess $translateprovider add angular angular-translate anotherone app awesome call config controller ctrl en expose features function guide headline love module myapp namespace namespaced_paragraph ng-app ng-controller overview paragraph pascalprecht preferredlanguage returns service srsly table translate translation translations unicorn var versioninfo"
    },
    {
      "section": "guide",
      "id": "04_using-translate-filter",
      "shortName": "使用翻譯過濾器",
      "type": "overview",
      "moduleName": "使用翻譯過濾器",
      "shortDescription": "使用翻譯過濾器",
      "keywords": "$scope $translate $translateprovider add angular angular-translate angularjs app awesome config controller ctrl en filters function generalusage guide headline love module myapp ng-controller org overview paragraph pascalprecht preferredlanguage srsly table templates translate translation translation_id translations unicorn using_filters var"
    },
    {
      "section": "guide",
      "id": "05_using-translate-directive",
      "shortName": "使用翻譯過濾器",
      "type": "overview",
      "moduleName": "使用翻譯過濾器",
      "shortDescription": "使用翻譯過濾器",
      "keywords": "$scope $translate $translateprovider add angular angular-translate angularjs app awesome config controller ctrl en filters function generalusage guide headline love module myapp ng-controller org overview paragraph pascalprecht preferredlanguage srsly table templates translate translation translation_id translations unicorn using_filters var"
    },
    {
      "section": "guide",
      "id": "06_variable-replacement",
      "shortName": "變量替換",
      "type": "overview",
      "moduleName": "變量替換",
      "shortDescription": "變量替換",
      "keywords": "$scope $translate $translateprovider add angular angular-translate app attribute awesome beginners config controller cool ctrl en function greeting guide ha headline hey html interpolated lastlogin logged love module myapp ng-controller overview paragraph pascal pascalprecht pascalprect passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage somescopeobject srsly table text translate translate-value- translate-value-name translate-values translation translation_id translationdata translations unicorn username var variable_replacement"
    },
    {
      "section": "guide",
      "id": "07_multi-language",
      "shortName": "多語言",
      "type": "overview",
      "moduleName": "多語言",
      "shortDescription": "多語言",
      "keywords": "$scope $translate $translateprovider add als anf angular angular-translate app attribut attribute awesome beginners bin browserlanguage button_lang_de button_lang_en changelanguage config controller cool ctrl custom de determinepreferredlanguage deutsch ein en englisch english ernsthaft fallbacklanguage find function german going greeting gro guide ha hallo headline hello hey ich interpolated interpoliert key language languages logic love missing missing_translation modul module myapp navigator ng-click ng-controller oder oops overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferred preferredlangkey preferredlanguage registers return srsly systemlanguage table tables teaching tells text translate translate-values translated translation translations translationsde translationsen unicorn userlanguage var variable_replacement welt window world wurde"
    },
    {
      "section": "guide",
      "id": "08_fallback-languages",
      "shortName": "回退語言",
      "type": "overview",
      "moduleName": "回退語言",
      "shortDescription": "回退語言",
      "keywords": "$scope $translate $translateprovider angular-translate changelanguage de en fallbacklanguage fr function guide langkey love overview translations unicorn usefallbacklanguage"
    },
    {
      "section": "guide",
      "id": "09_language-negotiation",
      "shortName": "語言談判",
      "type": "overview",
      "moduleName": "語言談判",
      "shortDescription": "語言談判",
      "keywords": "$translateprovider angular-translate de de_ch de_de determinepreferredlanguage en en_uk en_us guide love multi-language_determining-preferred-language-automatically overview registeravailablelanguagekeys translations unicorn"
    },
    {
      "section": "guide",
      "id": "10_storages",
      "shortName": "存儲",
      "type": "overview",
      "moduleName": "存儲",
      "shortDescription": "存儲",
      "keywords": "$scope $translate $translateprovider add als anf angular angular-translate angular-translate-storage-cookie angular-translate-storage-local app attribut attribute awesome beginners bin bower button_lang_de button_lang_en changelanguage config controller cool ctrl de deutsch ein en englisch english ernsthaft function german gro guide ha headline hey ich install interpolated interpoliert language localstorage love modul module myapp ng-click ng-controller ngcookies oder overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage remember srsly tables text translate translate-values translation translations translationsde translationsen unicorn usecookiestorage uselocalstorage var variable_replacement wurde"
    },
    {
      "section": "guide",
      "id": "11_custom-storages",
      "shortName": "自定義存儲",
      "type": "overview",
      "moduleName": "自定義存儲",
      "shortDescription": "自定義存儲",
      "keywords": "$injector $scope $translate $translateprovider add als anf angular angular-translate app attribut attribute awesome beginners bin button_lang_de button_lang_en changelanguage config controller cookiesstorage cool ctrl customstorage de deutsch ein en englisch english ernsthaft factory function german gro guide ha headline hey ich interpolated interpoliert language love modul module myapp ng-click ng-controller ngcookies oder overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage remember request return srsly store tables text translate translate-values translation translations translationsde translationsen unicorn usecookiestorage uselocalstorage usestorage var variable_replacement wurde"
    },
    {
      "section": "guide",
      "id": "12_asynchronous-loading",
      "shortName": "異步加載",
      "type": "overview",
      "moduleName": "異步加載",
      "shortDescription": "異步加載",
      "keywords": "$on $rootscope $scope $translate $translatepartialloader $translatepartialloaderprovider $translatepartialloaderstructurechanged $translateprovider $translaterpartialloaderprovider addpart als anf angular angular-translate angular-translate-loader-partial angular-translate-loader-static-files angular-translate-loader-url app attribut attribute awesome beginners bin bower button_lang_de button_lang_en changelanguage config configures contact contactctrl controller cool ctrl data de deutsch ein en englisch english ernsthaft foo fouc function german gro guide ha headline hello hello_text hey ich install interpolated interpoliert json lang load locale- locale-de locale-en love main mainapp modul module myapp ng-click ng-controller ngcookies ngroute oder overview paragraph partialloader pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage prefix provider refresh srsly startup staticfilesl suffix table text translate translate-values translations unicorn urlloader urltemplate useloader usestaticfilesl useurlloader var variable_replacement world wurde"
    },
    {
      "section": "guide",
      "id": "13_custom-loaders",
      "shortName": "自定義加載器",
      "type": "overview",
      "moduleName": "自定義加載器",
      "shortDescription": "自定義加載器",
      "keywords": "$http $injector $q $scope $timeout $translate $translateprovider als anf angular angular-translate app asyncloader attribut attribute awesome bar beginners bin button_lang_de button_lang_en changelanguage config controller cool ctrl customloader data de defer deferred deutsch ein en englisch english ernsthaft factory files foo fooooo function german gro guide ha headline hey ich interpolated interpoliert key language load loaderfn localization love modul module myapp ng-click ng-controller ngcookies oder option options overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage promise reject resolve return srsly text translate translate-values translation translations unicorn useloader usestaticfilesl useurlloader var variable_replacement wurde"
    },
    {
      "section": "guide",
      "id": "14_pluralization",
      "shortName": "多元化",
      "type": "overview",
      "moduleName": "多元化",
      "shortDescription": "多元化",
      "keywords": "$scope $translate $translatemessageformatinterpolation $translateprovider addinterpolation angular angular-translate angular-translate-interpolation-messageformat app benutze bin bower button_lang_de button_lang_en changelanguage config controller ctrl de default default_interpolation deutsch directive dynamic eine en englisch english es fand fanden female function gender german guide guide_ gut headline ich icu-project install interpolation js like_text love male messageformat mf_interpolation module myapp named-keys ng-click ng-controller org overview pascalprecht path plural pluralformat preferredlanguage select selectformat service sexton simple-variable-replacement spec src text translate translate-interpolation translate-values translation translations unicorn usemessageformatinterpolation user val var"
    },
    {
      "section": "guide",
      "id": "15_custom-interpolators",
      "shortName": "自定義插值器",
      "type": "overview",
      "moduleName": "自定義插值器",
      "shortDescription": "自定義插值器",
      "keywords": "$interpolate $locale $scope $translate $translateprovider addinterpolation angular app benutze bin button_lang_de button_lang_en changelanguage config controller ctrl custom custominterpolation de default deutsch eine en englisch english es factory fand fanden female function german getinterpolationidentifier guide gut headline ich interpolate interpolateparams interpolation locale love male module myapp ng-click ng-controller overview pascalprecht plural preferredlanguage return select setlocale text translate translate-values translations unicorn useinterpolation useloader usestorage val var"
    },
    {
      "section": "guide",
      "id": "16_error-handling",
      "shortName": "錯誤處理",
      "type": "overview",
      "moduleName": "錯誤處理",
      "shortDescription": "錯誤處理",
      "keywords": "$scope $translate $translateprovider also_not_existing angular angular-translate angular-translate-handler-log app benutze bin bower button_lang_de button_lang_en changelanguage config controller ctrl de default deutsch eine en englisch english es fand fanden female function german guide gut headline ich install interpolation love male module myapp ng-click ng-controller not_existing overview pascalprecht plural preferredlanguage select text translate translations unicorn usemissingtranslationhandlerlog val var"
    },
    {
      "section": "guide",
      "id": "17_custom-error-handler",
      "shortName": "自定義錯誤處理程序",
      "type": "overview",
      "moduleName": "自定義錯誤處理程序",
      "shortDescription": "自定義錯誤處理程序",
      "keywords": "$translateprovider angular angular-translate app custom define dep1 dep2 factory function guide handler love module myapp mycustomhandlerfactory overview pascalprecht return tranlation translate unicorn usemissingtranslationhandler usemissingtranslationhandlerlog var"
    },
    {
      "section": "guide",
      "id": "18_events",
      "shortName": "事件",
      "type": "overview",
      "moduleName": "事件",
      "shortDescription": "事件",
      "keywords": "$rootscope $scope $translate $translatechangeend $translatechangeerror $translatechangestart $translatechangesuccess $translateloadingend $translateloadingerror $translateloadingstart $translateloadingsuccess $translatepartialloader $translatepartialloaderstructurechanged angular-translate guide overview"
    },
    {
      "section": "guide",
      "id": "19_security",
      "shortName": "安全性",
      "type": "overview",
      "moduleName": "安全性",
      "shortDescription": "轉義的變數內容",
      "keywords": "$scope $translateprovider angular angular-translate app color config controller ctrl en enable escape escaped escapeparameters escaping function guide headline hello href html https javascript love module myapp_escape_params myapp_escaped myapp_not_escaped myapp_sanitize ng-controller ngsanitize null org overview owasp paragraph pascalprecht php preferredlanguage sanitize sanitized standard style translate translate-values translations unicorn usesanitizevaluestrategy var xss"
    },
    {
      "section": "guide",
      "id": "20_tools",
      "shortName": "工具",
      "type": "overview",
      "moduleName": "工具",
      "shortDescription": "工具",
      "keywords": "angular-translate app boolean cleanprevstrings create default dev devonefile dist false file files generate grunt grunt-angular-translate grunt-po2json-angular-translate gruntfile guide initconfig install js json loadnpmtasks msgid names npm options optionsenablealtplaceholders optionsuppercaseid overview pluralization po po2json_angular_translate pretty single strings test tmp true type uppercaseid your_target"
    },
    {
      "section": "guide",
      "id": "21_migration-guide",
      "shortName": "遷移指南",
      "type": "overview",
      "moduleName": "遷移指南",
      "shortDescription": "1.1.1 -&gt; 2.0.0",
      "keywords": "$on $rootscope $scope $translate $translateprovider angular-translate en function github greetings guide hello instant interpolateparams interpolationid js mit overview stringfromservice translate translation translationid translations unable var wtfpl"
    },
    {
      "section": "guide",
      "id": "22_unit-testing-with-angular-translate",
      "shortName": "單元測試",
      "type": "overview",
      "moduleName": "單元測試",
      "shortDescription": "angular-translate 單元測試",
      "keywords": "$controller $httpbackend $new $provide $q $rootscope $scope $translate $translateprovider angular-translate angularjs app beforeeach code config controller customloader defer deferred describe en error expect expectget expects explicitly factory function guide happening injecting json languagecontroller languagectrl loader locale- locale-en logic mock myapp occur overview preferredlanguage prefix promise proper request resolve responses return scope service shouldn spec suffix switchlanguage test testing tests translations unexpected useloader usestaticfilesl var writing xhr xhrs"
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