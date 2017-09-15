webpackJsonp([31,155],{574:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u6c14\u6ce1","en-US":"Popover"},filename:"components/popover/demo/basic.md",id:"components-popover-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> NavBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Item <span class="token operator">=</span> Popover<span class="token punctuation">.</span>Item<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    selected<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>opt<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(opt.props.value);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      visible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      selected<span class="token punctuation">:</span> opt<span class="token punctuation">.</span>props<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  handleVisibleChange <span class="token operator">=</span> <span class="token punctuation">(</span>visible<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      visible<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> offsetX <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// just for pc demo</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex">/(iPhone|iPad|iPod|iOS|Android)/i</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      offsetX <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">26</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">iconName</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n        <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Popover mask\n            overlayClassName<span class="token operator">=</span><span class="token string">"fortest"</span>\n            overlayStyle<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'currentColor\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n            <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n              <span class="token punctuation">(</span><span class="token operator">&lt;</span>Item key<span class="token operator">=</span><span class="token string">"4"</span> value<span class="token operator">=</span><span class="token string">"scan"</span> icon<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./scan.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> data<span class="token operator">-</span>seed<span class="token operator">=</span><span class="token string">"logId"</span><span class="token operator">></span>\u626b\u4e00\u626b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>special<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./qrcode.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> whiteSpace<span class="token punctuation">:</span> <span class="token string">\'nowrap\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\u6211\u7684\u4e8c\u7ef4\u7801<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button</span> <span class="token attr-name">ct"</span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./help.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5e2e\u52a9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">}</span>\n            align<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              overflow<span class="token punctuation">:</span> <span class="token punctuation">{</span> adjustY<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> adjustX<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              offset<span class="token punctuation">:</span> <span class="token punctuation">[</span>offsetX<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n            onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleVisibleChange<span class="token punctuation">}</span>\n            onSelect<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span>\n          <span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n              padding<span class="token punctuation">:</span> <span class="token string">\'0 0.3rem\'</span><span class="token punctuation">,</span>\n              marginRight<span class="token punctuation">:</span> <span class="token string">\'-0.3rem\'</span><span class="token punctuation">,</span>\n              display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span>\n              alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        NavBar\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},687:function(n,s,a){n.exports={basic:a(574)}}});