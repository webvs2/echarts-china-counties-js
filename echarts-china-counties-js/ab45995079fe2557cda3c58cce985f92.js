(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('岭东区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230503","properties":{"name":"岭东区","cp":[131.164723,46.592721],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBB@@@@AB@@@B@@A@@B@@@@B@@@@BB@@@@BA@@@@BA@@B@@@@@B@@@B@@@@B@@B@@@B@F@B@FAB@F@B@@@F@B@B@@@B@@AD@@@B@@@B@D@B@@@HAD@@@D@@@B@@@BA@@DA@@@@B@BAB@@@@@@@B@BBBBBB@@BBDB@@@B@@@@D@B@D@@@@@B@@A@@B@@AB@@@B@B@@AB@@@D@@A@@B@@@@@BAB@@AB@@@DAB@FCB@DCB@@AB@B@B@B@BAB@DADADAB@BABAFA@@B@@@B@B@D@F@D@D@B@D@BAB@@@B@B@@@B@@@@@DBDAB@B@B@B@D@D@D@@@B@BBB@BA@@@A@A@A@A@@BA@A@@@@CAA@A@@A@@@A@@@A@@A@@A@@@A@@@@AA@@ACCC@@@AD@B@BADABAB@DAB@B@B@B@DBB@@@@A@@A@@A@@@@@A@@@A@@@@@@@AA@AA@@A@CA@@CAAAA@A@AA@@B@@A@@@@BA@@@@@AB@FBDBF@B@@@BC@AB@@@B@BBB@B@B@BAB@@@B@B@B@B@@@BB@@B@@@@A@@@@@C@@BAA@@A@@AA@@@A@@AAAA@@AA@@@@@A@@@@AA@@A@A@A@A@AAA@@@A@A@A@A@A@@@AAA@A@@@@A@@@A@C@A@A@A@AJAA@@A@@A@@AA@@A@@@A@@BA@@@A@A@AACA@@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@BA@@@@@@@AA@@@@@@@@@@A@@@@A@@AA@@AAAB@DC@AHCBAD@@@B@B@B@B@B@@@B@B@B@B@B@@@B@B@B@B@B@B@F@B@B@@@@A@@B@A@@A@@@@@@@A@@@A@@@@@@@A@@@A@@B@@@BAB@BAB@@@BA@@@@@A@@B@@@@@B@@@B@B@@AB@B@BABA@@@A@@@A@AA@@@@A@@B@@@B@@AB@@@B@BA@@B@B@D@B@B@BAD@B@BBB@BBB@B@B@@@B@B@B@B@BAB@B@B@@@DB@@B@BBB@B@B@@AB@@@@@B@B@B@B@B@BAB@B@B@B@F@B@B@D@B@BAB@D@@@B@BBB@@B@BB@@@B@DBB@B@D@B@D@BBB@D@BBB@D@B@BBB@B@BBB@B@@@B@B@B@B@B@B@@@B@B@@BBB@@@@@@@B@@@@@@@B@@@@BBABB@BB@BB@BBB@@@B@@@B@@@B@BBBAD@BAB@DA@AB@BA@@B@@@@@@ABA@@@A@@@AA@@A@AA@@@@A@@@@AA@@@@@@@A@@@AA@@@@A@A@@@A@@A@@A@@@@@@@A@@@@@@@@@AA@@A@@AAACAA@AA@@@AA@@@@@@@A@A@@@@BA@A@AB@@A@@BA@A@A@ABA@@BABA@@B@@A@@B@@@@A@@BAB@@AB@@@@@@@@@@A@@A@@A@@@A@ABABA@@BAB@@AB@B@@AB@@@B@B@@A@@A@@A@@@@@AA@@AA@@AA@@@@A@A@@BA@A@@BA@@@AB@@AB@@AB@@@@@@A@@B@@@AA@A@@AA@@@@@AA@@A@@CA@AA@AAA@AAA@@A@@@@BA@@@@@A@A@A@AAA@@@@@AA@@@AAA@AA@AA@@@@A@@@@@A@A@@AA@A@@@AA@@@B@@@@@D@@A@@@@@@@A@@@A@@@@AA@@@A@@AA@@@@@A@@@@@AA@@@@A@@BA@@@@B@@A@@B@@@@@@A@@@A@@@A@A@@@@@@@A@@@A@@@@@@@AB@@@@@@@B@@@B@@@@@B@@@B@@@B@@@B@@@@@BA@@B@@@B@BA@@@@BAB@@@B@BA@@B@@@DAB@@@@@B@@@B@@@BAB@@@BA@@B@@AB@@@B@B@D@B@B@@@B@@@@A@@@@@@@@@@@A@@@@A@@@@@@@@@@A@@@@@@@@A@@A@@@@A@@@@@@@@@@A@@@A@@@@@@@@@@@A@@@@@@@AAA@@AA@A@A@@@@@@A@@@@@@@A@@@@@@A@@@@@A@@@A@@@@@@@A@@A@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@A@@BA@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@A@@@@@@A@@@@B@@@BA@@@@@@@A@@@AA@@A@@A@AA@@A@AAA@AA@@AB@@@@@BA@@@@@AB@@A@A@@@@@AB@@A@@@@B@@@@@@@@A@@BA@@@A@@@@@@@A@@@@@A@@@A@@AA@@@A@@BA@C@@@A@A@@@ABA@@@@@@@@@A@@@@B@@A@@@A@@@@@A@AB@@A@@BA@@@@@A@A@A@@@@@@@A@A@@@@AA@@@@BA@@@@@A@@@@@@@A@@@@@A@@@A@@@@@@@A@@@A@@@@@A@A@A@@@AB@@@@@@AA@@A@@@@@A@@@@@@@AA@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@A@A@@@AA@@A@@@@@@BA@A@@@A@A@@@@@A@@@@@A@AB@@A@@BA@@@A@@@@@ABA@@@@@A@@@@@A@@@@@@@A@@@@@@@@BA@@@@AA@@@@B@@A@@@@@A@@@A@@B@@A@@@@@@@@@@@@@@@A@@BA@@@AAA@@@@BA@@@@@A@@@@@A@@@@@A@@@A@@@AA@@@@@@@@A@@@A@AB@@@@A@@@A@@@A@@@A@@@AAA@@@@@A@@@A@@@@@A@@@A@A@@AA@@@A@@@@@A@@BA@A@A@@@A@A@@@A@@@A@@AA@@@@@AB@@A@A@@@A@@@A@@@A@A@@@A@@BA@@@A@@@AB@@A@@@A@A@@B@@@@A@@BA@@@A@AB@@A@ABA@@BA@A@@@@@AB@@A@A@@@AB@@A@A@A@@@AB@@@@AB@@A@A@@BA@A@A@AB@@@@@@A@@B@@A@@B@@A@@@@@@@A@@BA@A@A@@@AB@@@@AB@@@@A@@@@BA@@@A@@B@@@@A@@B@@A@A@@B@@@@A@@@@B@@@BA@@@@@A@@BA@A@@@AB@@A@@@AB@@@@A@@B@@@@A@@@@B@@@@AB@@@@@BA@@@@@@BA@@@@@@BA@@@@@@BA@@@@@@BA@@@@B@@@@@@@@@B@@@@@@AB@@@@@@@B@@@@@@A@@B@@@@@@@@@@AB@@@@A@@@@BA@@@@@@@@@AB@@@@@@AB@@@@A@@@@@AB@@@@A@@@A@@@@@A@@@E@C@C@A@C@A@CA@@A@A@AAAAAAAAA@AAAAA@AA@ACA@@@@AA@@@A@A@AAC@AAA@@@AAA@@@@A@A@@@AA@A@A@@@@BA@@@@@AB@@AB@@A@@@A@@@@@AA@@@AA@@@AA@@A@A@@A@@AA@AAA@@AA@@@A@A@@@A@@BABA@ABA@ABA@@@@BA@A@@@A@ABA@@BA@@@A@AB@@A@@@A@@@@A@@@AA@@@@@AAAA@@AA@@AAA@@@A@@@A@@BA@ABA@@B@@A@A@@@A@A@AAAAA@A@@AA@A@@AAAAA@@AAA@@@A@@@A@@@ABABA@@@A@@@AAA@A@@@A@@@@@A@AA@@C@@BA@A@@B@BABAB@BA@A@@B@@A@@BA@A@@BA@@@A@@@@@A@AB@@A@A@@@A@@@A@A@AA@@A@@AA@@@A@ABA@@@@@@@@B@BB@@B@@@B@@A@@B@@AB@B@@@BA@@B@@A@@@@@A@@@@@A@A@@@A@@@A@A@@BA@@@@BA@AB@B@@@@@BA@A@@@AB@@@@@B@@@B@B@B@@AB@@@@A@A@ABA@@@@@A@A@A@@@A@@@C@@@A@@@A@A@@@A@@@@@@@AA@@AA@@@@AA@@A@@AA@AA@@@@A@A@A@@@A@@BA@@@@@A@ABA@A@@@A@@@A@AA@@A@@BAB@@A@A@AB@@AB@@@B@@AB@@@@@@CAA@@@A@A@CBA@@@@@A@@@@@@B@@AB@@A@@@A@A@@@A@@@A@@@C@@@A@@AA@@A@@AA@@@AA@AA@@A@@AA@@A@@A@AA@@A@ABA@@@AB@@AB@B@BA@CB@@@@AB@@A@A@@@ABABAB@@CBA@A@A@A@A@C@@@A@A@AB@@AB@B@@@BBB@@@B@BA@@BAB@D@D@B@@AB@@ABA@@@@BB@BBB@@@@BB@B@@@BB@@@@B@@@@B@@@B@B@@@B@@@B@B@@ABA@CBA@EBCBCBA@A@A@ABA@@BA@A@CBC@CBABCBCBA@ABC@ABA@C@A@A@ABA@@@@D@@@@@@@B@BA@@BA@ABA@AB@@@@@@@B@@@@@@BB@BBB@BBB@B@B@@@@@@BB@@@B@@B@@@BBBB@B@@BBB@@B@B@B@@@B@B@B@@BDBB@D@B@D@@BB@@@B@@@B@B@@@B@@@B@@@B@B@B@@AB@BA@ABADABABABABA@ABA@ABA@ABA@@@A@A@C@ABA@AB@@A@AB@BA@ABA@A@@@A@@@@@@@@@A@@@@@@@AB@@AB@@A@@@ABA@E@A@@AA@AB@@@@A@@@@@@@CBA@@BA@A@@@A@A@@@A@@@A@@@AB@@@@AB@@@@@BA@A@@@A@@@A@@@@B@@@@AB@@@BA@@@@B@@@B@@@B@@@B@@@B@@@B@@AB@@A@@@CB@@A@A@@@@B@@@BA@@B@@AB@B@@@B@@@BB@@@B@D@@@@BB@@@@B@B@@@B@@@@BB@@B@@B@@@B@@@@@@A@@B@@A@@@AB@@@@@B@@B@@B@@@B@@A@@@ABA@@@A@@B@B@@A@@@@BA@@B@@@@@BA@@@@@BB@@@@@B@@B@@B@@@@@B@@@@@B@@@B@@A@@BA@@@AB@@A@AB@@A@@B@@B@@@@B@@@@@B@@@@A@@@@B@@AB@@@@@@AB@@@@@B@@@@@BA@@@@@AB@@AB@@@@@@AB@@@@A@@@@B@@@@@B@@@B@@A@@B@@@@@B@@@@AB@@@B@@A@@B@@@@@B@@@@@@AB@@@@@@AB@@@BA@@@@B@@@@AB@@A@@BB@@B@B@@@@@@@BB@@B@@@@@@BB@@@BB@@B@@@B@@FHBNDHFFD@FBFBVXTPLFR@TFDBBFBFBHHHFNDJDBD@LAFEFIFAHAD@F@D@DCB@B@DA@@B@D@@@DAB@B@@@FAB@@@@AA@@@@AA@@A@@@AB@@AB@BA@@BA@AB@@A@@@AB@@AB@@AB@BA@@B@@@@AB@B@B@B@@@B@BA@@@@@@@@@@@A@@BA@@BE@A@A@@@@@A@@@@DAB@B@B@B@B@BAD@B@HAB@DDBBBBDBDBD@H@D@BB@@BB@@D@BAAA@@@@DA@@B@@@@@B@BBB@B@B@@@FB@@B@@@B@B@@@B@D@B@B@@@J@B@B@B@@@B@@@@@@@B@@@@@BAB@B@@@B@B@@@@A@@@@@@AAA@@AAACA@@@@@@@@AA@@@@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@BA@A@@AA@AB@@A@@A@@A@@@@@@@@@A@@@@B@@A@@A@@A@@@@A@@A@@A@B@@A@@B@B@BA@@B@@@@@D@B@@@B@@@B@B@"],"encodeOffsets":[[134305,47714]]}}],"UTF8Encoding":true});}));