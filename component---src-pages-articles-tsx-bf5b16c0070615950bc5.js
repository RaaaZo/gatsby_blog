(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4FPD":function(e,t,r){"use strict";r.r(t);var i=r("q1tI"),n=r.n(i),a=r("Wbzz"),s=r("HpC4"),o=function(){var e=Object(a.useStaticQuery)("1925088105").articles;return n.a.createElement(n.a.Fragment,null,e.nodes.map((function(e){return n.a.createElement(s.a,{article:e,key:e.id})})))},l=r("kOA+"),c=r.n(l),u=r("pYpg"),p=r.n(u),h=r("y3Dv"),d=r.n(h),_=r("gxKu"),g=r("ZMKu");t.default=function(){return n.a.createElement("div",{className:d.a.all_articles},n.a.createElement(g.a.h1,{initial:"hidden",animate:"show",variants:_.b},"All Articles"),n.a.createElement(g.a.div,{initial:"hidden",animate:"show",variants:_.a,className:d.a.all_articles__types},n.a.createElement(c.a,{swipe:!0,to:"/travels"},"Travel"),n.a.createElement(c.a,{swipe:!0,to:"/photography"},"Photography")),n.a.createElement("div",{className:p.a.articles_wrapper},n.a.createElement(o,null)))}},HpC4:function(e,t,r){"use strict";var i=r("q1tI"),n=r.n(i),a=r("kOA+"),s=r.n(a),o=r("VlHs"),l=r.n(o),c=r("9eSz"),u=r.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var h=new Map,d=new Map,_=0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(d.has(r)||(_+=1,d.set(r,_.toString())),d.get(r)):"0":e[t]);var r})).toString()}function f(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var i=function(e){var t=g(e),r=h.get(t);if(!r){var i,n=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var r,a=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(r=n.get(t.target))||r.forEach((function(e){e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:n},h.set(t,r)}return r}(r),n=i.id,a=i.observer,s=i.elements,o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),a.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),h.delete(n))}}function v(e){return"function"!=typeof e.children}var b=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),v(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,i=e.rootMargin,n=e.trackVisibility,a=e.delay;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:r,rootMargin:i,trackVisibility:n,delay:a})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!v(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var n=this.props,a=n.children,s=n.as,o=n.tag,l=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(s||o||"div",p({ref:this.handleNode},l),a)},n}(i.Component);b.displayName="InView",b.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var m=r("ZMKu"),y=r("gxKu");t.a=function(e){var t=e.article,r=t.description,a=t.image,o=t.slug,c=t.title,p=t.publishedDate,h=t.author,d=Object(m.b)(),_=function(e){var t=void 0===e?{}:e,r=t.threshold,n=t.delay,a=t.trackVisibility,s=t.rootMargin,o=t.root,l=t.triggerOnce,c=t.skip,u=t.initialInView,p=Object(i.useRef)(),h=Object(i.useState)({inView:!!u}),d=h[0],_=h[1],g=Object(i.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),c||e&&(p.current=f(e,(function(e,t){_({inView:e,entry:t}),t.isIntersecting&&l&&p.current&&(p.current(),p.current=void 0)}),{root:o,rootMargin:s,threshold:r,trackVisibility:a,delay:n}))}),[Array.isArray(r)?r.toString():r,o,s,l,c,a,n]);Object(i.useEffect)((function(){p.current||!d.entry||l||c||_({inView:!!u})}));var v=[g,d.inView,d.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({triggerOnce:!0,threshold:.1}),g=_[0];return _[1]&&d.start("show"),n.a.createElement(m.a.div,{variants:y.a,initial:"hidden",animate:d,ref:g,className:l.a.single_article},n.a.createElement(u.a,{style:{width:"100%",height:300,marginBottom:"2rem"},fluid:a.fluid}),n.a.createElement("h3",{className:l.a.single_article__title},c),n.a.createElement("h6",{className:l.a.single_article__author},"by ",h," on ",p),n.a.createElement("p",{className:l.a.single_article__description},r),n.a.createElement(s.a,{swipe:!0,to:"/articles/"+o},n.a.createElement("button",{className:l.a.single_article__button},"Read More")))}},VlHs:function(e,t,r){e.exports={single_article:"single_article-module--single_article--17RC_",gatsbyImageWrapper:"single_article-module--gatsby-image-wrapper--155uT",single_article__title:"single_article-module--single_article__title--2Rq5E",single_article__author:"single_article-module--single_article__author--17UOs",single_article__description:"single_article-module--single_article__description--EkVqu",single_article__button:"single_article-module--single_article__button--Sfjnf"}},pYpg:function(e,t,r){e.exports={articles_list:"article_list-module--articles_list--1Pm35",articles_wrapper:"article_list-module--articles_wrapper--2JPY9"}},y3Dv:function(e,t,r){e.exports={all_articles:"all_articles-module--all_articles--2Ixdr",all_articles__types:"all_articles-module--all_articles__types--aE-WE"}}}]);
//# sourceMappingURL=component---src-pages-articles-tsx-bf5b16c0070615950bc5.js.map