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
      "shortDescription": "angular-translate - API Reference",
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
      "keywords": "$interpolate $log $q $rootscope $scope $translate $translaterefreshend $translaterefreshstart actual angular-translate api app array asynchronous asynchronously background broadcast care case change choosed class cloakclassname compiling configured contents core current currently data directive drop dynamic en_us enabled error events existent expects fallback fallbacklanguage false file finished function handling hash headline_text hello instant instantly internal interpolate interpolateparams invoked isn ispostcompilingenabled iteration key langkey language languages load loaded loaders loading method module object optional parameters params pascalprecht pointed post preferred preferredlanguage process promise proposedlanguage refresh refreshed refreshes refreshing registered reject reload remember represents resolved returns rules runtime service set sets skipped stack start storage storagekey store storing string table tables takes target tells text throw token translate translate-cloak translatedtext translation translationid usefallbacklanguage values version"
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
      "keywords": "$identifier $interpolate $translatedefaultinterpolation $translateinterpolator agains angular angulars api current currently function getinterpolationidentifier identifier interpolate interpolated interpolates interpolation interpolator key language locale object params pascalprecht returns service services setlocale sets string strings translate values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateLocalStorage",
      "shortName": "pascalprecht.translate.$translateLocalStorage",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Abstraction layer for localStorage. This service is used when telling angular-translate",
      "keywords": "$translatelocalstorage $window abstraction angular-translate api function item layer localstorage object pascalprecht returns service set sets storage telling translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "shortName": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses MessageFormat.js to interpolate strings against some values.",
      "keywords": "$identifier $translateinterpolator $translatemessageformatinterpolation agains api current currently function getinterpolationidentifier identifier interpolate interpolated interpolates interpolation interpolator js key language locale messageformat object params pascalprecht returns service setlocale sets string strings translate translate_mf_interpolation_cache values"
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
      "keywords": "$http $injector $q $rootscope $translatepartialloader $translatepartialloaderstructurechanged active add additional addpart angular-translate api asks availability browser called case chainable checks completely data delete deleted deletepart deletes deletion deprecated event fired function future indicator ispartavailable loaded loader loaders loading logically marks method non-empty note object options param parts pascalprecht pass perform physically prevent prevents process recompiled recycling registers remaining remove removedata requests returns reused server set table target throw time translate translation translations type wrong xhr"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translatePartialLoaderProvider",
      "shortName": "pascalprecht.translate.$translatePartialLoaderProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "By using a $translatePartialLoaderProvider you can configure a list of a needed",
      "keywords": "$translatepartialloaderprovider add addpart angular-translate api application asks avoids chainable check checks configuration configure data delete deletepart directly function future ispartavailable lang language lifetime list load loaded loader loading method needed non-empty note object param params parts pascalprecht pass phase provider registers removes returns runtime server set setpart sets specific startup table target throw translate translation type wrong"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateProvider",
      "shortName": "pascalprecht.translate.$translateProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "$translateProvider allows developers to register translation-tables, asynchronous loaders",
      "keywords": "$compile $injector $translatecookiestorage $translatelocalstorage $translateprovider $translatestaticfilesloader $translateurlloader actual add addinterpolation adds alias aliases allows angular-translate angularjs api app application-wide argument arguments array asynchronous automatically behavior best browser browsers build built-in called change choosed class cloakclassname combination compiling config configuration configure considering convention correct custom customhandler de_de default define defined dep1 dep2 depending determine determinepreferredlanguage developers directive directly doesn don en_us enabled error example exist expects extended extension factory fallbacklanguage find fitting fn format function functionality gender getlocale greeting hallo handler hello high implement indicator indicators initial inside instantiated interface internally interpolation invoking isn javascript job js key langkey language languagekeys languages layer left level ll loaded loader loaderfactory loaders locale log manage map messageformat method methods missing missingtranslationhandler module multiple not_found object optional options parameter pascalprecht pass passing plain pluralization post preferred preferredlanguage prefix processed provided register registeravailablelanguagekeys registered registering registers represent represents result return returns risk sanitation selection service services set sets setting shortcut simply specific startup storage storagekey storageprefix strategy string style table tables tells throw translate translate-cloak translated translation translation-tables translationid translationnotfoundindicator translationnotfoundindicatorleft translationnotfoundindicatorright translations translationtable type url usecookiestorage useinterpolation useloader uselocalstorage usemessageformatinterpolation usemissingtranslationhandler usemissingtranslationhandlerlog usepostcompiling user usesanitizestrategy usestaticfilesloader usestorage useurlloader valid values welt whitespace work world"
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
      "keywords": "$http $q $translateurlloader api applied creates current dynamic function key key-value language loading locale object options pairs pascalprecht pattern php prefixing requested response service translate typical url urls"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translate",
      "shortName": "translate",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Translates given translation id either through attribute or DOM content.",
      "keywords": "$compile $digest $filter $interpolate $rootscope $scope $translateprovider angular api attribute config content controller directive dom dynamic element expect filter function hello html inject internally interpolated js literal module ng-controller ngview object optional pascalprecht pass passed scenario script string text tobe translate translate-values translatectrl translates translation translation_id translationid translations values with_values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translateCloak",
      "shortName": "translateCloak",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "keywords": "$description $rootscope $translate adds api applied asynchronously class data directive element finished flickering initial initially loader loading pascalprecht prevent removes required string translate translate-cloak translation"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.filter:translate",
      "shortName": "translate",
      "type": "filter",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses $translate service to translate contents. Accepts interpolate parameters",
      "keywords": "$parse $scope $translate $translateprovider accepts angular api config contents controller dynamic dynamized filter function hash hello html interpolate interpolateparams js literal module ng-controller ngview object optional parameters pascalprecht pass script service string text translate translatectrl translated translation translation_id translationid translations values with_values"
    },
    {
      "section": "guide",
      "id": "index",
      "shortName": "Guide",
      "type": "overview",
      "moduleName": "Guide",
      "shortDescription": "i18n in AngularJS Anwendungen, einfach gemacht",
      "keywords": "$translateprovider _i _i18n- ablauf alles als anfragen angular angular-translate angularjs anwendungen app apps artikel asynchones auf aus beibringen beispiel bekommen benutzen benutzende benutzt bereit besuche bietet bis bisher blick bower brauchst bringen comment-773 community config contributor coolen daf dankbar danke dann das dass daten de deine deinen deiner deklarieren demos den dependency der deutscher dich die dies diese dieser dieses diskutieren dokumentation drauf drin du durch eigentlich ein einblick einen einer einfach einfachen einfacher einfaches einfachste einzubinden en entsprechende erweiterbarkeit erweiterungen es features feedback finden findest flexibilit folgenden foo function funktioniert gemacht generell gewesen gibt github google gro grunds guide haben hallo hello hier hilfe hilft hm html i18n ich ideen immer inhalte install installieren interessant interfaces internationalisierung internet interpolieren ist it_ jede jedem jetzt js kannst keinen kleiner klicke kommt komponenten konntest l10n laden lernst loading lokalisierung love mache mailinglist mehr menge menschen mit modul module myapp nach neoskop neuen ng-newsletter ngmodules nicht noch nur nutzen oben oder ohne org overview paar paragraph partial pascalprecht path plnkr pluralisierung-unterst positives preferredlanguage projekte quick repository resourcen ressourcen schluss sehr seine sicher sie sind skript solltest src start steckt stelle stellen title translate translations um und unicorn var vergessen verwenden viel von weg welches wenn werfen werte wie wir wirklich wordpress zeigt zeit zu zum zur"
    },
    {
      "section": "guide",
      "id": "00_installation",
      "shortName": "Installation",
      "type": "overview",
      "moduleName": "Installation",
      "shortDescription": "Installation",
      "keywords": "abh alle alles als andernfalls angesehen angular-translate anschlie au auch auf aus ausf ausgef aussehen auszuf befehl befehle befinden benutzt bietet bitte bower bower-package build builden building clone conf damit danke darauf das dass datei dateien davon dein deiner dependencies der die diese dir direkt dist du ein einbinden eine einem einen einer einfach enth entsprechenden entwicklung entwicklungs- entwicklungszwecke erfolgreich erstellten es folgende folgenden framework funktioniert ganz geklonte gelieferten generieren generiert gibt git github gr grunt gruntfile guide hast history html html-dokument inklusive ins install installation installiere installieren installiert ist jemals jetzt js kann kannst karma klon klonen kofigurierte kommandozeile kommen kommt komplette kompletten komponentenverzeichnis konfigurationsdatei konfiguriert liegt loslegen love man maschine midway min mit mitgelieferte nachdem navigiere npm nur overview package passiert prodkuktionsumgebungen productionsversion produktion projekt pull quelltext reduziert repository request richtig sehen selbstverst sende sich sicherstellen sie sind sollten solltest source sowohl spiel start starte startet tasks terminal testing testrunner testrunnter tests testsuite tools tun um und ungef unicorn unit verwendet verzeichnis vollst von wartet weg weitere weiterer weitergehen wenn werden wichtigste wie wird wo wurden zu"
    },
    {
      "section": "guide",
      "id": "01_conceptual-overview",
      "shortName": "Konzeptionelle Übersicht",
      "type": "overview",
      "moduleName": "Konzeptionelle Übersicht",
      "shortDescription": "Konzeptionelle Übersicht",
      "keywords": "$interpolate $translate abbildung aber abstrakten allerdings als andere anforderungen angular angular-translate anhand app asynchron asynchronen asynchronous auch aufruf ausgef ausreicht bedeutet beeinflussen befinden befindet beide beiden beim beispiel bekommen bekommt benutzen benutzer benutzt beschreibt bestimmten bietet bower box bringt business-logic-layer class controller cookie core da dann dar darauf das dass deine deinen dem den der dessen die diese diesem dieser dir direktive doch du durchstarten dynamische eigenen eigentlich ein eine einem einen eines einfach einige einzelnen enth entkoppelt entspricht entwickeln er erlaubt es etwas extra falls features filter folgende funktionalit ganz gebrauch gegen gehen geht genannten genauer gew gibt gilt gleiche guide handler handlers hast hier hilfreich hinaus identifier img implementieren inhalte innerhalb installieren interessanter internvon interpolation-service interpolation-services interpolieren interpoliert ist ja jeden jetzt jeweils kann kannst kapitel kein keine keinen keiner kleine kommt komponente komponenten konzeptionelle korrenspondierende lage lernen lernst linke loader localstorage log-services love machen macht mal man merkt missing missingtranslationhandler mit mitgelieferte modul musst nach nachladen nachzuladen neues nicht nichts nitty-gritty noch nur nutzt ob overview packages padding-left png problem pull-right rechte schicht schneller schon sehen sehr sei sein seine selbstverst service setzen sich sie sind sodass sogenannte solcher sondern sp spezifisches sprache sprachschl src standard staticfilesloader storage storage-service storages strukturiert style subkomponenten sucht syntax tiefer translation trotzdem um und unicorn unterst urlloader verstehst versucht verwenden view-layer vom von wei weil welche wenn werden wert werte wie wiederum willst wir wird wurde zeigt zu zum zusammen zusammenbau zwei"
    },
    {
      "section": "guide",
      "id": "02_getting-started",
      "shortName": "Einstieg",
      "type": "overview",
      "moduleName": "Einstieg",
      "shortDescription": "Einstieg",
      "keywords": "$location $locationprovider $route $routeprovider $translate $translateprovider _benutzung _konfiguration aber add alles als angeben angular angular-translate anwendung anwendungen app arbeitet architektur asynchron au auch auf aus aussehen awesome bedeutet bei beibringen beinhaltet beizubringe beliebig benutzen bestimmten beziehen bietet binde blick bringt change charset code concrete config controller da damit danach darstellt darum das dass dein deine deiner deklarieren dem den denen dependencies dependency der die dies diese dieser dinge direktive direktiven du durch durchdachten eigentlich ein eine einem einen einer eines einf einfach eingebuden einmal einstieg en entsprechender entsprechendes er erstes erwartet erweitern es etwa features filter filtern folgende folgenden folgender folgt function funktionierende ganz geben gehen geht gemacht genau gezeigte gibt grade gro guide handelt hash hat headline herausforderung hier hinzu hinzuf hinzuzuf html html-dokument html5-modus html5mode injected injection ins interessant interface ist javascript jetzt js json json- json-objekte kann kannst kapitel keine key klar kommt komplexen komponenten konfiguration konfigurationszeit konfigureren konfigurierbar konfigurieren konfiguriert konkrete korrespondierenden language lassen laufzeit lernst ll loszulegen love machen man mehrere methode methoden mit mitgelieferte modul module modulkonfiguration muss musst myapp namespace namespaced namespaces ng-app nicht nun nur oben object objekt oder overview paragraph pascalprecht passieren passiert path preferredlanguage provider provider_ quasi registriert repr sagen sehen sehr sein seine selbst selbstverst service services services_ sich sie soll sollen somefancyctrl sp specific spiel sprache sprachen sprachschluessel src srsly stelle sub_namespace syntax tabelle table teil templateurl tief translate translation translation_id translation_id1 translations tun um und unicorn unserer unter unterteilen url utf-8 var verf verschachteln verwendest verwendet vielleicht von wartbarer wei welche welcher wenn werden werfen wie wir wird wollen wr wurde zeigt ziemlich zu zugreifen zur"
    },
    {
      "section": "guide",
      "id": "03_using-translate-service",
      "shortName": "$translate- Service benutzen",
      "type": "overview",
      "moduleName": "$translate- Service benutzen",
      "shortDescription": "$translate- Service benutzen",
      "keywords": "$emitted $on $rooscope $rootscope $scope $translate $translate- $translatechangesuccess $translateprovider aber add aendern aendert allerdings alles allgemeine als angular angular-translate angular-welt anotherone anstatt anwendungsf app app-titel arbeitet asynchron au auf aufgel augeloest aus ausgeworfen aussehen awesome beachte bedeteut bedeutet befinden beispiel benutzen benutzung beruecksichtigt bietet bitte code config controller controllers ctrl da dar das dass data-binding deinem deinen deiner deines dem den der des die dies diese dieser dinge dir direkt direkte direktive direktiven dot-notation du durch eigentlich ein eine einem einer eines einfach en entweder er erklaert es event expose falls features filter function funktionierendes ganz gefeuert gekoppelt geladen geschehen gewechselt gibt guide headline heraus hier horcht html-dokuments immer informiert inhalte injecten innerhalb ins ist jedes jetzt kannst kein kommt laufzeit level love machen mal man manipulieren mit module moeglich moelglich muessen muss musst myapp nachdenkst namespace namespaced_paragraph namespaces ng-app ng-controller nicht nichts niemals nur oder overview paragraph pascalprecht performance-gruenden post preferredlanguage promise registriert sch sehr sein service services sich sofern sollten spiel sprache sprachtabelle sprich srsly stark stelle stellte table tats translate translation translation-daten translations tun two-way uebersetzt uebersetzung uebersetzungen um und unicorn uns unterstuetzt var verhaelt verschiedene von vor vorher warum weg wege weiter wenn werden wir wird wuerde wurde wurden zu zum zurueck"
    },
    {
      "section": "guide",
      "id": "04_using-translate-filter",
      "shortName": "translate- Filter benutzen",
      "type": "overview",
      "moduleName": "translate- Filter benutzen",
      "shortDescription": "Using translate filter",
      "keywords": "$scope $translate $translateprovider aber add alles allgemeine angular angular-translate angularjs app aus ausgelagert ausgetauscht awesome bedeutet beispiel benutzen benutzung bescheid beutzen bietet bist config controller cool ctrl dar das dass davon deine dem den der die diese direktive du eigentlich ein einen einfach en entkoppeln entsprechend es etwas filter filters function funktionierendes funktioniert ganze gelernt generalusage gibt gilt gleiche gro grunds guide handlen hast haupts headline hier inhalte ist jedem jegliche kannst kapitel keine koppeln lage lesen logik love machen mal mit module muss myapp nehmen ng-controller nicht nun oder ohne org overview paragraph pascalprecht preferredlanguage probleme raus schicht sehr service sicherlich srsly stattdessen table templates translate translate- translation translation_id translations um und unicorn unser unseren updaten using_filters var view-layer von wenn werden wie wieder wir wissen zeigt zu"
    },
    {
      "section": "guide",
      "id": "05_using-translate-directive",
      "shortName": "translate- Directive benutzen",
      "type": "overview",
      "moduleName": "translate- Directive benutzen",
      "shortDescription": "translate- Direktive benutzen",
      "keywords": "$compile $scope $translateprovider add aktuellen alle allgemeine als angular angular-translate anschlie app attribute attributwert au auch aufgrund aus ausschalten aussehen awesome bedeteut bedeutet beginners beispiel beispielsweise benutze benutzen benutzung besser besten bietet compiling config controller cool ctrl dann dar darstellen das dass dataset davon dem der des deswegen die dieses dir directive direktive direktiven dort du dynamisch ein eine einem einen einer einschalten en erwartet es fall false feature filter flexibel folgendes function funktionieren funktioniert gehen geloopt generell gibt global guide gut ha hat headline herausgestellt hey hier hinzu identifier inhalt inhalte innerhalb interpolated interpoliert ist jede kann kannst kompilieren konkreter kontext love mal man mit module muss myapp neben neue ng-controller nicht nun nur nutzen overview paar paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text passen passt post preferredlanguage pro schon scope sehr seit sich sie sieht sind solch srsly steht table text texten translate translate- translate-compile translation translation_id translations um und unicorn unser unsere usepostcompiling var verf verhalten verlangsamen verschiedene version verwenden verwendeten verwendung viele vieler view view-layers watch-expressions weg weil wenn werden wie wieder wir wird zu zur"
    },
    {
      "section": "guide",
      "id": "06_variable-replacement",
      "shortName": "Dynamische Werte",
      "type": "overview",
      "moduleName": "Dynamische Werte",
      "shortDescription": "Dynamische Werte",
      "keywords": "$interpolate $scope $translate $translate- $translateprovider _du _n_ ab aber add aktualisieren als angegeben angenommen angular angular-translate antwort anwenden anzeigen app argument attribut attribute au auch auf aus ausdruck awesome beginners behandelt beispiel bekommen benachrichtigung benamten benutzt benutzten beschreiben beschrieben bestimmte bietet brauchen bringen bzw code config controller cool ctrl da daf dann darauf das dass dazu deinen dem den der des die diese diesem diesen dieser directive direktive du durch durchzuschleifen dynamisch dynamische dynamischen dynamischer ein eine einem einen einer einfach eingriffe einzige einzubauen en ende entsprechend entweder ersetzen ersetzenden ersetzung ersetzungen erwarten erwartet erweitern erweitert es evaluiert expression fall filter fixer folgendem folgenden folgt function funktionalit funktionierende funktioniert ganz gebindet gebraucht geh gehen gelernt genauer genutzt geparst gerne gibt greeting guide guides ha habeb haben hallo hash hast hat headline herauskommt hey hinein html identifier individuellen innerhalb intern interpolate- interpolated interpolation interpolation-service interpolieren interpolierende interpoliert interpolierten ist ja javascript jetzt kann kannst kein keine klappt klasse komponenten lassen lastlogin lernst logged love ma mails_ man mehr mein mit module muss myapp namen nat neue ng-controller nicht noch nun nur nutzt nutzung oben objekt objekt-expression objektliteral oder ohne optionales overview paragraph parameter parameters pascal pascalprecht pascalprect passed passed_as_attribute passed_as_interpolation passed_as_text platzhalter pr preferredlanguage probleme problemlos quellcodes richtig schl schon sehr seine seit selbst selbstverst service sieht sind solltest somescopeobject sp srsly standard string syntax table text textschl tolle translate translate- translate-value- translate-value-name translate-values translation translation_id translationdata translations tun um und unicorn unsere username var variable_replacement variablen verbauen version verwenden verwendet vom von vorher weg wege weiter weitere welcher welches wenn werden wert werte werten wie wieder wir wird wissen wollen zu zum zusammen zuweisen zuzuweisen zwei zweiten zweites"
    },
    {
      "section": "guide",
      "id": "07_multi-language",
      "shortName": "Mehrsprachigkeit",
      "type": "overview",
      "moduleName": "Mehrsprachigkeit",
      "shortDescription": "Mehrsprachigkeit",
      "keywords": "$scope $translate $translateprovider aber abgeschlossen add aktuell aktuellen alle allerdings als andere anderen anf angular angular-translate anpingt anstatt anwendungsfall app argument array asynchrone asynchronen attribut attribute au auch aufgerufen auftrag aus ausgehen automatische awesome basic-funktionalit befindet beginners beibringen beibringt beispiel beispiel-app beizubringen bekommen bereit besteht bestimmten bevorzugen bevorzugt bevorzugte bietet bin bis brauchen browser browserlanguage browsers button_lang_de button_lang_en buttons changelanguage code config controller controller-scope cool ctrl custom da daf dann das dass davon dazu de deine deiner dem den denen der des dessen determinepreferredlanguage deutsch die diese diesem diesen dieser direktive du dynamische eigene eigentlich ein eine einem einen einer eines einfach eingef eintr en englisch english entscheiden entsprechend entsprechende entweder entwicklung ermitteln ermittelt ernsthaft erst erster erwartet erweitert es fallback fallback-sprache fallback-sprachen fallbacklanguage falls falsch fest festzulegen find folgende folgenden folgt fr french function funktion funktionieren garantiert gedacht gef gehts gelernt genau genutzt german geschaut geschehen geschrieben gibst gibt gleiche going greeting gro grund guide guter ha haben hallo hast hat headline hello herausgestellt hey hilfe hilfreich hinzu hinzuf hinzuzuf html-buttons ich implementieren implementiert ins interessant interpolated interpoliert irgendwoher ist ja jede jeder jetzt kann kannst keine kennt key klar kombination kommt komponenten konfigurieren kraft lage language lassen laufzeit legen level liefern loader logic los love machen man mehr mehreren mehrsprachigkeit methode missing missing_translation mit mittels modul module muss myapp nach navigator neu ng-click ng-controller nicht nichts noch nun nur nutzen object oder oops overview paragraph parameter parametern pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text passen praeferierten preferred preferredlangkey preferredlanguage probiert registers registriert registrierung reihenfolge rest return richtig sagen sagt schlicht schluss schon scope sehr sei sein seit seiteneffekten selbstst service setzen setzt sich sie sieht sind sinnvollerweise solchen soll sp spiel sprache sprachen sprachschl srsly standardisiert standardsprache statt stelle strings systemlanguage tabelle table tables tells text theoretisch translate translate-values translated translation translations translationsde translationsen tritt um umzugehen und unerwartet unicorn unpassend unsch unser unserem unterschiedliche unterst userlanguage var variable_replacement verh versehen version verwenden verwendet verwendeten viele vom von wahl wahrscheinlich wechseln weg weil weitere welche welt wenn werden werte wie window wir wird wissen wo world wurde zu zum zur zuverl zuweisen zwei zweite zweiter"
    },
    {
      "section": "guide",
      "id": "08_fallback-languages",
      "shortName": "Alternativsprachen",
      "type": "overview",
      "moduleName": "Alternativsprachen",
      "shortDescription": "Alternativsprachen",
      "keywords": "$scope $translate $translateprovider aber abschnitt aktuell aktuelle alles als alternative alternativen alternativsprache alternativsprachen angebotenen angenommen angular-translate anwender anwendungsf arbeiten array arrays arraywerte auch auf aufruf aufsetzt aus austausch bei beispiel bekanntmachen bereits beschr bestimmten bevorzugte bis bisher bitte bleibt bzw changelanguage da dabei daran darstellt das dass de definiert dem den denen denke der des deutsch deutsche die dies diese diesem dieser dieses dort du durchlaufen ebenfalls ein eine einem einer einfach eingestellt einige einschr einstellt einstiegspunkts einstiegssprache en englisch englischsprachige englischsprachigen entsprechende erste erw es existiert fall fallbacklanguage falls folgendes fr franz function funktion funktionalit ge gefunden gehts gelernt gemacht genannten genutzte gesamte gesamten gesetzt gestaltet gesucht getroffen gew gewechselt gibt gleichzeitig gr guide haben hast hinten hinweis hinzuf identisch ignoriert ignorierte ist iteration iterator iteriert ja jedoch kann kein keine kennst klingt kommen konfigurieren kurzen langkey laufzeit lediglich liste love man mehr mehrere mehreren mit mittels muss nach nachdem nachsehen nehmen neu nicht nie noch normalerweise nun nur ob oben oder ohne overview parameter passiert pr problem prozess registrieren registriert reihenfolge schl schon sein sicherlich sie sind sogar solange soll sollte somit sprachalternativen sprache sprachen sprachliste sprachpakete sprachschl sprachtabelle stapel startpunkt stattfinden stelle steuert teil translations trotzdem umgehen und unicorn unterschiedlichen usefallbacklanguage versuchen vom von vorher vorherigen vorne wars wechseln welcher wenn werden wichtiger wie willst wir wird wissen worden wurde zu zum zur zus"
    },
    {
      "section": "guide",
      "id": "09_language-negotiation",
      "shortName": "Sprachauswahl",
      "type": "overview",
      "moduleName": "Sprachauswahl",
      "shortDescription": "Language Negotiation",
      "keywords": "$translateprovider als angular-translate anhand anwendung applikation argumente array auch auf aufgerufen aus auszudr beispiel beispiels ben bevorzugte beziehung beziehungen bietet blick browser browserparameter bzw da dadurch daher das dass dazu de de_ch de_de definiert deiner dem den der des determinepreferredlanguage die dies diese diesen dieser dieses durch eben eigentlich ein eine einem en en_uk en_us ergibt erkennen erl ermittelt ersten erwartet es falls fehler funktion funktionalit gibt guide haben hervorgeht hier intelligente ist kann kapitel kombination kurz lage language love mappings mit mittels modul multi-language_automatische-wahl-der-praeferierten-sprache muss nachfolgenden negotiation normalerweise nun nur nutzung objekt oder ohne overview parameter pr problematisch registeravailablelanguagekeys sachverhalt schl sein separat setzen sinn sobald sprachauswahl sprache sprachschl statt stehen stelle suchen translations und unicorn unterst vom von wahl weitere weiterer wenn werden wie wir wird wollen wurden zu zueinander zum zur zusammenh zweite zwischen"
    },
    {
      "section": "guide",
      "id": "10_storages",
      "shortName": "Storages",
      "type": "overview",
      "moduleName": "Storages",
      "shortDescription": "Storages",
      "keywords": "$scope $translate $translateprovider ab aber add als anf angular angular-translate angular-translate-storage-cookie angular-translate-storage-local app attribut attribute auch aufgerufen aufrufen awesome beginners beibringen beibringt beispiel beizubringen benutzen benutzer benutzers benutzt bereits bestimmten bietet bin bower bringt browser button button_lang_de button_lang_en changelanguage config controller cookiestorage cool ctrl da danach dann daran das dass dazu de dein deiner dem den denk der des deswegen deutsch die diesem dieser dieses dir du dynamisieren eben ein eine einem einen einer eines einfach eingebunden en englisch english entsprechende entsprechenden ergebnis erinnern ernsthaft erreichen etwas extension extensions fall fallback falls folgt function ganz gelern gelernt german gestartet gew gleiche gro guide ha haben hast hat hatten headline hey hierf html-dokument ich identifier immer informiert install installieren installiert interpolated interpoliert ist jedes jetzt kann kannst kapitel kapiteln kein klicken komisch language letzte letzten lieber localstorage love mal man mehrere merken merkt methode mit modul module muss myapp nach ng-click ng-controller ngcookies nicht noch nur nutzers ob oder overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text passende preferredlanguage refreshe remember rest schaut sein setzt sich sie sogenannte sollte speichern speichert sprache sprachen sprachschl srsly standardm starten startet storage storages suchen tables text translate translate-values translation translations translationsde translationsen um und unicorn unsere unter unterst updaten usecookiestorage uselocalstorage var variable_replacement verwenden verwendet viel vorhanden vorher war wechsel welche welchen wenn werden wie wir wird wissen wurde zeigt zu zwei"
    },
    {
      "section": "guide",
      "id": "11_custom-storages",
      "shortName": "Eigene Storages",
      "type": "overview",
      "moduleName": "Eigene Storages",
      "shortDescription": "Eigene Storages",
      "keywords": "$injector $scope $translate $translateprovider add als analog andere anderen anf angular angular-translate anspr anzufragen app attribut attribute auch aus aussehen automatisch awesome bauen beginners beiden beispiel-app beizubringen bekommen benutzen benutzer benutzt beschrieben bestimmten bestimmtes bin braucht button_lang_de button_lang_en changelanguage config controller cookiestorage cool ctrl custom customstorage da danach dass dazu de deinen deiner dem den dependency der des deswegen deutsch die diese dieser du echt eigene eigenen eigentlich ein eine einem einen eines einfach einfachen en englisch english entsprechen entweder entwickeln entwickelt ernsthaft ersteren erwartet es factory fall function ganz gebraucht gelesen genutzt german gew gibt gro guide ha hast hat headline hey hier ich implementieren implementiert injection instance interface interfaces interpolated interpoliert ist javascript jeder kann kannst keine language localstorage love merken methode methoden mit modul module muss musst myapp namen nehmen ng-click ng-controller ngcookies nicht nur nutzt oder overview paragraph parameter pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage profitieren remember request return sagen schreiben sehen sei service services set shortcuts sich sicher sind soll sowohl speicher sprache srsly stellen storage storage- storage-service storage-services storages store tables testing text translate translate-values translation translations translationsde translationsen um und unicorn unser unsere unserem usecookiestorage uselocalstorage usestorage var variable_replacement versehen verwenden von vorhanden wei welche wenn werden wert wie wieder wir wird wollen wurde zu zuletzt zur zwei"
    },
    {
      "section": "guide",
      "id": "12_asynchronous-loading",
      "shortName": "Asynchrones Laden",
      "type": "overview",
      "moduleName": "Asynchrones Laden",
      "shortDescription": "Asynchrones Laden",
      "keywords": "$on $rootscope $scope $translate $translatepartialloader $translatepartialloaderprovider $translatepartialloaderstructurechanged $translatepartialloaderstructuredchanged $translateprovider aber abgh abh addpart aktiv aktuell alle allerdings alles als analog anders anf anfragen angefragt angefragte angular angular-translate angular-translate-loader-partial angular-translate-loader-static-files angular-translate-loader-url anhand anschlie anstatt anwendungsfall app apps argument asynchron asynchrone asynchronen asynchroner asynchrones asynchronous attribut attribute au auch auf aufgebrochen aufgerufen auftreten aus ausgef ausliefern aussehen aussieht automatisch automatisieren awesome baust bedeutet beginners bei beim beispiel beispielsweise bekommt benutzen benutzer benutzt bereits beschreibung besser bestimmen bestimmmte bestimmten besucht bietet bin bisher bist bower brauchen bringt browsers bug button_lang_de button_lang_en changelanguage cleveren code config configures contact contactctrl content controller controllern cool ctrl da daf dar das dass data dateien dateipr dateisuffix daten davon de default-sprache deinen dem den denn der des deutsch devtools die diese diesen dieser dinge dir dort drei du durchaus eher eigenen eigentlich ein eine einem einen einer eines einfach einfachste eingebunden einmal en endpoint englisch english entspechende entsprechen entsprechend entsprechenden er erm ernsthaft erst erste erstes erwartet es etwa etwas event explizit extension fall fast fertig feuert fixen flash flickern folgende folgenden folgt foo fouc fr fragt function funktion funktionalit funktionierende funktioniert ganz gar geben gebrauch gedanken gegebenen geh geladen geladene gelernt genau genutzt german gestellt gew gewechselt gibt gilt gleichen gr grade gro guide ha haben hast hat haus headline hello hello_text hey hier hilfe hinzugef hinzuzuf html html-dokument i18n-daten ich ihn immer informationen inhalt inital initiale initialen initialisiert injecten ins install installieren installiert instanziiert interessant interessieren interpolated interpoliert irgendwo ist ja jede jedem jeder jedes jetzt json kann kannst kapitel kein keine keinen kennen kleines kombination kommt komplette kompletten komplexen komplexeren konfigurieren konfiguriert konfigurierte korrespondierenden kurz kurzen laden lage lang laufzeit lazy lernst liefert load loader loaders loading locale- locale-de locale-en logisches lokalisierungsdateien love machen main mainapp mal man manipulieren matchen mehrere merkt methode mindestens mit modul module modulebene moduls moment muss musst muster musters myapp nach nachgeladen nachladen nachteil nachzuladen nat nehmen netzwerkaktivit neu neuen neuer neues ng-click ng-controller ngcookies ngroute nicht nichts noch nun nur nutzen ob obige oder overview paragraph parameter partial partial-loading partialloader parts pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text passen passiert preferredlanguage prefix promise property provider providers prozess realisieren refresh refreshen registrieren registrierten richtigen runtime sagen schaue schon schreiben schwer sehen selbst seperate server servers service services sich sicher sie sind sobald solch solchen soll sollen sollte sollten sp spezifische spezifizieren spezifiziert sprache sprachen sprachschl srsly start startup staticfilesloader steckt stelle stellt string strukturiert submodule submodulen suboptimal suffix tabellen table teil text transformieren translate translate-values translations trotzdem tun ui-router um ums und unicorn uns unsere unserem unseren untranslated url urlloader urltemplate useloader uselocalstorage usestaticfilesloader useurlloader var variable_replacement ver vergessen verhalten verkettet verschiedene verwenden verwendet vielleicht vom von vor vorgehalten vorhanden vorkommen vorliegen vorzubeugen wahrscheinlich war warum wechselt weg wege wei weil welche welcher welches welchr wenn werden werte wie wir wird wirds wirklich wissen wo woher wollen world wunderbar wurde wurden zeit ziehen ziemlich zu zuerst zum zur zwei"
    },
    {
      "section": "guide",
      "id": "13_custom-loaders",
      "shortName": "Eigene Loader",
      "type": "overview",
      "moduleName": "Eigene Loader",
      "shortDescription": "Eigene Loader",
      "keywords": "$http $injector $q $scope $timeout $translate $translateprovider als anderen anf angular angular-translate anspr app architektur asynchonen asynchrone asynchroner asyncloader attribut attribute auch auf aufgerufen aus aussehen automatisch awesome bar bauen beginners beide beisiel beispiel benutzen benutzt bieten bin bis button_lang_de button_lang_en changelanguage code config controller cool ctrl custom customloader da dann dar das data daten de defer deferred deine deinen dekonfigurationsobjekt dem den der des deutsch deutschen die diese dieser dieses dir du ebenfalls eigene eigenen eigenschaft ein eine einem einen einer einfach en englisch englischen english entsprechend entweder er ernsthaft erwartet erweitert es factory files folgende folgenderma foo fooooo function funktion funktionierende ganz geben gegeben gehen geht gek geladen gelernt gemacht genutzt gerecht german gewechselt gibt greift gro guide ha hast hat headline hey hier ich innerhalb intern interpolated interpoliert ist jeden jeweils kann kannst kapitel keinen keiner key kommen konfiguration konfigurationsobjekt konfiguriert kontrolle laden language liegen load loader loaderfn loadern localization love machen mal man manchen methode mindestens mit mitgelieferten modul module muss musst myapp ng-click ng-controller ngcookies nicht nur oder option optionen options orten overview paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text passiert preferredlanguage promise property registrieren reicht reject rejected resolve resolved rest return sehen sei sekunden server service shortcuts sich sicher sind solche sprache sprachschl srsly text translate translate-values translation translations um und unicorn unsere unseren unserer useloader usestaticfilesloader useurlloader8 var variable_replacement verbauen verf verh vielleicht voll von wartet weg weitere welches wenn werden wert wie wir wird wissen wurde zeigt zu zugegriffen zum zur zwei"
    },
    {
      "section": "guide",
      "id": "14_pluralization",
      "shortName": "Pluralisierung",
      "type": "overview",
      "moduleName": "Pluralisierung",
      "shortDescription": "Pluralisierung",
      "keywords": "$scope $translate $translatemessageformatinterpolation $translateprovider _bitte _icu ab aber abh adaptieren addinterpolation alle allerdings allererst alles als andere angular angular-translate angular-translate-interpolation-messageformat anpluggen app application-weit apps asynchron attribut au auch auf beachte bedeuten bedeutet beide beispiel beispiele beizubringen bekommen benutze benutzen benutzer benutzt bereits beste bestimmte bestimmten bin bitte bower brauchen braucht bringen bringt button_lang_de button_lang_en c_ changelanguage code config controller cool coolen ctrl da daf damit darum das dass dazu dazugeh de default default_interpolation definitiv deine dem den der deutsch die diedie diese diesem dinge dir directive direktive drauf dritter du dynamic eher eigentlich ein eine einem einen einer einfach eingebunden eingerichtet einsetzen einzubinden en englisch english entfernen enthalten entweder entwickelt ernsthaft ersetzen erwartet erwartete es etwas evaluation expression extension factory-namen fall fand fanden features female filter finden folgende folgenden function funktionalit funktionierendes ganz gegebenen geh geht gek gekommen gelernt genau gender genutzt german geschlecht gesprochen gesteuert gew gibt gl gleiche gr guide guide_- gut haben hat headline hei herausforderung hier hin hinzu html-dokument ich icu-project immer implementieren implementiert inhalten innerhalb install installieren installiert internationalisierung interpolation interpolation-service interpolation-services interpolation-typ interpolation-type interpolations-typen interpolieren interpretationen ist javascript jetzt js kann kannst keine kommt komplette komponenten konfigurieren konfiguriert konstrukt kulturen laden lage library like_text locale-file lokalisierung love machen mal male man mehr mehrere meinung merken messageformat messageformats methode mf_interpolation mit module muss musst myapp nach nachteil named-keys namens neu neues ng-click ng-controller nicht nichts noch nun nur ob oben oder optional optionalen org overview paar parameter pascalprecht path plural pluralformat pluralisierung pluralisierungen pluralisierungs-support preferredlanguage problem probleme registrieren replacement richten richtige sache sagen sagt schauen schlichtweg schlussendlich schon sehen sehr sei selbstverst select selectformat server service setzen sexton sich sie simple-variable-replacement sind sobald soll sondern sowas sowohl spannendes spezifikation spezifiziert sprach sprache sprachen src standard storages syntax tatsache tempor text texte thema translate translate-interpolation translate-values translation translations trifft tun um und undn unicorn uns unsch unsere unserer unters unterschiedliche unterst untersuchen usemessageformatinterpolation user val var verf vergessen verh verlieren verschiedenen verwenden verwendet vewendet volle vollwertige von war weg weit weiterhin welche wenn werden wie wieder wir wird wirklich wissen wow wurde zeile zeit ziemlich zu zur"
    },
    {
      "section": "guide",
      "id": "15_custom-interpolators",
      "shortName": "Custom Interpolator",
      "type": "overview",
      "moduleName": "Custom Interpolator",
      "shortDescription": "Custom Interpolator",
      "keywords": "$interpolate $locale $scope $translate $translateprovider aber addinterpolation aktuellen alle alles als analog andere anderen anfangen angular angular-translate app apps au auch auf aus aussehen basisstruktur bauen bekannt benutze benutzen benutzt bestimmtes bin bist brauchst button_lang_de button_lang_en changelanguage config controller ctrl custom custominterpolation damit dann das de default deine deinen dem den des deutsch dich die dieser du eigenen eigentlich ein eine einem einen einer eines einfach en englisch english entwickeln entwicklung erinnerst erkennen erwartet es etwas factory fand fanden female fit folgendes function funktioniert ganz gegen gelernt gelesen gemacht gemappt genau genug german getinterpolationidentifier gibt guide gut haben hast hat headline hinzu ich identifier ihn implementieren implementiert interface interpolate interpolateparams interpolatgeparams interpolation interpolation-service interpolation-services interpolationparamter interpolator interpoliert ist jede jetzt kann kannst kleinere library loader locale logic love male man messageformat methode methoden mit module musst myapp namen ng-click ng-controller noch nun nutzen objekt oder optionalen overridinginterpolationtemporarily overview parameter pascalprecht plural preferredlanguage recht registrieren return schauen schreiben select service servive setlocale setzt sie siehts sollte speichert sprache sprachschl standard startest storages string strings tempor text translate translate-values translation translations tun um und unicorn useinterpolation useloader usestorage val var vorkommen wenn wert wie wieder wir wird wof zu zur"
    },
    {
      "section": "guide",
      "id": "16_error-handling",
      "shortName": "Error Handling",
      "type": "overview",
      "moduleName": "Error Handling",
      "shortDescription": "Error Handling",
      "keywords": "$scope $translate $translateprovider alle als also_not_existing angular angular-translate angular-translate-handler-log app auch auf aufzurufen beispiel benutze bestimmte bin bower browsers button_lang_de button_lang_en changelanguage config controller ctrl da dass de default dem den der des deutsch die diese ein eine en englisch english error es extension extensions fand fanden fehlende female function gar genau german gibt guide gut handler handling hat headline hier ich ins install installieren interpolation ist kann keine kommt komplex konsole log-handler-extension loggt love machen male man mehr methode missingtranslationhandler mit module muss myapp nach ng-click ng-controller nich nicht nichts not_existing nutzen ob overview pascalprecht plural preferredlanguage rest schau select sich sicher spiel text tmal translate translation translations um unicorn usemissingtranslationhandler usemissingtranslationhandlerlog val var versucht verwenden vorkommen warnings wei weiter wenn wie wird zu"
    },
    {
      "section": "guide",
      "id": "17_custom-error-handler",
      "shortName": "Eigene Error Handler",
      "type": "overview",
      "moduleName": "Eigene Error Handler",
      "shortDescription": "Eigene Error Handler",
      "keywords": "$translateprovider angular angular-translate app aussehen custom dann define deine dep1 dep2 die du ebenfalls eigene eigenen ein eine einen error erwartet es factory function geben gibt guide handler implementiert kann love methode module muss myapp mycustomhandlerfactory namen nat neben noch nur overview pascalprecht return service sowas tranlation translate und unicorn usemissingtranslationhandler usemissingtranslationhandlerlog var verwenden werden wie zur"
    },
    {
      "section": "guide",
      "id": "18_events",
      "shortName": "Events",
      "type": "overview",
      "moduleName": "Events",
      "shortDescription": "Events",
      "keywords": "$rootscope $translate $translatechangeend $translatechangeerror $translatechangestart $translatechangesuccess $translateloadingend $translateloadingerror $translateloadingstart $translateloadingsuccess $translatepartialloader $translatepartialloaderstructurechanged alle allem allgemein angular-translate asynchron asynchroner asynchrones au auch auf ausgef aynchronen beim benachrichtigt beschreibt change das datn davon dem der die dies dieser dieses direkt dokument du egal ein eine einen einer eingerichtet einige endet er erfolgreich erst erste es event eventname events fehl gefeuert gegeben geladen geschieht geupdated gewechselt gibt guide hat interpolation-services jedes kannst kein konfiguriert laden laufzeit loader mal man mit mussten nach nachdem nicht nur ob oder overview passiert promise reagieren regel registrierten rejected resolved sagt schlug schon sie sobald sprache sprachwechsel startup translation triggert unabh und ver verschiedenen versucht verwendet von vor war wechseln wenn werden wie wird wurde wurden zu zur"
    },
    {
      "section": "guide",
      "id": "19_security",
      "shortName": "Sicherheit",
      "type": "overview",
      "moduleName": "Sicherheit",
      "shortDescription": "Escapen dynamischer Werte",
      "keywords": "$scope $translateprovider aber aktivierte allerdings allgemeine allgemeinen angular angular-translate angularjs anwendungsbeispiele app applikation auch ausgabe ausgabeform ausgaben ausgegeben bei benutzung bereits color config controller ctrl daf dann das dass dazu deaktiviert der derzeit die dies dynamische dynamischen dynamischer eigenen eine einer empfehlen enable ergebnis ernsthaften es escaped escapen escaping feature function gesamte gew gibt gilt grunds guide headline hello html inhalte innerhalb intern ist javascript kann konfiguriert korrekt love man mittels module myapp myapp2 ng-controller nicht null nur org overview owasp paragraph pascalprecht php regul security-strategy sein selbstverst sicherheit sicherheitsl sorgt sp standard strategien style translate translate-values translations um und unicorn usesanitizevaluestrategy var variablen version verwendung vollst von werden werte wir wird xss zu zwei"
    },
    {
      "section": "guide",
      "id": "20_tools",
      "shortName": "Tools",
      "type": "overview",
      "moduleName": "Tools",
      "shortDescription": "Tools",
      "keywords": "aber aktiviere alle als andere angegeben angular-translate angular-translate-kompatibles anwendungsfall app arbeit auf ausgabe ausgabedateien beiden beispiel benutzt bestehenden bevor bitte boolean bzw cleanprevstrings create das dateien default deinem den der derzeit dev devonefile die diesem dingen dist ein eine eines einflu einstellungen einzelne entwicklungs- erzeugt es existieren false file files folgende format funktionalit gebracht gem generate gerne gettext-formatierungen gibt github gro grunt grunt-angular-translate grunt-po2json-angular-translate gruntfile guide haben herum hier hilfsprogramme hinzu individuelle informationen initconfig install installiere ist je js json json-dateien kernmodul kleines komplettes konfiguration konvertieren konvertierung lesbarere loadnpmtasks man mehr mehrere mit module msgid nach names neue nicht noch npm nur oder optionen options optionsenablealtplaceholders optionsuppercaseid overview passend platzhalter pluralization po po-foramtierte po2json_angular_translate praxisbeispiel pretty produktionsumgebungen projekt repo schau schritte sehr sein single strings task team test tmp tollen tools true type um und unterscheidung uppercaseid verzeichnis vom von weitere weiteren werden wichtige wichtigsten your_target zahlreiche zeichenketten ziel zieldateien zu zur zus"
    }
  ],
  "apis": {
    "api": true,
    "guide": false
  },
  "html5Mode": false,
  "startPage": "/guide",
  "scripts": [
    "bootstrap-dropdown.js",
    "messageformat.js",
    "de.js",
    "angular.min.js",
    "angular-cookies.min.js",
    "angular-translate.min.js",
    "angular-translate-interpolation-messageformat.min.js",
    "angular-translate-storage-cookie.min.js",
    "angular-translate-storage-local.min.js",
    "angular-translate-loader-static-files.min.js",
    "angular-translate-handler-log.min.js"
  ]
};