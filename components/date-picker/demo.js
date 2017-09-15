webpackJsonp([41,155],{510:function(n,s){n.exports={content:[["p","\u65e5\u671f\u65f6\u95f4\u9009\u62e9\u793a\u4f8b (",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form \u6587\u6863"],")"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/date-picker/demo/basic.md",id:"components-date-picker-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-form\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUs <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/date-picker/locale/en_US\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> zhNow <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> maxDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2016-12-03 +0800\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD Z\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> minDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2015-08-06 +0800\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD Z\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> maxTime <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'22:00 +0800\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm Z\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> minTime <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'08:30 +0800\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm Z\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> gmtNow <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// \u5982\u679c\u4e0d\u662f\u4f7f\u7528 List.Item \u4f5c\u4e3a children</span>\n<span class="token keyword">const</span> CustomChildren <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.9rem\'</span><span class="token punctuation">,</span> lineHeight<span class="token punctuation">:</span> <span class="token string">\'0.9rem\'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.3rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> float<span class="token punctuation">:</span> <span class="token string">\'right\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#888\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>extra<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    date<span class="token punctuation">:</span> zhNow<span class="token punctuation">,</span>\n    dpValue<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(\'onChange\', date);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      date<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldProps <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>date-picker-list<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9009\u62e9\u65e5\u671f<span class="token punctuation">"</span></span>\n          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53ef\u9009,\u5c0f\u4e8e\u7ed3\u675f\u65e5\u671f<span class="token punctuation">"</span></span>\n          <span class="token attr-name">{...getFieldProps(\'date1\',</span> <span class="token attr-name">{</span>\n\n          <span class="token attr-name">})}</span>\n          <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>minDate<span class="token punctuation">}</span></span>\n          <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>maxDate<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span>\n          <span class="token attr-name">&lt;List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">\u65e5\u671f</span><span class="token punctuation">(</span>CST<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span> <span class="token attr-name">{...getFieldProps(\'time1\')}</span> <span class="token attr-name">minuteStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span>\n          <span class="token attr-name">&lt;List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">\u65f6\u95f4</span><span class="token punctuation">(</span>local time<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span>\n          <span class="token attr-name">{...getFieldProps(\'time\',</span> <span class="token attr-name">{</span>\n            <span class="token attr-name"><span class="token namespace">initialValue:</span></span> <span class="token attr-name">zhNow,</span>\n          <span class="token attr-name">})}</span>\n          <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>minTime<span class="token punctuation">}</span></span>\n          <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>maxTime<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span>\n          <span class="token attr-name">&lt;List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">\u65f6\u95f4</span><span class="token punctuation">(</span>CST<span class="token punctuation">)</span>\uff0c\u9650\u5b9a\u4e0a\u4e0b\u9650<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>forss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>datetime<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>date<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u65e5\u671f<span class="token operator">+</span>\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> val<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'HH:mm Z\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">okText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>OK<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dismissText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n          <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUs<span class="token punctuation">}</span></span>\n          <span class="token attr-name">{...getFieldProps(\'customformat\',</span> <span class="token attr-name">{</span>\n            <span class="token attr-name"><span class="token namespace">initialValue:</span></span> <span class="token attr-name">gmtNow,</span>\n          <span class="token attr-name">})}</span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">time</span><span class="token punctuation">(</span>utc<span class="token punctuation">,</span> UK time<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dpValue <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dpValue<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'HH:mm Z\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u81ea\u5b9a\u4e49\u63a7\u5236\u663e\u793a<span class="token operator">/</span>\u9690\u85cf\u7684\u5143\u7d20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>span onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u70b9\u51fb\u53ef\u4ee5\u5173\u95ed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          extra<span class="token operator">=</span><span class="token string">"\u8bf7\u9009\u62e9(\u53ef\u9009)"</span>\n          onOk<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onOk\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          onDismiss<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onDismiss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dpValue<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dpValue<span class="token punctuation">:</span> v<span class="token punctuation">,</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9009\u62e9\u65e5\u671f<span class="token punctuation">"</span></span>\n          <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u9009\u62e9(\u53ef\u9009)<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dpValue<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>v <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dpValue<span class="token punctuation">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomChildren</span><span class="token punctuation">></span></span><span class="token function">\u65f6\u95f4\u9009\u62e9</span><span class="token punctuation">(</span>\u81ea\u5b9a\u4e49 children<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomChildren</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> TestWrapper <span class="token operator">=</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Test<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TestWrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".date-picker-list .am-list-item .am-list-line .am-list-extra {\n  flex-basis: initial;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.date-picker-list</span> <span class="token class">.am-list-item</span> <span class="token class">.am-list-line</span> <span class="token class">.am-list-extra</span> </span><span class="token punctuation">{</span>\n  <span class="token property">flex-basis</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'
}},670:function(n,s,a){n.exports={basic:a(510)}}});